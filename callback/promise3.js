
const cart = ["bread" , "butter"]


createorder(cart).then(function (){ // createodrefunction will return a promise and we have attach the callback function which will proceed
   return proceeedtopayment(productid);
   })
   .then(function (){ // createodrefunction will return a promise and we have attach the callback function which will proceed
   return shoeordersummary(id)
   })
   .then(function (){ // createodrefunction will return a promise and we have attach the callback function which will proceed
   return updatewallet(paymentinfo)// always write return when chaning of promises s done
   })

