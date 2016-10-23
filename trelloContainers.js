var React = require("react");
var ReactDOM = require("react-dom");


var Card = function(props){
  return (
    <div className="card">{props.text}</div>
  );
};


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


var List = function(props){
  var list = [];
  for(var i = 0; i < props.cards.length; i++){
    list.push(<Card text={props.cards[i]}/>);
  }
  return(
    <div className="list">
      <h2>{props.title}</h2>
      {list}
      <form onSubmit={props.onAddSubmit}>
        <input type="text" onChange={props.onAddInputChanged} />
        <input type="submit" />
      </form>
    </div>
  );
}

var Board = function(props){
  var board = [];
  //for(var i = 0; i < props.lists.length; i++){
  for(var i = 0; i < 3; i++){
    board.push(<ListContainer title={"List "+i}/>);
  }
  return(
    <div className="board">
      <h1>{props.title}</h1>
      {board}
    </div>
  );
}

document.addEventListener("DOMContentLoaded", function(){
  var addInputChanged = function(){
    console.log("Input changed");
  }
  var addSubmit = function(event){
    event.preventDefault();
    console.log("Submitted");
  }
  var lists = [
    {
      title:"By The Beatles",
      cards: [{text:"Something"},{text:"Yesterday"}, {text:"Eight Days a Week"}],
      onAddInputChanged: addInputChanged,
      onAddSubmit: addSubmit
    },
    {
      title:"By Led Zepplin",
      cards: [{text:"Stairway to Heaven"},{text:"Kashmir"},{text:"Ramble On"}],
      onAddInputChanged: addInputChanged,
      onAddSubmit: addSubmit
    },
    {
      title: "By The Who",
      cards: [{text:"Pinball Wizard"},{text:"Baba O'Riley"},{text:"My Generation"}],
      onAddInputChanged: addInputChanged,
      onAddSubmit: addSubmit
    }
  ];
  ReactDOM.render(<Board title="Songs" />, document.getElementById("app"));
});
