class Triangle{
    constructor(text, color){
        this.Text = text;
        this.Color = color;
    }
    renderShape(){
        return `<polygon points="150,0 275,200 25,200" style="fill:${this.Color};" />`
    }
    renderText(){
        return `<text x="50%" y="80%" dominant-baseline="middle" text-anchor="middle" fill="black" font-size="80">${this.Text}</text>`
    }
}
module.exports = Triangle;