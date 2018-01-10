




$(function(){
  let aClicks = 0;
  const pet = new Tamagotchi();
  let feeding = false;
  pet.time();

  //------ Count number of clicks, cycles from 1 - 4 or 1 - 2 depending on screen -----//
  $('#btn-a').click(function(){
    if (aClicks === 2) {
      aClicks = 1;
    } else {
      aClicks++;
    }
    const selector = `#${pet.screen} .selector:nth-of-type(${aClicks})`
    console.log(`#${pet.screen} .selector:nth-child(${aClicks})`);
    $(selector).show();
    $(selector).siblings().hide();
  });

  //-------Upon B Click-------//
  $('#btn-b').click(function(){
    console.log("clicked");
    if (aClicks != 0) {
      if (pet.screen === "default" && aClicks === 1) {
        pet.screen = "pickFood";
        showScreen();
        aClicks = 0;
      } else if (pet.screen === "default" && aClicks === 2) {
        pet.letsPlay();
        aClicks = 0;
      } else if (pet.screen === "pickFood"){
        pet.feedMe(aClicks)
        feeding = true;
        console.log(feeding);
        showScreen();
      }

      showScreen(); //changes screen to reflect current location within interface
      aClicks = 0; //reset click count to 0 after done
    } else {
      alert('please select a task');
    }
    $('.selector').hide();
    pet.hearts();
  });

  function showScreen(){
    console.log(feeding);
    if (feeding === true) {
      $('#eating-bk').show();
      setTimeout(function(){
        $('#eating-bk').hide();

        feeding = false;
      }, 4000);
      pet.screen = "default";
    }
    console.log("showing" + pet.screen);
    $(`#${pet.screen}-bk`).show();
    $(`#${pet.screen}-bk`).siblings().not('#eating-bk').hide();
  }



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
