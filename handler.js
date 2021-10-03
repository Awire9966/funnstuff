
function GameWindow(gameurl) {
    var myWindow1 = window.open('', 'Game', 'scrollbars=1,height='+screen.availHeight+',width='+screen.availWidth);
    myWindow1.document.write('<!DOCTYPE html>\n\
<title>Game</title>\n\
<p><iframe src=\"'+ gameurl + '\" frameborder="0" style="overflow:hidden;overflow-x:hidden;overflow-y:hidden;height:100%;width:100%;position:absolute;top:0px;left:0px;right:0px;bottom:0px" height="100%" width="100%">\n\
<script>\n\
alert("");\n\
<\x2fscript>');
}
