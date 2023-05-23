const Square = require('../Square.js');
const answermock = {
    L_Text: 'Ts1',
    L_TextColorSelection: 'Predefined Color Keywords',   
    L_TextColor: 'blue',
    L_shape: 'Square',
    L_ColorSelection: 'Predefined Color Keywords',       
    L_Color: 'red'
};

describe('Square', () => {
    describe('Instantiate', () => {
        it('should be an instance of Square class', () => {
            const square = new Square(answermock);
            expect(square).toBeInstanceOf(Square);
        });
    });
    describe('Predefine Color Keywords', ()=> {
        describe('Polygon Element:\nShape Color: Red', () => {
            it('Should set shape color Values correctly', () => {
                const square = new Square(answermock);
                square.setColor('red');
                expect(square.renderShape()).toBe('<polygon points="50,0 250,0 250,200 50,200" style="fill:red;"/>');
            });
        });
        describe('Text Element:\nText: Ts1\nText Color: blue\nShape Color: Red', () => {
            it('Should set Text and text color Values correctly', () => {
                const square = new Square(answermock);
                square.setText('Ts1', 'blue');
                expect(square.renderText()).toBe('<text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="blue" font-size="80">Ts1</text>');
            });
        });
    });
    describe('Hexadecimal Color', ()=> {
        describe('Polygon Element:\nShape Color: Red(FF0000)', () => {
            it('Should set shape color Values correctly', () => {
                const square = new Square(answermock);
                square.setColor('#FF0000');
                expect(square.renderShape()).toBe('<polygon points="50,0 250,0 250,200 50,200" style="fill:#FF0000;"/>');
            });
        });
        describe('Text Element:\nText: Ts2\nText Color: blue(0000FF)', () => {
            it('Should set Text and text color Values correctly', () => {
                const square = new Square(answermock);
                square.setText('Ts2', '#0000FF');
                expect(square.renderText()).toBe('<text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="#0000FF" font-size="80">Ts2</text>');
            });
        });
    });
});