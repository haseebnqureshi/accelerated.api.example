#!/bin/bash

# Make sure to run this script as sudo su!

export DEBIAN_FRONTEND=noninteractive

echo "[accelerated/provisioners/node.sh] -- Installing node"

curl -sL https://deb.nodesource.com/setup_4.x | bash - > /dev/null
apt-get install nodejs -y > /dev/null

echo "[accelerated/provisioners/node.sh] -- Installing node build-essential"

apt-get install build-essential -y > /dev/null

echo "[accelerated/provisioners/node.sh] -- Installing global npm packages"

echo "[accelerated/provisioners/node.sh] -- -- Installing make ..."
npm install make -g --loglevel=error

echo "[accelerated/provisioners/node.sh] -- -- Installing node-gyp ..."
npm install node-gyp -g --loglevel=error

echo "[accelerated/provisioners/node.sh] -- -- Installing forever ..."
npm install forever -g --loglevel=error

echo "[accelerated/provisioners/node.sh] -- -- Installing bower ..."
npm install bower -g --loglevel=error

echo "[accelerated/provisioners/node.sh] -- Installing application"

npm install --loglevel=error > /dev/null

echo "[accelerated/provisioners/node.sh] -- Finished installing!"
