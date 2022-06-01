const Customer = require("./Customer");
const Dealership = require("./Dealership");
const Car = require("./Car");

describe('Customer tests',()=>{

    test('customers car becomes car purchased',()=>{

        const car1 = new Car("test manufacturer",10,"test engine");

        const customer1 = new Customer("test customer",500);

        customer1.buyCar(car1);

        expect(customer1.car).toBe(car1);


    });

    test('dealership cars in stock loses car bought by customer',()=>{

        const car1 = new Car("test manufacturer",10,"test engine");
        const car2 = new Car("cheesey manufactuer",200,"cheesey engine");

        const dealership1 = new Dealership("test dealership",5,[car1,car2]);

        const customer1 = new Customer("test customer",500);

        customer1.buyCar(car1);

        expect(customer1.car).toBe(car1);


    })


})