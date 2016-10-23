var React = require("react");

var List = require("./list");


var ListContainer = React.createClass({
  getInitialState: function(){
    return{
      text:{},
      cards:[]
    }
  },
  onAddInputChanged: function(event){
    this.setState({
      text: event.target.value
    });
  },
  onAddSubmit: function(event){
    event.preventDefault();
    var tempCards = this.state.cards;
    tempCards.push(this.state.text);
    this.setState({
      cards: tempCards
    });
  },
  render: function(){
    return <List  cards={this.state.cards} 
                  title={this.props.title}
                  onAddInputChanged={this.onAddInputChanged} 
                  onAddSubmit={this.onAddSubmit} />
  }

});

module.exports = ListContainer;

