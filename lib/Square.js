class Square{
    constructor(info){
        this.Text = info.L_text;
        this.Color = info.L_Color;
    }
    renderShape(){
        return `<polygon points="50,0 250,0 250,200 50,200" style="fill:${this.Color};"/>`
    }
    renderText(){
        return `<text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="black" font-size="80">${this.Text}</text>`
    }
    }