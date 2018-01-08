export class Tamagotchi {
  constructor(){
    this.foodLvl = Math.floor(Math.random() * 15 + 1); // between 15 and 20
    this.happyLvl = Math.floor(Math.random() * 15 + 1);
    this.healthLvl = health(this.foodLvl, this.happyLvl);
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

  feedMe(whatFood){

    if (whatFood === 1 && canFeedSnax === true){
      this.foodLvl += 5;
      this.canFeedSnax = false;
      setTimeout(() => {
        this.canFeedSnax = true;
      }, 10000);
    } else if (whatFood === 2 && canFeedMeelz === true){
      this.foodLvl += 10;
      this.canFeedMeelz = false;
      setTimeout(() => {
        this.canFeedMeelz = true;
      }, 30000);
    }
  }

  letsPlay(){
    this.happyLvl = 20;
  }

  health(howMuchFood, howMuchHappy){

  }

}
