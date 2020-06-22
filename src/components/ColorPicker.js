import React from 'react';
import './ColorPicker.css';

class ColorPicker extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            colors: [
                'red',
                'green',
                'blue',
                '#ccc',
            ],
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick =  (color) => {
        this.props.onSubmits(color);
    } 

    showColor(color){
        return{
            backgroundColor: color,
        }
    }

    render(){
        var elmColors = this.state.colors.map((color, index) => {
            return <span    key={index} 
                            style={this.showColor(color)} 
                            className={this.props.color === color ? 'active' : ''}
                            onClick={ () => this.handleClick(color)}
                    ></span>
        })
        return(
            <div className='ColorPicker'>
                <div className='header'>
                    Color Picker
                </div>
                <div className='span1'>
                    {elmColors}
                </div>
            </div>
        )
    }
}

export default ColorPicker;