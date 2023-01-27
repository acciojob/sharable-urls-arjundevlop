// your code here

	document.getElementById("button").addEventListener("click", function(){
		var inputNameValue = document.getElementById("name").value;
		var inputYearValue = document.getElementById("year").value;
		document.getElementById("url").innerHTML = "https://localhost:8080/?name="+ inputNameValue+"&year="+inputYearValue;
	});
