
//start抽象工厂模式
export interface Shape {
    interval: number;
    draw(): void;
    // (source: string, subString: string): boolean;
}
class Rectangle implements Shape {
    interval = 1;
    draw(): void {
        console.log('Inside Rectangle::draw() method.')
    }

}
class Square implements Shape {
    interval = 2;
    draw(): void {
        console.log('Inside Square::draw() method.')
    }
}

class Circle implements Shape {
    interval = 3;
    draw(): void {
        console.log('Inside Circle::draw() method.')
    }
}


export interface Color {
    fill(): void;
}

class Red implements Color {
    fill() {
        console.log("Inside Red::fill() method.")
    }
}
class Green implements Color {
    fill(): void {
        console.log("Inside Green::fill() method.")
    }
}
class Blue implements Color {
    fill(): void {
        console.log("Inside Blue::fill() method.")
    }
}

export abstract class AbstractFactory {
    public abstract getColor(color: String): Color | any;
    public abstract getShape(shape: String): Shape | any;
}

class ShapeFactory extends AbstractFactory {
    getShape(shapeType: String): Shape | any {
        if (shapeType == null) {
            return null;
        }
        if (shapeType === 'CIRCLE') {
            return new Circle();
        } else if (shapeType === 'RECTANGLE') {
            return new Rectangle();
        } else if (shapeType === 'SQUARE') {
            return new Square();
        }
        return null;
    }
    getColor(color: String): Color | any {
        return null;
    }
}

class ColorFactory extends AbstractFactory {
    getShape(shapeType: String): Shape | any {
        return null;
    }
    getColor(color: String): Color | any {
        if (color == null) {
            return null;
        }
        if (color === 'red') {
            return new Red();
        } else if (color === 'Green') {
            return new Green();
        } else if (color === 'Blue') {
            return new Blue();
        }
        return null;
    }
}


export class FactoryProducer {
    public static getFactory(choice: String): AbstractFactory | any {
        if (choice === 'SHAPE') {
            return new ShapeFactory();
        } else if (choice === 'COLOR') {
            return new ColorFactory();
        }
        return null;
    }
}

//end抽象工厂模式