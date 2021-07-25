function onSubmit(el) {
	// console.log(f);
	var userid = el.userid.value;
	var userpw = el.userpw.value;
	var userpw_re = el.userpw_re.value;
	var username = el.username.value;
	var email = el.email.value;
	// console.log(userid, userpw, userpw_re, username, email);
	if(userid === '') {
		alert('아이디를 입력하세요.');
		el.userid.focus();
		return false; // 이 시점에서 리턴값을 리턴해 준 후 함수 종료.
	}
	if(userpw === '') {
		alert('패스워드를 입력하세요.');
		el.userpw.focus();
		return false;
	}
	if(userpw_re === '') {
		alert('패스워드 확인을 입력하세요.');
		el.userpw_re.focus();
		return false;
	}
	if(userpw !== userpw_re) {
		alert('패스워드는 일치해야 합니다.');
		el.userpw.focus();
		return false;
	}
	if(username === '') {
		alert('이름을 입력하세요.');
		el.username.focus();
		return false;
	}
	if(email === '') {
		alert('이메일을 입력하세요.');
		el.email.focus();
		return false;
	}
	return true;
}