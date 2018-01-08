export class Tamagotchi {
  constructor(){
    this.action;
    this.hungerLvl;
    this.happyLvl;
    this.cleanLvl;
    this.healthLvl;
  }

  whichAction(timesPushed){
    const action = {
      1 : this.feedMe(),
      2 : this.letsPlay(),
      3 : this.ohNoPoop(),
      4 : this.ouchieHalp()
    }
    this.action = action[timesPushed]
  }

  feedMe(parameter){
    this.hungerLvl = 20;
  });

  letsPlay(parameter){
    this.happyLvl = 20;
  });

  ohNoPoop(parameter){
    this.cleanLvl = 20;
  });

  ouchieHalp(parameter){
    this.healthLvl = 20;
  });

}
