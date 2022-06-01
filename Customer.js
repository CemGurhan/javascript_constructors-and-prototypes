const Dealership = require("./Dealership");



class Customer{

    constructor(name,wallet,car,dealership){
        this.name = name;
        this.wallet = wallet;
        this.car = null;
        this.dealership = dealership;
    }

    buyCar(carIn){


        if(this.wallet >= carIn.price){

            this.car = carIn;
            this.wallet -= carIn.price;

            const carIndex = this.dealership?.cars_in_stock?.indexOf(carIn);

            this.dealership?.cars_in_stock?.splice(carIndex,1);

            

        }else{

            return "You cannot afford this car";
        }


    }

    

}

module.exports = Customer;