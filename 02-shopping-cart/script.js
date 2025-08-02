// Starter data
const cart = [
  { name: "Pen", price: 20, quantity: 3 },
  { name: "Notebook", price: 50, quantity: 2 },
  { name: "Pencil", price: 10, quantity: 5 }
];

// Start coding here...

// 1. Calculate total price for each item (price * quantity)
const cartWithTotalElement = document.getElementById("cart-with-total");

const cartWithTotal = cart.map(({ name, price, quantity }) => ({
  name,
  price,
  quantity,
  totalPrice: price * quantity,
}));

cartWithTotalElement.style.fontSize = "1rem";
cartWithTotalElement.style.color = "blue";
cartWithTotalElement.style.fontWeight = "bold";
cartWithTotalElement.style.fontFamily = "arial";

// 2. Generate a new array of item descriptions (e.g., "Pen - ₱20")
const itemDescriptionsElement = document.getElementById("item-descriptions");

const itemDescriptions = cart.map(({ name, price }) => `${name} - ₱${price}`);

itemDescriptionsElement.style.fontSize = "1rem";
itemDescriptionsElement.style.color = "green";
itemDescriptionsElement.style.fontWeight = "bold";
itemDescriptionsElement.style.fontFamily = "arial";


// Display outputs
cartWithTotalElement.innerHTML = cartWithTotal
  .map(({ name, price, quantity, totalPrice }) =>
    `${name}: ₱${price} x ${quantity} = ₱${totalPrice}`
  )
  .join("<br>");
itemDescriptionsElement.textContent = itemDescriptions.join(", ");



// 3. Compute the total cart value using reduce()
const totalCartValueElement = document.getElementById("total-cart-value");

const totalCartValue = cart.reduce((acc, { price, quantity }) => acc + price * quantity, 0);

totalCartValueElement.textContent = `₱${totalCartValue}`;


totalCartValueElement.style.fontSize = "1rem";
totalCartValueElement.style.color = "orange";
totalCartValueElement.style.fontWeight = "bold";

totalCartValueElement.style.fontFamily = "arial";
