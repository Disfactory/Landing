import './reset.scss';
import './landing.scss';

// SVG
import logo from './imgs/logo-and-exclam.png';
import hamburger from './imgs/hamburger.svg';
import pollutone from './imgs/pollutone.svg';
import playgame from './imgs/play-game.svg';
import disfactory_callout from './imgs/disfactory-callout.svg';
import forehead_bg1 from './imgs/forehead-bg1.svg';
import forehead_bg2 from './imgs/forehead-bg2.svg';
import action1 from './imgs/action1.svg';
import action2 from './imgs/action2.svg';
import action3 from './imgs/action3.svg';

//Component
import Scratchcard from './ScratchOff';

function Landing() {

return (
  <>
      
    <div className="navbar">

      <div className='nav-container'>

          <div className='nav-logo'>
              <img src={logo} alt="" />
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

                {/* FIXME: srcoll-link  */}
                <li onClick={()=>{
                  const k = document.querySelector('.what-we-do');
                  k.scrollIntoView({behavior: "smooth" , block: "start", inline: "start"});
                }}>目前成果</li>
                <li onClick={()=>{
                  const k = document.querySelector('.what-we-do');
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

          <div className='nav-hamburger'>
            <img alt="" src={hamburger}/>
          </div>

      </div>



      
    </div>

    <div className='forehead'>
    
    <img src={forehead_bg1} alt="" className='forehead_bg_left'/>
    <img src={forehead_bg2} alt="" className='forehead_bg_right'/> 

        <div className='forehead-content'>
          <h2 className='main-title'>農地違章工廠回報系統</h2> 
          <p className='subtitle'>用科技工具改變政府</p>

          <div className='forehead-btn-wrap'>
                <a href="https://bit.ly/3kESSsQ">拍照回報</a>
                <a href="https://bit.ly/3vFXXaj">鍵盤參與</a>
          </div>
        </div>

    </div>

    
    <div className='do-you-know'>

        <div className='do-you-know-title'>
          <h2 className='main-title'>你知道嗎？</h2>
          <p className='subtitle'>台灣沒被污染的農地很稀少， <br/>
          但沒日本製造的壓縮機少。</p>
        </div>

          <div className='do-you-know-content'>

              <div className='description'>
              80年代的鎘米事件，讓台灣驚覺農地純淨不在、食安深陷危機；30年後的今天，全台每年仍有 3000~6000 間違法農地廠房持續新增在各個縣市。電鍍、染製廢水......流進田間灌溉渠道，違法農地工廠破壞台灣農地，唯有透過為農地止血與整體空間佈局才能守護糧食安全。
              </div>

              <div className='description'>
              地球公民長達 6 年來從各種角度與層級切入，嘗試杜絕農地違章工廠帶來的陋習與衝擊。台灣地狹人稠，這就是我們唯一的家，如果發展欠缺規劃、不受管制，將為國土在生態和生計上都帶來浩劫。
              </div>

              <div className='description'>
              我們是第⼀個發起行動整頓農地違章⼯廠的環境組織，終於讓政府從半世紀以來的不作為變成有作為，在扼⽌新增建農地⼯廠獲得相當進展。
              </div>

          </div>

    </div>


    <div className='disfactory-tools'>

          <h2 className='main-title'>於是，我們製作了這些工具！</h2>

          <div className='tools-container'>

                <div className='disfactory-callout'>
                  <h2 className='tools-subtitle'>違章工廠通報系統</h2>
                  <img src={disfactory_callout} alt=""/>
                  <p className='tools-description'>傳統的檢舉需要留下個人資料， <br/>
                  且程序往往複雜。<br/>
                  違章工廠檢舉系統協助你快速、匿名檢舉，還不用擔心被找碴！</p>
                  
                  <div className='callout-tips'>
                    <div className='tools-num'>1</div>
                    <p>拍照</p>
                  </div>
                  
                  <div className='callout-tips'>
                    <div className='tools-num'>2</div>
                    <p>標記地點+上傳</p>
                  </div>
                  
                  <div className='callout-tips'>
                    <div className='tools-num'>3</div>
                    <p>地球公民基金會幫你匿名檢舉</p>
                  </div>

                  <a className='tools-btn' href="https://bit.ly/3kESSsQ">新增可疑工廠</a>


                </div>
            
                <div className='findout-disfactory'>
                  <h2 className='tools-subtitle'>大家來找廠</h2>
                  <img src={playgame} alt=""/>
                  <p className='tools-description'>住在都市也想幫忙？ <br/>
                  一起用遊戲改變世界！<br/>進入「大家來找廠」
                  一起用空拍圖辨識</p>

                  <div className='findout-tips'>
                    <div className='tools-num'>1</div>
                    <p>比對判斷空拍圖</p>
                  </div>
                  <div className='findout-tips'>
                    <div className='tools-num'>2</div>
                    <p>送出！</p>
                  </div>
                  <div className='findout-tips'>
                    <div className='tools-num'>3</div>
                    <p>地球公民基金會批次檢舉</p>
                  </div>
            
                  <a className='tools-btn' href="https://bit.ly/3vFXXaj">馬上鍵盤參與</a>

                </div>
            


          </div>


    </div>


    <div className='how-to-use'>
      <h2 className='main-title'>你的資料如何被運用？</h2>
      <p className='subtitle'>您在系統上的每個微小行動，  <br/>
          都將成為維護農地環境的有利證據！</p>
    </div>

    <div className='action-change'>
      <h2 className='main-title'>小小行動，大大改變</h2>
      <p className='subtitle'>這幾年我們不斷使用工具，  <br/>
          讓違章工廠無所遁形！</p>

      <div className='action-wrap'>
          <div>
            <img src={action1} alt=""></img>
            <p className='action-num'>513</p>
            <p className='action-notion'>累積回報人次</p>
          </div>
          <div>
            <img src={action2} alt=""></img>
            <p className='action-num'>9999</p>
            <p  className='action-notion'>累積申訴公文</p>
          </div>
          <div>
            <img src={action3} alt=""></img>
            <p className='action-num'>888</p>
            <p className='action-notion'>間被裁罰工廠</p>
          </div>

      </div>

      <p className='action-change-note'>
      資料來源｜總工廠數：農委會農業及農地資源盤查結果；檢舉數、參與人次：本回報系統
      </p>
    </div>

    <div className='who-we-are'>
      <h2 className='main-title'>我們是誰？</h2>
      <p className='subtitle'>既然你誠心誠意的發問了  <br/>
          我們就大發慈悲的告訴你</p>
    </div>

    <div className='scratch-off'>
      <Scratchcard/>
    </div>

    <div className='what-we-do'>
      <h2 className='main-title'>目前成果</h2>
      <p className='subtitle'>既然你誠心誠意的發問了  <br/>
          我們就大發慈悲的告訴你</p>
    </div>



  </>

)

}


export default Landing; 