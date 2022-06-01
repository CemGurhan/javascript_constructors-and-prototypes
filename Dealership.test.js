const Dealership = require("./Dealership");
const Car = require("./Car");


describe('dealership tests',()=>{

    test('count number of cars in stock',()=>{

        const car1 = new Car("test manufacturer",10,"test engine");
        const car2 = new Car("cheesey manufactuer",200,"cheesey engine");

        const dealership1 = new Dealership("test dealership",5,[car1,car2]);

        expect(dealership1.countNumberCarsInStock()).toBe(2);


    });

    test('add car to stock',()=>{

        const car1 = new Car("test manufacturer",10,"test engine");
        const car2 = new Car("cheesey manufactuer",200,"cheesey engine");

        const dealership1 = new Dealership("test dealership",5,[car1]);

        dealership1.addcarToStock(car2);

        expect(dealership1.cars_in_stock.length).toBe(2);


    });

    // test('return each car manufacturer',()=>{

    //     const car1 = new Car("test manufacturer",10,"test engine");
    //     const car2 = new Car("cheesey manufactuer",200,"cheesey engine");

    //     const dealership1 = new Dealership("test dealership",5,[car1,car2]);

    //     expect(dealership1.returnEachCarsManufacturer().length).toBe(2);


    // })

    test('return cars from manufacturer',()=>{

        const car1 = new Car("test manufacturer",10,"test engine");
        const car2 = new Car("cheesey manufacturer",200,"cheesey engine");

        const dealership1 = new Dealership("test dealership",5,[car1,car2]);

        expect(dealership1.returnCarsFromManufacturer("cheesey manufacturer").length).toBe(1)

    })

    test('totalValueOfCarsInStock',()=>{

        const car1 = new Car("test manufacturer",10,"test engine");
        const car2 = new Car("cheesey manufacturer",200,"cheesey engine");

        const dealership1 = new Dealership("test dealership",5,[car1,car2]);

        expect(dealership1.totalValueOfcarsInStock()).toStrictEqual({"price": 210});


    })





})

