const Dealership = require("./Dealership");



class Customer{

    constructor(name,wallet,car){
        this.name = name;
        this.wallet = wallet;
        this.car = null;
        
    }

    buyCar(carIn,dealership){


        if(this.wallet >= carIn.price){

            this.car = carIn;
            this.wallet -= carIn.price;

            const carIndex = this.dealership?.cars_in_stock?.indexOf(carIn);

            dealership?.cars_in_stock?.splice(carIndex,1);

            

        }else{

            return "You cannot afford this car";
        }


    }

    

}

module.exports = Customer;