var list = ["pop tarts", "ramen noodles", "chips", "salsa", "coffee"];
var cart = [];
var addToCart;

list.push("fruit loops");
list[4] = "fair trade coffee";
list.splice(2, 2, "rice", "beans");


// move the last time on the list into the cart
addToCart = list.pop();
cart.push(addToCart);

// move the first item on the list into the cart
addToCart = list.shift();
cart.push(addToCart);


// move the remaining items on the list into the cart
while ( list.length != 0 ) {
	var listNum = list.length;
	addToCart = list.pop();
	cart.push(addToCart);
	// console.log("List: " + list.join(", "));
	// console.log("Cart: " + cart.join(", "));
	listNum -= 1;
} 

// sort items reverse-alphabetically
cart.sort();
cart.reverse();

console.log(cart.join(", "));