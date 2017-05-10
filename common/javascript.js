function toggleLayer(whichLayer)
{
if (document.getElementById)
{
// this is the way the standards work
var style2 = document.getElementById(whichLayer).style;
style2.display = style2.display? "":"inline";
}
else if (document.all)
{
// this is the way old msie versions work
var style2 = document.all[whichLayer].style;
style2.display = style2.display? "":"inline";
}
else if (document.layers)
{
// this is the way nn4 works
var style2 = document.layers[whichLayer].style;
style2.display = style2.display? "":"inline";
}
}


function bang()	{
	alert('bang!');
}


function submitProviderRegistration()	{
	document.frmProviderRegister.submit();
}


/*************************************************************************
  This code is from Dynamic Web Coding at http://www.dyn-web.com/
  Copyright 2002-4 by Sharon Paine 
  See Terms of Use at http://www.dyn-web.com/bus/terms.html
  regarding conditions under which you may use this code.
  This notice must be retained in the code as is!
*************************************************************************/

function showRollTip(msg, e) {
  if ( typeof RollTip == "undefined" || !RollTip.ready ) return;
  RollTip.reveal(msg, e);
}

function hideRollTip() {
  if ( typeof RollTip == "undefined" || !RollTip.ready ) return;
  RollTip.conceal();
}	






function infoBubbleShow(id,marker,xoffset,yoffset) 	{
	var marker = getElemRefs(marker);
	var infoBubble = getElemRefs(id);	 
	infoBubble.style.left = (findPosX(marker) + xoffset);
	infoBubble.style.top = (findPosY(marker) + yoffset);
	infoBubble.style.visibility = 'visible';
}
function infoBubbleClose(id)	{
	var infoBubble = getElemRefs(id);
	infoBubble.style.visibility = 'hidden';
}


var cur_lyr;	// holds id of currently visible layer
function swapLayers(id) {
  if (cur_lyr) layerNone(cur_lyr);
  layerInline(id);
  cur_lyr = id;
}

function layerInline(id) {
  var lyr = getElemRefs(id);
  lyr.style.display = "inline";
}

function layerNone(id) {
  var lyr = getElemRefs(id);
  lyr.style.display = "none";
}

function getElemRefs(id) {
	var el = (document.getElementById)? document.getElementById(id): (document.all)? document.all[id]: (document.layers)? document.layers[id]: null;
	if (el) el.css = (el.style)? el.style: el;
	return el;
}



function findPosX(obj)
{
	var curleft = 0;
	if (obj.offsetParent)
	{
		while (obj.offsetParent)
		{
			curleft += obj.offsetLeft
			obj = obj.offsetParent;
		}
	}
	else if (obj.x)
		curleft += obj.x;
	return curleft;
}


function findPosY(obj)
{
	var curtop = 0;
	if (obj.offsetParent)
	{
		while (obj.offsetParent)
		{
			curtop += obj.offsetTop
			obj = obj.offsetParent;
		}
	}
	else if (obj.y)
		curtop += obj.y;
	return curtop;
}


var ns4 = (document.layers);
var ie4 = (document.all && !document.getElementById);
var ie5 = (document.all && document.getElementById);
var ns6 = (!document.all && document.getElementById);

function changeInnerHtml(id,text){
	// Netscape 4
	if(ns4){
		document.layers[id].innerHTML = text;
	}
	// Explorer 4
	else if(ie4){
		document.all[id].innerHTML = text;
	}
	// W3C - Explorer 5+ and Netscape 6+
	else if(ie5 || ns6){
		document.getElementById(id).innerHTML = text;
	}
}

function setFocus()     {
       if ( typeof ( document.forms[0] ) != "undefined" )      {
               document.forms[0].elements[0].focus();
       }

}

var activeSub=0;
var SubNum=0;

function reDo(){ window.location.reload() }
//   window.onresize = reDo;
//
//
  //  //Define global variables

	    var timerID = null;
		var timerOn = false;
		var timecount = 1000;
		var what = null;
		var newbrowser = true;
		var check = false;

    	function init(){
    	//  alert ("Running Init");
          if (document.layers) {
                      //  alert ("Running Netscape 4");
                        layerRef="document.layers";
                        styleSwitch="";
                        visibleVar="show";
			screenSize = window.innerWidth;
			what ="ns4";


          }else if(document.all){
                      //  alert ("Running IE");
                        layerRef="document.all";
                        styleSwitch=".style";
                        visibleVar="visible";
			screenSize = document.body.clientWidth + 18;
			what ="ie";

		  }else if(document.getElementById){
                      //  alert ("Running Netscape 6");
                        layerRef="document.getElementByID";
                        styleSwitch=".style";
                        visibleVar="visible";
			what="moz";
		  
		  }else{
		  	//alert("Older than 4.0 browser.");
			what="none";
			newbrowser = false;
		  }
		  
 
		window.status='status bar text to go here';
		check = true;
  	 	}

		
		
		
var ns4 = (document.layers);
var ie4 = (document.all && !document.getElementById);
var ie5 = (document.all && document.getElementById);
var ns6 = (!document.all && document.getElementById);

		
		
	// Turns the layers on and off
        function showLayer(layerName){
        	//if(check){
				// Netscape 4
				if(ns4){
					document.layers[layerName].style.visibility = 'visible';
				}
				// Explorer 4
				else if(ie4){
					document.all[layerName].style.visibility = 'visible';
				}
				// W3C - Explorer 5+ and Netscape 6+
				else if(ie5 || ns6){
					document.getElementById(layerName).style.visibility = 'visible';
				}
		}

        function hideLayer(layerName){
				if(ns4){
					document.layers[layerName].style.visibility = 'hidden';
				}
				// Explorer 4
				else if(ie4){
					document.all[layerName].style.visibility = 'hidden';
				}
				// W3C - Explorer 5+ and Netscape 6+
				else if(ie5 || ns6){
					document.getElementById(layerName).style.visibility = 'hidden';
				}
			
        }


		function hideAll(){
				hideLayer('contactMenu');
				hideLayer('preparingMenu');
				}


		function startTime() {
	        if (timerOn == false) {
                timerID=setTimeout( "hideAll()" , timecount);
                timerOn = true;

	        }

		}


		function stopTime() {
	        if (timerOn) {
    	        clearTimeout(timerID);
                timerID = null;
                timerOn = false;
	        }
		}

		function onLoad(){
			init();
			
			}

function initPreparingSubMenu(x,y) 	{
	var contactMenu = getElemRefs('preparingMenu');	
	contactMenu.style.left = x + 20 + 'px';
	contactMenu.style.top = y + 20 + 'px';
}
function initContactSubMenu(x,y) 	{
	var contactMenu = getElemRefs('contactMenu');	
	contactMenu.style.left = x + 20 + 'px';
	contactMenu.style.top = y + 20 + 'px';
}