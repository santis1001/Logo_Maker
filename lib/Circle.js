// The triangle class contains the functions the return unique vales depending on the shape.
// renderShape() return the polygon points which are unique for the triangle.
// renderText() return the text which will be on the logo. this is consider an unique value 
// because the `y` value changes so it fits in the shape.
const Shapes = require("./Shape");
class Circle extends Shapes{
    constructor(info){
        super(info.L_Text, info.L_TextColor, info.L_Color);        
    }
    renderShape(){
        return `<circle cx="150" cy="100" r="100" style="fill:${this.Color};"/>`
    }
    renderText(){
        return `<text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="${this.Text_Color}" font-size="80">${this.Text}</text>`
    }
}
module.exports = Circle;