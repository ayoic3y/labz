function checkForm(form) {

    let name = form.name.value;
    let email = form.email.value;
    let tel = form.tel.value;
    let password = form.password.value;
    let repass = form.repass.value;

    if(name.length == 0 ||
       email.length == 0 ||
        tel.length == 0 ||
         password.length == 0 ||
          repass.length == 0)
        alert("заполните все поля");
    else if(password != repass)
        alert("пароли должны совпадать");

    return false; /*по умолчанию при клике на submit страница обновляется,
    но если возвратить фолс,она не будет обновляться*/
}