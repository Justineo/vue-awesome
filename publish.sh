npm run icons
npm run build
mkdir components
cp src/components/Icon.js components/
npm publish
rm -rf ./components
rm -rf ./icons
