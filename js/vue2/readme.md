# Install Vue2 and tools

#Vue cli

    `yarn global add vue-cli`   //note with yarn, global keyword should follows yarn keyword and not as a flag as in npm
    
    or if you use npm `npm install -g vue-cli` 
 

#Getting started

    1. new project with a webpack template

        `vue init webpack projectname`

    2. cd to project folder 

    3 Install dependencies
       `yarn install` or `npm install`

    4. Default port number is 8080, if this needs to be changed then open config/index.js and change port property of the dev object. 

    5. To run the app for dev 
        `yarn run dev` or `npm run dev`

    6. Build for production  //see package.json for more info
        `yarn run build` or `npm run build`