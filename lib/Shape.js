class Shape{
    constructor(info){
        this.Text = info.L_text;
        this.Color = info.L_Color;
        this.Shape = info.L_shape;
    }
    render(){
        console.log(this.Shape);
        const SVGshape = require(`./${this.Shape}`);
        const shapeParameters = new SVGshape(this.Text, this.Color);
        return `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
        ${shapeParameters.renderShape()}
        ${shapeParameters.renderText()}
        </svg>
        `
    }
}  
module.exports = Shape;