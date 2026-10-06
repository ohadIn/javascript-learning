// 5.

// const calculateOrderTotal = (unitPrice, quantity) => unitPrice*quantity;

// const orderTotal = calculateOrderTotal(35, 4);
// console.log(orderTotal);

// console.log(calculateOrderTotal(54,2));
// console.log(calculateOrderTotal(78,52));

// function calculateOrderTotal(unitPrice, quantity) {
//   return unitPrice * quantity;
// }

// const result = calculateOrderTotal(20, 3);
// console.log(result);

// 6.
// const getLetterGrade = (grade) =>{
//     if (grade>=90 && grade<=100) return 'A';
//     else if (grade>=80 && grade<=89) return 'B';
//     else if (grade>=70 && grade<=79) return 'C';
//     else if (grade>=60 && grade<=69) return 'D';
//     else if (grade>=0 && grade<=59) return 'F';
// }

// console.log(getLetterGrade(95));
// console.log(getLetterGrade(83));
// console.log(getLetterGrade(70));
// console.log(getLetterGrade(48));
// console.log(getLetterGrade(101));

// 7.

// const greet = (name) => `Hello, ${name}`;

// const calculateFinalPrice = (price, discountPercent) =>{
//   const discount = price * discountPercent / 100;
//   const finalPrice = price - discount;
//   return finalPrice;
// }

// const o1 = greet("Ohad");
// console.log(o1);
// const o2 = calculateFinalPrice(50, 2);
// console.log(o2);

// 8.
// const calculatePrice = (price1, price2) =>{
//     if (price1>price2)
//         return price1+(price2*0.5);
//     return (price1*0.5)+price2;
// }
// // Same as above, just smaller
// const calculatePricee = (price1, price2) => price1>price2? price1+(price2*0.5) : (price1*0.5)+price2;

// const isExpensive = (price) => price>500 ? true : false;

// const square = number => number * number;

// let price1 = 50;
// let price2 = 500;
// console.log(`Price: ${calculatePrice(price1, price2)}`);
// price1 = 60;
// price2 = 22;
// console.log(`Price: ${calculatePrice(price1, price2)}`);

// let price3 = 501;
// console.log(`Product is ${isExpensive(price)? "" : "not "}expensive`);
// price3 = 120;
// console.log(`Product is ${isExpensive(price)? "" : "not "}expensive`);

// let price4 = 40;
// console.log(`${price4} squared is ${square(price4)}$`);
// price4 = 61;
// console.log(`${price4} squared is ${square(price4)}$`);

// 9.
// const product = {
//     id: 1,
//     name: "Laptop",
//     price: 999,
//     inStock: true
// };

// const getProductSummary = product => `${product.id} - ${product.price} NIS`;
// const getAvailability = product => product.inStock? "Available" : "Unavailable";

// const p_summary = getProductSummary(product);
// const p_available = getAvailability(product);

// console.log(p_summary)
// console.log(p_available);
