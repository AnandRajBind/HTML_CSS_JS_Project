const btn=document.getElementById("button");// select the button
// Arrow function
const randomColor=()=>{
    // hexa value = 0123456789ABCDEF. Total 16 value
    let val="0123456789ABCDEF"
  let  cons= "#";

for(let i=0; i<6; i++){
    // math.random is a method that is generate the random number between 0 to 0.99 tk.
// it is multiply 16 because hexadecimal value is 16 digit. 
//  Math.floor() method is replace the float value. 10.5 ko me only 10 ko hi select karega
cons=cons+val[Math.floor(Math.random()*16)];
}
return cons;
}

console.log(randomColor());

function changeRandomColor(){
    document.body.style.backgroundColor= randomColor();
}
btn.addEventListener("click", changeRandomColor);
// btn.addEventListener("mouseenter", changeRandomColor);
