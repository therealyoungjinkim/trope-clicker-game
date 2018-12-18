//naming: x-x the x-x, the x-x, specialx , the x x+x, x-x x-x, chance to prefix or suffix 
var names = ['taint' , 'ligma' , 'rend' , 'grundle' , 'brindle', 'bramble', 'cut' , 'cavity', 'drill', 'break', 'plague', 'mondo', 'grasp', 'death', 'master', 'rock' ,'shooter'];
var specialnames = ['Chef', 'Boogeyman', 'Babadook'];
var prefix = ['The', 'Supreme' , 'Deluxe' , 'SS'];
var suffix = ['Deluxe' , 'Supreme', 'III','3D'];
var path = '\images\\boss';
var heads = ['h01','h02','h03','h04','h05','h06'];
var tops = ['t01','t02','t03','t04','t05','t06','t07'];
var bottoms = ['b01','b02','b03','b04','b05','b06'];

document.getElementById("bottom").innerHTML = ("<img src=' " +path+ "\\bottom\\" + bottoms[Math.floor(Math.random()*bottoms.length)]+ ".png'>");
document.getElementById("top").innerHTML = ("<img src=' " +path+ "\\top\\" + tops[Math.floor(Math.random()*tops.length)]+ ".png'>");
document.getElementById("head").innerHTML = ("<img src=' " +path+ "\\head\\" + heads[Math.floor(Math.random()*heads.length)]+ ".png'>");