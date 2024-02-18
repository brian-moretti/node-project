# Node.js Project

Welcome to my Node.js project made for the Master in Back-End Development for Start2Impact University

- [Node.js Project](#nodejs-project)
  - [:computer: The project: MeditActive](#computer-the-project-meditactive)
    - [:spiral_notepad: Notes](#spiral_notepad-notes)
  - [:gear: Instruction | MySql Project](#gear-instruction--mysql-project)
  - [:gear: Instruction | MongoDB Project](#gear-instruction--mongodb-project)
  - [:open_book: Documentation](#open_book-documentation)
    - [:technologist: Project Structure | MySql](#technologist-project-structure--mysql)
    - [:technologist: Project Structure | MongoDb](#technologist-project-structure--mongodb)
  - [:bookmark_tabs: REST API](#bookmark_tabs-rest-api)
    - [:information_source: Routes and Data](#information_source-routes-and-data)
      - [Read Data | GET Method](#read-data--get-method)
      - [Create Data | POST Method](#create-data--post-method)
      - [Update Data | PUT Method](#update-data--put-method)
      - [Delete Data | DELETE Method](#delete-data--delete-method)
  - [:incoming_envelope: Contact me](#incoming_envelope-contact-me)

## :computer: The project: MeditActive

The project involves a REST API designed for a startup dedicated to help people to achieve their goals. The API is structured to give the possibility of:

- Create, modify and delete users
- Create. modify and delete interval target linked to a specif user and a specific goal
- Filter the interval through params of date-start, date-end and goal-title
- Create, modify and delete goals

### :spiral_notepad: Notes

The project is divided in 2 sub-project:

- project-mysql | MySql Database
- project-mongo | MongoDB Databse

Both of the projects/folders have a complete and independent REST API working with Node.js. You can decide to test and use one or both of them.

![Database Schema](project-mysql/public/database-schema.png)

## :gear: Instruction | MySql Project

- Copy the repository from my Github: `git clone https://github.com/brian-moretti/meditActive-node-project.git`
- Open the file `migrations.sql` and copy the code inside in the SQL query to create the database, the tables, the columns and the relations between them
- Check the file `config.js` then create an `.env` file or rename `.env.example` in `.env` with the correct data
- Start the web server (Apache, SQL) such as Laragon or similar
- Install the dependencies with `npm install` _(check `package.json`)_ then open the terminal and digit `cd .\meditActive-node-project\project-mysql` to access the correct project and finally digit `nodemon app` to run the app.
- Now use POSTMAN or similiar to test the API
- To execute the unit testing digit `npm test` for only testing and `npm run coverage` to get a report.
- _If you want to start with a pre-defined list of goals digit the follow command: `node .\Api\importApi.js`_

## :gear: Instruction | MongoDB Project

- Copy the repository from my Github | `git clone https://github.com/brian-moretti/meditActive-node-project.git`
- The database is created in Mongodb Cloud Atlas and is available to every IP address so you should be able to use it without having a MongoDb account.
  - If you have problems please contact me [**here**](#incoming_envelope-contact-me)
- As my database is available to everyone there is no need to use `.env` because the correct URI is available inside the code under the variable _`uriStatic`_ in `Database.js` but as for standard rules `config.js` and `.env` files are provided for dynamic situations.
- Install the dependencies with `npm install` _(check `package.json`)_ then open the terminal and digit `cd .\meditActive-node-project\project-mongodb` to access the correct project and finally digit `nodemon app` to run the app.
- Now use POSTMAN or similiar to test the API
- _If you want to start with a pre-defined list of goals digit the follow command: `node .\Api\importApi.js`_

## :open_book: Documentation

Take a look a the docs to understand the routes and the fully API

### :technologist: Project Structure | MySql

```.
└── project-mysql/
 ├── Api/
 │ ├── goal.json
 │ └── importApi.js
 ├── App/
 │ ├── controllers/
 │ │ ├── goalController.js
 │ │ ├── intervalTargetController.js
 │ │ └── userController.js
 │ └── models/
 │   ├── goal.js
 │   ├── intervalTarget.js
 │   └── user.js
 ├── Core/
 │ ├── Database.js
 │ └── Routes.js
 ├── routes/
 │ ├── goalRoute.js
 │ ├── intervalTargetRoute.js
 │ └── userRoute.js
 ├── test/
 │ ├── goal.spec.js
 │ ├── intervalTarget.spec.js
 │ └── user.spec.js
 ├── .env
 ├── app.js
 ├── config.js
 └── migrations.sql
```

### :technologist: Project Structure | MongoDb

```.
└── project-mongodb/
 ├── Api/
 │ ├── goal.json
 │ └── importApi.js
 ├── App/
 │ ├── controllers/
 │ │ ├── goalController.js
 │ │ ├── intervalTargetController.js
 │ │ └── userController.js
 │ └── models/
 │   ├── goal.js
 │   ├── intervalTarget.js
 │   └── user.js
 ├── Core/
 │ ├── Database.js
 │ └── Routes.js
 ├── routes/
 │ ├── goalRoute.js
 │ ├── intervalTargetRoute.js
 │ └── userRoute.js
 ├── test/
 │ ├── goal.spec.js
 │ ├── intervalTarget.spec.js
 │ └── user.spec.js
 ├── .env
 ├── app.js
 ├── config.js
```

## :bookmark_tabs: REST API

Base Path: `http://localhost:3000`

### :information_source: Routes and Data

`users`:

```json
{
  "id": 1,
  "name": "John",
  "surname": "Doe",
  "email": "johndoe@test.it"
}
```

`goal`

```json
{
  "id": 1,
  "title": "goal",
  "description": "description"
}
```

`interval-target`

```json
{
  "goal_id": 1,
  "titl": "goal title",
  "description": "goal description",
  "id": 1,
  "date_start": "01-01-2024",
  "date_end": "31-01-2024",
  "user_id": 1,
  "name": "username",
  "surname": "surname",
  "email": "email"
}
```

#### Read Data | GET Method

`/users`: Return all the users in the database

JSON Response:

```json
[
  {
    "id": 1,
    "name": "John",
    "surname": "Doe",
    "email": "johndoe@test.it"
  }
]
```

`/users/{id}`: Return the user with ID selected

JSON Response:

```json
{
  "id": 1,
  "name": "John",
  "surname": "Doe",
  "email": "johndoe@test.it"
}
```

`/goal`: Return all the goals in the database

JSON Response:

```json
[
  {
    "id": 1,
    "title": "goal",
    "description": "description"
  }
]
```

`/goal/{id}`: Return the goal with ID selected

JSON Response:

```json
{
  "id": 1,
  "title": "goal",
  "description": "description"
}
```

`/interval-target`: Return all the interval targets in the database

JSON Response:

```json
[
  {
    "goal_id": 1,
    "title": "goal title",
    "description": "goal description",
    "id": 1,
    "date_start": "01-01-2024",
    "date_end": "31-01-2024",
    "user_id": 1,
    "name": "username",
    "surname": "surname",
    "email": "email"
  }
]
```

`/interval-target/{id}`: Return the interval target with ID selected

JSON Response:

```json
{
  "id": 1,
  "date_start": "01-01-2024",
  "date_end": "31-01-2024",
  "user_id": 1,
  "name": "username",
  "surname": "surname",
  "email": "email",
  "goal_id": 1,
  "title": "goal title",
  "description": "goal description"
}
```

#### Create Data | POST Method

`/users`: Create a new user in the database. The body is required as follow:

```json
{
  "name": "username",
  "surname": "surname",
  "email": "email"
}
```

`/goal`: Create a new goal in the database. The body is required as follow:

```json
{
  "title": "title_goal",
  "description": "goal_description"
}
```

`/interval-target`: Create a new interval target in the database. The body is required as follow:

```json
{
  "date_start": "01-01-2024",
  "date_end": "31-01-2024",
  "user_id": 1,
  "goal_id": 1
}
```

#### Update Data | PUT Method

`/users/{id}`: Update an existing user. One of the property is required

```json
{
  "name": "new-name",
  "surname": "new-surname",
  "email": "new-email"
}
```

`/goal/{id}`: Update an existing goal. One of the property is required

```json
{
  "title": "new-goal",
  "description": "new-description"
}
```

`/interval-target/{id}`: Update an existing interval target. One of the property is required

```json
{
  "date_start": "01-01-2024",
  "date_end": "31-01-2024",
  "user_id": 1,
  "goal_id": 1
}
```

#### Delete Data | DELETE Method

`/users/{id}`: Delete an existing user

JSON Response:

```json
"User Deleted": [{
    "id": 1,
    "name": "John",
    "surname": "Doe",
    "email": "johndoe@test.it"
}]
```

`/goal/{id}`: Delete an existing goal

JSON Response:

```json
"Goal deleted": [{
    "id":1,
    "title": "goal title",
    "description": "goal description"
}]
```

`/interval-target/{id}` : Delete an existing interval target
JSON Response:

```json
"Interval Target deleted": [{
    "id": 1,
    "date_start": "01-01-2024",
    "date_end": "31-01-2024",
    "user_id": 1,
    "name": "username",
    "surname": "surname",
    "email": "email",
    "goal_id": 1,
    "title": "goal title",
    "description": "goal description",
}]
```

## :incoming_envelope: Contact me

If you find some bugs to fix or simply you want to send me a message please write me at [**brianmoretti2512@gmail.com**](mailto:brianmoretti2512@gmail.com) or [Linkedin | Brian Moretti](https://www.linkedin.com/in/brian-moretti/)
