function sort() {
    var arr1 = [ -3, 8, 7, 6, 5, -4, 3, 2, 1 ];
    arr1.sort((a,b) => a - b);
    alert(arr1);
}

function longSubStr(prop) {
    var arr = prop.split(" ").sort((a,b) => b.length - a.length);
    var longest = arr.shift();
    alert(longest);
}

function isPrime(n) {
    for(i=n-1; i>1; i--) {
        if(n % i == 0) {
            alert("Non Prime Number");
            return;
        }
    }
    alert("Prime Number");
}

function amountToCoins(amount, coins) {
    coins.sort((a,b) => b - a)
    var resArr = []
    for(let i = 0; i<coins.length; i++){
        if(coins[i] < 1) continue;
        while (amount >= coins[i]){
            resArr.push(coins[i])
            amount -= coins[i]
        }
    }
    if(amount > 0){
        res = `The numbers are: ${resArr}, and remaining: ${amount}`
        
    }else{
        res = `The numbers are: ${resArr}`
    }
    alert(res)
}