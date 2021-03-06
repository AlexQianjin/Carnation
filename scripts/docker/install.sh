#!/bin/bash  
# echo "This is a shell script"  
# ls -lah  
# echo "I am done running ls"  
# SOMEVAR='text stuff'  
# echo "$SOMEVAR"

###########################
#
#Install Docker CE
#
###########################
sudo apt-get update
sudo apt install apt-transport-https ca-certificates curl software-properties-common
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable"
sudo apt-get update
apt-cache policy docker-ce
sudo apt-get install -y docker-ce
###########################
#
#Install git
#
###########################
# echo "Install git"
# sudo add-apt-repository ppa:git-core/ppa 
# sudo apt update
# sudo apt install git
###########################
#
#Install nginx
#
###########################
# echo "Install nginx"
# sudo -s
# nginx=stable # use nginx=development for latest development version
# add-apt-repository ppa:nginx/$nginx
# apt-get update
# apt-get install nginx
###########################
#
#Install Nodejs
#
###########################
# echo "Install Nodejs"
# curl -sL https://deb.nodesource.com/setup_10.x | sudo -E bash -
# sudo apt-get install -y nodejs
###########################
#
#Install MongoDB
#
###########################
# echo "Install MongoDB"
# echo "add keyserver"
# sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv 2930ADAE8CAF5059EE73BB4B58712A2291FA4AD5
# echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu xenial/mongodb-org/3.6 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-3.6.list
# echo "update"
# sudo apt-get update
# echo "install mongodb-org"
# sudo apt-get install -y mongodb-org