const contactform=[]
function printForm(){
    var name = document.getElementById("name").value;
    var lname=document.getElementById("lname").value;
    var age = document.getElementById("age").value.trim();
    var email = document.getElementById("email").value.trim();
    var aph=document.getElementById("ph").value;
    var address = document.getElementById("address").value;


    if (!name|| !email|| !ph|| !address|| !age || !lname) {
        alert("Please fill in all fields.");
        return false;
    }

    contactform.push({
        name: name,
        lname: lname,
        age: age,
        email: email,
        ph: aph,
        address: address
    });
    console.log(contactform);

    name.value = "";
    lname.value = "";   
    age.value = "";
    email.value = "";
    ph.value = "";
    address.value = "";
    ph.value = "";
    address.value = "";
    
    // const result = 
    //     "Name: " + name + "<br>" +
    //     "Last Name: " + lname + "<br>" +
    //     "Age: " + age + "<br>" +
    //     "Email: " + email + "<br>" +
    //     "Phone: " + ph + "<br>" +
    //     "Address: " + address;

    // document.getElementById("result").innerHTML = result;
    displayForm();
}

function displayForm() {
    const out=document.getElementById("result");
    out.innerHTML = "";

    contactform.forEach((entry, index) => {
        out.innerHTML += `
        <div class="entry">
        Name: ${entry.name} ${entry.lname}<br>
        Age: ${entry.age}<br>
        Email: ${entry.email}<br>
        Phone: ${entry.ph}<br>
        Adress: ${entry.address}<br>`

        
});
}