timer = document.querySelector('#timer')
input = document.querySelector('#input')

function refresh() {
  var flooringFraction, itemFraction
  var remainingMillis = destinationDate - Date.now()
  flooringFraction = 1000
  itemFraction = 60
  var seconds = Math.floor(remainingMillis / flooringFraction) % itemFraction
  flooringFraction *= itemFraction
  itemFraction = 60
  var minutes = Math.floor(remainingMillis / flooringFraction) % itemFraction
  flooringFraction *= itemFraction
  itemFraction = 24
  var hours = Math.floor(remainingMillis / flooringFraction) % itemFraction
  flooringFraction *= itemFraction
  var days = Math.floor(remainingMillis / flooringFraction)
  timer.innerText = days + ' ' + hours + ':' + pad(minutes, 2) + ':' + pad(seconds, 2)
}

function destinationUpdated() {
  destinationDate = partialToLocal(input.value)
  localStorage.setItem('destinationDate', destinationDate)
  refresh()
}

function init() {
  if (localStorage.destinationDate) {
    destinationDate = new Date(localStorage.destinationDate)
    input.value = createLocalDatetime(destinationDate)
  } else {
    destinationDate = partialToLocal(input.value)
  }
}

function pad(a, digits) {
  var result = '' + a
  if (result.length < digits) {
    return '0'.repeat(digits - result.length) + result;
  } else {
    return a
  }
}

init()
refresh()
setInterval(refresh, 500)
input.addEventListener('input', destinationUpdated)
