const fibonacci = function(num) {
    if (num <= 0) {
      return "Please enter a number greater than 0";
    }
    if (num === 1 || num === 2) {
      return 1;
    }
    return fibonacci(num - 1) + fibonacci(num - 2);
  };
  
  console.log(fibonacci(7));