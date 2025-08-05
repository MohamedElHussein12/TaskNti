var name = prompt('Enter Your name:');
var age = parseInt(prompt('Enter Your age:' ));
// console.log(age);
var exeprience = parseInt(prompt('Enter Your exeprience: ' ));
var rating = parseInt(prompt('Rate your self from 1 to 10: ' ));
var sallary = parseFloat(prompt('Enter Your base salary: ' ));
var jodCategory ;
if(exeprience<2){
    jodCategory = 'junior';
}
else if(exeprience >=2 && exeprience <5){
    jodCategory = 'Med-Level';
}
else if(exeprience >=5 && exeprience <10){
    jodCategory = 'senior';
}
else
{
    jodCategory = 'Expert';
}
var performance ;
switch(true)
{
    case(rating>=9):
       performance = 'Excellent';
       break;
    case(rating>=7):
       performance = 'Good';
       break;
    case(rating>=5):
        performance = 'Average';
        break;
    default:
        performance = 'Needs Improvement';
        break;
}
var bonuspercetage ;
if(exeprience <=2){
    bonuspercetage = 0.10;
}
else if(exeprience <= 5){
    bonuspercetage = 0.15 ;
}
else
{
    bonuspercetage = 0.20
}
var bouns = sallary * bonuspercetage ;
var finalSallary = sallary + bouns ;
var currentHouer = new Date().getHours();
// console.log(currentHouer);
var shift ;
if(currentHouer >= 9 && currentHouer <= 18)
{
    shift = 'day shift'   
}
else
{
    shift = 'Night shift';
}
var result = `Name: ${name} , Age: ${age} , Exeprience: ${exeprience} , Performance: ${performance} ,
Sallary: ${sallary} , Bonuse: ${bouns} , Final Sallaary: ${finalSallary} , Shift:${shift}`;
console.log(result);
alert(result);
document.getElementById('result').innerText = result;