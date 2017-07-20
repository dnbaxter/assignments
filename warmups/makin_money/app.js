//var money = 123456789;
//
//function makeItRain(money) {
//    
//    money = money.toString();
//    money.splice(-2, 0, ".");
//    
//    // 1234567.89
//    
//    var postOfFirst = money.length % 3;
//    
//    for (var i = 0; i < money.length; i++) {
//        
//    }
//    
//    
//}




var money = 35543400;

money = money.toLocaleString("en-US", { style: "currency", currency: "USD", minimumFractionDigits: 2 });
console.log(money);