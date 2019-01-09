/*
 * data.ts
 *
 * 数据类型 - table-header 组件
 */

//start工厂模式
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

export class ShapeFactory {
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
}

//end工厂模式


export class SelectOptionItem {
    public value: String | Number = '';
    public label: String | Number = '';
}

export class HeaderConfigItem {
    public title: String = '';
    public code: String = '';
    public type?: 'select' | 'input';
    public options?: SelectOptionItem[]
}