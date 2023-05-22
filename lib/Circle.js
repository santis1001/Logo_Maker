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