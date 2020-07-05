composer create-project symfony/skeleton my-project

 cd my-project
 composer require server --dev

 to start dev server 
  php bin/console server:run

  Ctrl + C to stop server

check whether your project's dependencies contain any known security vulnerability

  composer require sec-checker --dev