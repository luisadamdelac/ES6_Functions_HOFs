// Starter examples (function output expectations are provided in README)

// Start coding here...


// 1. Create makeMultiplier(factor) that returns multiplier function
const multiplierOutput = document.getElementById("multiplier-output");

const makeMultiplier = factor => number => number * factor;

 // Example usage:
const double = makeMultiplier(2);
const triple = makeMultiplier(3);

multiplierOutput.textContent = 
  `double(5) = ${double(5)}\n` +
  `triple(4) = ${triple(4)}`;

  
  multiplierOutput.style.fontSize = "1rem";
  multiplierOutput.style.color = "orange";
  multiplierOutput.style.fontWeight = "bold";
  multiplierOutput.style.fontFamily = "arial";

// 2. Create makeGreeter(greeting) that returns greeter function
const greeterOutput = document.getElementById("greeter-output");

const makeGreeter = greeting => name => `${greeting}, ${name}!`;

// Example usage:
const sayHi = makeGreeter("Hi");
 const sayHello = makeGreeter("Hello");

 greeterOutput.textContent = 
   `${sayHi("Mia")}\n` +
   `${sayHello("Liam")}`;

   
  greeterOutput.style.fontSize = "1rem";
  greeterOutput.style.color = "blue";
  greeterOutput.style.fontWeight = "bold";
  greeterOutput.style.fontFamily = "arial";
