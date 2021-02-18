let firestore

function setFirestore(_firestore) {
  firestore = _firestore
}

function getFirestore() {
  return typeof firestore === 'function' ? firestore() : { firestore }
}

module.exports = {
  getFirestore,
  setFirestore
}
