//close navbar menu on link click
document.querySelector('.mdl-layout__drawer').addEventListener('click', function () {
  document.querySelector('.mdl-layout__obfuscator').classList.remove('is-visible');
  this.classList.remove('is-visible');
}, false);

//go home page
function getHome() {
  document.getElementById('root').innerHTML = "<img src='./img/bg.gif' width='100%' height='100%'></div></div>";
}
document.getElementById('home-btn').addEventListener('click', getHome);
document.getElementById('demo-avatar').addEventListener('click', getHome);
// more menu list
function getData (){
  // const n2 = 'https://venturads.com/helper-menu.json';
  getHome();
document.getElementById("content-app").innerHTML = "<div class='loader'></div>";
  let data=[
    {
      id: 2020,
      title: "Chart",
      content: "Welding Chart",
      url: "img/1.jpg",
      urlToImage: "img/1.jpg"
    },{
      id: 2021,
      title: "Symbols",
      content: "Symbols",
      url: "img/2.jpg",
      urlToImage: "img/2.jpg"
    },{
      id: 2022,
      title: "Specs",
      content: "Specs",
      url: "img/3.jpg",
      urlToImage: "img/3.jpg"
    },{
      id: 2023,
      title: "Settings",
      content: "Settings",
      url: "img/4.jpg",
      urlToImage: "img/4.jpg"
    },{
      id: 2024,
      title: "Basic Symbols",
      content: "Basic Symbols",
      url: "img/5.jpg",
      urlToImage: "img/5.jpg"
    },  {
      id: 2025,
      title: "Chart",
      content: "Welding Chart",
      url: "img/6.jpg",
      urlToImage: "img/6.jpg"
    },{
      id: 2026,
      title: "Data",
      content: "Data",
      url: "img/7.jpg",
      urlToImage: "img/7.jpg"
    },{
      id: 2027,
      title: "Types",
      content: "Types",
      url: "img/8.jpg",
      urlToImage: "img/8.jpg"
    },{
      id: 2028,
      title: "More Types",
      content: "More Types",
      url: "img/9.jpg",
      urlToImage: "img/9.jpg"
    },{
      id: 2029,
      title: "Weld Joints",
      content: "Weld Joints",
      url: "img/10.jpg",
      urlToImage: "img/10.jpg"
    },{
      id: 2030,
      title: "Process",
      content: "Process",
      url: "img/11.jpg",
      urlToImage: "img/11.jpg"
    },{
      id: 2031,
      title: "Safety",
      content: "Safety",
      url: "img/12.jpg",
      urlToImage: "img/12.jpg"
    },{
      id: 2032,
      title: "Equipment",
      content: "Equipment",
      url: "img/13.jpg",
      urlToImage: "img/13.jpg"
    },{
      id: 2033,
      title: "Workbench",
      content: "Workbench",
      url: "img/14.jpg",
      urlToImage: "img/14.jpg"
    },{
      id: 2034,
      title: "Seated Workbench",
      content: "Seated Workbench",
      url: "img/15.jpg",
      urlToImage: "img/15.jpg"
    },  {
      id: 2035,
      title: "Mill Direction",
      content: "Mill Direction",
      url: "img/16.jpg",
      urlToImage: "img/16.jpg"
    },{
      id: 2036,
      title: "Cutting Speeds",
      content: "Cutting Speeds",
      url: "img/17.jpg",
      urlToImage: "img/17.jpg"
    },{
      id: 2037,
      title: "Decimal Chart",
      content: "Decimal Chart",
      url: "img/18.jpg",
      urlToImage: "img/18.jpg"
    },{
      id: 2038,
      title: "Rpm",
      content: "Rpm",
      url: "img/19.jpg",
      urlToImage: "img/19.jpg"
    },{
      id: 2039,
      title: "Tap/Drill Chart",
      content: "Tap/Drill Chart",
      url: "img/20.jpg",
      urlToImage: "img/20.jpg"
    },{
      id: 2040,
      title: "Inch/Metric Chart",
      content: "Inch/Metric Chart",
      url: "img/21.jpg",
      urlToImage: "img/21.jpg"
    },{
      id: 2041,
      title: "Sheet Metal Charts",
      content: "Sheet Metal Charts",
      url: "img/22.jpg",
      urlToImage: "img/22.jpg"
    },{
      id: 2042,
      title: "Weld Details",
      content: "Weld Details",
      url: "img/23.jpg",
      urlToImage: "img/23.jpg"
    },{
      id: 2043,
      title: "Metal Inert Gas",
      content: "Metal Inert Gas",
      url: "img/24.jpg",
      urlToImage: "img/24.jpg"
    }
  ];
  let list = "";
  for(let i=0;i<data.length;i++){
    list += "<a href=#" + data[i].id + " class='mdl-navigation__link' type='button' id=" + data[i].id + " class='btn btn-primary sharp'>" +  data[i].title + "</a></br>";
    document.getElementById('content-app').innerHTML = list;
  }
  for(let i=0;i<data.length;i++){ 
    function getImage() {
      document.getElementById('root').innerHTML = "<img src='" + data[i].url + "' width='100%' ></div></div>";
    }
    document.getElementById(data[i].id).addEventListener('click', getImage);
  }
}

getData();

  //admob id script
  function onDeviceReady() {
    document.removeEventListener('deviceready', onDeviceReady, false);
    // Set AdMobAds options:
    admob.setOptions({
      publisherId:          "ca-app-pub-3864996818231266/9804421234",  // Required Banner ads
      interstitialAdId:     "ca-app-pub-3864996818231266/1155086435",  // Optional Full screen ads
        // tappxIdiOS:           "/XXXXXXXXX/Pub-XXXX-iOS-IIII",            // Optional
        // tappxIdAndroid:       "/XXXXXXXXX/Pub-XXXX-Android-AAAA",        // Optional
        // tappxShare:           0.5                                        // Optional
    });
    admob.createBannerView();
    admob.requestInterstitialAd({
      autoShowInterstitial: true
    });
}

document.addEventListener("deviceready", onDeviceReady, false);

