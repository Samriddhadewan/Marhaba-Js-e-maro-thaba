// calculating how much money i can use every time and what will be the remaining amount i will be having 
const moneyIHave = 500;
const moneyExpenseEveryTime = 75;
const howManyTimeICanExpend = moneyIHave / moneyExpenseEveryTime;
const howMuchWillIHave = moneyIHave % moneyExpenseEveryTime;
console.log(howManyTimeICanExpend, howMuchWillIHave);