# SOLUTION

- This is the description of the solution, the tools used and decisions made for the project. Please note that since Docker can't run in my system because I have older version of Windows 10, I used the query from the repository you've provided (https://github.com/hipages/tech-test-full-stack-engineer/blob/master/docker/mysql/init.sql) to create new database tables in my schema. 

## View Application

- View the deployed application at the following link: https://quirky-khorana-20aebe.netlify.app/

### Tools Used

- React JS,
- Node JS,
- MySQL,
- Express,
- Axios,
- GitHub,
- Heroku,
- ClearDB,
- Netlify.

### Server Side Configuration

To view the source code for server, please use git command: 'git clone https://git.heroku.com/test-fullstack-project.git'.
To run the server locally, please change the following in the 'index.js' file:
  ({
      host: "localhost",
      user: "root",
      password: "hipages",
      database: "*YOUR DATABASE NAME*",
  });

To run the server at PORT:3000, use terminal command: 'npm run devStart'.

The server was built using node js and express with added dependencies: body-parser, cors, mysql2 and nodemon.

## Solution for the front-end

- First, React app was created using 'create-react-app'.
- Then, components were created for handling the tab and handling the cards respectively. 
- A seperate date function to handle the date and time was created. 
- SVG images were used for the images. 
- Axios was used to fetch api data from the server coming from the database. 
- .map() function was used to iterate through the fetched arrays of data.

- The onClick handler functions were then created to perform the following actions:
1) Accept button: update the selected entry's 'status' value to 'accepted'. 
2) Decline button: update the selected entry's 'status' value to 'declined'. 
3) Undo button: update the selected entry's 'status' value to 'new'. This is for testing purpose.

- Once each of the buttons are pressed, the page is reloaded with updated values.
- Split function was used to display first name for the Invited tab.
- Reack hooks: useState was used to handle state for the array data coming in from the server.
- React hooks: useEffect was used alongside Axios to consume and send data from the api.

### Solution for the back-end and endpoints

- Node JS server was created using 'node init'.
- Dependencies including nodemon was created, and package.json file was updated to include scripts '"start": "node index.js" and "devStart": "nodemon index.js"'.
- Database pool was created and configured for database connection.
- Used GET and PUT node functions to retrieve and update data from the database respectively. Used express to handle the port for the server. Added new database pool with required information.

Used the following endpoints:
- /api/get : to get the 'jobs' table.
- /api/get-location : to get the 'suburbs' table.
- /api/get-category : to get the 'categories' table.
- /api/update/status/:id : to update the 'status' value in 'jobs' table.

### Repository and deployment

- Used GitHub for frontend and Heroku for the backend. 
- Used Netlify to deploy the application.

# THANK YOU !!!
