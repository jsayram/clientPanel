# ClientPanel

---
## Jose Ramirez Dev Notes:

App Description:
Client management application that uses <strong>Firebase</strong> as the back end with the new <i>Firestore</i> database.
Application has full C.R.U.D functionality with Log In authentication. From the Udemy Course [Angular Front to Back]<br>

---
## Tools & Assets:

* Chrome extension: <i><strong> Augury</strong></i> <br> 
-(For debugging and visualizing angular applications at runtime) <br>

## Components, Modules, & Services added: 

Using `ng g c components/component_name` <br>

| **component_name** | 
| --- |
| navbar  		|
| sidebar 		| 
| dashboard     | 
| clients       |
| add-client 	|
| edit-client 	|
| client-details|
| login 		|
| register 		|
| settings 		|
| not-found 	|

* <strong>Router Module</strong> `ng g m app-routing --flat -module:app`, inside created `app-routing.module.ts` file, imported the routes for the components <br>

* <strong>angularfire2 Module</strong> `npm install firebase angularfire2`<br>
-Github documentation for <i>angularfire2</i> setup, and adding firebase config to enviromental variable: [https://github.com/angular/angularfire2](https://github.com/angular/angularfire2)<br>
(great module for interacting with firebase, allows interaction with realtime database, firestore, authentication etc..) <br>

* <strong>client service module</strong> `ng g s services/client`, added after installing the angularfire2 module , imported necessary angularfirestore imports, make sure to import in the `app.module.ts` file<br>

* <strong>client interface</strong> created `models` directory with a `Client.ts` file , and there implemented the interface for Client. Imported that interface to the `client.service.ts` file. <br>

* <strong>angular2-flash-messages</strong> `npm install angular2-flash-messages --save`, then bring it into the `app.module.ts` file, add as import then append the `.forRoot()`<br> 
-NPM documentation for <i>angular2-flash-messages</i> setup : [https://www.npmjs.com/package/angular2-flash-messages](https://www.npmjs.com/package/angular2-flash-messages)<br>

* <strong>authentication service module</strong> `ng g s services/auth`, make sure to import in the `app.module.ts` file, this will be use for user login<br>

* <strong>Authentication Guard for Routes</strong> created `guards` directory with a `auth.guards.ts` file , and there implemented the injectable for the AuthGuard. imported to the `app-routing.module.ts` file as a provider and added the `canActivate:[AuthGuard]` to each of the routes wanting to protect.<br>

* <strong>settings service module</strong> `ng g s services/settings -module:app`, this will also import all necessary depedencies to the `app.module.ts` file<br>

* <strong>settings interface</strong> created inside `models` directory with a `Settings.ts` file , and there implemented the interface for Settings. Imported that interface to the `Settings.service.ts` file. <br>

* <strong>Authentication Guard for Register</strong> created in `guards` directory with a `register.guards.ts` file name , and there implemented the injectable for the RegisterGuard. imported to the `app-routing.module.ts` file as a provider and added the `canActivate:[RegisterGuard]` to the register route.<br>

Other notes: imported the Observable from the rxjs library in the 'client.services.ts' file 

## Additional Dependencies Added:

* <strong>Bootstrap V4</strong> - <strong>jQuery</strong> - <strong>Popper.js</strong> - <strong>Font-Awesome</strong>:<br> `npm install bootstrap@4.0.0-beta.2 jquery popper.js font-awesome` <br>

-Note for dependencies above: modify <i><strong>`.angular-cli.json`</strong></i> to add necessary styles and scripts. Then you can use inside your "<i>componentName</i>.component.html" files.  <br>

`"styles": [ 
        "styles.css",
        "../node_modules/font-awesome/css/font-awesome.css",
        "../node_modules/bootstrap/dist/css/bootstrap.css"
      ],
      "scripts": [
        "../node_modules/jquery/dist/jquery.js",
        "../node_modules/popper.js/dist/umd/popper.js",
        "../node_modules/bootstrap/dist/js/bootstrap.js"
      ],` 

## Deploying to firebase for hosting

* <strong>firbase tool</strong> `npm install -g firebase-tools`<br>
-then `firebase login` `firebase init` `firebase deploy` <br>
-steps found in firebase hosting<br>
---

## [Click Here for live "Client Panel" Project hosted on firebase](https://clientpanelprod-8ad1d.firebaseapp.com/)

login: jose@gmail.com <br>
password: 123456 <br>
**feel free to play around with it, just use above login**

you can <strong>C</strong>reate, <strong>R</strong>emove, <strong>U</strong>pdate client information and balance, or <strong>D</strong>elete clients.

---
## END of Jose Ramirez Dev Notes
---

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.8.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

