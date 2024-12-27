function validateregform() {
    let formdict = {};
    formdict["name"] = regform.name.value;
    formdict["email"] = regform.email.value;
    formdict["age"] = regform.age.value;
    formdict["place"] = regform.place.value;
    formdict["mob"] = regform.mob.value;
    formdict["gender"] = regform.gender.value;
    formdict["interest"] = getchecked("interest");
    formdict["mode"] = regform.mode.value;
    
    let errorlist =[]

    Object.entries(formdict).forEach(([key, value]) => {
        if (value == "") {
            errorlist.push(key)
        }
    });
    console.log(errorlist.length);

   if(errorlist.length == 0) { 
    return true ;
   }
   else {
    alert ("please enter your "+errorlist[0]);
    return false
   }

}

function getchecked(field) {
    let checkboxes =
        document.getElementsByName(field);
    let result = [];
    for (var i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {
            result.push(checkboxes[i].value)
        }
    }
    return result;
}

function validatecontact(){
    let name = contactform.name.value;
    let email = contactform.email.value;
    let address = contactform.address.value;
    console.log(name,email,address)
    if (name==''){
        alert("enter your name");
         return false;
    }
    else if (email==''){
        alert("enter your email");
         return false;
    }
    else if (address==''){
        alert("enter your address");
         return false;
    }
    return true;

}