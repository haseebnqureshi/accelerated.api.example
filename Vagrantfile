# -*- mode: ruby -*-
# vi: set ft=ruby :

# Vagrantfile API/syntax version. Don't touch unless you know what you're doing!
VAGRANTFILE_API_VERSION = "2"

$script = <<SCRIPT
	sudo su
	apt-get clean -y
	apt-get update -y
	bash ./provisioners/git.sh
	bash ./provisioners/node.sh
	exit
SCRIPT

Vagrant.configure(VAGRANTFILE_API_VERSION) do |config|

	config.vm.box = "ubuntu/trusty64"
	config.vm.network :private_network, ip: '192.168.80.200'
	config.vm.synced_folder './', '/home/vagrant'
	config.vm.provision 'shell', inline: $script

	config.vm.provider "virtualbox" do |vb|
	vb.gui = false
	end

end
