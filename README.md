# SOLUTION

This is description of the solution and the tools used and decisions made for the project. Please note that since Docker can't run in my system because I have older version of Windows 10, I used the query from the given repository (init.sql file) to create new database schema. 

## Tools Used

React JS
Node JS
MySQL
Express
Axios
Heroku
Netlify

### View Application

To view the deployed application please go to: 
The server side of the application is located at:

### Server Side

The server was built using node js and express with added dependencies: body-parser, cors, mysql2 and nodemon.
To run the server locally, please run the command: npm run devStart

### Solution for the Front end

First, components were created for handling the tab and handling the cards respectively. 
A seperate date function to handle the date and time was created. 
Axios was used to fetch api data from the server coming from the database. 
SVG images were used for the images. 

The onClick handler functions were then created to perform the following actions:
1) Accept button: update the selected entry's 'status' value to 'accepted'. 
2) Decline button: update the selected entry's 'status' value to 'declined'. 
3) Undo button: update the selected entry's 'status' value to 'new'. This is for testing purpose.

Once each of the buttons are pressed, the page is reloaded with updated values.
Split function was used to display first name for the Invited tab.
Reack hooks: useState was used to handle state for the array data coming in from the server.
React hooks: useEffect was used alongside Axios to consume and send data from the api.
.map() function was used to iterate through these arrays.

### Solution for the Back end and Endpoints

Used GET and PUT node functions to retrieve and update data from the database respectively. Used express to handle the port for the server. Added new database pool with required information.

Used the following endpoints:
/api/get : to get the 'jobs' table
/api/get-location : to get the 'suburbs' table
/api/get-category : to get the 'categories' table
/api/update/status/:id : to update the 'status' value in 'jobs' table

### Repository and deployment

Used github for frontend and heroku for the backend. Used netlify to deploy the application.

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
