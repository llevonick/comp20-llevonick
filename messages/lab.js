request = new XMLHttpRequest();

function parse(){
	request.open("GET", "data.json", true);

	request.onreadystatechange = function(){
		if (request.readyState == 4 && request.status == 200){
			data = request.responseText;
			parsed = JSON.parse(data);

			for(var i = 0; i < parsed.length; i++){
				document.getElementById("messages").innerHTML += '<p class="msg">' + parsed[i]["content"]+ " " + parsed[i]["username"];
			}

		}
		else if(request.readyState == 4 && request.status != 200){
			document.getElementById("messages").innerHTML = "<p>Sorry something went wrong.</p>"
		}
		else{
			console.log("In progress...")
		}
	};

	request.send(null);
}