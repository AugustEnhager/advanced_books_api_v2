module.exports = (factory, Models) => {
  const normalizedPath = require('path').join(__dirname, '.')
  require('fs').readdirSync(normalizedPath).forEach(file => {
    if (file !== 'index.js') {
      require(`./${file}`)(factory, Models)
    }
  })
}