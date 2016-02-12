#!/bin/bash

# Make sure to run this script as sudo su!

export DEBIAN_FRONTEND=noninteractive

echo "[accelerated.api/provisioners/node.sh] -- Installing node"

curl -sL https://deb.nodesource.com/setup_4.x | bash - > /dev/null
apt-get install nodejs -y > /dev/null

echo "[accelerated.api/provisioners/node.sh] -- Installing node build-essential"

apt-get install build-essential -y > /dev/null

echo "[accelerated.api/provisioners/node.sh] -- Installing global npm packages"

npm install make -g --loglevel=error > /dev/null
npm install node-gyp -g --loglevel=error > /dev/null
npm install forever -g --loglevel=error > /dev/null
npm install bower -g --loglevel=error > /dev/null
npm install nodemon -g --loglevel=error > /dev/null

echo "[accelerated.api/provisioners/node.sh] -- Installing application"

npm install --loglevel=error > /dev/null

echo "[accelerated.api/provisioners/node.sh] -- Finished installing!"
