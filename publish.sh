yarn icons
yarn build
cp -r ./src/* .
rm index.js
yarn publish
rm -rf ./components
rm -rf ./icons
