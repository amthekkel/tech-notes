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


Without Cli

     1) Add vue js script to add to the page or

     2) initialize npm in the project using npm init 
         then type in npm install vue --save. 
         Point the script js src in on the page to node_modules/vue/dist/vue.js


Create a project 

vue create project



VS code extension Vetur







<button v-on:click="changeName" v-bind:disabled="btnState">Change button </button>

    <div class="holder">
      <ul>
        <li v-for="(dataObj, index) in skills" :key="index">{{ index }}.{{dataObj.skill}} </li> 
      </ul>  
    
     <p v-if="skills.length >=1">You have more than one skills </p>
     <p v-else>You only have one skill</p>

     Adding styles to the component
<style src="./filename.css" scoped>
 
</style>


Binding multiple classes
 <div v-bind:class="{class1: showAlert,class2:showAlert2}"></div>
  

  class1 and class2 are css classes which will be added/removed based on property showAlert and showAlert2

  or use 
   <div v-bind:class="alertObj"></div> 
   alertObj: {
        class1: true,
        class2:true
      }    


Bind style, define bgColor, bgWidth, bgHeight values in component properties

<div v-bind:style="{backgroundColor: bgColor, width:bgWidth, height:bgHeight}"></div>


Form submission

  <form @submit.prevent="addSkill">


  methods, defined under methods property in component



Form Validation 

VeeValidate


Vue Router

yarn add vue-router

