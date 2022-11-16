import React from 'react'
import styled from 'styled-components'

const NavContainer = styled.div`
    outline: 1px solid red;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;
    width: 100%;
    background-color: #ffffff;
    box-shadow: 0 4px 8px rgb(0 0 0 / 15%);
    height: 60px;
    padding: 0px 16px;
   > div {
      margin: auto;
      display: flex;
      width: 100%;
      justify-content: space-between;
      align-items: center;
      height: 100%;
   }      
`
export default function Nav() {

return (
    <NavContainer>
        <div>
            <div>
                <img src='/images/logo.svg' alt="" />
                <h1>農地違章工廠</h1>
            </div>

            <div className='nav-list'>
            <ul>
                <li onClick={()=>{
                    const k = document.querySelector('.do-you-know');
                    k.scrollIntoView({behavior: "smooth"});
                }}>你知道嗎？</li>
                <li onClick={()=>{
                    const k = document.querySelector('.disfactory-tools');
                    k.scrollIntoView({behavior: "smooth"});
                }}>回報系統</li>

                <li onClick={()=>{
                    const k = document.querySelector('.what-we-do');
                    k.scrollIntoView({behavior: "smooth" , block: "start", inline: "start"});
                }}>目前成果</li>
                <li onClick={()=>{
                    const k = document.querySelector('.QA');
                    k.scrollIntoView({behavior: "smooth"});
                }}>常見問題</li>
                <li onClick={()=>{
                    const k = document.querySelector('.do-you-know');
                    k.scrollIntoView({behavior: "smooth"});
                }}>新聞報導</li>
            </ul>

            <a href="https://bit.ly/3kESSsQ">拍照回報</a>
            <a href="https://bit.ly/3vFXXaj">鍵盤參與</a>
            </div>

            <label className='sidebar'>

            <input type="checkbox" />
            <span className="menu"> <span className="hamburger"></span> </span>
                <ul className='sidebar'>
                <li onClick={()=>{
                    const k = document.querySelector('.do-you-know');
                    k.scrollIntoView({behavior: "smooth"});
                }}>你知道嗎？</li>
                <li onClick={()=>{
                    const k = document.querySelector('.disfactory-tools');
                    k.scrollIntoView({behavior: "smooth"});
                }}>回報系統</li>

                <li onClick={()=>{
                    const k = document.querySelector('.what-we-do');
                    k.scrollIntoView({behavior: "smooth" , block: "start", inline: "start"});
                }}>目前成果</li>
                <li onClick={()=>{
                    const k = document.querySelector('.QA');
                    k.scrollIntoView({behavior: "smooth"});
                }}>常見問題</li>
                <li onClick={()=>{
                    const k = document.querySelector('.do-you-know');
                    k.scrollIntoView({behavior: "smooth"});
                }}>新聞報導</li>
                <a href="https://bit.ly/3kESSsQ">拍照回報</a>
                <a href="https://bit.ly/3vFXXaj">鍵盤參與</a>
                </ul>
            </label>

        </div>

    </NavContainer>
)
}
