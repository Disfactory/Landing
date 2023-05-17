const QAtoggleInfo = [
  {
    id: '01',
    question: '回報前',
    // answer: [
    //   {
    //     title: '使用教學',
    //     desc: '<br><button onClick={()=&gt;{setAddData(true)}} >如何新增一筆違章工廠的資料？</button><button>如何在一筆資料裡補充更多資訊？</button>如有其他問題，請電洽地球公民基金會（02-23920371）。',
    //   },
    //   {
    //     title: '不在工廠附近也可以回報嗎？',
    //     desc: '是的，即使不在工廠附近，仍然可以透過輸入經緯度來回報。<br><br> 按下「我想新增可疑工廠」->「顯示經緯度」->「搜尋經緯度」後就可以輸入該工廠的經緯度，並進入到「新增可疑工廠」的頁面來回報資料',
    //   },
    //   {
    //     title: '我的回報是否匿名？',
    //     desc: '傳統的檢舉需要留下個人資料，且程序複雜。在 Disfactory.tw 中，民眾可以選擇不填寫真實姓名，或不留下個人資訊，即可回報！<br><br> Disfactory.tw 會保障報案民眾的個人資訊，不必擔心個人資料被洩露。',
    //   },
    // ],
  },
  {
    id: '02',
    question: '回報中',
    answer: [
      {
        title: '回報一定要有照片嗎？',
        desc: '是的，回報工廠問題時必須提供相關照片，因為這樣可以更有效地向地方政府提出證據，以證明該地確實有違章工廠。<br><br> 照片可以是任何顯示工廠和問題的圖像，例如工廠外觀、工廠排放汙染物及棄置廢棄物等等。',
      },
      {
        title: '使用遇到問題怎麼辦？',
        desc: '如果您遇到網站使用疑問、網站出現故障情形，請電洽地球公民基金會（02-23920371），或進入 <a href="https://airtable.com/shrUraKakZRpH52DO" target="_blank" rel="noopener">表單</a> 填寫您的問題，我們會盡快協助處理。',
      },
      {
        title: '我想回報的工廠不在範圍內',
        desc: '目前 Disfactory.tw 主要針對非都市土地上的新增建違章工廠進行回報，因為在都市計畫農業區的土地上，建築物與土地利用都受到較嚴格的管制，也有較高的査處效能。<br><br> 如果您想回報的違章工廠不在 Disfactory.tw 的回報範圍內，可以寫信至 <a href="https://www.cet-taiwan.org/" target="_blank" rel="noopener" >地球公民基金會</a> (cet@cet-taiwan.org) ，我們會盡快協助處理。',
      },
    ],
  },
  {
    id: '03',
    question: '回報後',
    answer: [
      {
        title: '回報就會變檢舉嗎？',
        desc: 'Disfactory.tw 是協助民眾回報違章工廠的平台，上傳回報並不代表已經完成舉報程序。<br><br> 我們會對回報案進行整理，並會優先處理新增建（2016.05.20後新增建的工廠）與高污染工廠，寄出檢舉公文給地方縣市政府。',
      },
      {
        title: '我想要參與更多',
        desc: '<li>想當地球公民的志工！</li>地球公民收到回報資訊後，會正式寄送舉報公文至縣市政府，並電話追蹤公文的進度，以確保大家費力回報的農地違章工廠得以拆除。持續分享相關資訊，讓更多人知道這個系統就可以讓政府不敢怠慢。歡迎追蹤地球公民基金會的 <a href="https://www.facebook.com/CitizenoftheEarth" target="_blank" rel="noopener">臉書</a>、<a href="https://www.instagram.com/cettw/" target="_blank" rel="noopener" >IG</a>。<br><br>  另外，我們也需要志工們一起協助整理文件、檢查公文、電話追蹤與其他行動，歡迎您一起 <a href="https://www.cet-taiwan.org/civicrm/profile/create?gid=11&reset=1" target="_blank" rel="noopener" >加入監督行列</a>。<br><br> <li>想加入下班族的行列！</li>如果想加入我們的行列，一起探索社群協力的可能性，歡迎進入此 <a href="https://g0v.hackmd.io/Lk9KiihIS7qQU6iZUTptWQ" target="_blank" rel="noopener" >協作入口</a>，了解更多。',
      },
    ],
  },
  {
    id: '04',
    question: '其他',
    answer: [
      {
        title: '請求撤銷照片',
        desc: '如有誤上傳含有個人資料的照片，請記住您回報的工廠編號，並電洽地球公民基金會（02-23920371），請求撤下照片。',
      },
      {
        title: '我想知道我家附近有沒有違章工廠',
        desc: '<br><button>查詢我家附近的違章工廠</button>',
      },
    ],
  },
];

export { QAtoggleInfo };
