// 10.
// const categories = ["Electronics", "Fashion", "Books", "Home"];
// console.log(categories)
// console.log(`First category: ${categories[0]}\n`+
//             `Last category: ${categories[categories.length-1]}`);

// console.log(`'Books' ${categories.includes("Books")? "is" : "is not"} included in the array 'categories'.`)

// console.log(`'Fashion' ${categories.includes("Fashion")? "is" : "is not"} included, index: ${categories.indexOf("Fashion")}\n`+
//             `'Sports' ${categories.includes("Sports")? "is" : "is not"} included, index: ${categories.indexOf("Sports")}.`);

// console.log(categories);
// categories.push("Sports");
// let popped = categories.pop("Sports");
// console.log(categories);

// categories.splice(categories.indexOf("Fashion"), 1, "Games");
// console.log(categories);

// 11.
// const stockAmounts = [4, 0, 7, 3, 0];

// const calculateTotalStock = (array) => {
//   let sum = 0;
//   for (let i of array) {
//     sum += i;
//   }
//   return sum;
// };

// console.log(calculateTotalStock(stockAmounts));

// const countOutOfStock = (array) => {
//   let c = 0;
//   for (let i of array) {
//     if (i === 0) c++;
//   }
//   return c;
// };

// console.log(countOutOfStock(stockAmounts));

// const calculateTotalStock2 = (array) => {
//   let sum = 0;
//   for (let i = 0; i < array.length; i++) {
//     sum += i;
//   }
//   return sum;
// };

// 12.
// const user = {
//   id: 1,
//   firstName: "Dana",
//   lastName: "Levi",
//   age: 17,
// };
// console.log(`${user.firstName} is ${user.age} years old.`);
// user.age = 18;
// user.email = "danalevi123@mail.fake";
// console.log(
//   `ID: ${user.id} | ${user.firstName} ${user.lastName} is ${user.age} years old.`,
// );
// console.log(user.firstName);

// 13.
// const post = {
//   id: 101,
//   content: "JavaScript practice day",
//   author: {
//     id: 7,
//     name: "Noa",
//     username: "@noa_dev",
//   },
//   comments: [
//     { id: 1, user: "@amit", text: "Good luck!" },
//     { id: 2, user: "@lior", text: "Nice post" },
//   ],
// };
// console.log(`${post.author.name} | ${post.author.username}`);
// console.log(post.comments[0].text);

// let countComments = 0;
// for (let i of post.comments) {
//   countComments++;
// }
// console.log(countComments);
// post.comments.push({ id: 3, user: "@ohad", text: "Great work!" });
// console.log(post);

// 14.
// const products = [
//   { id: 1, name: "Laptop", price: 999, category: "Electronics", inStock: true },
//   { id: 2, name: "Phone", price: 699, category: "Electronics", inStock: false },
//   { id: 3, name: "Shoes", price: 120, category: "Fashion", inStock: true },
//   { id: 4, name: "Backpack", price: 80, category: "Fashion", inStock: true },
// ];

// for (let product of products) {
//   console.log(
//     `ID: ${product.id}. name: ${product.name}, price: ${product.price}`,
//   );
// }

// const countAvailableProducts = (array) => {
//   let c = 0;
//   for (let avaliable_product of array) {
//     if (avaliable_product.inStock) c++;
//   }
//   return c;
// };

// console.log(countAvailableProducts(products));

// const getProductNameById = (array, id) => {
//   for (let product of array) {
//     if (product.id === id) return product.name;
//   }
//   return "Product not found.";
// };

// console.log(getProductNameById(products, 3));
// console.log(getProductNameById(products, 99));
