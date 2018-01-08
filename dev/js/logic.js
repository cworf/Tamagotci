export class Tamagotchi {
  constructor(btnA, btnB, btnC){
    this.action = this.whichAction(btnA);
  }

  whichAction(timesPushed){
    const action = {
      1 : "Feed",
      2 : "Play",
      3 : "Clean",
      4 : "Heal"
    }
    return action[timesPushed]
  }

}
