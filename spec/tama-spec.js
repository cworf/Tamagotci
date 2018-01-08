import { Tamagotchi } from './../dev/js/logic.js';


describe(Tamagotchi, function(){

  it( 'should return the task selected after number of click', function(){
    const newThing = new Tamagotchi();
    newThing.whichAction(3);
    expect(newThing.action).toEqual("Clean");

  });//spec

});//suite
