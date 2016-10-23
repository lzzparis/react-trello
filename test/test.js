var React = require("react");
var TestUtils = require("react-addons-test-utils");
var should = require("chai").should();

var Card = require("../card");
var List = require("../list");
var ListContainer = require("../listContainer");
var Board = require("../board");

describe("Card component", function(){
  it("Renders a card", function(){
    var text = "Example text";
    var renderer = TestUtils.createRenderer();
    renderer.render(<Card text={text}/>);
    var result = renderer.getRenderOutput(); 
    
    TestUtils.isElementOfType(result,"Card");
  });
});

describe("List component", function(){
  it("REnders a list", function(){
    var title = "Happy cat";
    var cards = ["apple","banana","carrot","daikon"];
    var onAddSubmit = function(){return "onAddSubmit";};
    var onAddInputChanged = function(){return "onAddInputChanged";};

    var renderer = TestUtils.createRenderer();
    renderer.render(<List title={title} 
                          cards={cards} 
                          onAddSubmit={onAddSubmit}
                          onAddInputChanged={onAddInputChanged}/>);

    var result = renderer.getRenderOutput();

    TestUtils.isElementOfType(result,"List");
    result.props.className.should.equal("list");

    var head2 = result.props.children[0];
    head2.type.should.equal("h2");
    head2.props.children.should.equal(title);

    var listArray = result.props.children[1];    
    for(var i=0 ; i < cards.length; i++){
      listArray[i].props.text.should.equal(cards[i]);
    }
      

    var form = result.props.children[2];
    form.type.should.equal("form");    
    form.props.onSubmit.should.equal(onAddSubmit);

    var textInput = form.props.children[0];
    textInput.props.type.should.equal("text");
    textInput.props.onChange.should.equal(onAddInputChanged);
    var submitInput = form.props.children[1];
    submitInput.props.type.should.equal("submit");
  });
});

describe("ListContainer component", function(){
  it("Renders a ListContainer", function(){
    var title = "Happy cat";
    var cards = ["apple","banana","carrot","daikon"];
    var onAddSubmit = function(){return "onAddSubmit";};
    var onAddInputChanged = function(){return "onAddInputChanged";};
  
    var renderer = TestUtils.createRenderer();
    renderer.render(<ListContainer title={title} />);
    var result = renderer.getRenderOutput();

    TestUtils.isElementOfType(result,"List");
    result.props.title.should.equal(title);
    
    //TODO testing functions

  });
});

describe("Board component", function(){
  it("Renders Board component", function(){
    var title = "Happy cat";
    
    var renderer = TestUtils.createRenderer();
    renderer.render(<Board title={title}/>);
    var result = renderer.getRenderOutput();
  
    result.props.className.should.equal("board");
    var head1 = result.props.children[0];
    head1.type.should.equal("h1");
    head1.props.children.should.equal(title)
    
    var board = result.props.children[1];
    for(var i = 0; i < board.length; i++){
      TestUtils.isElementOfType(board[i],"ListContainer");
      board[i].props.title.should.equal("List "+i);
    }

    

  });
});
