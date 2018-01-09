export class Tamagotchi {
  constructor(){
    this.foodLvl = 5; // between 15 and 20
    this.happyLvl = 5;
    this.healthLvl = this.health(this.foodLvl, this.happyLvl);
    this.screen = "default";
    this.canFeedSnax = true;
    this.canFeedMeelz = true;
  }
  //
  // whichAction(timesPushed){
  //   const action = {
  //     1 : this.feedMe(),
  //     2 : this.letsPlay(),
  //     3 : this.ohNoPoop(),
  //     4 : this.ouchieHalp()
  //   }
  //   return action[timesPushed]
  // }

  time(){
    setInterval( () => {
      this.foodLvl -= 1;
      this.healthLvl -= 1;
      this.happyLvl -= 1;
    }, 1000);
  }

  feedMe(whatFood){

    if (whatFood === 1 && this.canFeedSnax === true){
      this.foodLvl += 5;
      this.canFeedSnax = false;
      setTimeout(() => {
        this.canFeedSnax = true;
      }, 10000);
    } else if (whatFood === 2 && this.canFeedMeelz === true){
      this.foodLvl += 10;
      this.canFeedMeelz = false;
      setTimeout(() => {
        this.canFeedMeelz = true;
      }, 30000);
    } else {
      alert('Please select fuud for your tamagotchi!');
    }
  }

  letsPlay(){
    this.happyLvl = 20;
  }

  health(howMuchFood, howMuchHappy){

  }

}
