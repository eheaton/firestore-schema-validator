const isDateBefore = require('date-fns/isBefore')
const isDateAfter = require('date-fns/isAfter')
const { getFirestore } = require('./firestore')

const FIRESTORE_TYPES = [
  'Array',
  'Map',
  'Boolean',
  'Number',
  'DocumentReference',
  'GeoPoint',
  'String',
  'Timestamp',
]

const isAfter = (date, value) => isDateAfter(date, value)

const isAny = value =>
  isArray(value)
  || isBoolean(value)
  || isDocumentReference(value)
  || isGeoPoint(value)
  || isMap(value)
  || isNumber(value)
  || isString(value)
  || isTimestamp(value)
  || isNull(value)

const isArray = value =>
  Array.isArray(value)

const isBefore = (date, value) => isDateBefore(date, value)

const isBoolean = value =>
  typeof value === 'boolean'

const isDocumentReference = value =>
  value instanceof getFirestore().DocumentReference

const isGeoPoint = value =>
  value instanceof getFirestore().GeoPoint

const isInRange = (min, max, value) =>
  min <= value
  && value <= max

const isInteger = value =>
  isNumber(value) && Number.isInteger(value)

const isMap = value =>
  typeof value === 'object'
  && value !== null
  && value.constructor instanceof value.constructor

const isMatching = (regex, value) =>
  regex.test(value)

const isNull = value =>
  value === null

const isNumber = value =>
  typeof value === 'number'
  && !isNaN(value)

const isString = value =>
  typeof value === 'string'

const isTimestamp = value =>
  value instanceof getFirestore().Timestamp

module.exports = {
  isAfter,
  isAny,
  isArray,
  isBefore,
  isBoolean,
  isDocumentReference,
  isGeoPoint,
  isInRange,
  isInteger,
  isMap,
  isMatching,
  isNull,
  isNumber,
  isString,
  isTimestamp,
  FIRESTORE_TYPES,
}
