function onSubmit(f) {
	// console.log(f);
	var userid = f.userid.value;
	var userpw = f.userpw.value;
	var userpw_re = f.userpw_re.value;
	var username = f.username.value;
	var email = f.email.value;
	// console.log(userid, userpw, userpw_re, username, email);
	if(userid === '') {
		alert('아이디를 입력하세요.');
		f.userid.focus();
		return false; // 이 시점에서 리턴값을 리턴해 준 후 함수 종료.
	}
	if(userpw === '') {
		alert('패스워드를 입력하세요.');
		f.userpw.focus();
		return false;
	}
	if(userpw_re === '') {
		alert('패스워드 확인을 입력하세요.');
		f.userpw_re.focus();
		return false;
	}
	if(userpw !== userpw_re) {
		alert('패스워드는 일치해야 합니다.');
		f.userpw.focus();
		return false;
	}
	if(username === '') {
		alert('이름을 입력하세요.');
		f.username.focus();
		return false;
	}
	if(email === '') {
		alert('이메일을 입력하세요.');
		f.email.focus();
		return false;
	}
	return true;
}