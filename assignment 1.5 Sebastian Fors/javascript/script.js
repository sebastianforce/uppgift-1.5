function run() {
    let vip = document.getElementById("vipcheckbox").checked;
    let age = document.getElementById("field1").valueAsNumber;
    if (vip) 
        alert("Welcome in my best VIP customer :)");
    else {
        if (age >= 35) 
            alert("Access denied TOO OLD!");
        else {
            if (age >= 18) 
                alert("Access granted");
            else 
                alert("Access denied");
        }
    }
}
