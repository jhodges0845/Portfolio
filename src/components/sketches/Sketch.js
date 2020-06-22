import React from 'react';
import p5 from 'p5';
import myfont from "./inconsolata.otf"
import bg from "./grey2.jpg"

// for navigating text vectors
class Particle{
    constructor(x, y){
        this.x = x;
        this.y = y;
        this.xspeed = 0;
        this.yspeed = 0;

        this.history = [];
    }
}

// P5 setup
class Sketch extends React.Component {
    constructor(props){
        super(props)
        this.myRef = React.createRef();
    }
    Sketch = (p) =>{
        var font;
        var frameCount = 0;
        var bgImage;
        p.preload = () =>{
            font = p.loadFont(myfont);
            bgImage = p.loadImage(bg);
        }

        // initial Setup and getting point vectors for text.
        var points;
        var particle;
        p.setup = () => {
            p.createCanvas(window.innerWidth,400);
            points = font.textToPoints("Jason Hodges", (window.innerWidth / 4), 200, 70);
            particle = new Particle();
        }

        p.windowResized = () =>{
            p.resizeCanvas(window.innerWidth,400);
            points = font.textToPoints("Jason Hodges", (window.innerWidth / 4), 200, 70);
            particle = new Particle();
            frameCount = 0;
        }

        // Draw every frame until sketch is complete
        p.draw = () =>{

            // Draw and trace name
            if(frameCount < points.length){
                    p.background(bgImage);
                    //p.background(54,53,56);
                    particle.x = points[frameCount].x;
                    particle.y = points[frameCount].y;
                    this.show(particle);
                    this.update(particle, points[frameCount].x, points[frameCount].y);
                frameCount ++;
            }else{
                p.background(bgImage);
                //p.background(54,53,56);
                //this.setGradient(50, 90, 540, 80, 54, 141, 2);
                this.showHistoryOnly(particle);
                p.textSize(32);
                p.noStroke();
                p.fill(64, 134,151);
                p.text("Full Stack Developer", window.innerWidth / 3.5, 250);
            }//end_if
        }//end_draw


        // Shows only history of vectors from previous frames
        this.showHistoryOnly = (obj) =>{
            for(var j = 1; j < obj.history.length; j++){
                var nextPos = obj.history[j];
                var i = j - 1;
                var pos = obj.history[i];
                p.stroke(82,214,244);
                p.fill(82,214,244);
                p.strokeWeight(3);
                p.line(pos.x, pos.y, nextPos.x, nextPos.y);
            }
        }

        // Show vectors of current and previous frames
        this.show = (obj) =>{
            // Draw Line at current point and every point in history
            p.stroke(82,214,244);
            p.fill(82,214,244);
            p.ellipse(obj.x, obj.y, 10,10);

            for(var j = 1; j < obj.history.length; j++){
                var nextPos = obj.history[j];
                var i = j - 1;
                var pos = obj.history[i];
                p.stroke(82,214,244);
                p.fill(82,214,244);
                p.strokeWeight(3);
                p.line(pos.x, pos.y, nextPos.x, nextPos.y);
                p.smooth();
            }
        }//END_SHOW_FUNCTION

        // Creates a vector of current frame and stores in history
        this.update = (obj, x, y) =>{
            var v = p.createVector(x, y);
            obj.history.push(v);
        }//END_UPDATE_FUNCTION
    }

    // React mounting P5 setup
    componentDidMount(){
        this.myP5 = new p5(this.Sketch, this.myRef.current)
    }

    // React initialization
    render(){
        return(
            <div ref={this.myRef}>

            </div>
        )
    }
}

export default Sketch