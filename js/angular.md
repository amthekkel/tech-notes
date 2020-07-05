#install angular cli


#create new project

ng new project-name

to use sass

ng new project-name --style=scss

to add routing 

ng new project-name --style=scss --routing


#run dev server
ng serve



#Creating a new component
ng generate component component-name

or 
ng g c home




Use back ticks for inline template or css

ngOnInit lifecycle hooks, runs when the component is loaded

interporlation , just displaying dynamic data in templates.

  <li *ngFor="let arr of myArr">{{ arr }}</li>


<p *ngIf="!myArr"> array does not exists</p>


<p *ngIf="!myArr; else otherTmpl "> array does not exists</p>

<ng-template #otherTmpl>Array exists</ng-template>

could also use a then for a truth template e.g.

<p *ngIf="myArr; then truthTempl else otherTmpl "></p>
<ng-template #truthTempl>Array exists</ng-template>
<ng-template #otherTmpl>Array does not exists</ng-template>


Interporlation for values which are string 
e.g. <img src="{{angularLogo}}">

for other types use either 
<img [src]="angularLogo">
or
<img bind-src="angularLogo">


property binding 
<button [disabled]="buttonStatus">My button</button>

<button [disabled]="buttonStatus2 != 'enabled'">My button</button>

#Two-way data binding
import {FormsModule} from "angular/forms";
then add it to @NgModule imports property in the .ts file, 
then add to the dom element .
e.g. <input .... [(ngModel)]="propertyName">


#Event binding

 <button (click)="myEvent($event)">My button</button>
 $event is not mandatory
in component class 
 myEvent(event){
    console.log(event);
  }

Stylesheets
-- Cli normally sets up angular to work with plain css. 
-- To set up using sass, use 
     ng new project-name --style=scss    
     or 
     ng new project-name --style=sass    

In componenets stylesheets are attached using styleUrls, to use inline style sheet, replace styleUrls with styles property and use back ticks for multiline. 
style : [
`
 h1{
  color: #000;
 }

 .red-title{
  color:green;
 }
`
]

to use property binding css class in template 
<h1 [class]="titleClass">hello</h1> or 
<h1 [class.red-title]="titleClass">hello</h1>
in component class define titleClass='red-title';

if class.red-title isused titleClass is defined as true then style is applied if degined as false, then the style is not applied.

for changing multiple css class, us ngClass
<h1 [ngClass]="titleClasses">hello</h1> or 


in component

titleClasses = {
   'red-title':true,
   'large-title':true
}

for style binding 
<h1 [style.color]="titleStyle">hello</h1> and in component class

titleStyle="red";

to apply style on condition
<h1 [style.color]="titleStyle ? 'green' : 'pink'">hello</h1>

Adding multiple css styles
<h1 [ngStyle]="titleStyles">hello</h1>

titleStyles{
  'color':'red',
  'font-size':20px 
}


#Services
has an injectable decorator rather than a component decorator

create a new service 
ng g service data

import {BehaviourSubject} from 'rxjs/BehaviorSubject';

Inside DataService class 

private tests = new BehaviorSubject<any>([]);
test = this.tests.goals.asObservable();

changeTest(test){
    this.tests.next(test);
}



import service into app.module, 

Inside Component code the service and import the service 

use component constructor to inject service
e.g. 
tests = []
constructor(private data:DataService){}

within ngOnInit()

this._data.test.subscribe(res=>this.tests=res);
this._data.changeTest(this.tests);


eg. on adding or removing test items, call the this._data.changeTest(this.tests);



#Animation
Animation now moved out of angular core and needs to be installed 
npm install @angular/animations@latest --save


in app.module
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'

and in imports property array add BrowserAnimationsModule

inside your component import the required animations e.g
import {trigger, state, style,transition, animate, keyframes } from '@angular/animations';
Within your component, add new property called animation in addition to selector, templateUrls etc


## Routing
in app-routing.module.ts, import the components , create a routes const or type Routes and set up paths e.g.

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'test/:id', component: TestComponent }
];

In TestComponent, use import {ActivatedRout} from "@angular/router" to get access to active routes

then inside constructor

constructor(private route:ActivatedRoute){
    this.route.params.subscribe(res=>console.log(res.id));
}


### On click change naigation

constructor(private router:Router){
    
}

clickEvent(){
    this.router.nagiate(''); //specify route to navigate to
}

### Building Angular app

use ng build, creates a dist folder in the project



to create build for prod, use ng build --prod, this minimizes the file sizes 




Copy the contents of the dist folder and upload it to the webserver.

If deploying to sub folder rather than the root pass the base-href e.g. http://testing.local/angapp/

ng build --prod --base-href /angapp/  


## Github pages
https://alligator.io/angular/deploying-angular-app-github-pages/