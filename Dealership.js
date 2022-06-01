const Car = require("./Car");

class Dealership{

    constructor(name, max_number_of_cars,cars_in_stock){

        this.name = name;
        this.max_number_of_cars = max_number_of_cars;
        this.cars_in_stock = cars_in_stock;

    }

    countNumberCarsInStock() {

        return this.cars_in_stock.length;

    }

    addcarToStock(carToAdd) {

        if(this.max_number_of_cars != this.cars_in_stock.length){
            
            this.cars_in_stock.push(carToAdd);

        }else{
            return "Can't add car, max number of cars reached!";
        }

    }

    returnEachCarsManufacturer() {

        const listOfCarManufacturer = [];
        listOfCarManufacturer.push(this.cars_in_stock.map(car => car.manufacturer));

        return listOfCarManufacturer;


    }

    returnCarsFromManufacturer(manufacturer){

       return this.cars_in_stock.filter(car => car.manufacturer === manufacturer);

    }

    totalValueOfcarsInStock(){

        return this.cars_in_stock.reduce((partialSum,a)=> partialSum + a, 0); //0 initialVal to avoid when array is empty
    }
    
}

module.exports= Dealership;