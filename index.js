var React = require("react");
var ReactDOM = require("react-dom");


var Card = function(){
  var text = "This is a card";
  return (
    <div className="card">{text}</div>
  );
};

var List = function(){
  var list = [];
  for(var i = 0; i < 3; i++){
    list.push(<Card />);
  }
  return(
    <div className="list">{list}</div>
    <form><input type="text"><input type="submit"></form>
  );
}

var Board = function(){
  var board = [];
  for(var i = 0; i < 3; i++){
    board.push(<List />);
  }
  return(
    <div className="board">{board}</div>
  );
}

document.addEventListener("DOMContentLoaded", function(){
  ReactDOM.render(<Board />, document.getElementById("app"));
});
