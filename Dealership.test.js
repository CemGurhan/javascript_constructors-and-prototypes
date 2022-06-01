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

    test('add car to stock over limit',()=>{

        const car1 = new Car("test manufacturer",10,"test engine");
        const car2 = new Car("cheesey manufactuer",200,"cheesey engine");
        const car3 = new Car("manufactuer",200,"engine");

        const dealership1 = new Dealership("test dealership",2,[car1,car2]);


        expect(dealership1.addcarToStock(car3)).toStrictEqual("Can't add car, max number of cars reached!");


    });

    test('return each car manufacturer',()=>{

        const car1 = new Car("test manufacturer",10,"test engine");
        const car2 = new Car("cheesey manufactuer",200,"cheesey engine");

        const dealership1 = new Dealership("test dealership",5,[car1,car2]);

        expect(dealership1.returnEachCarsManufacturer().length).toStrictEqual(2);


    });

    test('return cars with certain price',()=>{

        const car1 = new Car("test manufacturer",10,"test engine");
        const car2 = new Car("cheesey manufacturer",200,"cheesey engine");

        const dealership1 = new Dealership("test dealership",5,[car1,car2]);

        expect(dealership1.returnCarsFromManufacturer("price",10).length).toBe(1)

    })

    test('return cars with certain engine',()=>{

        const car1 = new Car("test manufacturer",10,"test engine");
        const car2 = new Car("cheesey manufacturer",200,"cheesey engine");

        const dealership1 = new Dealership("test dealership",5,[car1,car2]);

        expect(dealership1.returnCarsFromManufacturer("engine","test engine").length).toBe(1)

    })

    test('totalValueOfCarsInStock',()=>{

        const car1 = new Car("test manufacturer",10,"test engine");
        const car2 = new Car("cheesey manufacturer",200,"cheesey engine");

        const dealership1 = new Dealership("test dealership",5,[car1,car2]);

        expect(dealership1.totalValueOfcarsInStock()).toStrictEqual({"price": 210});


    })





})

