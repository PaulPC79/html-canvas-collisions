export default class Circle {
    constructor(x,y,dx,dy,radius,maxRadius,minRadius,context,color,mouse) {
        this._x = x;
        this._y = y;
        this._dx = dx;
        this._dy = dy;
        this._radius = radius;
        this._maxRadius = maxRadius;
        this._minRadius = minRadius;
        this._context = context;
        this._color = color;
        this._mouse = mouse;
    }

    draw() {
        this._context.beginPath();
        this._context.arc(this._x,this._y,this._radius,0,Math.PI * 2, false);
        this._context.strokeStyle = 'black';
        this._context.fillStyle = this._color;
        this._context.fill();
        this._context.stroke();
    }

    update() {        
        this.draw();
    }

    get x() {
        return this._x;
    }

    set x(value) {
        this._x = value;
    }

    get y() {
        return this._y;
    }

    set y(value) {
        this._y = value;
    }

    get dx() {
        return this._dx;
    }

    set dx(value) {
        this._dx = value;
    }

    get dy() {
        return this._dy;
    }

    set dy(value) {
        this._dy = value;
    }

    get radius() {
        return this._radius;
    }

    set radius(value) {
        this._radius = value;
    }

    get maxRadius() {
        return this._maxRadius;
    }

    set maxRadius(value) {
        this._maxRadius = value;
    }

    get minRadius() {
        return this._minRadius;
    }

    set minRadius(value) {
        this._minRadius = value;
    }

    get context() {
        return this._context;
    }
    
    set context(value) {
        this._context = value;
    }
    
    get color() {
        return this._color;
    }

    set color(value) {
        this._color = value;
    }

    get mouse() {
        return this._mouse;
    }

    set mouse(value) {
        this._mouse = value;
    }
}