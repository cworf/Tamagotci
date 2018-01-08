import { Tamagotchi } from './../dev/js/logic.js';


describe(Tamagotchi, function(){

  it( 'should run the function associated with number of button a pushes', function(){
    const newThing = new Tamagotchi();
    newThing.whichAction(3);
    expect(newThing.hungerLvl).toEqual(20);

  });//spec

});//suite
