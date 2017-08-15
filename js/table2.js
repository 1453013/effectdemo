	function include(url){ 
	"use strict";
	document.write('<script src="'+ url + '" type="text/javascript"></script>'); 
}

	include('js/jquery-2.1.4.js'); 



	function sort(ascending, columnClassName, tableId) {
	
		var tbody = document.getElementById(tableId).getElementsByTagName(
				"tbody")[0];
		var rows = tbody.getElementsByTagName("tr");
		var unsorted = true;
		while (unsorted) {
			unsorted = false
			for (var r = 0; r < rows.length - 1; r++) {
				var row = rows[r];
				var nextRow = rows[r + 1];
				var value = row.getElementsByClassName(columnClassName)[0].innerHTML;
				var nextValue = nextRow.getElementsByClassName(columnClassName)[0].innerHTML;
				value = value.replace(',', ''); // in case a comma is used in float number
				nextValue = nextValue.replace(',', '');
				if (!isNaN(value)) {
					value = parseFloat(value);
					nextValue = parseFloat(nextValue);
				}
				if (ascending ? value > nextValue : value < nextValue) {
					tbody.insertBefore(nextRow, row);
					unsorted = true;
				}
			}
		}
	};

var currentwidth = window.screen.availWidth;
var currentheight = window.screen.availHeight;




function opensmallwindow(url_add){

	// var w= 600;
	// var h=600;

	var w= currentwidth/3;
	var h= currentheight/3;
	var dualScreenLeft = window.screenLeft != undefined ? window.screenLeft : screen.left;
    var dualScreenTop = window.screenTop != undefined ? window.screenTop : screen.top;

    var width = window.innerWidth ? window.innerWidth : document.documentElement.clientWidth ? document.documentElement.clientWidth : screen.width;
    var height = window.innerHeight ? window.innerHeight : document.documentElement.clientHeight ? document.documentElement.clientHeight : screen.height;

    var left = ((width / 2) - (w / 2)) + dualScreenLeft;
    var top = ((height / 2) - (h / 2)) + dualScreenTop;
    var newWindow = window.open(url_add, 'Quick View','scrollbars=yes, width=' + w + ', height=' + h + ', top=' + top + ', left=' + left);

    // Puts focus on the newWindow
    if (window.focus) {
        newWindow.focus();
    }




	  // window.open(url_add,'windowNew','width=300, height=300');
   //      return true;
}


function openwindow(url){
	
}