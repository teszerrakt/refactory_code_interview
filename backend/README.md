# How To Run

The `app` folder stores the web application and the `cli` folder stores the command line interface (CLI) to get data from the database. 
Both programs can run separately. To run it please follow the instruction below:

## Web Application
1. Clone the `app` folder.
2. Run `yarn install` from your terminal.
3. Run the program using `node app.js`
4. Open `localhost:3000` from your browser.
5. Login using your Google or Facebook accounts.
6. Logout.

### Application Flow
![image](https://user-images.githubusercontent.com/55452614/144220915-c24c9039-3ea6-4b73-b6ac-e50fe8390a33.png)

## CLI
1. Clone the `cli` folder.
2. Run `yarn install` from your terminal.
3. Run the program from your `bash` terminal (e.g. GitBash) using `./index.js data` or `node index.js data` from regular terminal to get all of the data inside the database.

### Other Commands
For ther available command you can run `./index.js help` or `node index.js help`.
If you want specific data (e.g. `email`, `given_name`, `family_name`, `picture`) run command `./index.js data -t [email|given_name|family_name|picture]`.

## Database
The database are built using MongoDB Atlas so it is available everywhere as long as you have internet connection.

### Model
![image](https://user-images.githubusercontent.com/55452614/144219092-172cbea5-dd14-40b9-8ea6-0edce66bb7e8.png)



