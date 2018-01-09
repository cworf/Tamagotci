$(function(){
  let aClicks = 0;
  const pet = new Tamagotchi();
  pet.time();

  //------ Count number of clicks, cycles from 1 - 4 or 1 - 2 depending on screen -----//
  $('#btn-a').click(function(){
    if (aClicks === 2) {
      aClicks = 1;
    } else {
      aClicks++;
    }
  });

  //-------Upon B Click-------//
  $('#btn-b').click(function(){
    if (aClicks != 0) {
      if (pet.screen === "default" && aClicks === 1) {
        pet.screen = "pickFood";
        printScreen();
        aClicks = 0;
      } else if (pet.screen === "default" && aClicks === 2) {
        letsPlay();
        aClicks = 0;
      } else if (pet.screen === "pickFood"){
        feedMe(aClicks)
        pet.screen = "default";
        printScreen();
      }

      pet.whichAction(aClicks); //do the selected action
      printScreen(); //changes screen to reflect current location within interface
      aClicks = 0; //reset click count to 0 after done
    } else {
      alert('please select a task');
    }
  });




  $('form').submit(function(event) {
    event.preventDefault();
      const city = $('#location').val();
      const cityName = $('#location').text();

      $('#location').val("");
      $.ajax({
        url: `http://api.openweathermap.org/data/2.5/weather?id=${city}&appid=b793c7a59cbbc1de5d5072622f3c4e6d`,
        type: 'GET',
        data: {
          format: 'json'
        },
        success: function(response) {
          $('.showHumidity').text(`The humidity in ${cityName} is ${response.main.humidity}%`);
          $('.showTemp').text(`The temperature in Kelvins is ${response.main.temp}.`);
        },
        error: function() {
          $('#errors').text("There was an error processing your request. Please try again.")
        }
      });

    });




 });
