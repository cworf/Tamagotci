export class Tamagotchi {
  constructor(){
    this.action;
    this.hungerLvl;
    this.happyLvl;

  }

  whichAction(timesPushed){
    const action = {
      1 : "Feed",
      2 : "Play",
      3 : "Clean",
      4 : "Heal"
    }
    this.action = action[timesPushed]
  }

}
