fun = () => {
    //  a = parseInt(document.getElementById("in1").value);
   let a= document.getElementById("in1").value;
console.log(a);
     
    let b = parseInt(document.getElementById("in2").value);

    if (a != "7550366312" || a=="anbarasan" ||a=="anbarasan@gmail.com") {
        if (b == 7550) {
            window.open("http://127.0.0.1:5501/index.html")
        } else {
            alert("wrong input");
        }
    } else 
    {
        alert("wrong input");
    }
};
