rm -rf ./dist
npm run build;
cd client/
npm run build;
cd ..
mkdir dist/public/
cp -a client/build/. dist/public/
rm -rf client/dist/
