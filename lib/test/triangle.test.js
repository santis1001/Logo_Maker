const Triangle = require('../Triangle.js');
const answermock = {
    L_Text: 'Ts1',
    L_TextColorSelection: 'Predefined Color Keywords',   
    L_TextColor: 'blue',
    L_shape: 'Triangle',
    L_ColorSelection: 'Predefined Color Keywords',       
    L_Color: 'red'
};

describe('Triangle', () => {
    describe('Instantiate', () => {
        it('should be an instance of Triangle class', () => {
            const triangle = new Triangle(answermock);
            expect(triangle).toBeInstanceOf(Triangle);
        });
    });
    describe('Predefine Color Keywords', ()=> {
        describe('Polygon Element:\nShape Color: Red', () => {
            it('Should set shape color Values correctly', () => {
                const triangle = new Triangle(answermock);
                triangle.setColor('red');
                expect(triangle.renderShape()).toBe('<polygon points="150,0 275,200 25,200" style="fill:red;"/>');
            });
        });
        describe('Text Element:\nText: Ts1\nText Color: blue\nShape Color: Red', () => {
            it('Should set Text and text color Values correctly', () => {
                const triangle = new Triangle(answermock);
                triangle.setText('Ts1', 'blue');
                expect(triangle.renderText()).toBe('<text x="50%" y="80%" dominant-baseline="middle" text-anchor="middle" fill="blue" font-size="75">Ts1</text>');
            });
        });
    });
    describe('Hexadecimal Color', ()=> {
        describe('Polygon Element:\nShape Color: Red(FF0000)', () => {
            it('Should set shape color Values correctly', () => {
                const triangle = new Triangle(answermock);
                triangle.setColor('#FF0000');
                expect(triangle.renderShape()).toBe('<polygon points="150,0 275,200 25,200" style="fill:#FF0000;"/>');
            });
        });
        describe('Text Element:\nText: Ts2\nText Color: blue(0000FF)', () => {
            it('Should set Text and text color Values correctly', () => {
                const triangle = new Triangle(answermock);
                triangle.setText('Ts2', '#0000FF');
                expect(triangle.renderText()).toBe('<text x="50%" y="80%" dominant-baseline="middle" text-anchor="middle" fill="#0000FF" font-size="75">Ts2</text>');
            });
        });
    });
});