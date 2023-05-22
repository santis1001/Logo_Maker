const Shapes = require("./Shape");
class Triangle extends Shapes{
    constructor(info){
        super(info.L_Text, info.L_TextColor, info.L_Color);        
    }
    renderShape(){
        return `<polygon points="150,0 275,200 25,200" style="fill:${this.Color};" />`
    }
    renderText(){
        return `<text x="50%" y="80%" dominant-baseline="middle" text-anchor="middle" fill="${this.Text_Color}" font-size="75">${this.Text}</text>`
    }
}
module.exports = Triangle;