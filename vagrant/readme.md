# Installing Vagrant and VirtualBox

#Download VitualBox
  -- for Linux download the appropriate packakge from https://www.virtualbox.org/wiki/Linux_Downloads
  sudo dpkg -i path/to/file.deb



##Vagrant commands

`vagrant up` -- get the vagrant machine running as specified in the VagrantFile

`vagrant halt` --shutdown currently running Vagrant

`vagrant plugin install vagrant-vbguest`  -- incase vagrant up complains that VirtualBox guest editions are required

#SSH into box
 ` vagrant ssh`

