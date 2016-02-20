#!/bin/bash

# Make sure to run this script as sudo su!

export DEBIAN_FRONTEND=noninteractive

echo "[accelerated/provisioners/git.sh] -- Installing git"

apt-get install git -y > /dev/null

echo "[accelerated/provisioners/git.sh] -- Finished installing!"
