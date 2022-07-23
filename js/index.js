function validation() {
    var name = document.getElementById("name").value;
    var middlename = document.getElementById("middlename").value;
    var surname = document.getElementById("surname").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var password_confirmation = document.getElementById("password_confirmation").value;
    var address_line1 = document.getElementById("address_line1").value;
    var address_line2 = document.getElementById("address_line2").value;
    var country = document.getElementById("country").value;
    var state = document.getElementById("state").value;
    var city = document.getElementById("city").value;
    var zipcode = document.getElementById("zipcode").value;
    var phone = document.getElementById("phone").value;
    var male = document.getElementById("male");
    var female = document.getElementById("female");
    var birth_date = document.getElementById("birth_date").value;
    var hobby = document.getElementById("hobby").value;


    let errors = {};

    // validation First name
    if (name == "") {
        const errormessage = "Please fill the first name  ";
        document.getElementById('name_error').innerHTML = errormessage;
        errors['name'] = errormessage;
    }
    else if (!name.match(/^[A-Za-z]+$/)) {
        const errormessage = "please enter only character";
        document.getElementById('name_error').innerHTML = errormessage;
        errors['name'] = errormessage;
    }
    else {
        delete errors['name'];
        document.getElementById('name_error').innerHTML = "";
    }

    // validation Middle Name
    if (middlename == "") {
        const errormessage = "Please fill the middle name  ";
        document.getElementById('middle_name_error').innerHTML = errormessage;
        errors['middlemname'] = errormessage;
    }
    else if (!middlename.match(/^[A-Za-z]+$/)) {
        const errormessage = "please enter only character";
        document.getElementById('middle_name_error').innerHTML = errormessage;
        errors['middlemname'] = errormessage;
    }
    else {
        delete errors['middlename'];
        document.getElementById('middle_name_error').innerHTML = "";
    }

    // validation Last Name
    if (surname == "") {
        const errormessage = "Please fill the last name";
        document.getElementById('surname_error').innerHTML = errormessage;
        errors['surname'];
    }
    else if (!surname.match(/^[A-Za-z]+$/)) {
        const errormessage = "please enter only character";
        document.getElementById('surname_error').innerHTML = errormessage;
        errors['surname'] = errormessage;
    }

    else {
        delete errors['surname'];
        document.getElementById('surname_error').innerHTML = "";
    }

    // validation Email
    if (email == "") {
        const errormessage = "please fill email";
        document.getElementById('email_error').innerHTML = errormessage;
        errors['email'] = errormessage;
    }
    if (email.length < 8) {
        const errormessage = "allow only 8 ";
        document.getElementById('email_error').innerHTML = errormessage;
        errors['email'] = errormessage;
    }
    
    else if (email.indexOf("@") == '-1') {
        const errormessage = " @ must in email ";
        document.getElementById('email_error').innerHTML = errormessage;
        errors['email'] = errormessage;
    }
    else if (email.indexOf(".") == '-1') {
        const errormessage = " . must in email ";
        document.getElementById('email_error').innerHTML = errormessage;
        errors['email'] = errormessage;

    }
    else {
        delete errors['email'];
        document.getElementById('email_error').innerHTML = "";
    }

    // validation Password 
    if (password == "") {
        const errormessage = "Please fill the password"
        document.getElementById('password_error').innerHTML = errormessage;
        errors['password'] = errormessage;
    }
    else if (password.length < 8) {
        const errormessage = "Please fill the password minmum 8 character.";
        document.getElementById('password_error').innerHTML = errormessage;
        errors['password'] = errormessage;
    }
    else if (!password.match(/[A-Z]/g)) {
        const errormessage = "in password one is capital letter missing";
        document.getElementById('password_error').innerHTML = errormessage;
        errors['password'] = errormessage;
    }
    else if (!password.match(/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/)) {
        const errormessage = "in password one is spcial character  missing "
        document.getElementById('password_error').innerHTML = errormessage;
        errors['password'] = errormessage;
    }
    else {
        delete errors['password'];
        document.getElementById('password_error').innerHTML = "";
    }

    //validation Password Confirmation 

    if (password_confirmation == "") {
        const errormessage = "please fill the confirm password"
        document.getElementById('password_confirmation_error').innerHTML = errormessage;
        errors['password_confirmation'] = errormessage;

    }
    else if (password != password_confirmation) {
        const errormessage = "password and confirm password not match"
        document.getElementById('password_confirmation_error').innerHTML = errormessage;
        errors['password_confirmation'] = errormessage;

    }
    else {
        delete errors['password_confirmation'];
        document.getElementById('password_confirmation_error').innerHTML = "";
    }

    // validation Address line 1 
    if (address_line1 == "") {
        const errormessage = "please fill the address line 1";
        document.getElementById('address_line1_error').innerHTML = errormessage;
        errors['address_line1'] = errormessage;
    }
    else {
        delete errors['addressline1'];
        document.getElementById('address_line1_error').innerHTML = "";
    }

    // validation Address line 2
    if (address_line2 == "") {
        const errormessage = "please fill the address line 2"
        document.getElementById('address_line2_error').innerHTML = errormessage;
        errors['address_line2'] = errormessage;
    }
    else {
        delete errors['address_line2'];
        document.getElementById('address_line2_error').innerHTML = "";
    }

    // validation Country
    if (country == "") {
        const errormessage = "Please select the country";
        document.getElementById('country_error').innerHTML = errormessage;
        errors['country'] = errormessage;
    }
    else {
        delete errors['country'];
        document.getElementById('country_error').innerHTML = "";
    }

    // validation State
    if (state == "") {
        const errormessage = "Please select the state";
        document.getElementById('state_error').innerHTML = errormessage;
        errors['state'] = errormessage;
    }
    else {
        delete errors['state'];
        document.getElementById('state_error').innerHTML = "";
    }

    // validation City
    if (city == "") {
        const errormessage = "Please fill the city";
        document.getElementById('city_error').innerHTML = errormessage;
        errors['city'] = errormessage;
    }
    else {
        delete errors['city'];
        document.getElementById('city_error').innerHTML = "";
    }

    // validation Zipcode
    if (zipcode == "") {
        const errormessage = "Please fill the zipcode";
        document.getElementById('zipcode_error').innerHTML = errormessage;
        errors['zipcode'] = errormessage;
    }
    else if(!zipcode <=5){
        const errormessage = "allow upto 5 digit";
        document.getElementById('zipcode_error').innerHTML = errormessage;
        errors['zipcode'] = errormessage;
    }
    else if(!isNaN(zipcode)){
        const errormessage = "only allow number";
        document.getElementById('zipcode_error').innerHTML = errormessage;
        errors['zipcode'] = errormessage;
    }
    else {
        delete errors['zipcode'];
        document.getElementById('zipcode_error').innerHTML = "";
    }

    // validation  Phone Number
    if (phone == "") {
        const errormessage = "Please fill the  mobile number";
        document.getElementById('phone_error').innerHTML = errormessage;
        errors['phone'] = errormessage;
    }
    else {
        delete errors['phone'];
        document.getElementById('phone_error').innerHTML = "";
    }
    // validation Gender
    if (!male.checked && !female.checked) {
        const errormessage = "Please select the gender";
        document.getElementById('gender_error').innerHTML = errormessage;
        errors['!male.checked && !female.checked'] = errormessage;
    }
    else {
        delete errors['!male.checked && !female.checked'];
    }
    // validation birthdate
    if (birth_date == "") {
        const errormessage = "Please select the birth date";
        document.getElementById('birth_date_error').innerHTML = errormessage;
        errors['birth_date'] = errormessage;
    }
    else {
        delete errors['birth_date'];
        document.getElementById('birth_date_error').innerHTML = "";
    }

    // validation Hobby
    if (hobby == "") {
        const errormessage = "Please select the Hobby";
        document.getElementById('hobby_error').innerHTML = errormessage;
        errors['hobby'] = errormessage;
    }
    else {
        delete errors['hobby'];
        document.getElementById('hobby').innerHTML = "";
    }

    // final validation message  
    console.log("ASDFASDFASDFas", errors);
    if (errors && Object.keys(errors).length === 0) {
        console.log("validation done ");
    }

} 
