# WAD2 Coursework 2
Restaurant Menu website using JavaScript, CSS and HTML elements

## Running the site and site functions
#### Running the Site
If using bash type <node index.js> into the terminal to start site  
If using powershell type <node index> into the terminal instead

##### Features todo list
- [x] Install needed dependencies such as Express, CSS, NEDB, mustache-express and dotenv with bcrypt  
- [x] Set up a working Index page to properly call on dependancies to be passed to other functions such as routes and controllers
- [x] Initiated database with add entry function  
- [ ] Add delete function to remove data from database  
- [x] Seeded database with a couple of entries for testing purposes  
- [x] Create and sort folders for files  
- [x] Create the routes and controller functions to link together  
- [x] Sourced a great looking restuarant landing page from CodeCary - modified to link with routes and controllers  
- [x] Ensure the CSS all works and html is fine and not wonky
- [x] Ensure the routes and controllers work and show up on the new landing page  
- [x] Add the models for the dishes  
- [x] Add the entries page to pass the model to the site
- [x] Add another page to enable logged in users to add new entries to the database
- [ ] Ensure entries are saving to the database
- [x] Check data is being sent to the server and is able to be pulled
- [x] Separate the Home page into partials for ease of coding
- [x] Use mustache tags to send the data from the db into the views
- [x] Check it comes up looking fine on the site
- [x] Added function to check dishes by dishType
- [x] Implemented a registration page and function (not used for this application but could be incorporated later for adding new users by an admin user?)
- [x] Added a login button with page functionality 
- [x] Created the userModel file and added a couple of users for testing <ins>(username: peter password: password)</ins>
- [x] Implement the sign in functionality with page routing and controllers
- [x] Added extra functionality so if incorrect login is entered, user is sent back to home page
- [x] Changed the header to only show certain functions when a user is logged in
- [x] Added the auth file to handle authorisation of users
- [x] Added JsonWebToken to handle cookies and authentication tokens
- [x] Ensured only signed in users can post new dishes and view all available dishes in the database
- [ ] Add chefs special functionality