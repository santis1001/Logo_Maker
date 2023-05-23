// The triangle class contains the functions the return unique vales depending on the shape.
// renderShape() return the polygon points which are unique for the triangle.
// renderText() return the text which will be on the logo. this is consider an unique value 
// because the `y` value changes so it fits in the shape.
const Shapes = require("./Shape");
class Triangle extends Shapes{
    constructor(info){
        super(info.L_Text, info.L_TextColor, info.L_Color);        
    }
    renderShape(){
        return `<polygon points="150,0 275,200 25,200" style="fill:${this.Color};"/>`
    }
    renderText(){
        return `<text x="50%" y="80%" dominant-baseline="middle" text-anchor="middle" fill="${this.Text_Color}" font-size="75">${this.Text}</text>`
    }
}
module.exports = Triangle;