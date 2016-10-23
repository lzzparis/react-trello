var React = require("react");
var ReactDOM = require("react-dom");


var Card = function(props){
  return (
    <div className="card">{props.text}</div>
  );
};

var List = function(props){
  var list = [];
  for(var i = 0; i < 3; i++){
    list.push(<Card text={props.cards[i].text}/>);
  }
  return(
    <div className="list">
      <h2>{props.title}</h2>
      {list}
    </div>
  );
}

var Board = function(props){
  var board = [];
  for(var i = 0; i < 3; i++){
    board.push(<List title={props.lists[i].title} cards={props.lists[i].cards}/>);
  }
  return(
    <div className="board">
      <h1>{props.title}</h1>
      {board}
    </div>
  );
}

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
