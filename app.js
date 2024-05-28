//Chapter 9 - 11:
//Question 1:

var city = prompt("enter city name: ")
if(city === "karachi" || city === "Karachi")
{
    alert("WELCOME TO THE CITY OF LIGHTS !!!")
}

else{}

//Question 2:

var gender = prompt("enter gender : ")
if(gender === 'male'){
    alert("GOOD MORNING SIR!!!")
}
else if(gender === 'female')
{
    alert("GOOD MORNING MA'AM")
}

//Question 3:

var color = prompt("Enter the colour of traffic signal: ")
if(color === 'Red')
{
alert("Must Stop")
}
else if(color === 'Yellow')
{
    alert("Ready to move ")
}
else if(color === 'Green')
{
    alert("Move now ")
}

//Question 4:

var fuel_level = +prompt("Enter fuel level in liters: ")
if(fuel_level < 0.25){
    alert("Please refill the fuel in your car!!!")
}
else {
    alert("Fuel level is OK..")
}

//Question 5:

//The condition is true
var a = 4; if (++a === 5){ alert("given condition for variable a is true"); } 
 
//the condition is not true
var b = 82; if (b++ === 83){ alert("given condition for variable b is true"); } 

var c = 12;
//the condition is not true
 if (c++ === 13){ alert("condition 1 is true"); } 
//The condition is true
if (c === 13){ alert("condition 2 is true"); } 
//The condition is not true
if (++c < 14){ alert("condition 3 is true"); }
//The condition is true
 if(c === 14){ alert("condition 4 is true"); } 
 
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
//The condition is not true
if (totalCost === laborCost + materialCost)
{ alert("The cost equals"); } 
 
//The condition is true
if (true){ alert("True"); }
//The condition is not true
if (false){ alert("False"); }

//The condition is true
if("car" < "cat")
{ alert("car is smaller than cat");}

//Question 6:

var obtained_marks = +prompt("enter marks obtained in 3 subjects: ")
var total_marks = +prompt("enter total marks of 3 subjects: ")
var per = (obtained_marks/total_marks)*100
document.write("<h1> <b> Mark Sheet </b> </h1> <br> <br> Marks Obtained: "+obtained_marks+"<br>Total Marks: "+total_marks+"<br>Percentage: "+per+" %")
if( per >=80)
{
document.write("<br>Grade: A+1 <br> Remarks: Excellent")
} 
 
else if(per >= 70)
{
    document.write("<br>Grade: A <br> Remarks: Good")
}

else if(per >= 60)
{
    document.write("<br>Grade: B <br> Remarks: You need to improve")
}
else if(per < 60)
{
    document.write("<br>Grade: Fail <br> Remarks: Sorry")
}

//Question 7:

var num1 = +prompt("Enter a number from 1 to 10 : ")
var num2 = 8

if(num1 === num2)
{
    alert("Bingo! Correct answer.")
}
else if(num1+1 === num2)
{
    alert("Very close to the number.")
}

//Question 8:

var num = +prompt("enter a number: ")
if(num%3 == 0)
{
    alert("number you entered is divisible by '3'")
}

//Question 9:

var num = +prompt("enter a number: ")
if(num%2 == 0)
{
    alert("number you entered is EVEN")
}
else {
    alert("number you entered is ODD")
}

//Question 10:

var t = +prompt("enter temperature : ")
if(t > 40)
{
    alert("Its too hot outside.")
}
else if(t > 30)
{
    alert("The Weather today is Normal.")
}
else if(t > 20)
{
    alert("Today’s Weather is cool")
}
else if(t > 10)
{
    alert("OMG! Today’s weather is so Cool")
}

//Question 11:

var n1 = +prompt("enter 1st number: ")
var n2 = +prompt("enter 2nd number: ")
var op = prompt("enter the operator: ")

if(op === "+")
document.write("Result is: "+(n1+n2))

else if(op === "-")
document.write("Result is: "+(n1-n2))

else if(op === "*")
document.write("Result is: "+(n1*n2))

else if(op === "/")
document.write("Result is: "+(n1/n2))

else if(op === "%")
document.write("Result is: "+(n1%n2))

