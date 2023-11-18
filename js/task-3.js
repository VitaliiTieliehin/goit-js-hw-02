function checkForSpam(message){
    if(message.toLowerCase().includes('spam') || message.toLowerCase().includes('sale')){
        return true;
    } else {
        return false;
    }
}

console.log(checkForSpam("Latest technology news"));                          //повертає false
console.log(checkForSpam("JavaScript weekly newsletter"));                    //повертає false
console.log(checkForSpam("Get best sale offers now!"));                       //повертає true
console.log(checkForSpam("Amazing SalE, only tonight!"));                     //повертає true
console.log(checkForSpam("Trust me, this is not a spam message"));            //повертає true
console.log(checkForSpam("Get rid of sPaM emails. Our book in on sale!"));    //повертає true
console.log(checkForSpam("[SPAM] How to earn fast money?"));                  //повертає true