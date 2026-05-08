const d = new Date();
let text = d.toLocaleDateString();
document.getElementById("today").innerHTML = text;

let slider = document.getElementById("range");
    let output = document.getElementById("range-slider");
    output.innerHTML = slider.value;

    slider.oninput = function() {output.innerHTML = this.value;};

function validateFname()
{
    fname = document.getElementById("fname").value.trim();
    var namePattern = /^[a-zA-Z'-]+$/;

    if (fname == "")
    {
        document.getElementById("fname_error").innerHTML = "First name should not be empty";
        return false;
    }

    else if (fname != "")
    {

        if (!fname.match(namePattern))
        {
            document.getElementById("fname_error").innerHTML = "First name should only contain letters, dashes, and apostrophes";
            return false;
        }
    }   

    else if (fname.length < 1)
    {
        document.getElementById("fname_error").innerHTML = "First name should be at least 1 character long";
        return false;
    }

    else if (fname.length > 30)
    {
        document.getElementById("fname_error").innerHTML = "First name should not exceed 30 characters";
        return false;
    }

    else
    {
        document.getElementById("fname_error").innerHTML = "";
        localStorage.setItem("fname", fname);
        return true;
    }
}

function validateMini()
{
    Mini = document.getElementById("mini").value;
    var namePattern = /^[A-Z]?$/;

    mini = Mini.toUpperCase();
    document.getElementById("mini").value = mini;

    if (!mini.match(namePattern))
        {
            document.getElementById("mini_error").innerHTML = "Middle initial should not exceed 1 character";
            return false;
        }

    else
    {
        document.getElementById("mini_error").innerHTML = "";
        localStorage.setItem("mini", mini);
        return true;
    }
}

function validateLname()
{
    lname = document.getElementById("lname").value.trim();
    var namePattern = /^[a-zA-Z]+$/;

   if (lname == "")
    {
        document.getElementById("lname_error").innerHTML = "Last name should not be empty";
        return false;
    }

    else if (lname != "")
    {

        if (!lname.match(namePattern))
        {
            document.getElementById("lname_error").innerHTML = "Last name should only contain letters, dashes, and apostrophes";
            return false;
        }
    }  

    else if (lname.length < 1)
    {
        document.getElementById("lname_error").innerHTML = "Last name should be at least 1 character long";
        return false;
    }

    else if (lname.length > 30)
    {
        document.getElementById("lname_error").innerHTML = "Last name should not exceed 30 characters";
        return false;
    }

    else
    {
        document.getElementById("lname_error").innerHTML = "";
        localStorage.setItem("lname", lname);
        return true;
    }
}

function validateDob() 
{
    dob = document.getElementById("dob");
    let date = new Date(dob.value);
    let today = new Date();
    
    let maxDate = new Date();
    maxDate.setFullYear(today.getFullYear() - 120);

    if (date > today)
    {
        document.getElementById("dob_error").innerHTML = "Date of Birth cannot be in the future.";
        dob.value = "";
        return false;
    }
        
    else if (date < maxDate)
    {
        document.getElementById("dob_error").innerHTML = "Date of Birth cannot be more than 120 years ago.";
        dob.value = "";
        return false;
    }
            
    else 
    {
        document.getElementById("dob_error").innerHTML = "";
        localStorage.setItem("dob", dob.value);
        return true;
    }
}

function validateSSN()
{
    const ssn = document.getElementById("ssn").value;
    const ssnR = /^[0-9]{3}-?[0-9]{2}-?[0-9]{4}$/;

    if (!ssnR.test(ssn))
    {
        document.getElementById("ssn_error").innerHTML = "Please enter valid social security number";
        return false;
    }
        
    else
    {
        document.getElementById("ssn_error").innerHTML = "";
        return true;
    }
}

function validateAddress1()
{
    var address1 = document.getElementById("address1").value;
    console.log(address1);
    console.log(address1.length);

    if(address1.length < 2)
    {
        document.getElementById("address1_error").innerHTML = "Address should be at least 2 characters long";
        return false;
    }

    else
    {
        document.getElementById("address1_error").innerHTML = "";
        localStorage.setItem("address1", address1);
        return true;
    }
}

function validateCity()
{
    city = document.getElementById("city").value.trim();

    if (!city)
    {
        document.getElementById("city_error").innerHTML = "Enter a city please";
        return false;
    }

    else
    {
        document.getElementById("city_error").innerHTML = "";
        localStorage.setItem("city", city);
        return true;
    }
}

function validateZcode()
{
   const zipInput = document.getElementById("zcode");
   let zip = zipInput.value.replace(/[^\d-]/g,"");

   if (!zip)
   {
        document.getElementById("zcode_error").innerHTML = "Please enter valid zip code";
        return false;
   }

   if (zip.length > 5)
   {
        zip = zip.slice(0,5);
   }

   zipInput.value = zip;
   document.getElementById("zcode_error").innerHTML = "";
    localStorage.setItem("zcode", zip);
   return true;
}

function validateEmail()
{
    email = document.getElementById("email").value;
    var emailR = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (email =="")
    {
        document.getElementById("email_error").innerHTML = "Email cannot be empty";
        return false;
    }

    else if (!email.match(emailR))
    {
        document.getElementById("email_error").innerHTML = "Please enter valid email address";
        return false;
    }

    else
    {
        document.getElementById("email_error").innerHTML = "";
        localStorage.setItem("email", email);
        return true;
    }
}

function validatePhone()
{
    const phoneInput = document.getElementById("phone");
    const phone = phoneInput.value.replace(/\D/g,"");

    if (phone.length == 0)
    {
        document.getElementById("phone_error").innerHTML = "Please enter valid phone number";
        return false;
    }
   
    const formattedPhone = phone.slice(0,3) + "-" + phone.slice(3,6) + "-" + phone.slice(6,10);
    phoneInput.value = formattedPhone;
    document.getElementById("phone_error").innerHTML = "";
    localStorage.setItem("phone", formattedPhone);
    return true;
}

function validateUname()
{
    uname = document.getElementById("uname").value;
    uname = uname.toLowerCase();
    document.getElementById("uname").value = uname;
    
    if (uname.length == 0)
    {
        document.getElementById("uname_error").innerHTML = "Username cannot be empty";
        return false;
    }
    
    if (!isNaN(uname.charAt(0)))
    {
        document.getElementById("uname_error").innerHTML = "Username cannot start with a number";
        return false;
    }

    let regex = /^[a-zA-Z0-9_]+$/;
    if (!regex.test(uname))
    {
        document.getElementById("uname_error").innerHTML = "Username can only contain letters, numbers, and underscores";
        return false;
    }

    else if (uname.length < 5)
    {
        document.getElementById("uname_error").innerHTML = "Username cannot be shorter than 5 characters";
        return false;
    }

    else if (uname.length > 20)
    {
        document.getElementById("uname_error").innerHTML = "Username cannot be longer than 20 characters";
        return false;
    }

    else
    {
        document.getElementById("uname_error").innerHTML = "";
        localStorage.setItem("uname", uname);
        return true;
    }
    
}

function validatePassword()
{
    const password = document.getElementById("password").value;
    const uname = document.getElementById("uname").value;
    const errorMessage = [];

    if(!password.match(/[a-z]/))
    {
        errorMessage.push("Password must contain at least one lowercase letter");
    }

    if(!password.match(/[A-Z]/))
    {
        errorMessage.push("Password must contain at least one uppercase letter");
    }

    if(!password.match(/[0-9]/))
    {
        errorMessage.push("Password must contain at least one digit");
    }

    if(!password.match(/[!\@#\$%&*\-_\\.+\(\)]/))
    {
        errorMessage.push("Password must contain at least one special character");
    }

    if(password == uname || password.includes(uname))
    {
        errorMessage.push("Password cannot contain username");
    }

    const errorContainer = document.querySelector(".password_message");
    errorContainer.innerHTML = errorMessage
    .map((message) => `<span>${message}</span><br/>`)
    .join("");

    return errorMessage.length === 0;
}

function validateConPassword()
{
    password1 = document.getElementById("password").value;
    password2 = document.getElementById("con_password").value;

    if(password1 !== password2)
    {
        document.getElementById("password2_error").innerHTML = "Passwords do not match";
        return false;
    }
    
    else
    {
        document.getElementById("password2_error").innerHTML = "Passwords match!";
        return true;
    }
}

function reviewInput()
{
    var formcontent = document.getElementById("signup");
    var formoutput = "<table class='output'><th colspan = '3'>Your Information:</th>";
    
    for (i = 0; i < formcontent.length; i++)  
    {    
        var ele = formcontent.elements[i];
        var datatype = ele.type;
        var name = ele.name;
        var value = ele.value;

        if (!name) continue;

        switch (datatype)
        {
            case "checkbox":
                if (ele.checked)
                {
                    formoutput += "<tr> <td align= 'right'>" + name + "</td>";
                    formoutput += "<td class= 'outputdata'>&#x2713; </td></tr>";
                }
                break;
                
            case "radio":
                if (ele.checked)
                {
                    formoutput += "<tr> <td align = 'right'>" + name + "</td>";
                    formoutput += "<td class = 'outputdata'>" + value + "</td></tr>";
                }
                break;

            case "button":
            case "submit":
            case "reset":
                break;
            default:
                formoutput += "<tr> <td align= 'right'>" + name + "</td>";
                formoutput += "<td class= 'outputdata'>" + value + "</td></tr>";
        }
    }

    {
        formoutput += "</table>";
        document.getElementById("showInput").innerHTML = formoutput;
    }
}

function removeReview()
{
    document.getElementById("showInput").innerHTML = "";
}

function showAlert()
{
    var alertBox = document.getElementById("alert-box");
    var closeAlert = document.getElementById("close-alert");

    alertBox.style.display = "block";
    closeAlert.onclick = function() 
    {
        alertBox.style.display = "none";
    }
}

function validateEverything()
{
    let valid = true;

    if(!validateFname())
    {
        valid = false;
    }

    if(!validateMini())
    {
        valid = false;
    }

    if(!validateLname())
    {
        valid = false;
    }

    if(!validateDob())
    {
        valid = false;
    }

    if(!validateSSN())
    {
        valid = false;
    }

    if(!validateAddress1())
    {
        valid = false;
    }

    if(!validateCity())
    {
        valid = false;
    }

    if(!validateZcode())
    {
        valid = false;
    }

    if(!validateEmail())
    {
        valid = false;
    }

    if(!validatePhone())
    {
        valid = false;
    }

    if(!validateUname())
    {
        valid = false;
    }

    if(!validatePassword())
    {
        valid = false;
    }

    if(!validateConPassword())
    {
        valid = false;
    }

    if(valid)
    {
       document.getElementById("submit").disabled = false;
    }

    else
    {
        showAlert();
    }
}

function setCookie (name, cvalue, expiryDays)
{
   var day = new Date();
   day.setTime(day.getTime() + (expiryDays*24*60*60*1000));
   var expires = "expires=" + day.toUTCString();
   document.cookie = name + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(name)
{
    var cname = name + "=";
    var ca = document.cookie.split(';');

    for(let i = 0; i < ca.length; i++)
    {
        c = ca[i];
        while (c.charAt(0) == ' ')
        {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0)
        {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function checkCookie()
{
    var user = getCookie("uname");
    if (user != "")
    {
        alert("Welcome again " + user + ". Is this you?");
    }

    if (confirm)
    {
        loadFromLocalStorage();
    }

    else
    {
        clearLocalStorage();
        user = prompt("enter your name:", "");
        if (user != "" && user != null)
        {
            setCookie("uname", user, 365);
        }
    }
}

async function loadStates()
{
    const response = await fetch("state");   
    if (response.ok)    
    {
        const states = await response.json();
        document.getElementById("state").innerHTML = "<option value=''>Select a state</option>";
    }
}

function clearLocalStorage()
{
    localStorage.clear();
}
