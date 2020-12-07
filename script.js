function plus() {
	var num1, num2, result;
	
	num1 = document.getElementById('n1').value;
	num1 = parseInt(num1);
	
	num2 = document.getElementById('n2').value;
	num2 = parseInt(num2);
	
	result = num1 + num2;
	
	document.getElementById('out').innerHTML = result;
}

function minus() {
	var num1, num2, result;
	
	num1 = document.getElementById('n1').value;
	num1 = parseInt(num1);
	
	num2 = document.getElementById('n2').value;
	num2 = parseInt(num2);
	
	result = num1 - num2;
	
	document.getElementById('out').innerHTML = result;
	
}
function mult() {
	var num1, num2, result;
	
	num1 = document.getElementById('n1').value;
	num1 = parseInt(num1);
	
	num2 = document.getElementById('n2').value;
	num2 = parseInt(num2);
	
	result = num1 * num2;
	
	document.getElementById('out').innerHTML = result;
}

function div() {
	var num1, num2, result;
	
	num1 = document.getElementById('n1').value;
	num1 = parseInt(num1);
	
	num2 = document.getElementById('n2').value;
	num2 = parseInt(num2);
	
	if(num2 === 0) {
		alert("Wrong input")
	}
	else{
	result = num1 / num2;
	
	document.getElementById('out').innerHTML = result;
	}
	
}