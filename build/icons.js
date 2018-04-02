const fs = require('fs')
const path = require('path')
const mkdirp = require('mkdirp')
const rimraf = require('rimraf')
const icons = require('../assets/icons.json')

const MODULE_TPL = fs.readFileSync(
  path.resolve(__dirname, './icon.tpl'),
  'utf8'
)
const ICON_PATH = path.resolve(__dirname, '../src/icons')
rimraf.sync(ICON_PATH)

let indexModule = ''
let names = Object.keys(icons)
names.forEach(function (name) {
  let icon = {}
  icon[name] = icons[name]
  let filePath = path.join(ICON_PATH, `${name}.js`)
  let dirname = path.dirname(filePath)

  if (!fs.existsSync(dirname)) {
    mkdirp.sync(dirname)
  }
  fs.writeFileSync(
    filePath,
    MODULE_TPL
        .replace('${namespace}', name.indexOf('/') === -1 ? '' : '../')
        .replace('${icon}', JSON.stringify(icon))
  )
  indexModule += `import './${name}'\n`
})

fs.writeFileSync(ICON_PATH + '/index.js', indexModule)
console.log(names.length + ' icon modules generated.')
