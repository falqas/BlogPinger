'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
  .controller('LandingPageController', [function() {

  }])
  .controller('WaitlistController', ['$scope', '$firebase', function ($scope, $firebase) { // injecting Firebase service into controller
    // conect $scope.parties to live firebase data
    var partiesRef = new Firebase('https://faisal-mvp.firebaseio.com/parties'); // created a reference to firebase application
    $scope.parties = $firebase(partiesRef); // passed that reference into firebase service and set that to $scope.parties. this does 2 things for us: 1) its a representation of our data, 2) gives us methods we can use to interact with that data, as we did with $scope.parties.$add
  // $scope.parties is an obj to store data from the waitlist form
    $scope.newParty = {name: '', phone: '', size: ''};
    $scope.saveParty = function() {  // func to save a new party to the waitlist
      $scope.parties.$add($scope.newParty);
      $scope.newParty = {name: '', phone: '', size: ''};
    }

    // array of randomized writing prompts
    var prompts = [
      '"What was the hardest part of your day?"',
      '"What was your most recent a-ha moment?"',
      '"How have you enjoyed connecting with your classmates?"',
      '"How are you feeling today?"',
      '"What was one of your most humbling experiences?"',
      '"What are you grateful for today? #blessed"',
      '"What was the high point of your week?"',
      '"What was the low point of your week?"',
      '"How do you like living in the Bay Area?"',
      '"What is your current experience of the MKS program?"',
      '"What is a recent concept you are trying to understand?"',
      '"Can you explain recursion? Explain recursion? Explain recursion?"'
    ];

    var randomPrompt = function(prompts) {
      return prompts[Math.floor(prompts.length * Math.random())];
    }

    // func to send text message to a party
    $scope.sendTextMessage = function(party) {
      var textMessageRef = new Firebase('http://faisal-mvp.firebaseio.com/textMessages');
      var textMessages = $firebase(textMessageRef);
      var newTextMessage = {
        phoneNumber: party.phone,
        size: party.size,
        name: party.name,
        prompt: randomPrompt(prompts)
      };
      textMessages.$add(newTextMessage);
    }



  }]);

// scope - an obj shared bw your js and html