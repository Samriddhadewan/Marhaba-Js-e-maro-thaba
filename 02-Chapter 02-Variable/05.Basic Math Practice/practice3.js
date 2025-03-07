// i have 60taka , if i use 15taka every time then how many time i can be using and how much taka will be reaming after use 
const MoneyIHave = 60;
const expenseEveryTime = 15;
const howManyTimeICanUse = MoneyIHave / expenseEveryTime;
const howMuchMoneyIWillHave = MoneyIHave % expenseEveryTime;
console.log(howManyTimeICanUse, howMuchMoneyIWillHave); 