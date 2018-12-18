var exp = 0;
var expclick = 1;
var expps = 0;
var dem = 0;
var demclick = 0;
var demps = 0;
var dmgclick = 1;
var dmgps = 0;
var hp = 1000;
var str = 0;
var strcost = 10;
var mag = 0;
var magcost = 10;
var will = 0;
var willcost = 10;
var formcount = 1;
var tickinterval = 1000;

function newform(){
	formcount = formcount + 1;
	hp = Math.pow(10,1 + (2 * formcount));
	exp = exp + Math.pow(10,(2 * formcount)-1);
    dem = dem + 1;
};

function update(){
	dmgclick = 1 + str;
    expclick = dmgclick;
    dmgps = mag;
    expps = dmgps;
	tickinterval = 1000 * (Math.pow(.999,will));

	if (hp <= 0){
		newform();
	};
	
	document.getElementById("hp").innerHTML = hp;
	document.getElementById("str").innerHTML = str;
	document.getElementById("mag").innerHTML = mag;
	document.getElementById("will").innerHTML = will;
	document.getElementById("exp").innerHTML = exp;
    document.getElementById("dem").innerHTML = dem;
	document.getElementById("magcost").innerHTML = Math.floor(magcost);
	document.getElementById("strcost").innerHTML = Math.floor(strcost);
	document.getElementById("willcost").innerHTML = Math.floor(willcost);
};

function mainbutton(){
	exp = exp + expclick;
	hp = hp - dmgclick;
	update();
};

function persecond(){
    exp = exp + expps;
	hp = hp - dmgps;
	update();
};

function tick(){
	persecond();
	setTimeout(function() {
		tick();
	}, tickinterval);			
};

//window.setInterval(function(){
//   persecond();
//}, 1000);

function toggleexpshop(){
    var x = document.getElementById("expshop");
    if (document.getElementById("expshop").style.display === "none"){
        document.getElementById("expshop").style.display = "block";
	document.getElementById("demshop").style.display = "none"
    } else {
        document.getElementById("expshop").style.display = "none"
    }
};

function toggledemshop(){
    var x = document.getElementById("demshop");
    if (document.getElementById("demshop").style.display === "none"){
        document.getElementById("demshop").style.display = "block";
	document.getElementById("expshop").style.display = "none"
    } else {
        document.getElementById("demshop").style.display = "none"
    }
};

function trainstr(){
	if (exp >= Math.floor(strcost)){
		str = str + 1;
		exp = exp - Math.floor(strcost);
		strcost = strcost * 1.05;
		update();
	};
};

function trainmag(){
	if (exp >= Math.floor(magcost)){
		mag = mag + 1;
		exp = exp - Math.floor(magcost);
		magcost = magcost * 1.05;
		update();
	};
};

function trainwill(){
	if (exp >= Math.floor(willcost)){
		will = will + 1;
		exp = exp - Math.floor(willcost);
		willcost = willcost * 1.05;
		update();
	};
};

tick();