('.submit').click(function(){
	let name = $('#name').val();
	let email = $('#email').val();
	let password = $('#psw').val();

	if(name !="" && email !="" && password !=""){
		$.ajax({
			url:"signupuser.php",
			type:"POST",
			async:"false",
			data:{
				"submit": 1,
				"name": name,
				"email": email,
				"password": password,
			},
			success: function(data) {
				var response = JSON.parse(data);
				if (response.UserId) {
					window.location.href = "profile.php?UserId=" + response.UserId;
				}else {
					alert("Issue wile creating account");
					alert("response")
				}
			}
		});
	}else{
		alert("Please fill all fields");
	}
});