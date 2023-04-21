const middleware = {}

middleware['authenticated'] = require('../middleware/authenticated.js')
middleware['authenticated'] = middleware['authenticated'].default || middleware['authenticated']

middleware['route-validator'] = require('../middleware/route-validator.js')
middleware['route-validator'] = middleware['route-validator'].default || middleware['route-validator']

export default middleware
