# ClientPanel

---
## Jose Ramirez Dev Notes:

App Description:
Client management application that uses <strong>Firebase</strong> as the back end with the new <i>Firestore</i> database.
Application has full C.R.U.D functionality with Log In authentication. <br>

---

## Tools & Assets:

* Chrome extension: <i><strong> Augury</strong></i> <br> 
-(For debugging and visualizing angular applications at runtime) <br>

## Components Manually added: 

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

<br>

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
      
---
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
