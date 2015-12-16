function validateForm(){
    for (var i = 0; i < form.elements.length; i++) {
        if(form.elements[i].className == 'req' && form.elements[i].value.length == 0){
            alert('Please fill all required fields');
            return false;
        }
    }

    var email = document.getElementById('email').value;
    var atPosition = email.indexOf('@');
    var dotPosition = email.lastIndexOf('.');
    if(atPosition < 1 || dotPosition < atPosition || dotPosition+2 >= x.length){
        alert('Enter a valid e-mail');
        return false;
    }
}
