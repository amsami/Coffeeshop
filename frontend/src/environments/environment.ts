/* @TODO replace with your variables
 * ensure all variables on this page match your project
 */

export const environment = {
  production: false,
  apiServerUrl: 'http://127.0.0.1:8100', // the running FLASK api server url
  auth0: {
    url: 'fsnd-sami', // the auth0 domain prefix
    audience: 'https://localhost:8100/coffeeshop', // the audience set for the auth0 app
    clientId: 'Lo3q9JvI7WzCTCxdEqiQjIm5screM7qM', // the client id generated for the auth0 app
    callbackURL: 'http://localhost:8100', // the base url of the running ionic application. 
  }
};
