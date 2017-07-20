let isIpAddress = function(input){
    input = input.split(".");
    if(input.length > 4 || input.length < 4) throw "invalid ip address";
    for(let i = 0; i < input.length; i++){
        let current = input[i];
        if(current.match(/[^\d]/g) || !current || current < 0 || current > 255) throw "invalid ip address"
    }
    return true;
};

module.exports = isIpAddress;