import React from 'react';
import './Result.css';

class Result extends React.Component{
 
    setStyle = () => {
        return{
            color: this.props.color,
            borderColor:  this.props.color,
            fontSize: this.props.fontSize,
        }
    }
    render(){
        return(
            <div className='result'>
                <div className='header3'>Color: {this.props.color} ; Frontsize: {this.props.fontSize} px</div>
                <div className='result1' style={this.setStyle()}>
                    Nội dung Setting
                </div>
            </div>
        )
    }
}

export default Result;