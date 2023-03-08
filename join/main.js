let login = document.getElementsByClassName('member_login_order_btn');
let namae = document.getElementById('inputName');

const welcome = () => {
    alert(`${namae.value} 님 환영합니다.`);
    console.log(namae);
}