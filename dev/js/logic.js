export class Tamagotchi {
  constructor(){
    this.foodLvl = 5; // between 15 and 20
    this.happyLvl = 5;
    this.healthLvl = this.health();
    this.screen = "default";
    this.canFeedSnax = true;
    this.canFeedMeelz = true;
  }


  time(){
    if (this.healthLvl <= 10) {
      alert("Feed or play with me, please.");
    }
    setInterval( () => {
      this.foodLvl -= 1;
      this.happyLvl -= 1;
      if (this.healthLvl <= 10) {
        console.log("Feed or play with me, please.");
      }
      console.log(this.foodLvl);
      console.log(this.happyLvl);
    }, 60000);
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
    this.happyLvl += 5;
  }

  health(){
    const status = this.foodLvl + this.happyLvl;
    return status;
  }

}
