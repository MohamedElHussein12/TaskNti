          // task 1
var name = prompt('What is Your Name ?');
var brithDay = prompt('What is Your brith day ?');
var isStudent = confirm('Are You Student ?');
var currentYear = new Date().getFullYear();
// console.log(currentYear);
var age = currentYear - Number(brithDay);
// console.log(age);
var category ;
if(age < 13){
    category = 'Kid';
}
 else if(age >= 13 && age <=17 ){
    category = 'Teen';
}
else if(age >= 18 && age <=59 ){
    category = 'Adult';
}
else
{
    category ='Senior'
}
var massage = `Hello ${name} , you are ${age} years old \n category:${category} .`;

if(isStudent){
    massage += '\n Dont forget to study hard!'
}
console.log(massage);
alert(massage);
document.getElementById('result').innerText=massage;
            


