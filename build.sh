rm -rf ./dist
ls ./client/
webpack --mode production --config server/webpack.config.js;
cd ./client/
npm run build-client;
cd ..

cp -r ./client/build/. ./dist/public/
rm -rf ./client/build/


