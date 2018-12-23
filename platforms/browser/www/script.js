function getap (){
    const n = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=82413d9fd4ad42528ed2caeb0473d089';
  fetch(n)
  .then(function(response){
    return response.json();
    })
  .then(function(data){
     getdata(data);
  })
  
  function getdata(data){
    let list="";
    for(let i=0;i<data.articles.length;i++){
      list += "<div id='pic'><a href='" + data.articles[i].url + "' target='_blank'><img src='" + data.articles[i].urlToImage + "' width='100%' />" + data.articles[i].title + "</a></div>";
      }
    document.getElementById("root").innerHTML = list;
  }
    
  }
  document.getElementById('apnews').addEventListener('click', getap);
  
  function getGar (){
    //const n2 = 'https://content.guardianapis.com/search?api-key=799b91f2-850a-4dd2-a112-c1a67662f22d';
    const n2 = 'https://venturads.com/weldinghelper/api/get_posts/';
  fetch(n2)
  .then(function(response){
    return response.json();
    })
  .then(function(data){
     getdata(data);
  })
  
  function getdata(data){
    let list="";
    for(let i=0;i<data.posts.length;i++){
      list += "<div class='btn-group-justified content'><a href='#' type='button' class='btn btn-info' id='settings' data-toggle='collapse' data-target='#demo" + data.posts[i].id + "'>" +  data.posts[i].title + "</a><div id='demo" +  data.posts[i].id + "' class='collapse'>" + data.posts[i].title + data.posts[i].content + "</div></div>";
      }
    document.getElementById("root").innerHTML = list;
  }
    
  }
  document.getElementById('garnews').addEventListener('click', getGar);
  