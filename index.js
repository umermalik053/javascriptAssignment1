// chapter 1

// question 1
// alert("Greet");


// question 2
// alert("Error! Please Enter a Valid Password");

// question 3
// alert("Welcome to Js land... \nHappy Coding!");

// question 4
// alert('Happy Coding!\nPrevent this page from creating additional dialogs.' );

// question 5
// alert("Hello... I can run JS through my web browser's console");

// chapter 2

// question 1
// let userName = "Malik";

// question 2
// let myname = "Muhammad Umar Malik";

// question 3
// let message = "Hello World";
// alert(message);

// question4
// let studentName = "Jhone Doe"
// let studentAge = "15 year old"
// let studentCourse = "Mobile Application Development"
// alert("                                       " + studentName)
// alert("                                       " + studentAge)
// alert("                                       " + studentCourse)

// qustion5
// let name1 = "Pizza" 
// let name2 = "Pizz" 
// let name3 = "Piz" 
// let name4 = "Pi" 
// let name5 = "P"

// alert( "\n                                     " + name1 +"\n                                     " + name2 +"\n                                     " + name3 + "\n                                     " + name4 + "\n                                     " + name5 )

// question6
// let email = "example@example.com"
// alert("My email address is " + email )

// question7
// let book = "A Smarter Way to Learn Javascript"
// alert("I am trying to learn javascript from the book " + book )

// question8
// document.write(" Yah! i can write HTML content through in JavaScript")

// qustion9
// var spell = "▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬"
// alert('              ' + spell)




// chapter 3

// question1
// let age = 21 ;
// alert ("                                   I am " +age + " year old");
 
// question2
// let number = 14 ;
// alert ("                               you have visited this site " +number + " times");

// question3
// var birthYear = 2003;
// document.write("My birth year is: " + birthYear);

// question4
// var visitorName = "John Doe";
// var productTitle = "T-shirt";
// var quantity = 5;
// document.write(visitorName + " ordered " + quantity + " " + productTitle + "(s) on XYZ Clothing store.");


// chapter 4 

// question1
// var variable1, variable2, variable3;

// question2
// var myVariable;
// var camelCaseVariable;
// var _underscoreVariable;
// var $dollarVariable;
// var num123;

// Illegal variable names
// var 123num; 
// var my-Variable;
// var var; 
// var alert;
// var my variable;


// question3
// Displaying rules in the browser
// document.write("<h1>Rules for naming JS variables</h1>");
// document.write("<br>");
// document.write("b) Variable names can only contain letters, numbers, underscores, and dollar signs. For example $my_1stVariable");
// document.write("<br>");
// document.write("c) Variables must begin with a letter, underscore, or dollar sign. For example $name, _name, or name");
// document.write("<br>");
// document.write("d) Variable names are case sensitive");
// document.write("<br>");
// document.write("e) Variable names should not be JavaScript reserved keywords");



// chapter5

// // question1
// var number1 = +prompt("Enter the first number:");
// var number2 = +prompt("Enter the second number:");

// var sum = number1 + number2;

// document.write("The sum of " + number1 + " and " + number2 + " is " + sum);



// question2

// Take two numbers as input
// var number1 = +prompt("Enter the first number:");
// var number2 = +prompt("Enter the second number:");

// // Perform subtraction
// var difference = number1 - number2;

// // Perform multiplication
// var product = number1 * number2;

// // Perform division
// var quotient = number1 / number2;

// // Perform modulus
// var remainder = number1 % number2;

// // Display the results in the browser
// document.write("Subtraction: " + number1 + " - " + number2 + " = " + difference + "<br>");
// document.write("Multiplication: " + number1 + " * " + number2 + " = " + product + "<br>");
// document.write("Division: " + number1 + " / " + number2 + " = " + quotient + "<br>");
// document.write("Modulus: " + number1 + " % " + number2 + " = " + remainder + "<br>");

// question3

// var myVariable;

// document.write("Value after variable declaration is: " + myVariable + "<br>");

// myVariable = 5;
// document.write("Initial value: " + myVariable + "<br>");

// myVariable++;
// document.write("Value after increment is: " + myVariable + "<br>");

// myVariable += 7;
// document.write("Value after addition is: " + myVariable + "<br>");

// myVariable--;
// document.write("Value after decrement is: " + myVariable + "<br>");

// var remainder = myVariable % 3;
// document.write("The remainder is: " + remainder);

// question4

// var ticketPrice = 600; 
// var totalCost = ticketPrice * 5;

// var output = "Cost of one movie ticket is " + ticketPrice + " PKR.<br>";
// output += "The cost of buying 5 tickets to a movie is " + totalCost + " PKR.";

// // Display the output in the browser
// document.write(output);

// question 5

// var number = +prompt("Enter a number to display its multiplication table:");

// document.write("<h2>Multiplication Table of " + number + "</h2>");
// document.write("<p>");
// for (var i = 1; i <= 10; i++) {
//     document.write("<h2>" + number + " x " + i + " = " + (number * i) + "</h2>");
// }
// document.write("</p>");

// question 7
// var priceItem1 = 50; 
// var priceItem2 = 70; 
// var quantityItem1 = 2; 
// var quantityItem2 = 1; 
// var shippingCharges = 10;

// var totalCost = (priceItem1 * quantityItem1) + (priceItem2 * quantityItem2) + shippingCharges;
// document.write("<h2>Receipt</h2>");
// document.write("<p>Price of item 1 is " + priceItem1 + " PKR </p>");
// document.write("<p>Quantity of item is " + quantityItem1 + "</p>");
// document.write("<p>Price of item 2 is " + priceItem2 + " PKR </p>");
// document.write("<p>Quantity of item 2 is " + quantityItem2 + "</p>");
// document.write("<p>Shipping charges :" + shippingCharges + " PKR </p>");
// document.write("<hr>");
// document.write("<p>Total cost: " + totalCost + " PKR</p>");

// question 8
// var totalMarks = 500;
// var marksObtained = 420;
// var percentage = (marksObtained / totalMarks) * 100;

// document.write("Total Marks: " + totalMarks + "<br>");
// document.write("Marks Obtained: " + marksObtained + "<br>");
// document.write("Percentage: " + percentage.toFixed(2) + "%");

// question 9

// var usDollars = 10;
// var saudiRiyals = 25;

// var usdToPkrRate = 104.80;
// var sarToPkrRate = 28;

// var totalPkr = (usDollars * usdToPkrRate) + (saudiRiyals * sarToPkrRate);

// document.write("Total amount in Pakistani Rupees: " + totalPkr);


// question 10

// var number = 10;

// var result = ((number + 5) * 10) / 2;

// document.write("Result: " + result);

// question 11

// var currentYear = 2024;
// var birthYear = 2003;

// var age1 = currentYear - birthYear;
// var age2 = age1 - 1; 

// document.write("They are either " + age1 + " or " + age2 + " years old.");


// question 13

// var favoriteSnack = "chocolate bars";

// var currentAge = 25;

// var maximumAge = 80;

// var amountPerDay = 3;

// var yearsRemaining = maximumAge - currentAge;
// var daysRemaining = yearsRemaining * 365;
// var totalSnacksNeeded = daysRemaining * amountPerDay;


// document.write("Favourite snack: "+ favoriteSnack + "<br>")
// document.write("currentAge:  "+ currentAge + "<br>")
// document.write("Estimated Maximum Age:  "+ maximumAge + "<br>")
// document.write("Amount Of Snack Per Day:  "+ amountPerDay + "<br>")
// document.write("You will need " + totalSnacksNeeded + " " + favoriteSnack + " to last you until the ripe old age of " + maximumAge + ".");











