var React = require("react");
var ReactDOM = require("react-dom");

var Card = require("card");
var List = require("list");
var ListContainer = require("listContainer");
var Board = require("board");



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


