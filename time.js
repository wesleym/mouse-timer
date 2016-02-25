// TODO: replace this whole file with Moment.js

/**
 * Converts a partial time (with no time zone) to a Date object in the current
 * time zone.
 *
 * @param {string} partial A partial time string. This is the format of the
 *   value of an input of type datetime-local.
 */
function partialToLocal(partial) {
  var localAsUTC = new Date(input.value + 'Z')
  var manualCorrection = new Date(input.value).getTimezoneOffset() * 60 * 1000

  return new Date(+localAsUTC + manualCorrection)
}

function createLocalDatetime(date) {
  return date.getFullYear()
    + '-'
    + pad(date.getMonth() + 1, 2)
    + '-'
    + pad(date.getDate(), 2)
    + 'T'
    + pad(date.getHours(), 2)
    + ':'
    + pad(date.getMinutes(), 2)
    + ':'
    + pad(date.getSeconds(), 2)
    + '.'
    + date.getMilliseconds()
}
