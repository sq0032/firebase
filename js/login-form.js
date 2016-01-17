import React from 'react';
import actions from './actions';

const style = {
  base: {},
};


export default class LoginForm extends React.Component{
  constructor(props){
    super(props);
    
//    this.handleClickSortMethod = this.handleClickSortMethod.bind(this);
//    this.handleNumberChange = this.handleNumberChange.bind(this);
    this.state = {
        filter: 0,
    };
  }
  componentDidMount(){
//    $(window)
//      .on(jmEvent.HEX_CLOSE_SELECTED_HEX, {this:this}, this.on_closeSelectedHex);
  }
  componentWillUnmount(){
//    $(window)
//      .off(jmEvent.HEX_CLOSE_SELECTED_HEX, this.on_closeSelectedHex);
  }
  login(event){
    event.preventDefault();
    if(this.refs.username.value!=''){
      actions.joinGame(this.refs.username.value);
    }
  }  
  render(){
    return (
      <div>
        <form>
          <input type="text" name="username" placeholder="username" ref="username" />
          <button onClick={this.login.bind(this)}>Submit</button>
          <p style={{color:"red"}}>{this.state.error_message}</p>
        </form>
      </div>
    );
  }
};

LoginForm.propTypes = { 
  
};

LoginForm.defaultProps = { 
};