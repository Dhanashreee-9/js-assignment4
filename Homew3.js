console.log("Print The Marks And Garde");


//let marks=window.prompt("Enter your marks:");

//if(marks >= 71 && marks<=100){
    //console.log(`Your marks are ${marks} and Grade is A`);
//}
//else if(marks >=41 && marks <=70){
   // console.log(`Your marks are ${marks} and Grade is B`);
//}
//else{
    //console.log(`Your marks are ${marks} and Grade is C`);
//}

//Ternary 

//let marks=window.prompt("Enter your marks:");

//let result= (marks >= 71 && marks<=100)? `Your marks are ${marks} and Grade is A`:
//(marks >=41 && marks <=70) ? `Your marks are ${marks} and Grade is B`:
//`Your marks are ${marks} and Grade is C`;
//console.log(result);


//Switch Case

let marks=window.prompt("Enter your marks:");

switch(marks){
   case(marks >= 71 && marks<=100):
   console.log(`Your marks are ${marks} and Grade is A`);
   break;

   case(marks >=41 && marks <=70):
   console.log(`Your marks are ${marks} and Grade is B`);
   break;

   default:
   console.log(`Your marks are ${marks} and Grade is C`);
   break;
}