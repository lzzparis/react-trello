var React = require("react");
var ReactDOM = require("react-dom");


var Card = React.createClass({
  render: function(){
    return (
      <div className="card">{this.props.text}</div>
    );
  }
});

var List = React.createClass({
  render: function(){
    var list = [];
    for(var i = 0; i < 3; i++){
      list.push(<Card text={this.props.cards[i].text}/>);
    }
    return(
      <div className="list">
        <h2>{this.props.title}</h2>
        {list}
      </div>
    );
  }
})

var Board = React.createClass({
  render: function(){
    var board = [];
      for(var i = 0; i < 3; i++){
      board.push(<List title={this.props.lists[i].title} cards={this.props.lists[i].cards}/>);
    }
    return(
      <div className="board">
        <h1>{this.props.title}</h1>
        {board}
      </div>
    );
  }
})

document.addEventListener("DOMContentLoaded", function(){
  var lists = [
    {
      title:"By The Beatles",
      cards: [{text:"Something"},{text:"Yesterday"}, {text:"Eight Days a Week"}]
    },
    {
      title:"By Led Zepplin",
      cards: [{text:"Stairway to Heaven"},{text:"Kashmir"},{text:"Ramble On"}]
    },
    {title: "By The Who",
     cards: [{text:"Pinball Wizard"},{text:"Baba O'Riley"},{text:"My Generation"}]
    }
  ];
  ReactDOM.render(<Board title="Songs" lists={lists}/>, document.getElementById("app"));
});
