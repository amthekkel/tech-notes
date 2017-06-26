# Moodle on Ubuntu 17.04


## Prerequisites

  1gb memory
  LAMP stack 

  #PHP modules
    1. run php -m to see installed modules and install missing modules  

    `sudo apt-get install aspell graphviz php7.0-curl php7.0-gd php7.0-intl php7.0-ldap php7.0-mysql php7.0-pspell php7.0-xml php7.0-xmlrpc php7.0-zip`

    2. restart apache: sudo apachectl restart

  #Download moodle 

    `curl -L https://download.moodle.org/download.php/direct/stable32/moodle-latest-32.tgz > moodle.tgz`

  #Extract moodle to web dir mine is at ~/workspace/testing which can be acessed via http://local.testing.com/, or use normal ubuntu apache installation  /var/www/html

  sudo tar -xvzf moodle.tgz -C ~/workspace/testing

  #Create moodle data directory to store course releated data and outside web root folder. 

   mkdir -p ~/workspace/moodledata
   chown -R abhi:www-data ~/workspace/moodledata

   #Create database called moodle 

   #Visit online installation 
    visit the url: http://YOUR_SERVER_IP/moodle  e.g. http://local.testing.com/moodle
    -- ensure apache user (www-data) has write permission to the moodle folder
    -- Follow the onscreen instructions, the data directory referred to in moodle data directory step above 