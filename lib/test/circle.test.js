const Circle = require('../Circle.js');
const answermock = {
    L_Text: 'Ts1',
    L_TextColorSelection: 'Predefined Color Keywords',   
    L_TextColor: 'blue',
    L_shape: 'Circle',
    L_ColorSelection: 'Predefined Color Keywords',       
    L_Color: 'red'
};

describe('Circle', () => {
    describe('Instantiate', () => {
        it('should be an instance of Circle class', () => {
            const circle = new Circle(answermock);
            expect(circle).toBeInstanceOf(Circle);
        });
    });
    describe('Predefine Color Keywords', ()=> {
        describe('Circle Element:\nShape Color: Red', () => {
            it('Should set shape color Values correctly', () => {
                const circle = new Circle(answermock);
                circle.setColor('red');
                expect(circle.renderShape()).toBe('<circle cx="150" cy="100" r="100" style="fill:red;"/>');
            });
        });
        describe('Text Element:\nText: Ts1\nText Color: blue\nShape Color: Red', () => {
            it('Should set Text and text color Values correctly', () => {
                const circle = new Circle(answermock);
                circle.setText('Ts1', 'blue');
                expect(circle.renderText()).toBe('<text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="blue" font-size="80">Ts1</text>');
            });
        });
    });
    describe('Hexadecimal Color', ()=> {
        describe('Circle Element:\nShape Color: Red(FF0000)', () => {
            it('Should set shape color Values correctly', () => {
                const circle = new Circle(answermock);
                circle.setColor('#FF0000');
                expect(circle.renderShape()).toBe('<circle cx="150" cy="100" r="100" style="fill:#FF0000;"/>');
            });
        });
        describe('Text Element:\nText: Ts2\nText Color: blue(0000FF)', () => {
            it('Should set Text and text color Values correctly', () => {
                const circle = new Circle(answermock);
                circle.setText('Ts2', '#0000FF');
                expect(circle.renderText()).toBe('<text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="#0000FF" font-size="80">Ts2</text>');
            });
        });
    });
});