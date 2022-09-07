import './reset.scss';
import './landing.scss';

// SVG
import logo from './imgs/logo-and-exclam.png';
import hamburger from './imgs/hamburger.svg';
import pollutone from './imgs/pollutone.svg';
import playgame from './imgs/play-game.svg';
import disfactory_callout from './imgs/disfactory-callout.svg';

function Landing() {

return (
  <>
      
    {/* 上方fix navbar */}
    <div className="navbar">

      <div className='container'>

          {/* TODO: 為什麼img沒辦法下載？是被什麼擋下來了嗎？ */}
          {/* 左方LOGO */}
          <div className='logo'>
              <img src={logo} alt="" />
              <h1>農地違章工廠</h1>
          </div>

          {/* Nav清單 */}
          <div className='nav-list'>
            <ul>
                <li>你知道嗎？</li>
                <li>回報系統</li>
                <li>目前成果</li>
                <li>常見問題</li>
                <li>新聞報導</li>
            </ul>

            <a href="https://bit.ly/3kESSsQ">拍照回報</a>
            <a href="https://bit.ly/3vFXXaj">鍵盤參與</a>
          </div>

          {/* hambergur */}
          {/* <div>
            <img alt="" src={hamburger}/>
          </div> */}


          

      </div>



      
    </div>

    
    {/* 你知道嗎？ */}
    <div className='do-u-know'>

        
          <h2>你知道嗎？</h2>
          <p>台灣沒被污染的農地很稀少， <br/>
          但沒日本製造的壓縮機少。</p>

          <div className='do-u-know-content'>

            <div>
              <span>
              農地被污染，你也不好過。臺灣過去三十年間工、商業高速發展、工業聚落及都市發展逐漸擴張至農業區域，導致國土使用規劃趨於紊亂，公共排水及下水道設施建設不及，環境污染因而伴隨而來。<br/> 
              
              綜觀而言，農地污染多集中於工業聚落下游與工農使用混雜區，反映出工農生產區位不相容的環境污染根本問題。工廠產生的廢棄物及廢水，或石化業及廢五金燃燒產生的排煙及落塵等問題，均可能造成土壤不同程度的污染。 <br/>
              其中含重金屬的工廠廢水隨著灌溉水流進農地，以及受限於水量分配被迫引灌水質不良的迴歸水等兩因素，為農地遭重金屬污染的主因。
              </span>
            </div>

            <div>
              <img src={pollutone} alt=""/>
            </div>

          </div>

    </div>

    {/* 於是，我們製作了這些工具！ */}
    <div className='disfactory-tools'>

          <h2>於是，我們製作了這些工具！</h2>

          <div className='tools-container'>
                <div className='disfactory-callout'>
                  <h2 className='tool-h2-1'>違章工廠通報系統</h2>
                  <img src={disfactory_callout} alt=""/>
                  <p>傳統的檢舉需要留下個人資料， <br/>
                  且程序往往複雜。<br/>
                  違章工廠檢舉系統協助你快速、匿名檢舉，還不用擔心被找碴！</p>
                  
                  <div className='num'>1</div>
                  <div className='num'>2</div>
                  <div className='num'>3</div>

                  <a>新增可疑工廠</a>


                </div>
            
                <div className='findout-disfactory'>
                  <h2 className='tool-h2-2'>大家來找廠</h2>
                  <img src={playgame} alt=""/>
                  <p>住在都市也想幫忙？ <br/>
                  一起用遊戲改變世界！進入「大家來找廠」一起用空拍圖辨識</p>

                  <div className='num'>1</div>
                  <div className='num'>2</div>
                  <div className='num'>3</div>
                
                  <a>馬上鍵盤參與</a>
                </div>
            


          </div>


    </div>


    {/* 你的資料如何被運用？ */}
    <div className='how-to-use'>
      <h2>你的資料如何被運用？</h2>
      <p>您在系統上的每個微小行動，  <br/>
          都將成為維護農地環境的有利證據！</p>
    </div>


  </>

)

}


export default Landing 