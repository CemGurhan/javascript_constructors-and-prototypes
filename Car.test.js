const Car = require("./Car");
const Dealership = require("./Dealership");

describe('car tests',()=>{

    test('car returns manufacturer, price and engine_type',()=>{
        
        const car1 = new Car("cheese inc",100,"cheesey engine");

        expect(car1.manufacturer).toBe("cheese inc");
        expect(car1.price).toBe(100);
        expect(car1.engine_type).toBe("cheesey engine");


    })
    


})

describe('dealership tests',()=>{

    test('count number of cars in stock',()=>{

        const car1 = new Car("test manufacturer",10,"test engine");
        const car2 = new Car("cheesey manufactuer",200,"cheesey engine");


    })



})