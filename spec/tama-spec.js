import { Tamagotchi } from './../dev/js/logic.js';

beforeEach(function() {
  jasmine.clock().install();
});

afterEach(function() {
  jasmine.clock().uninstall();
});

describe( "Tamagotchi" , function(){

  it( 'should increase food level', function(){
    const tama = new Tamagotchi();
    tama.feedMe(2);
    expect(tama.foodLvl).toEqual(15);
  }); //spec

  it('should turn ability to feed snacks off for 10 seconds', function(){
    const tama = new Tamagotchi();
    tama.feedMe(1);
    expect(tama.canFeedSnax).toBeFalsy();

    jasmine.clock().tick(10001);
    expect(tama.canFeedSnax).toBeTruthy();

  });

  it('should turn ability to feed snacks off for 30 seconds', function(){
    const tama = new Tamagotchi();
    tama.feedMe(2);
    expect(tama.canFeedMeelz).toBeFalsy();
    console.log(tama.canFeedMeelz);
    setTimeout(function(){
      console.log(tama.canFeedMeelz);
    }, 3000);

  });

  it('should decrease food, health and happy levels every minute by 1 point', function(){
    const tama = new Tamagotchi();
    tama.time();
    jasmine.clock().tick(1001);
    expect(tama.foodLvl).toEqual(4);
  });

});//suite
