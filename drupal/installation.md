# Drupal tools on Ubuntu 17.04


## Code review tools

  Install Coder Sniffer <https://www.drupal.org/node/1419988>

  #install globally using composer
    composer global require drupal/coder

  #register Drupal and DrupalPractise with PHPCS
   phpcs --config-set installed_paths ~/.composer/vendor/drupal/coder/coder_sniffer  

    #if composer is installed in a differnt path, e.g. local user home directory
    phpcs --config-set installed_paths /home/amthekkel/.config/composer/vendor/drupal/coder/coder_sniffer 
  
 
    #Verify by running the following command, DrupalPractise and Drupal should be listed.
      phpcs -i

## Guide to running PHP CodeSniffer with drupal 7 installations: 
  Document Link <https://www.drupal.org/node/1587138> 