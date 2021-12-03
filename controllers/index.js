const path = require("path");
const controllers = {}
const normalizedPath = path.join(__dirname, '.')
require('fs').readdirSync(normalizedPath).forEach(file => {
  if (file !== 'index.js') {
    const controller = require(`./${file}`)
    controllers[path.parse(file).name] = controller
  }
})

module.exports = controllers

