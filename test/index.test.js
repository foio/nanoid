var nanoid = require('../')
var url = require('../url')

it('generates URL-friendly IDs', function () {
  for (var i = 0; i < 10; i++) {
    var id = nanoid()
    expect(id.length).toEqual(22)
    for (var j = 0; j < id.length; j++) {
      expect(url.indexOf(id[j])).not.toEqual(-1)
    }
  }
})
