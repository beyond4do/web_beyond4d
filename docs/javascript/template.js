function menu(){

    var html = "";
    html += '<nav>';
	html +=		'<ul>';
	html +=		'<li><a href="index.html">HOME</a></li>';
	html +=		'<li><a href="#">ABOUT</a></li>';
	html +=		'<li><a href="#">WORK</a></li>';
	html +=		'<li><a href="biography.html">BIOGRAPHY</a></li>';
	html +=		'<li><a href="#">CONTACT</a></li>';
	html +=		'</ul>';
	html +=	'</nav>';
    document.write(html);
}

function footer(){

    var html = "";
    html += '<p class="copyLight">';
	html +=		'<small>Copyright (c) 2019 Beyond4° All Rights Reserved.</small>';
	html +=	'</p>';
    document.write(html);
}