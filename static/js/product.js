var list1 = [];
var list2 = [];
var x = 0;

var quantity = 0;
var quantity1 = 0;
var quantity2 = 0;
var quantity3 = 0;
var quantity4 = 0;
var quantity5 = 0;
var quantity6 = 0;
var quantity7 = 0;
var quantity8 = 0;
var quantity9 = 0;
var quantity10 = 0;
var quantity11 = 0;
var quantity12 = 0;
var quantity13 = 0;
var quantity14 = 0;
var quantity15 = 0;
var quantity16 = 0;
var quantity17 = 0;
var quantity18 = 0;
var quantity19 = 0;
var quantity20 = 0;

var r = 1;
var alltotal1 = 0;
var total1 = 0,total2 = 0,total3 = 0,total4 = 0,total5 = 0,total6 = 0,total7 = 0,total8 = 0,total9 = 0,total10 = 0;
var total20 = 0,total19 = 0,total18 = 0,total17 = 0,total16 = 0,total15 = 0,total14 = 0,total13 = 0,total12 = 0,total11 = 0;
var table_row = 21;


var table = document.getElementById('reciept');

function Plus(param) {
    quantity++;
    document.getElementById(param).value = quantity;
    var price = parseFloat(table.rows[1].cells[3].innerHTML);
    total1 = price * quantity;
    table.rows[1].cells[4].innerHTML = total1.toFixed(2)+"/-";
}

function Minus(param) {
    if(quantity > 0)quantity--;
    document.getElementById(param).value = quantity;
    var price = parseFloat(table.rows[1].cells[3].innerHTML);
    total1 = price * quantity;
    table.rows[1].cells[4].innerHTML = total1.toFixed(2)+"/-";
    
}
function Plus1(param) {
    quantity1++;
    document.getElementById(param).value = quantity1;
    var price = parseFloat(table.rows[2].cells[3].innerHTML);
    total2 = price * quantity1;
    table.rows[2].cells[4].innerHTML = total2.toFixed(2)+"/-";
    
}

function Minus1(param) {
    if(quantity1 > 0)quantity1--;
    document.getElementById(param).value = quantity1;
    var price = parseFloat(table.rows[2].cells[3].innerHTML);
    total2 = price * quantity1;
    table.rows[2].cells[4].innerHTML = total2.toFixed(2)+"/-";
    
}
function Plus2(param) {
    quantity2++;
    document.getElementById(param).value = quantity2;
    var price = parseFloat(table.rows[3].cells[3].innerHTML);
    total3 = price * quantity2;
    ShowTotal(3,total3);
}

function Minus2(param) {
    if(quantity2 > 0)quantity2--;
    document.getElementById(param).value = quantity2;
    var price = parseFloat(table.rows[3].cells[3].innerHTML);
    total3 = price * quantity2;
    ShowTotal(3,total3);
}
function Plus3(param) {
    quantity3++;
    document.getElementById(param).value = quantity3;
    var price = parseFloat(table.rows[4].cells[3].innerHTML);
    total4 = price * quantity3;
    ShowTotal(4,total4);
}

function Minus3(param) {
    if(quantity3 > 0)quantity3--;
    document.getElementById(param).value = quantity3;
    var price = parseFloat(table.rows[4].cells[3].innerHTML);
    total4 = price * quantity3;
    ShowTotal(4,total4);
}

function Plus4(param) {
    quantity4++;
    document.getElementById(param).value = quantity4;
    var price = parseFloat(table.rows[5].cells[3].innerHTML);
    total5 = price * quantity4;
    ShowTotal(5,total5);
}

function Minus4(param) {
    if(quantity4 > 0)quantity4--;
    document.getElementById(param).value = quantity4;
    var price = parseFloat(table.rows[5].cells[3].innerHTML);
    total5 = price * quantity4
    ShowTotal(5,total5);
}
function Plus5(param) {
    quantity5++;
    document.getElementById(param).value = quantity5;
    var price = parseFloat(table.rows[6].cells[3].innerHTML);
    total6 = price * quantity5;
    ShowTotal(6,total6);
}

function Minus5(param) {
    if(quantity5 > 0)quantity5--;
    document.getElementById(param).value = quantity5;
    var price = parseFloat(table.rows[6].cells[3].innerHTML);
    total6 = price * quantity5;
    ShowTotal(6,total6);
}

function Plus6(param) {
    quantity6++;
    document.getElementById(param).value = quantity6;
    var price = parseFloat(table.rows[7].cells[3].innerHTML);
    total7 = price * quantity6;
    ShowTotal(7,total7);
}

function Minus6(param) {
    if(quantity6 > 0)quantity6--;
    document.getElementById(param).value = quantity6;
    var price = parseFloat(table.rows[7].cells[3].innerHTML);
    total7 = price * quantity6;
    ShowTotal(7,total7);
}

function Plus7(param) {
    quantity7++;
    document.getElementById(param).value = quantity7;
    var price = parseFloat(table.rows[8].cells[3].innerHTML);
    total8 = price * quantity7;
    ShowTotal(8,total8);
}

function Minus7(param) {
    if(quantity7 > 0)quantity7--;
    document.getElementById(param).value = quantity7;
    var price = parseFloat(table.rows[8].cells[3].innerHTML);
    total8 = price * quantity7;
    ShowTotal(8,total8);
}


function Plus8(param) {
    quantity8++;
    document.getElementById(param).value = quantity8;
    var price = parseFloat(table.rows[9].cells[3].innerHTML);
    total9 = price * quantity8;
    ShowTotal(9,total9);
}

function Minus8(param) {
    if(quantity8 > 0)quantity8--;
    document.getElementById(param).value = quantity8;
    var price = parseFloat(table.rows[9].cells[3].innerHTML);
    total9 = price * quantity8;
    ShowTotal(9,total9);
}

function Plus9(param) {
    quantity9++;
    document.getElementById(param).value = quantity9;
    var price = parseFloat(table.rows[10].cells[3].innerHTML);
    total10 = price * quantity9;
    ShowTotal(10,total10);
}

function Minus9(param) {
    if(quantity9 > 0)quantity9--;
    document.getElementById(param).value = quantity9;
    var price = parseFloat(table.rows[10].cells[3].innerHTML);
    total10 = price * quantity9;
    ShowTotal(10,total10);
}

function Plus10(param) {
    quantity10++;
    document.getElementById(param).value = quantity10;
    var price = parseFloat(table.rows[11].cells[3].innerHTML);
    total11 = price * quantity10;
    ShowTotal(11,total11);
}

function Minus10(param) {
    if(quantity10 > 0)quantity10--;
    document.getElementById(param).value = quantity10;
    var price = parseFloat(table.rows[11].cells[3].innerHTML);
    total11 = price * quantity10;
    ShowTotal(11,total11);
}

function Plus11(param) {
    quantity11++;
    document.getElementById(param).value = quantity11;
    var price = parseFloat(table.rows[12].cells[3].innerHTML);
    total12 = price * quantity11;
    ShowTotal(12,total12);
}

function Minus11(param) {
    if(quantity11 > 0)quantity11--;
    document.getElementById(param).value = quantity11;
    var price = parseFloat(table.rows[12].cells[3].innerHTML);
    total12 = price * quantity11;
    ShowTotal(12,total12);
}


function Plus12(param) {
    quantity12++;
    document.getElementById(param).value = quantity12;
    var price = parseFloat(table.rows[13].cells[3].innerHTML);
    total13 = price * quantity12;
    ShowTotal(13,total13);
}

function Minus12(param) {
    if(quantity12 > 0)quantity12--;
    document.getElementById(param).value = quantity12;
    var price = parseFloat(table.rows[13].cells[3].innerHTML);
    total13 = price * quantity12;
    ShowTotal(13,total13);
}

function Plus13(param) {
    quantity13++;
    document.getElementById(param).value = quantity13;
    var price = parseFloat(table.rows[14].cells[3].innerHTML);
    total14 = price * quantity13;
    ShowTotal(14,total14);
}

function Minus13(param) {
    if(quantity13 > 0)quantity13--;
    document.getElementById(param).value = quantity13;
    var price = parseFloat(table.rows[14].cells[3].innerHTML);
    total14 = price * quantity13;
    ShowTotal(14,total14);
}

function Plus14(param) {
    quantity14++;
    document.getElementById(param).value = quantity14;
    var price = parseFloat(table.rows[15].cells[3].innerHTML);
    total15 = price * quantity14;
    ShowTotal(15,total15);
}

function Minus14(param) {
    if(quantity14 > 0)quantity14--;
    document.getElementById(param).value = quantity14;
    var price = parseFloat(table.rows[15].cells[3].innerHTML);
    total15 = price * quantity14;
    ShowTotal(15,total15);
}

function Plus15(param) {
    quantity15++;
    document.getElementById(param).value = quantity15;
    var price = parseFloat(table.rows[16].cells[3].innerHTML);
    total16 = price * quantity15;
    ShowTotal(16,total16);
}

function Minus15(param) {
    if(quantity15 > 0)quantity15--;
    document.getElementById(param).value = quantity15;
    var price = parseFloat(table.rows[16].cells[3].innerHTML);
    total16 = price * quantity15;
    ShowTotal(16,total16);
}

function Plus16(param) {
    quantity16++;
    document.getElementById(param).value = quantity16;
    var price = parseFloat(table.rows[17].cells[3].innerHTML);
    total17 = price * quantity16;
    ShowTotal(17,total17);
}

function Minus16(param) {
    if(quantity16 > 0)quantity16--;
    document.getElementById(param).value = quantity16;
    var price = parseFloat(table.rows[17].cells[3].innerHTML);
    total17 = price * quantity16;
    ShowTotal(17,total17);
}

function Plus17(param) {
    quantity17++;
    document.getElementById(param).value = quantity17;
    var price = parseFloat(table.rows[18].cells[3].innerHTML);
    total18 = price * quantity17;
    ShowTotal(18,total18);
}

function Minus17(param) {
    if(quantity17 > 0)quantity17--;
    document.getElementById(param).value = quantity17;
    var price = parseFloat(table.rows[18].cells[3].innerHTML);
    total18 = price * quantity17;
    ShowTotal(18,total18);
}

function Plus18(param) {
    quantity18++;
    document.getElementById(param).value = quantity18;
    var price = parseFloat(table.rows[19].cells[3].innerHTML);
    total19 = price * quantity18;
    ShowTotal(19,total19) ;
}

function Minus18(param) {
    if(quantity18 > 0)quantity18--;
    document.getElementById(param).value = quantity18;
    var price = parseFloat(table.rows[19].cells[3].innerHTML);
    total19 = price * quantity18;
    ShowTotal(19,total19) ;
}

function Plus19(param) {
    quantity19++;
    document.getElementById(param).value = quantity19;
    var price = parseFloat(table.rows[20].cells[3].innerHTML);
    total20 = price * quantity19;
    ShowTotal(20,total20);
}

function Minus19(param) {
    if(quantity19 > 0)quantity19--;
    document.getElementById(param).value = quantity19;
    var price = parseFloat(table.rows[20].cells[3].innerHTML);
    total20 = price * quantity19;
    ShowTotal(20,total20);
}



function AddRow1(param,param1){

    list1[x] = document.getElementById(param).value;
    list2[x] = parseFloat(document.getElementById(param1).value);

    if (r < 21) {
        table.rows[r].cells[1].innerHTML = list1[x];
        table.rows[r].cells[3].innerHTML = list2[x];
    }

    x++;
    r++;
}

function ShowTotal(param,param1) {

    table.rows[param].cells[4].innerHTML = param1.toFixed(2)+"/-";
    
}
var jer = parseFloat(table.rows[21].cells[2].innerHTML);

function LastResult() {
    alltotal1 = 0;
    var i;
    for(i = 1;i < table_row;i++ ){
        collect_total = parseFloat(table.rows[i].cells[4].innerHTML);
        if(isNaN(collect_total)) collect_total = 0;
        alltotal1 += collect_total;
    }
    diposite = parseFloat(document.getElementById('deposite').value);
    if (diposite  == null || isNaN(diposite)) {
        diposite = 0;
    }
    alltotal1 += jer;
    table.rows[table_row+1].cells[2].innerHTML = alltotal1.toFixed(2)+"/-"; 
    alltotal1 -= diposite
    table.rows[table_row+3].cells[2].innerHTML = alltotal1.toFixed(2)+"/-"; 
    
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
                table_row--;
                item[0].splice(i,1);
                item[1].splice(i,1);

                break;
            }
        }
    }
}


function PriceChage(param){
    var get = document.getElementById(param).value;
    document.getElementById(param) = get;
}

