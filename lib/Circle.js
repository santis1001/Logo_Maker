class Circle{
    constructor(info){
        this.Text = info.L_text;
        this.Color = info.L_Color;
    }
    renderShape(){
        return `<circle cx="150" cy="100" r="100" style="fill:${this.Color};"/>`
    }
    renderText(){
        return `<text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="black" font-size="80">${this.Text}</text>`
    }
}