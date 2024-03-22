const products = [
  {
    productName: "🍎",
    price: 5,
    quantity: 8,
  },
  {
    productName: "🍇",
    price: 2,
    quantity: 6,
  },
  {
    productName: "🍋",
    price: 4,
    quantity: 6,
  },
  {
    productName: "🍓",
    price: 1,
    quantity: 3,
  },
];

const addProduct = (productName, price, quantity, products) => {
  const copy = [...products];
  const newProduct = { productName, price, quantity };
  copy.push(newProduct);
  return copy;
};

const quantityFruits = (fruits) =>
  fruits.reduce((acc, el) => acc + el.quantity, 0);

console.log(quantityFruits(products));

const totalPrice = (fruits) =>
  fruits.reduce((acc, el) => acc + el.price * el.quantity, 0);
console.log(totalPrice(products));

const showProducts = (products) =>
  products.reduce(
    (acc, el) => acc + `${el.productName} - ${el.quantity} шт.\n`,
    "У вашому кошику: \n"
  );
console.log(showProducts(products));

const isExistFruit = (fruitName, basket) => {
  let isExist = false;
  basket.find((fruit) =>
    fruit.productName === fruitName ? (isExist = true) : null
  );
  return isExist;
};
const removeProduct = (productName, quantity) => {
  productName = productName.trim();
  console.log(productName);
  const copy = [...products];
  isExistFruit(productName, copy)
    ? copy.find((product, idx) => {
        if (product.productName === productName) {
          console.log(productName);
          if (quantity >= product.quantity) {
            copy.splice(idx, 1);
          } else {
            product.quantity -= quantity;
          }
        }
      })
    : null;
  return copy;
};
console.log(removeProduct("   🍋   ", 2));

const addFruit = (productName, quantity) => {
  productName = productName.trim();
  const copy = [...products];
  isExistFruit(productName, copy)
    ? copy.find((product) => {
        if (product.productName === productName) {
          product.quantity += quantity;
        }
      })
    : addProduct(productName, 5, quantity, copy);
  return copy;
};
console.log(removeProduct("   🍋 ", 22));
