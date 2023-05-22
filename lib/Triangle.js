class Triangle{
    constructor(info){
        this.Text = info.L_text;
        this.Color = info.L_Color;
    }
    renderShape(){
        return `<polygon points="150,0 275,200 25,200" style="fill:lime;" />`
    }
    renderText(){
        return `<text x="50%" y="80%" dominant-baseline="middle" text-anchor="middle" fill="black" font-size="80">${this.Text}</text>`
    }
}