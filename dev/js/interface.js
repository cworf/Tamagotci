$(function(){
  let aClicks = 0;
  const pet = new Tamagotchi()
  $('#btn-a').click(function(){
    aClicks++;
  });
  $('#btn-b').click(function(){
    if (aClicks !=0) {
      pet.whichAction(aClicks);

    } else {
      alert('please select a task');
    }
  });
});
