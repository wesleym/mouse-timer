timer = document.querySelector('#timer')
input = document.querySelector('#input')
localFormat = 'YYYY-MM-DDTHH:mm:ss'

function refresh() {
  var remaining = moment.duration(destinationDate - moment.now())
  timer.innerText = remaining.days() + ' ' + remaining.hours() + ':' + pad(remaining.minutes(), 2) + ':' + pad(remaining.seconds(), 2)
}

function destinationUpdated() {
  destinationDate = moment(input.value)
  localStorage.setItem('destinationDate', destinationDate.format())
  refresh()
}

function init() {
  if (localStorage.destinationDate) {
    destinationDate = moment(localStorage.destinationDate)
    input.value = destinationDate.format(localFormat)
  } else {
    destinationDate = moment(input.value)
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
