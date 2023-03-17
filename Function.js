
//Function Expression-------
  //A function expression can be used as an (immediately invoked function expression).
  //Which can be omitted in function expression to create anonymus functions.
const Area = function(width, height) {
    return width * height;
  };
  
  console.log(Area(3, 4));


  //Function Declaration------
    //
  function calArea(width, height) {
    return width * height;
  }
  
  console.log(calArea(5, 6));