import React from "react";
import '../styles/QA.scss';
import qa_plus from '../imgs/qa_plus.svg';


function QA () {


  function answerShow(e) {

    e.stopPropagation();

    const answerShow = e.currentTarget.childNodes[1].className
    if(answerShow === "answer_invisible"){
      e.currentTarget.childNodes[1].className = "answer_visible"
    }else{
      e.currentTarget.childNodes[1].className = "answer_invisible"
    }

  }

  // FIXME: 只點answerShow應該也要能觸發
  function toggleEffect(e) { 
    
    const toggleEffect = e.currentTarget.className;
    if(toggleEffect === "toggle-closed"){
      e.currentTarget.className = "toggle-opened"
    }else{
      e.currentTarget.className  = "toggle-closed"
    }
  }



  return(

  <div className='qa-list'>

        <div className="qa-content"  onClick={(e)=>{answerShow(e)}}>

          <div className="question">

            <div className="toggle-closed" onClick={(e)=>{toggleEffect(e)}}>
              <div className="circle">
                <div className="horizontal"></div>
                <div className="vertical"></div>
              </div>
            </div>

            <p>回報前，你會需要知道這些～</p>
          </div>
          
          <div className="answer_invisible"> </div>

        </div>
      

        <div className="qa-content" onClick={(e)=>{answerShow(e)}}>
          <div className="question">
            
          <div className="toggle-closed" onClick={(e)=>{toggleEffect(e)}}>
                <div className="circle">
                  <div className="horizontal"></div>
                  <div className="vertical"></div>
                </div>
            </div>
          
            <p>回報時，這些注意事項必看！</p>
          </div>

          <div className="answer_invisible"> </div>
        </div>
        
        <div className="qa-content" onClick={(e)=>{answerShow(e)}}>
          <div className="question">
            <div className="toggle-closed" onClick={(e)=>{toggleEffect(e)}}>
                <div className="circle">
                  <div className="horizontal"></div>
                  <div className="vertical"></div>
                </div>
            </div>
            <p>回報後，怎麼了解成效？</p>
          </div>
          
          <div className="answer_invisible"> </div>
        </div>
        
        
        <div className="qa-content" onClick={(e)=>{answerShow(e)}}>
          <div className="question">
            <div className="toggle-closed" onClick={(e)=>{toggleEffect(e)}}>
                <div className="circle">
                  <div className="horizontal"></div>
                  <div className="vertical"></div>
                </div>
            </div>
            <p>想更加了解這個系統看這邊！</p>
          </div>
          
          <div className="answer_invisible"> </div>
        </div>
      
  </div>

  )
}


export default QA ;