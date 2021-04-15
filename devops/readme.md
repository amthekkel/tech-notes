# Devops notes
  
## Apache 
`sudo apt update`

`sudo apt install apache2`

`apachectl -M` &nbsp;&nbsp;   list all enabled modules

`apachectl configtest` &nbsp;&nbsp; check current configuration

`apachectl start` &nbsp;&nbsp; start apache server

`apachectl stop` &nbsp;&nbsp;  stop apache server

`apachectl reload` &nbsp;&nbsp;  reload apache server

`sudo a2enmod rewrite` &nbsp;&nbsp;   enable mode rewrite

`sudo a2ensite site.conf`  &nbsp;&nbsp; enable site config
`sudo a2dissite site.conf` &nbsp;&nbsp; disable site config

## Nginx 
&nbsp;&nbsp; enable site config

`sudo ln -s /etc/nginx/sites-available/test.com /etc/nginx/sites-enabled/`

`sudo nginx -t`  &nbsp;&nbsp; test site config


# Lets Encrypt

`sudo add-apt-repository ppa:certbot/certbot`

`sudo apt install python-certbot-apache`

`sudo certbot --apache -d your_domain -d www.your_domain`

`sudo certbot --nginx -d example.com -d www.example.com`

### check certbot timer is running

`sudo systemctl status certbot.timer`

`sudo certbot renew --dry-run`

# Node installation
`curl -sL https://deb.nodesource.com/setup_12.x -o nodesource_setup.sh`  &nbsp;&nbsp;  check latest node version

`sudo bash nodesource_setup.sh`

`sudo apt-get install nodejs`

# Pm2 
$ `npm install pm2@latest -g`    &nbsp;&nbsp;    OR

$ `yarn global add pm2`

`pm2 start app.js --name <app_name>`&nbsp;&nbsp;specify the starter file and app name 


`pm2 startup` &nbsp;&nbsp;startup script

`pm2 save` &nbsp;&nbsp;save current state of processes.

`pm2 list` &nbsp;&nbsp;list processes

https://pm2.keymetrics.io/docs/usage/quick-start/


## Security

### Hide Web server information 
curl -I <domain_name>

## Nginx config change
 1 open /etc/nginx/nginx.conf 

 2 add or uncomment under the HTTP

     server_tokens off  

 3  sudo service nginx reload


## Apache config change
 1 Open :  /etc/apache2/conf-enabled/security.conf

 2 Change ServerTokens value to Prod

   	ServerTokens Prod

 3 Disabled ServerSignature : configures the footer on server-generated documents.

 	ServerSignature  Off
	 
 4  Restart apache 
     apachectl restart




