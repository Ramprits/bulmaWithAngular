// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyAhi_tJSeNmepi4fPA-d54TbCbO6owlmaU',
    authDomain: 'myangular5application.firebaseapp.com',
    databaseURL: 'https://myangular5application.firebaseio.com',
    projectId: 'myangular5application',
    storageBucket: 'myangular5application.appspot.com',
    messagingSenderId: '125720621430'
  }
};