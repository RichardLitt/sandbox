var PouchDB = require('pouchdb')
var db = new PouchDB('sandbox')

db.put({'_id': 'kitten'})

function saveSelection (documentId, selection) {
  console.log('Inside saveSelection')

  db.get('kitten').then(function (value) {
    console.log('value', value)

    /* Instantiate the object if it doesn't exist yet */
    value = value || {}
    value._id = 'kitten'

    /* Add in the selection to the selections array */
    value.selections = value.selections || []
    value.selections.push(selection)

    /* Get rid of prototypes so we can put this to the database */
    value = JSON.parse(JSON.stringify(value))

    console.log('value', value)
    return db.put(value)
  }).then(function (response) {
    console.log('response', response)

  }).catch(function (err) {
    console.log(err)
  })
}

saveSelection('kitten', {'tree': 'tree'})
