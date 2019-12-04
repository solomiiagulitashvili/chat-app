rm -rf ./dist
webpack --mode production --config server/webpack.config.js;
cd client/
npm run build-client;
cd ..
cp  client/build/ dist/public/
rm -rf client/build/


