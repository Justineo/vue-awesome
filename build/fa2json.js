const fs = require('fs')
const path = require('path')
const rimraf = require('rimraf')
const mkdirp = require('mkdirp')

const SVG_DIR = path.resolve(__dirname, '../assets/svg')
rimraf.sync(SVG_DIR)

const fa2svg = require('fa2svg').default
fa2svg(SVG_DIR)

let icons = {}

function extractIcons (namespace = '', toNamespace = namespace) {
  let prefix = toNamespace ? `${toNamespace}/` : ''
  fs
    .readdirSync(path.join(SVG_DIR, namespace), 'utf8')
    .filter(file => {
      return !fs.statSync(path.resolve(SVG_DIR, namespace, file)).isDirectory()
    })
    .forEach(function (file) {
      let filePath = path.resolve(SVG_DIR, namespace, file)

      let dirname = path.dirname(filePath)
      if (!fs.existsSync(dirname)) {
        mkdirp.sync(dirname)
      }

      let svg = fs.readFileSync(filePath, 'utf8')
      let sizeMatch = svg.match(/ viewBox="0 0 (\d+(?:\.\d+)?) (\d+(?:\.\d+)?)"/)
      let dMatch = svg.match(/ d="([^"]+)"/)
      if (!sizeMatch || !dMatch) {
        return
      }
      let icon = {}
      let name = file.replace(/^fa-/, '').replace(/\.svg$/, '')
      icons[prefix + name] = {
        width: parseInt(sizeMatch[1], 10),
        height: parseInt(sizeMatch[2], 10),
        paths: [
          {
            d: dMatch[1]
          }
        ]
      }
    })
}

extractIcons('', 'regular')
extractIcons('brands')
extractIcons('solid', '')
fs.writeFileSync(
  path.resolve(__dirname, '../assets/icons.json'),
  JSON.stringify(icons, null, '  '),
  'utf8'
)
