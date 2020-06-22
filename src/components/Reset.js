import React from 'react';
import './Reset.css';

class Reset extends React.Component{
    constructor(props){
        super(props);
        this.onClick2 = this.onClick2.bind(this);
    }

    onClick2 = (color, value) => {
        this.props.onGiveColor(color);
        this.props.onGiveFontSize(value);
    }

    render(){
        return(
            <div>
                <button onClick={()=>this.onClick2('red', 12)}>Reset</button>
            </div>
        )
    }
}

export default Reset;