
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




