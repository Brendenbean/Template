let P
let E
let C
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
let firstAnswer = document.getElementById("first");
let secondAnswer2 = document.getElementById("second");
let thirdAnswer2 = document.getElementById("third");
let forthAnswer = document.getElementById("forth");
let colorPicker = document.getElementById('favoriteColor');



numberButton.addEventListener('click', function(){
let number = document.querySelector(".number").value;
let number2 = document.querySelector(".number2").value;

//first question//
if(number * number2 === 4){
      P + 1
  console.log("correct")
}else{
  console.log("wrong")
};
});

//third question//
wordButton.addEventListener('click', function(){
let third = document.querySelector(".third").value;
thirdAnswer.innerHTML = `collin is eating ${third} skittles`;

if(third === "his"){
      E + 1
  console.log("correct")
}else{
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
C + 1
  console.log("correct");
}else{
      console.log("wrong");
};

});

//second question//
firstAnswer.addEventListener('change', function() {
  // Check if the radio button is currently checked
  if (this.checked) {
    // Perform the desired action when this radio button is selected
    console.log('correct');
    // Example: change text content of an element
  P + 1
  }
});

secondAnswer2.addEventListener('change', function() {
  // Check if the radio button is currently checked
  if (this.checked) {
    // Perform the desired action when this radio button is selected
    console.log('wrong');
    // Example: change text content of an element
  
  }
});

thirdAnswer2.addEventListener('change', function() {
  
  if (this.checked) {
    
    console.log('wrong');
   
  
  }
});

forthAnswer.addEventListener('change', function() {
  
  if (this.checked) {
    
    console.log('wrong');
    
  
  }
});

//seventh question//

colorPicker.addEventListener('input', function() {
    // Update the display with the new color value
    selectedColorDisplay.textContent = `Selected color: ${colorPicker.value}`;
});

//fifth question//
fifthFalse.addEventListener('click', function(){
console.log("correct")
E + 1
});

//forth question//
forthTruth.addEventListener('click', function(){
console.log("correct")
C + 1
});

//final//
end.addEventListener('click', function(){
if(P + E + C > 5){
ending.innerHTMl = "You have passed the test";
}else{
  ending.innerHTML = "you have failed the test you should be disappointed"
};

});