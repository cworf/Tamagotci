(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Tamagotchi = exports.Tamagotchi = function () {
  function Tamagotchi() {
    _classCallCheck(this, Tamagotchi);

    this.foodLvl = 5; // between 15 and 20
    this.happyLvl = 5;
    this.healthLvl;
    this.screen = "default";
    this.canFeedSnax = true;
    this.canFeedMeelz = true;
  }

  _createClass(Tamagotchi, [{
    key: 'hearts',
    value: function hearts() {
      this.health();
      var heartIcon = '<i class="fa fa-heart"></i>';
      $('.happiness-scale').text("");
      for (var i = 0; i < this.healthLvl; i++) {
        $('.happiness-scale').append(heartIcon);
      }
    }
  }, {
    key: 'time',
    value: function time() {
      var _this = this;

      this.hearts();
      if (this.healthLvl <= 10) {
        console.log("Feed or play with me, please.");
      }
      setInterval(function () {
        _this.foodLvl -= 1;
        _this.happyLvl -= 1;
        _this.hearts();
        console.log(_this.healthLvl);
        if (_this.healthLvl <= 10) {
          console.log("Feed or play with me, please.");
        }
        console.log(_this.foodLvl);
        console.log(_this.happyLvl);
      }, 10000);
    }
  }, {
    key: 'feedMe',
    value: function feedMe(whatFood) {
      var _this2 = this;

      if (whatFood === 1 && this.canFeedSnax === true) {
        this.foodLvl += 5;
        this.canFeedSnax = false;
        setTimeout(function () {
          _this2.canFeedSnax = true;
        }, 10000);
      } else if (whatFood === 2 && this.canFeedMeelz === true) {
        this.foodLvl += 10;
        this.canFeedMeelz = false;
        setTimeout(function () {
          _this2.canFeedMeelz = true;
        }, 30000);
      } else {
        alert('Please select fuud for your tamagotchi!');
      }
    }
  }, {
    key: 'letsPlay',
    value: function letsPlay() {
      this.happyLvl += 5;
    }
  }, {
    key: 'health',
    value: function health() {
      var status = this.foodLvl + this.happyLvl;
      console.log(status);
      this.healthLvl = status;
    }
  }]);

  return Tamagotchi;
}();

$(function () {
  var aClicks = 0;
  var pet = new Tamagotchi();
  var feeding = false;
  pet.time();

  //------ Count number of clicks, cycles from 1 - 4 or 1 - 2 depending on screen -----//
  $('#btn-a').click(function () {
    if (aClicks === 2) {
      aClicks = 1;
    } else {
      aClicks++;
    }
    var selector = '#' + pet.screen + ' .selector:nth-of-type(' + aClicks + ')';
    console.log('#' + pet.screen + ' .selector:nth-child(' + aClicks + ')');
    $(selector).show();
    $(selector).siblings().hide();
  });

  //-------Upon B Click-------//
  $('#btn-b').click(function () {
    console.log("clicked");
    if (aClicks != 0) {
      if (pet.screen === "default" && aClicks === 1) {
        pet.screen = "pickFood";
        showScreen();
        aClicks = 0;
      } else if (pet.screen === "default" && aClicks === 2) {
        pet.letsPlay();
        aClicks = 0;
      } else if (pet.screen === "pickFood") {
        pet.feedMe(aClicks);
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

  function showScreen() {
    console.log(feeding);
    if (feeding === true) {
      $('#eating-bk').show();
      setTimeout(function () {
        $('#eating-bk').hide();

        feeding = false;
      }, 4000);
      pet.screen = "default";
    }
    console.log("showing" + pet.screen);
    $('#' + pet.screen + '-bk').show();
    $('#' + pet.screen + '-bk').siblings().not('#eating-bk').hide();
  }

  $('form').submit(function (event) {
    event.preventDefault();
    var city = $('#location').val();
    var cityName = $('#location').text();

    $('#location').val("");
    $.ajax({
      url: 'http://api.openweathermap.org/data/2.5/weather?id=' + city + '&appid=b793c7a59cbbc1de5d5072622f3c4e6d',
      type: 'GET',
      data: {
        format: 'json'
      },
      success: function success(response) {
        $('.showHumidity').text('The humidity in ' + cityName + ' is ' + response.main.humidity + '%');
        $('.showTemp').text('The temperature in Kelvins is ' + response.main.temp + '.');
      },
      error: function error() {
        $('#errors').text("There was an error processing your request. Please try again.");
      }
    });
  });
});

},{}]},{},[1]);
