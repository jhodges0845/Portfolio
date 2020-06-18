import React from 'react';

export class Header extends React.Component{
    constructor(props){
        super(props)
        this.myRef = React.createRef()
    }

    Sketch = (p) => {
        p.setup = () => {

        }

        p.draw = () =>{

        }
    }

    componentDidMount(){
        this.myP5 = new this.myP5(this.Sketch, this.myRef.current)
    }

    render(){
        return (
            <div ref="this.myRef">

            </div>
        )
    }
}