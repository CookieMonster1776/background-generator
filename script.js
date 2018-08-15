var css=document.querySelector("h3");
var color1=document.querySelector(".color1");
var color2=document.querySelector(".color2");
var body=document.getElementById("gradient");

//console.log(body);

body.style.background="red";

// console.log(css);
// console.log(color1);
// console.log(color2);

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);

// color1.addEventListener("input", function(){
// 	console.log(color1.value);
// 	body.style.background="linear-gradient(to right, " 
// 	+ color1.value + "," + color2.value + ")";
// })

// color2.addEventListener("input", function(){
// 	console.log(color2.value);
// 	body.style.background="linear-gradient(to right, " 
// 	+ color1.value + "," + color2.value + ")";
// })

function setGradient() {
	body.style.background="linear-gradient(to right, " 
	+ color1.value + "," + color2.value + ")";	
	css.textContent = body.style.background ;
}

//ECMA 7 additions:
//includes

const pets=['cat','dog','bat'];
pets.includes('dog');
pets.includes('dogs');

//exponential operator:

const square=(x)=>x**2;
const cube=(y)=>y**3;

//trailing commas

const fun = (a,b,c,d,)=>{
	console.log(a);
}

fun(1,2,3,4); //returns 1

//object.entries & .values

Object.values
Object.entries
Object.keys


//Object.keys (old way of getting at values in object)
let obj={
	username0: 'Santa',
	username1: 'Rudolf',
	username2: 'Mr. Grinch'
}

Object.keys(obj).forEach((key,index) => {
	console.log(key,obj[key]);
})


//Object.values:
Object.values(obj).forEach(value=>{
	console.log(value);
})


//Object.entries:
Object.entries(obj).forEach(value=>{
	console.log(value);
})

//don't need forEach to go thru array using the following map function
Object.entries(obj).map(value=>{
	return value[1] + value[0].replace('username','new_username');
})
