/*
2019/06/12 Update
各ページ共通部分呼び出し
javascript
*/


//メニューバー呼び出し用
function menu(){

    var html = "";
    html += '<nav>';
	html +=		'<ul>';
	html +=		'<li><a href="index.html">HOME</a></li>';
	html +=		'<li><a href="#">ABOUT</a></li>';
	html +=		'<li><a href="work.html">WORK</a></li>';
	html +=		'<li><a href="biography.html">BIOGRAPHY</a></li>';
	html +=		'<li><a href="#">CONTACT</a></li>';
	html +=		'</ul>';
	html +=	'</nav>';
    document.write(html);
}
//footer呼び出し用
function footer(){

    var html = "";
    html += '<p class="copyLight">';
	html +=		'<small>Copyright (c) 2019 Beyond4° All Rights Reserved.</small>';
	html +=	'</p>';
    document.write(html);
}
