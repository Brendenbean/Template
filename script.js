//point system//
let point = 0;
//noninputs//
let numberButton = document.querySelector(".first");
let wordButton = document.querySelector(".third_button");
let thirdAnswer = document.querySelector(".third_answer");
let sixthButton = document.querySelector(".six_button");
let sixthAnswer = document.querySelector(".sixth_answer");
let fifthTruth = document.querySelector(".fifth_truth");
let fifthFalse = document.querySelector(".fifth_false");
let forthTruth = document.querySelector(".forth_truth");
let forthFalse = document.querySelector(".forth_false");
let ending = document.querySelector(".ending");
let end = document.querySelector(".end");
let numberGiven = document.querySelector(".number-given");
//inputs//
let firstAnswer = document.getElementById("first");
let secondAnswer2 = document.getElementById("second");
let thirdAnswer2 = document.getElementById("third");
let forthAnswer = document.getElementById("forth");
let colorPicker = document.getElementById('myColorPicker');
let resultDiv = document.getElementById('result');
let test = document.querySelector(".test");

let points = 0;

numberButton.addEventListener('click', function(){
let number = document.querySelector(".number").value;
let number2 = document.querySelector(".number2").value;

//first question//
if(number * number2 === 4){
     Score(1);
console.log(point);
document.body.style.margin = "0";
document.body.style.height = "100vh";
document.body.style.background = "linear-gradient(250deg, #ff9a3c 0%, #ff5f6d 40%, #d45079 70%, #662d8c 100%)";
  console.log("correct")
  
}else{
   Score(-1);
console.log(point);
  
  console.log("wrong")
};
});

//third question//
wordButton.addEventListener('click', function(){
let third = document.querySelector(".third").value;
thirdAnswer.innerHTML = `collin is eating ${third} skittles`;

if(third === "his"){
    Score(1);
console.log(point);
  console.log("correct")
    document.body.style.background = 
    "linear-gradient(250deg, #8b0000, #ff8c00, #cd853f)";
  document.body.style.minHeight = "100vh";
}else{
   Score(-1);
console.log(point);
  
      console.log("wrong");
}
});

//sixth question//
sixthButton.addEventListener('click', function(){
let sixth = document.querySelector(".sixth").value;
sixthAnswer.innerHTML = `The declaration of independence was signed on August 2, ${sixth}
What year what the declaration of independence signed`;
console.log(sixth);
sixth = Number(sixth);  
  console.log(sixth);
if(sixth === 1776){
Score(1);
console.log(point);
  console.log("correct");
  document.body.style.margin = "0";
document.body.style.height = "100vh";

document.body.style.background =
  "linear-gradient(250deg, #c40000 0%, #ffffff 50%, #0033a0 100%)";

document.body.style.backgroundSize = "100% 100%";
}else{
   Score(-1);
console.log(point);
  
      console.log("wrong");
};

});

//second question//
firstAnswer.addEventListener('change', function() {
 
  if (this.checked) {
    console.log('correct');
Score(1);
console.log(point);
document.body.style.background = 
    "linear-gradient(250deg, #E487B1, #e100ffff, #3fcd7aff)";
  document.body.style.minHeight = "100vh";
  }
});

secondAnswer2.addEventListener('change', function() {
  if (this.checked) {
    console.log('wrong');
     Score(-1);
console.log(point);
  
  }
});

thirdAnswer2.addEventListener('change', function() {
  if (this.checked) {
    console.log('wrong');
     Score(-1);
console.log(point);
  
  }
});

forthAnswer.addEventListener('change', function() {
  
  if (this.checked) {
    
    console.log('wrong');
    Score(-1);
console.log(point);
  
  }
});

//seventh question//
test.addEventListener('click', function(){
  let randomNumber = Math.floor(Math.random() * 256);
  console.log(randomNumber);
  numberGiven.innerHTML = `the given red value is ${randomNumber}`;
  
  colorPicker.addEventListener('input', () => {
    // 2. Generate a random number between 0 and 255
    

    // 3. Extract the red value from the chosen color
    // The color picker value is in hex format (#RRGGBB)
    let hexColor = colorPicker.value;
    let redHex = hexColor.substring(1, 3); // Get the RR part
    let redValue = parseInt(redHex, 16); // Convert hex to decimal

    // 4. Compare the red value with the random number
    if (redValue < randomNumber) {
        // 5. Execute the desired action
        Score(1);
console.log(point);
        resultDiv.textContent = `Red value ${redValue} is less than the random number ${randomNumber}. good job`;
        resultDiv.style.backgroundColor = 'lightcoral';
    } else {
      console.log("problem");
        resultDiv.textContent = `Red value ${redValue} is NOT less than the random number ${randomNumber}.`;
        resultDiv.style.backgroundColor = 'lightgreen';
    }
});
});


//fifth question//
fifthFalse.addEventListener('click', function(){
console.log("correct")
Score(1);
console.log(point);
document.body.style.margin = "0";
document.body.style.height = "100vh";
document.body.style.background = "linear-gradient(250deg, #b30000 0%, #e63946 35%, #1b5e20 70%, #f7d774 100%)";
document.body.style.backgroundSize = "100% 100%";
});

//forth question//
forthTruth.addEventListener('click', function(){
console.log("correct")
Score(1);
console.log(point);
document.body.style.margin = "0";
document.body.style.height = "100vh";
document.body.style.position = "relative";
document.body.style.overflow = "hidden";

document.body.style.background =
  "linear-gradient(250deg, #dff3ff 0%, #b9e1ff 35%, #8ecaff 70%, #66aee6 100%)";
document.body.style.backgroundSize = "100% 100%";

let sCount = 0;
while (sCount < 120) {
  let star = document.createElement("div");
  star.style.position = "absolute";

  let size = 1 + Math.random() * 3;  
  star.style.width = size + "px";
  star.style.height = size + "px";
  star.style.borderRadius = "50%";

  star.style.background = "white";
  star.style.opacity = 0.8 + Math.random() * 0.2;

  star.style.boxShadow = "0 0 " + (4 + Math.random() * 6) + "px white";

  star.style.left = (Math.random() * window.innerWidth) + "px";
  star.style.top  = (Math.random() * window.innerHeight) + "px";

  document.body.appendChild(star);
  sCount++;
}
});

//final//
function Score(x){
point = point + x;
if(point >= 5){
  ending.innerHTML = `you have passed ${point}`;
}else{
  ending.innerHTML = `you have failed ${point}`;
}

};
Score(0);