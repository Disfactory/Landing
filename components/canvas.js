import React, { useRef, useEffect, useState } from 'react';
import styled from 'styled-components';
import { BrushSrc } from '~/constants/canvas';
import useViewport from '~/hooks/useViewport.js';

// ref: https://stackoverflow.com/questions/72596200/canvas-tsx-object-is-possibly-null-and-property-getcontext-does-not-exist

//ref2: https://codepen.io/andreruffert/pen/MWMbMj

//ref3: https://medium.com/@pdx.lucasm/canvas-with-react-js-32e133c05258

const Container = styled.div`
  padding: 60px 0px 90px 0px;
`;

const Button = styled.button`
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
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  box-shadow: 3px 3px 3px 2px rgba(0, 0, 0, 0.15);
  ${({ theme }) => theme.fontSize['normal']};

  &:hover {
    transition: 0.3s;
  }

  &:active {
    box-shadow: #422800 3px 3px 0 0;
    transform: translate(4px, 4px);
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

  .scratch-back {
    overflow: scroll;
    height: 336px;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
    padding: 15px 0px 25px;

    img {
      width: 90%;
      display: block;
      margin: auto;
    }
  }

  #canvas {
    position: absolute;
    top: 0;
    //TODO: 想改滑鼠鼠標圖樣！
    cursor: 'url(../public/images/coin.ico), auto';
  }
`;

const DialogBox = styled.div`
  display: none;

  ${({ theme }) => theme.breakpoint.xl} {
    display: block;
    position: absolute;
    right: -160px;
    top: -70px;
    background: url('/images/scratch_note.svg');
    width: 189px;
    height: 97.5px;
    display: flex;
    align-items: center;
    justify-content: center;
    animation: float 2s ease-in-out infinite;
  }

  @keyframes float {
    0% {
      transform: translatey(0px);
    }
    50% {
      transform: translatey(-15px);
    }
    100% {
      transform: translatey(0px);
    }
  }
`;

// @ts-ignore
const Canvas = (props) => {
  const [width, setWidth] = useState(320);
  const [height, setHeight] = useState(336);
  const canvasRef = useRef(null);
  const buttonRef = useRef(null);

  let isDrawing, lastPoint;

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

    image.src = '/images/scratch-cover.png';
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
    canvas.addEventListener('touchstart', handleTouchDown, false);
    canvas.addEventListener('touchmove', handleTouchMove, false);
    canvas.addEventListener('touchend', handleTouchUp, false);

    function reDraw() {
      context.clearRect(0, 0, context.canvas.width, context.canvas.height);

      let image = new Image();
      image.src = '/images/scratch-cover.png';
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

    function getTouch(e, canvas) {
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

      mx = e.touches[0].clientX - offsetX;
      my = e.touches[0].clientY - offsetY;

      return { x: mx, y: my };
    }

    function handlePercentage(filledInPixels) {
      filledInPixels = filledInPixels || 0;
      if (filledInPixels > 50 && canvas !== null) {
        canvas?.parentNode?.removeChild(canvas);
        if (canvas === null) return;
      }
    }

    function handleMouseDown(e) {
      isDrawing = true;
      lastPoint = getMouse(e, canvas);
    }

    function handleTouchDown(e) {
      isDrawing = true;
      lastPoint = getTouch(e, canvas);
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

    function handleTouchMove(e) {
      e.preventDefault();
      if (!isDrawing) {
        return;
      }

      e.preventDefault();

      var currentPoint = getTouch(e, canvas),
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

    function handleTouchUp(e) {
      e.preventDefault();
      isDrawing = false;
    }
  });

  return (
    <Container>
      <Button ref={buttonRef}>想來玩嗎？點我！</Button>

      <Content>
        <div className='scratch-back'>
          <img src='/images/collaborator.png'></img>
        </div>
        {!isWidtherThanSm && (
          <canvas ref={canvasRef} id='canvas' width={300} height={height} />
        )}
        {isWidtherThanSm && (
          <canvas ref={canvasRef} id='canvas' width={550} height={height} />
        )}

        <DialogBox>動動手指刮刮看！</DialogBox>
      </Content>
    </Container>
  );
};

export default Canvas;
