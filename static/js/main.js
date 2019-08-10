var quantity = 0;

var r = 2;
var x = 0;
var alltotal = 0;

var list1 = [];
var list2 = [];

var table = document.getElementById('reciept');
var table_row = table.rows.length;
	table_row -= 4;

function AddRow2(param,param1){

    list1[x] = document.getElementById(param).value;
    list2[x] = parseFloat(document.getElementById(param1).value);

    if (r <= 21) {
    	table.rows[r].cells[1].innerHTML = list1[x];
   		table.rows[r].cells[3].innerHTML = list2[x];
    }
    

	x++;
	r++;
}

var jer = parseFloat(table.rows[1].cells[2].innerHTML);
if(isNaN(jer)) jer = 0;

function LastResult() {
	alltotal = 0;
	var i;
	for(i = 2;i <= table_row;i++ ){
		collect_total = parseFloat(table.rows[i].cells[4].innerHTML);
		if(isNaN(collect_total)) collect_total = 0;
		alltotal += collect_total;
	}
	diposite = parseFloat(document.getElementById('deposite').value);
	if (diposite  == null || isNaN(diposite)) {
		diposite = 0;
	}
	alltotal += jer;
	table.rows[table_row+1].cells[2].innerHTML = alltotal.toFixed(2)+"/-";	
	alltotal -= diposite
	document.getElementById('bakibox').value = alltotal.toFixed(2)+"/-";	
	
}

var item = [
	[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21],
	[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22]
];

var delete_counter = 0;

function Delete(param){
	delete_counter++;
	if (delete_counter >= 1 && delete_counter <= 21) {
		for(var i = 0;i < item[0].length; i++){
			if (item[0][i] == param) {
				for (var j = i; j < item[1].length; j++) {
					item[1][j]--;
				}
				table.deleteRow(item[1][i+1]);
				r--;
				table_row--;
				item[0].splice(i,1);
				item[1].splice(i,1);

				break;
			}
		}
	}
}


function alert() {
	alert('You need to get Name and mobile no first.');
}

function get_quantity(para,para1){
	var get_quantity = parseFloat(document.getElementById(para).value);
	for(var i = 0;item[0].length; i++){
		if(item[0][i] == para1){
			para1 = item[1][i];
			break;
		}
	}
	var get_amount = parseFloat(table.rows[para1].cells[3].innerHTML);
	var calculated_amount = get_quantity * get_amount;
	table.rows[para1].cells[4].innerHTML = calculated_amount.toFixed(2);
}

var flag = 0;

function Plus(param,param1){
	if (flag != param1) {flag=param1;quantity = 0;}
	quantity++;
	document.getElementById(param).value = quantity;
	for(var i = 0;item[0].length; i++){
		if(item[0][i] == param1){
			param1 = item[1][i];
			break;
		}
	}
	var get_amount = parseFloat(table.rows[param1].cells[3].innerHTML);
	var calculated_amount = quantity * get_amount;
	table.rows[param1].cells[4].innerHTML = calculated_amount.toFixed(2);
}

function Minus(param,param1){
	if(quantity > 0) quantity--;
	document.getElementById(param).value = quantity;
	for(var i = 0;item[0].length; i++){
		if(item[0][i] == param1){
			param1 = item[1][i];
			break;
		}
	}
	var get_amount = parseFloat(table.rows[param1].cells[3].innerHTML);
	var calculated_amount = get_quantity * get_amount;
	table.rows[param1].cells[4].innerHTML = calculated_amount.toFixed(2);
}

function PriceChage(param){
    var get = document.getElementById(param).value;
    document.getElementById(param) = get;
}