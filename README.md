# Full Stack Got Salt App

In this repository, you will have access to a full stack app using React, Node/Express, Sequelize and MySQL.

All the frontend code can be found in the "client" folder.
All the backend code can be found in the "server" folder.

## Setup

### Dependencies

Run `npm init` in the server folder to install dependencies related to Express.
`cd client` and run `npm init` install dependencies related to React (the client).
(have two terminals open and run `npm start` in client folder and also in the server folder when you want to render the backend and frontend).

1 - Backend

In the server folder:
Run `npm install express cors mysql` (express is a framework for node used to design and build the app, cors is used to make a connection between the server and the frontend, mysql is used for managing and storing the data).

Run `npm install nodemon` (keeps track of changes and restarts the server on every save)

Run `npm install sequalize sequalize-cli` . Sequalize is an ORM that allows us to write simpler and neater code for MySQL; install sequalize-cli as well(command line interface) which generates models (the model tells Sequalize several things about the entity it represents, such as the name of the table in the database and which columns it has (and their data types).

Run `sequalitze init`.

2 - Connecting the database to the project.

For the project MySQL Workbench was used, which is a visual tool for the database. See link below to download.

Once downloaded, create a new schema in MySQL Workbench and give the database the name `SaltCheckDB`which is the same name given in the server/config/config.json folder under database. This is how the two are connected and how the database will be populated with the tables and the data.

3 - Frontend

In the client folder:

Run `npx create-react-app .`

Run `npm start`

Run `npm install axios`(in this project the axios library substitutes fetch() in making HTTP requests. It was selected because it automatically stringifies the data when sending requests, and it has a wide browser support)

Run `npm install react-router-dom` (this is a package that enables the implementation of dynamic routing in a web app. It displays pages and allow users to navigate them. It is a fully-featured client and server-side routing library for React)

Run `npm install formik` (this is a library that was implemented in this project to assist and simplify form creation and data validation)

## Resources

- [MySQL Cheat Sheet](http://www.mysqltutorial.org/mysql-cheat-sheet.aspx)
- [MySQL Workbench](https://www.mysql.com/products/workbench)
- [MySQL](https://dev.mysql.com/doc/refman/8.0/en/database-use.html)
- [Sequelize](https://sequelize.org/docs/v6/core-concepts/model-basics)
- [Axios](https://axios-http.com/docs/intro)
- [Formik](https://formik.org/docs/overview)
- [React Documentation](https://reactjs.org/docs/hello-world.html)


## Notes

_This is a student project that was created at [CodeOp](http://CodeOp.tech), a full stack development bootcamp in Barcelona._