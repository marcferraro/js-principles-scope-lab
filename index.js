var customerName = 'bob'
var bestCustomer
const leastFavoriteCustomer = "I don't know, joe maybe"

function upperCaseCustomerName(){
    customerName = customerName.toUpperCase()
}

function setBestCustomer(){
    bestCustomer = 'not bob'
}

function overwriteBestCustomer(){
    bestCustomer = 'maybe bob'
}

function changeLeastFavoriteCustomer(){
    leastFavoriteCustomer = "I'm sorry bob. It's you."
}