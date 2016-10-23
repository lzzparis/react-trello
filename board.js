var React = require("react");

var ListContainer = require("./listContainer");

var Board = function(props){
  var board = [];
  //for(var i = 0; i < props.lists.length; i++){
  for(var i = 0; i < 3; i++){
    board.push(<ListContainer key={"list-container-"+i} title={"List "+i}/>);
  }
  return(
    <div className="board">
      <h1>{props.title}</h1>
      {board}
    </div>
  );
}
module.exports = Board;
