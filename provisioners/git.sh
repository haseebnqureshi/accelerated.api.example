#!/bin/bash

# Make sure to run this script as sudo su!

export DEBIAN_FRONTEND=noninteractive

echo "[accelerated.api/provisioners/git.sh] -- Installing git"

apt-get update -y > /dev/null
apt-get install git -y > /dev/null

echo "[accelerated.api/provisioners/git.sh] -- Finished installing!"
