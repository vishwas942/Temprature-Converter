let celsuis = document.querySelector(".cel_put");
let fahrenheit = document.querySelector(".far_put");
let kelvin = document.querySelector(".kel_put");

console.log(celsuis, fahrenheit, kelvin);



celsuis.addEventListener("input", () => {
    let outf = (parseFloat(celsuis.value) * 9/5) + 32;
    fahrenheit.value = parseFloat(outf.toFixed(2));

    let outk = parseFloat(celsuis.value) + 273.15;
    kelvin.value = parseFloat(outk.toFixed(2));
    }); 



 function fah_to_CK(){
    let outc = (parseFloat(fahrenheit.value) - 32) * 5/9;
    celsuis.value = parseFloat(outc.toFixed(2));

    let outk = ((parseFloat(fahrenheit.value) - 32) * 5/9  )+ 273.15;
    kelvin.value = parseFloat(outk.toFixed(2));

 }



 

kelvin.addEventListener("input", kel_to_CF);

 function kel_to_CF(){
    let outc = parseFloat(kelvin.value) - 273.15;
    celsuis.value = parseFloat(outc.toFixed(2));

    let outf = ((parseFloat(kelvin.value) - 273.15) * 9/5  )+ 32;
    fahrenheit.value = parseFloat(outf.toFixed(2));
 }