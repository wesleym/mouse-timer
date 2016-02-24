timer = document.querySelector('#timer')
input = document.querySelector('#input')

destinationDate = new Date(input.value)

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
  destinationDate = new Date(input.value)
  localStorage.setItem('destinationDate', destinationDate.toISOString())
  refresh()
}

function init() {
  if (localStorage.destinationDate) {
    var isoString = localStorage.destinationDate
    destinationDate = new Date(isoString)
    console.log(createLocalDatetime(destinationDate))
    input.value = createLocalDatetime(destinationDate)
  }
}

function createLocalDatetime(date) {
  return date.getFullYear() + '-' + pad(date.getMonth() + 1, 2) + '-' + pad(date.getDate(), 2) + 'T' + pad(date.getHours(), 2) + ':' + pad(date.getMinutes(), 2) + ':' + pad(date.getSeconds(), 2) + '.' + date.getMilliseconds()
}

function pad(a, digits) {
  var result = '' + a
  if (result.length < digits) {
    return '0'.repeat(digits - result.length) + result;
  } else {
    return result
  }
}

init()
refresh()
setInterval(refresh, 500)
input.addEventListener('input', destinationUpdated)
