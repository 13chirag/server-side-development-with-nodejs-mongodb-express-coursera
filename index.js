var rect = require('./rectangle.js');

function solveRect(l,b){
  console.log("Solving for rectangle with l=" + l + " and b=" + b);
  rect(l,b,(err,rectangle)=>{
      if(err){
        console.log("Error: " + err.message);
      }
      else{
        console.log("Area of rectangle with l= " + l + " and b= " + b + " is " + rectangle.area());
        console.log("Perimeter of rectangle with l= " + l + " and b= " + b + " is " + rectangle.perimeter());
      }

  });
  console.log("This statement is after we call rect()");
}
solveRect(2,4);
solveRect(3,9);
solveRect(0,4);
solveRect(10,25);
