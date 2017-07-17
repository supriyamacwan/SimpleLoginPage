function check(){
	var usr=document.getElementById('usr').value;
	var pass=document.getElementById('psd').value;
	if(usr==''){
		alert('Username is not entered')
	}else if(pass==''){
		alert('Password is not entered')
	}else{
		alert('Hello Champ '+usr)
	}
}