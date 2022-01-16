var rect = require('./rectangle.js');

function solveRect(l,b){
  console.log("Solving for rectangle with l=" + l + " and b=" + b);

  if (l<=0 || b<=0){
    console.log("Rectange dimensions are incorrect");
  }
  else{
    console.log("Area of rectangle is:" + rect.area(l,b));
    console.log("Perimeter of rectangle is:" + rect.perimeter(l,b));
  }
}

solveRect(2,4);
solveRect(3,9);
solveRect(0,4);
solveRect(10,25);
