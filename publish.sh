npm run icons
npm run build
cp -r ./src/icons .
mkdir components
cp dist/Icon.js components/
rm index.js
npm publish
rm -rf ./components
rm -rf ./icons
