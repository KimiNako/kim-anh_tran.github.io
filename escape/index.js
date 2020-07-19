var app = angular.module('escape-codinsa', []);
app.controller("Ctrl", Ctrl)



function Ctrl($scope) {
  let countDownDate = new Date().getTime() + 2700000;
  
  $scope.gameOver = false
  $scope.hasUSBKey = false
  $scope.isOpened = false
  $scope.hasInsertUSBKey = false
  $scope.computerA = {id: 'computerA', activated: false, essais: 3, displayScreen: false, displayKey: false}
  $scope.computerB = {id: 'computerB', activated: false, essais: 3, displayScreen: false, displayKey: false}
  $scope.door = {id: 'door', essais: 3}

  $scope.inspect = function (element) {
    const all = [...document.querySelectorAll('.inspection')]
    all.forEach(e => e.style.display = 'none')
    all.find(e => e.id === `inspect_${element}`).style.display = 'block'
  }

  $scope.validateForm = function (computer) {
    if (computer.value != null) {
      if ((computer.id === 'computerA' && computer.value === "41") || 
        (computer.id === 'computerB' && computer.value === "6183") ||
        (computer.id === 'door' && computer.value === "2010")) {
          computer.activated = true
          if (computer.id === 'door') {
            $scope.isOpened = true
          }
      } else {
        if (computer.essais > 0) {
          computer.essais--
          if (computer.essais != 0 && computer.id !== 'door') {
            countDownDate -=300000
          } else if (computer.essais != 0 && computer.id === 'door') {
            countDownDate -=600000
          } else {
            $scope.gameOver = true
          }
        } else {
          $scope.gameOver = true
        }
      }
    }
  }

  $scope.displayScreen = function (computer) {
    computer.displayKey = false
    computer.displayScreen = computer.id === 'computerA' || computer.id === 'computerB'
  }

  $scope.insertUSBKey = function (computer) {
    computer.displayScreen = false
    computer.displayKey = computer.id === 'computerA' || computer.id === 'computerB'
    if (computer.id === 'computerB') {
      $scope.hasInsertUSBKey = true
    }
  }

  $scope.getUSBKey = function () {
    $scope.hasUSBKey = true
  }
  
  setInterval(function() {
    const now = new Date().getTime();
    const distance = countDownDate - now;

    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    if (!$scope.isOpened) {
      document.getElementById("timer").innerHTML = minutes + "m " + seconds + "s "
      $scope.timer = (44 - minutes) + "m " + (60 - seconds) + "s "
    } else {
      document.getElementById("timer").innerHTML = ""
    }

    if (distance < 0  || $scope.gameOver) {
      $scope.gameOver = true
      document.getElementById("timer").innerHTML = "EXPIRED"
    }
  }, 1000);
}



