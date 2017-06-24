# Drupal 7 installation on Ubuntu 17.04

  Download the required drupal version e.g <https://www.drupal.org/project/drupal/releases/7.54>

  Extract folder to your webserver. 
   e.g extract folder as samplewebsite to ~/workspace/drupal/7/samplewebsite
   
   #Folder permissions. 

   1. Copy sites/default/default.settings.php as sites/default/settings.php 
     
   
   2. Create folder sites/default/files 
      Change permission to make the writeable by apache user.  
   
   3. Ensure the folder is accessible by apache user, on Unbuntu this will be www-data. 
      chown -R <currentuser>:www-data ~/workspace/drupal/7/samplewebsite      (replace currentuser with your current username, run whoami to view current user)

   4.  Change permission to make files writeable by apache user.  
       chmod g+w sites/default/settings.php 
       chmod -R g+w sites/default/files 

   5. Visit the local drupal installation page and follow the instruction to complete installation


    
 
