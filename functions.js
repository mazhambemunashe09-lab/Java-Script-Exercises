
function	greetGuest(name)	{
	return 'Welcome to movie night, ' + name + '!';
}console.log(greetGuest("Gerald !"));



function	calculateTotalSnacks(numGuests)	{
	return numGuests * 2;
}console.log(calculateTotalSnacks(4));



function	isEnoughPizza(numSlices,numGuests)	{
    return numSlices >= numGuests;
}console.log(isEnoughPizza(9, 8));	


	---	Function	Expressions	--
const greetGuest = () => {
    console.log("Welcome to pizza night!");
};
greetGuest();


	---	Arrow	Functions	--
const	greetGuestArrow	=	(name)	=>	{
    console.log("Welcome to pizza night,  " + name + "!");

};greetGuestArrow("Gerald");


const calculateTotalSnacks = (numGuests) => {
    return numGuests * 2;
};
console.log(calculateTotalSnacks(5));

const isEnoughPizza = (numSlices, numGuests) => {
    return numSlices >= numGuests;
};console.log(isEnoughPizza(4, 6));

const movieNight = {
    guest: "Gerald",
    numGuests: 4,
    numSlices: 9
};
const greet = "Welcome to movie night!";
console.log(`${greet} ${movieNight.guest}! ${movieNight.numGuests} guests are coming, and we have ${movieNight.numSlices} slices of pizza.`); 






