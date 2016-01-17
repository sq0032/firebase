import React from 'react';

const style = {
  base: {},
};


export default class Game extends React.Component{
  constructor(props){
    super(props);
    
//    this.handleClickSortMethod = this.handleClickSortMethod.bind(this);
//    this.handleNumberChange = this.handleNumberChange.bind(this);
    this.state = {
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
  renderPlayers(){
    const that = this;
    const Players = this.props.players.map(function(player){
      if(that.props.user.key==player.key){
        return null;
      }else{
        return (
          <li key={player.key}>{player.name}</li>
        );
      }
    });
                                           
    
    return (<ul>{Players}</ul>);
  }
  render(){
    const Players = this.renderPlayers();
    return (
      <div>
        <p>You are {this.props.user.name}</p>
        <p>Team members:</p>
        {Players}
      </div>
    );
  }
};

Game.propTypes = { 
  
};

Game.defaultProps = { 
};