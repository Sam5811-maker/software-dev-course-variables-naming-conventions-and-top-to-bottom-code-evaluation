/*

Objective:
In this activity, you will reinforce the skill of creating and using variables
while practicing best practices in variable naming conventions through a hands-on,
interactive coding challenge.

The code snippet below may include:
  - Ambiguous or incorrect variable names.
  - Missing variables that need to be created.
  - Scenarios that require the use of clear and descriptive variable names.

You will:
  - Identify Issues: Review the provided code and identify any variable names that:
  - Are unclear or too vague (e.g., a, b, c).
  - Do not follow best practices (e.g., camelCase, descriptive naming).
  - Refactor the Code: Rename the variables and rewrite the program using descriptive names that clearly convey the variable's purpose.
  - Enhance the Program: Add at least two additional variables to improve the program’s functionality or clarity.

Things to reflect on:
  - Why is it important to use meaningful variable names?
  - What are the common pitfalls to avoid when naming variables?
  - How do clear variable names benefit team collaboration?
  
*/

let a = "Alice";
let b = 5;
let c = 20;
let d = a + " bought " + b + " items for $" + c + ".";

console.log(d);


/*
Explanation:

In this code snippet the variable like a, b, c, d were used which are ambiguous variables to be used and will not explain the purpose
This require the use of clear and descriptive variable names.

Refactor the Code: */
// Descriptive variables
let customerName = "Alice";
let numberOfItemsPurchased = 5;
let totalCost = 20;

//Additional variables:
let purchaseDate = "04-17-2025";
let thankYouMessage = "Thank you ! Please visit again!"

let customerStatement = customerName + " bought " + numberOfItemsPurchased + " items for $" + totalCost + " on " + purchaseDate + " " +  thankYouMessage + ".";

//output statements:
console.log(customerStatement);

/* Things to reflect on:
  - Why is it important to use meaningful variable names?
    --> To minimize confusion/abiguity and to if another developer who is is other than the actual coder or any one who is reading should understand it. 
  - What are the common pitfalls to avoid when naming variables?
    --> Vague naming, complex naming and abbreviated naming conventions to be avoided
  - How do clear variable names benefit team collaboration? 
    --> Ease of understanding for a new joinee, easy understanding/self explanatory. */
