import React, { useRef, useEffect, useState } from 'react';
import styled from 'styled-components';
import { ImageSrc, BrushSrc } from '~/constants/canvas';
import useViewport from '~/hooks/useViewport.js';

// ref: https://stackoverflow.com/questions/72596200/canvas-tsx-object-is-possibly-null-and-property-getcontext-does-not-exist

//ref2: https://codepen.io/andreruffert/pen/MWMbMj

//ref3: https://medium.com/@pdx.lucasm/canvas-with-react-js-32e133c05258

// const HEIGHT = 336;
// const WIDTH = 776;

const Container = styled.div`
  ${({ theme }) => theme.breakpoint.xl} {
    padding: 60px 0px 90px 0px;
  }
`;

const Title = styled.div`
  max-width: 409px;
  width: 80%;
  height: 60px;
  background: #eaf3bf;
  border-radius: 19px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
  margin-bottom: 32px;
  cursor: pointer;

  &:hover {
    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.15);
    transition: 0.3s;
  }
`;

const Content = styled.div`
  width: 300px;
  height: 336px;
  position: relative;
  margin: auto;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  -o-user-select: none;
  user-select: none;

  ${({ theme }) => theme.breakpoint.sm} {
    width: 550px;
  }

  .note {
    position: absolute;
    right: -160px;
    top: -70px;
    background: url('/images/scratch_note.svg');
    width: 189px;
    height: 97.5px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .scratch-back {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  #canvas {
    position: absolute;
    top: 0;
  }
`;

// const CanvasFrom = styled.div`
//   visibility: ${(props) => (props.visible ? 'visible' : 'hidden')};
//   padding: 20px;
// `;

// @ts-ignore
const Canvas = (props) => {
  const [width, setWidth] = useState(320);
  const [height, setHeight] = useState(336);
  const canvasRef = useRef(null);
  const buttonRef = useRef(null);

  let isDrawing, lastPoint;

  // const draw = (ctx) => {
  //   ctx.fillStyle = '#000000';
  //   ctx.beginPath();
  //   ctx.arc(50, 100, 20, 0, 2 * Math.PI);
  //   ctx.fill();
  // };

  const { isWidtherThanSm, isWidtherThanMd } = useViewport();

  useEffect(() => {
    const canvas = canvasRef.current;
    const button = buttonRef.current;
    if (canvas == null) return; // current may be null
    if (button == null) return;

    const context = canvas.getContext('2d');
    if (context == null) return; // context may be null

    let image = new Image();
    let brush = new Image();

    // console.log('image', image); // <img src="">

    //Our first draw
    // context.fillStyle = '#515151';
    // context.fillRect(0, 0, context.canvas.width, context.canvas.height);

    //   // @ts-ignore
    //   canvas.addEventListener('mousemove', (e) => {
    //     const x = e.offsetX;
    //     const y = e.offsetY;
    //     context.globalCompositeOperation = 'destination-out';
    //     context.arc(x, y, 10, 0, 360, false);
    //     context.fill();
    //   });
    // }, []);
    image.src = ImageSrc;
    image.onload = function () {
      context.drawImage(image, 0, 0);
    };

    brush.src = BrushSrc;

    canvas.addEventListener('mousedown', handleMouseDown, false);
    canvas.addEventListener('touchstart', handleMouseDown, false);
    canvas.addEventListener('mousemove', handleMouseMove, false);
    canvas.addEventListener('touchmove', handleMouseMove, false);
    canvas.addEventListener('mouseup', handleMouseUp, false);
    canvas.addEventListener('touchend', handleMouseUp, false);
    button.addEventListener('click', reDraw, false);

    function reDraw() {
      console.log('有執行redraw');
      context.clearRect(0, 0, context.canvas.width, context.canvas.height);
      // image.onclick = function () {
      //   context.drawImage(image, 0, 0);
      // };
      let image = new Image();
      image.src = ImageSrc;
      context.fillStyle = 'red';
      image.onload = function () {
        context.drawImage(image, 0, 0);
      };
    }

    function distanceBetween(point1, point2) {
      return Math.sqrt(
        Math.pow(point2.x - point1.x, 2) + Math.pow(point2.y - point1.y, 2)
      );
    }

    function angleBetween(point1, point2) {
      return Math.atan2(point2.x - point1.x, point2.y - point1.y);
    }

    // Only test every `stride` pixel. `stride`x faster,
    // but might lead to inaccuracy
    function getFilledInPixels(stride) {
      if (!stride || stride < 1) {
        stride = 1;
      }

      var pixels = context.getImageData(
          0,
          0,
          context.canvas.width,
          context.canvas.height
        ),
        pdata = pixels.data,
        l = pdata.length,
        total = l / stride,
        count = 0;

      // Iterate over all pixels
      for (var i = (count = 0); i < l; i += stride) {
        if (parseInt(pdata[i]) === 0) {
          count++;
        }
      }

      return Math.round((count / total) * 100);
    }

    function getMouse(e, canvas) {
      var offsetX = 0,
        offsetY = 0,
        mx,
        my;

      if (canvas.offsetParent !== undefined) {
        do {
          offsetX += canvas.offsetLeft;
          offsetY += canvas.offsetTop;
        } while ((canvas = canvas.offsetParent));
      }

      mx = (e.pageX || e.touches[0].clientX) - offsetX;
      my = (e.pageY || e.touches[0].clientY) - offsetY;

      return { x: mx, y: my };
    }

    function handlePercentage(filledInPixels) {
      filledInPixels = filledInPixels || 0;
      if (filledInPixels > 80 && canvas !== null) {
        canvas?.parentNode?.removeChild(canvas);
        if (canvas === null) return;
      }
    }

    function handleMouseDown(e) {
      isDrawing = true;
      lastPoint = getMouse(e, canvas);
    }

    function handleMouseMove(e) {
      if (!isDrawing) {
        return;
      }

      e.preventDefault();

      var currentPoint = getMouse(e, canvas),
        dist = distanceBetween(lastPoint, currentPoint),
        angle = angleBetween(lastPoint, currentPoint),
        x,
        y;

      for (var i = 0; i < dist; i++) {
        x = lastPoint.x + Math.sin(angle) * i - 25;
        y = lastPoint.y + Math.cos(angle) * i - 25;
        context.globalCompositeOperation = 'destination-out';
        context.drawImage(brush, x, y);
      }

      lastPoint = currentPoint;
      handlePercentage(getFilledInPixels(32));
    }

    function handleMouseUp(e) {
      isDrawing = false;
    }
  });

  return (
    <Container>
      <Title ref={buttonRef}>想來玩嗎？點我！</Title>

      <Content>
        <div className='scratch-back'>
          <img src='/images/scratch_LOGO.svg'></img>
        </div>
        {!isWidtherThanSm && (
          <canvas ref={canvasRef} id='canvas' width={300} height={height} />
        )}
        {isWidtherThanSm && (
          <canvas ref={canvasRef} id='canvas' width={550} height={height} />
        )}

        <div className='note'>動動手指刮刮看！</div>
      </Content>
    </Container>
  );
};

export default Canvas;
