/*
2019/06/12 Update
各ページ共通部分呼び出し
javascript
*/


function head(){

  var html = '';
      html += '<meta charset="UTF-8">';
      html += '<meta http-equiv="X-UA-Compatible" content="IE=edge">';
      html += '<meta name="viewport" content="width=device-width,initial-scale=1">';
      html += '<link rel="stylesheet" type="text/css" href="css/style.css">';
      html += '<link rel="shortcut icon" href="img/LogoW.ico"/>';
      html += '<script src="https://unpkg.com/ionicons@4.1.2/dist/ionicons.js"></script>';
      html += '<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>';
      html += '<script type="text/javascript" src="javascript/returnTop.js"></script>';
      document.write(html);
}

//メニューバー呼び出し用
function menu(){

    let html = '';
        html +=		'<header class="header">';
        html +=		'  <img src="http://placehold.jp/24/87ceeb/777777/240x40.png?text=Be4°">';
        html +=		'  <div class="header-right">';
        html +=		'    <ul>';
        html +=		'      <li><a href="index.html">HOME</a></li>';
        html +=		'      <li><a href="about.html">ABOUT</a></li>';
        html +=		'      <li><a href="works.html">WORKS</a></li>';
        html +=		'      <li><a href="members.html">MEMBERS</a></li>';
        html +=		'      <li><a href="contact.html">CONTACT</a></li>';
        html +=		'    </ul>';
        html +=   ' </div>';
      	html +=		'</header>';
    document.write(html);
}

//footer呼び出し用
function footer(){

    var html = "";
        html += '<p class="footer">';
      	html +=		'<small>Copyright (c) 2019 be4° All Rights Reserved.</small>';
      	html +=	'</p>';
    document.write(html);
}
