
function PrintReciept(divName){
	var print_content = document.getElementById(divName).innerHTML;
	var original_content = document.body.innerHTML;

	document.body.innerHTML = print_content;

	window.print();

	document.body.innerHTML = original_content;
}
