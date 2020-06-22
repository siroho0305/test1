import React from 'react';
import './SizeSetting.css';

class SizeSetting extends React.Component{
    constructor(props){
        super(props);
        this.onClick1 = this.onClick1.bind(this);
    }

    onClick1 = (value) => {
        this.props.setFontSize(value);
    }

    render(){
        return(
            <div className='size_setting'>
                <div className='header1'>Size: {this.props.fontSize}px</div>
                <br/>

                <button onClick={()=>this.onClick1(2)}>Tăng</button>
                <button className='button2' onClick={()=>this.onClick1(-2)}>Giảm</button>
            </div>
        )
    }
}

export default SizeSetting;