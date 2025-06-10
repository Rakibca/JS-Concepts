/*
Challenge:
1. Use numeric separators (_) to separate out
   the digits into chunks of 3 so they are easier to read.
*/

//const tomsBankBalanceGBP = 9_007_199_254_740_991;
//console.log(typeof tomsBankBalanceGBP); // number
//console.log(tomsBankBalanceGBP); // 9007199254740991

//const tomsBankBalanceGBP = 9_007_199_254_740_991_345n;
//console.log(typeof tomsBankBalanceGBP); // bigint
//console.log(tomsBankBalanceGBP); // 9007199254740991345n

const tomsBankBalanceGBP = BigInt(9_007_199_254_740_991_345);
console.log(typeof tomsBankBalanceGBP); // bigint
console.log(tomsBankBalanceGBP); // 9007199254740990976n
