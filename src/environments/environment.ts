// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
  	apiKey: "AIzaSyDdE427P1ej39q5NrxdDcvfIMH79KY4LPc",
    authDomain: "clientpanelprod-8ad1d.firebaseapp.com",
    databaseURL: "https://clientpanelprod-8ad1d.firebaseio.com",
    projectId: "clientpanelprod-8ad1d",
    storageBucket: "clientpanelprod-8ad1d.appspot.com",
    messagingSenderId: "335149155761"
  }
};
