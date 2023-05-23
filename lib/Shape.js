// Shape class, this class store the variables that are repeated in all the shapes
// Setters that will update the values depending on the parameters.
// render() function outputs the content necessary for the SVG file body.
class Shape{
    constructor(text,textColor, shapeColor){
        this.Text = text;
        this.Text_Color = textColor;
        this.Color = shapeColor;        
    }
    setText(text,textcolor){
        this.Text = text;
        this.Text_Color = textcolor;
    }
    setColor(Color){
        this.Color = Color;
    }
    render(){
        return `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">\n\t${this.renderShape()}\n\t${this.renderText()}\n</svg>`;
    }
}  
module.exports = Shape;