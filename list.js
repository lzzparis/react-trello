var React = require("react");

var Card = require("./card");

var List = function(props){
  var list = [];
  for(var i = 0; i < props.cards.length; i++){
    list.push(<Card key={"list-"+i} text={props.cards[i]}/>);
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


module.exports = List;
