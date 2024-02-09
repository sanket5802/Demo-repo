const cart = ["bread", "butter"];

createcart(cart)
  .then(function (orderid) {
    console.log(orderid);
    return proceedtopayment(orderid); // Corrected to use orderid instead of result
  
  })
  .then(function (result) {
    // Receive the result as a single parameter
    console.log(result.message)
    return showordersummery(result.amt); // Pass the 'amt' property to the next function
  })
  .then(function (result) {
    console.log(result);
  })
  .catch(function (err) {
    console.log(err.message);
  })
  .then(function () {
    console.log("This will always run, irrespective of errors or successes");
  });

function createcart(cart) {
  const pr = new Promise(function (resolve, reject) {
    if (!validatecart(cart)) {
      const err = new Error("Cart is not valid");
      reject(err);
    }

    const orderid = "123";
    if (orderid) {
      setTimeout(function () {
        resolve(orderid);
      }, 500);
    }
  });

  return pr;
}

function proceedtopayment(orderid) {
  return new Promise(function (resolve, reject) {
    resolve({ amt: 2500, message: "payment successful" });
  });
}

function showordersummery(amt) {
  return new Promise(function (resolve, reject) {
    if (amt >= 200) {
      resolve("your order is set");
    } else {
      reject(new Error("buy more"));
    }
  });
}

function validatecart(cart) {
  return true;
}
