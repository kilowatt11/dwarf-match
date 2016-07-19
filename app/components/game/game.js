; (function () {
  angular.module('dwarfMatch')
    .component('gameComponent', {
      controller: GameController,
      templateUrl: 'app/components/game/game.html'
    })

  function GameController($timeout, GameService) {
    var gc = this

    gc.deck = GameService.getDeck()

    gc.card1 = null;
    gc.card2 = null;

    gc.attempts = 0;
    gc.totalMatches = 0;
    gc.victory = false;


    gc.selectCard = function (card) {
      // debugger;
      if (card.show == true || gc.card1 && gc.card2) {
        return
      }
 
      if (gc.card1 == null) {
        gc.card1 = card
        gc.card1.show = true;
        return
      } else {
      gc.card2 == null
        gc.card2 = card;
        gc.card2.show = true
        var match = isMatch(gc.card1, gc.card2)
      }

      debugger;
      if (match) {
        checkVictory();
        resetCards();
      } else {
        $timeout(function () {
          gc.card1.show = false;
          gc.card2.show = false;
          resetCards();
        }, 1000);

      }
    }
    function resetCards() {
      // debugger
      gc.card1 = null;
      gc.card2 = null;
      gc.attempts++;
    }

    function isMatch(card1, card2) {
      if (card1.title === card2.title) {
        gc.totalMatches++;
        return true;
      }
      return false;

    }
    // Finally, write a local checkVictory function that will set gc.victory = true if the totalMatches 
    // is half the length of the deck. Tip: the game deck array is available at gc.deck. When you're done
    // refer back to readme.md
    function checkVictory() {
      debugger;
      var length = gc.deck.length / 2
      if (gc.totalMatches == length) {
        console.log(length)
        gc.victory = true;
      }
    }
    // Bonus Challenge: Write a function on gc that can reset the game and add a button that calls it

  }
} ())
