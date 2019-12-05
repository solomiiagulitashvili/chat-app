rm -rf ./dist
webpack --mode production --config server/webpack.config.js;
cd ./client/
npm install;
npm run build-client;
cd ..
cp -r ./client/build/. ./dist/public/
rm -rf ./client/build/
rm -rf ./client/node_modules


