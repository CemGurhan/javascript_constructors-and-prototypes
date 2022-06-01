const Dealership = require("./Dealership");



class Customer{

    constructor(name,wallet,car){
        this.name = name;
        this.wallet = wallet;
        this.car = null;
    }

    buyCar(carIn){


        if(this.wallet >= carIn.price){

            this.car = carIn;
            this.wallet -= carIn.price;

            // Dealership.cars_in_stock.splice(cars_in_stock.indexOf(carIn),1);

        }


    }

    

}

module.exports = Customer;