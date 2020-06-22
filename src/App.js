import React from 'react';
import './App.css';
import ColorPicker from './components/ColorPicker';
import Reset from './components/Reset';
import Result from './components/Result';
import SizeSetting from './components/SizeSetting';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      color: 'red',
      fontSize: 12,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.giveFontSize = this.giveFontSize.bind(this);
    this.onGiveColor = this.onGiveColor.bind(this);
    this.onGiveFontSize = this.onGiveFontSize.bind(this);
  }

  onGiveColor(color){
    this.setState({
      color: color,
    })
  }

  onGiveFontSize(value){
    this.setState({
      fontSize: value,
    })
  }

  handleSubmit = (params) => {
    this.setState({
      color: params,
    })
  }
  
  giveFontSize = (value) => {
    if(this.state.fontSize + value >= 8 && this.state.fontSize + value <= 36){
      this.setState({
        fontSize: this.state.fontSize + value,
      })
    }
  }

  render(){
    return(
      <div className='body'>
        <div className='line1'>
          <ColorPicker color={this.state.color} onSubmits={this.handleSubmit}/>
          <div className='size_setting1'>
            <SizeSetting fontSize={this.state.fontSize} setFontSize={this.giveFontSize}/>
            <br/>
            <br/>
            
            <Reset onGiveColor={this.onGiveColor} onGiveFontSize={this.onGiveFontSize} />
          </div>

      
        
      </div>
      <Result color={this.state.color} fontSize={this.state.fontSize}/> 
      </div>
    )
  }
}

export default App;
