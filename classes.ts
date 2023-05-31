class Vehicle {
    color : string = 'red';

    constructor(color: string) {
        this.color = color;
    }

   
    protected honk(): void {
        console.log('beep');
    }
}

const vehicle = new Vehicle('orange');

/* class Car extends Vehicle {
private drive(): void {
    console.log('vroom');
}
startDrivingProcess(): void {
    this.drive();
    this.honk();
}
}

const car = new Car();
car.startDrivingProcess();
car.startDrivingProcess(); */