var company = new Object;
company.name = "Facebook";
company.ceo = new Object;
company.ceo.firstname = "Mark";
company.ceo.favcol = "blue";
company.location = "California";
//company.stock price we can't use a space in property while using dot so use brackets
company["stock prices"] = 11110;
console.log("The company name is : " + company["name"]);
console.log("The stocks are "+ company["stock prices"]);
console.log(company)
console.log("CEO of "+ company.name + " is " +company.ceo.firstname);


//OBJECT LITERALS
var cakeshop = {
    name: "Diana",
    pastries: {
        flavor: "chocolate",
        essence: "butterscotch",
        fruit: "pineapple"
    },
    opentime : 12
};
console.log(cakeshop)