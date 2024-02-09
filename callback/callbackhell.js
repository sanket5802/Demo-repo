//asyn progamming in javascript exist beacuse of callback function
const cart = ["bread" , "butter"];
// this is called callbakhell it lead to loss of readibility and difficult to maintain
// isues 1) what is createorder api never calls proceed topayment  , we cannot blindly trust the api may be there might some bugs inside it so => this issue is called omversion of control

api.createorder(cart , function() {

    api.proceeedtopayment(function(){
        api.shoeordersummary(function (){
            api.walletupdate();
        });
    });

});



