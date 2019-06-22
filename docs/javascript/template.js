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

    var html = "";
        html += '<nav>';
      	html +=		'<ul>';
      	html +=		'<li><a href="index.html">HOME</a></li>';
      	html +=		'<li><a href="about.html">ABOUT</a></li>';
      	html +=		'<li><a href="work.html">WORK</a></li>';
      	html +=		'<li><a href="biography.html">BIOGRAPHY</a></li>';
      	html +=		'<li><a href="contact.html">CONTACT</a></li>';
      	html +=		'</ul>';
      	html +=	'</nav>';
    document.write(html);
}
//footer呼び出し用
function footer(){

    var html = "";
        html += '<p class="copyLight">';
      	html +=		'<small>Copyright (c) 2019 be4° All Rights Reserved.</small>';
      	html +=	'</p>';
    document.write(html);
}
