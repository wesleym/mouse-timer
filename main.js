

destinationDate = new Date('22 Mar 2016 16:45:00 -0700')
timer = document.querySelector('#timer')

function refresh() {
  var flooringFraction, itemFraction
  var remainingMillis = destinationDate - Date.now()
  flooringFraction = 1000
  itemFraction = 60
  var seconds = Math.floor(remainingMillis / flooringFraction) % itemFraction
  if (seconds < 10) {
    seconds = '0' + seconds
  }
  flooringFraction *= itemFraction
  itemFraction = 60
  var minutes = Math.floor(remainingMillis / flooringFraction) % itemFraction
  if (minutes < 10) {
    minutes = '0' + minutes
  }
  flooringFraction *= itemFraction
  itemFraction = 24
  var hours = Math.floor(remainingMillis / flooringFraction) % itemFraction
  flooringFraction *= itemFraction
  var days = Math.floor(remainingMillis / flooringFraction)
  timer.innerText = days + ' ' + hours + ':' + minutes + ':' + seconds
}

refresh()
setInterval(refresh, 500)
