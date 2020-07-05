https://docs.npmjs.com/getting-started/fixing-npm-permissions#option-2-change-npms-default-directory-to-another-directory

Make a directory for global installations:

 mkdir ~/.npm-global
Configure npm to use the new directory path:

 npm config set prefix '~/.npm-global'
Open or create a ~/.profile file and add this line:

 export PATH=~/.npm-global/bin:$PATH
Back on the command line, update your system variables:

 source ~/.profile
