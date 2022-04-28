# My process of building Happily

###Set up

- Setup Create React App and remove boilerplates
- Edit title and favicon in public/index.html
- Install normalize.css and global styles
  - npm install normalize.css
  - import normalize in index.js (import it before index.css)

##Landing Page

- Create pages directory and Landing.js
- Import Logo.svg and Main.svg
- Develop Landing page structure, divs cut in half

##Styled Components

- As project goes bigger, it will be hard to sustain one CSS file
- There will be no class/name collisions
- vscode-styled-components extension
- style entire react component

```js
install styled-components
```

```js
import styled from styled-components

const El = styled.el`
  //style goes here
`
```

- Create components for each styled component so you just need to import the file, instead of clogging each JS file with styled components

##Logo

- import Logo into a component
- use unDraw (http://undraw.co) for main images, you can also change colors of the images
- create components/Logo.js
- set up image logic
- Utilize in index.js components because you are able to import components in one line, instead of using multiple import lines

##React Router

```js
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
```

- BrowserRouter connects browser's URL with BrowserRouter
- Routes is used for nested routing
- Route is where we say the specific route for our page
- Link will link to the different routes

- Set up routes in App.js
- Set up Links in nav

##Setup Pages

- Create Register, Dashboard, Error components
- Use /pages/index.js to export all components in one line.

##Error Page

```js
import { Link } from "react-router-dom";
import img from "../assets/images/not-found.svg";
import Wrapper from "../assets/wrappers/ErrorPage";

return (
  <Wrapper className='full-page'>
    <div>
      <img src={img} alt='not found' />
      <h3>text</h3>
      <p>text</p>
      <Link to='/'>back home</Link>
    </div>
  </Wrapper>
);
```

##Register Page

- import useState & useEffect
- create initial state variable for new user and useState function

##FormRow Component

- Create FormRow.js in components
- Adding name, email and password to Register page using FormRow component

##Alert Component

- Create Alert.js in components
- set up import/export, alert-danger or alert-success
- eventually set up in global context
- showAlert in initialState (true || false)
- right after h3 sign

##Toggle Member

- Create toggleMember hook in Register
- toggleMember will work as the conditional if a person is a member or not.

##Global Context

- Create context folder with actions.js, reducer.js, & appContext.js
- Set up AppContext files in appContext.js
- Create custom useContext hook to use in other components
- Import AppProvider into index.js

##useReducer

- useReducer vs Redux
- multiple reducers vs one

##Display Alert

- Set up actions, then import in reducer/appContext
- In appContext, create function and dispatch the type

```js
appContext.js

const displayAlert() => {
  dispatch ({type:DISPLAY_ALERT})
}
}
```

- In appContext, create a function and dispatch the type of alert

```js
reducer.js

if (action.type === DISPLAY_ALERT) {
  return (
    ...state,
    showAlert: true,
    alertType: 'danger',
    alertText: 'Please provide all values!'
  )
}

```

```js
alert component

import { useAppContext} from './context/appContext'

```

##Display Alert

- Return values in handle change

##Clear Alert

- add actions (CLEAR_ALERT.JS)
- create function for CLEAR_ALERT based on action.type
- Create functions with DISPLAY_ALERT & CLEAR_ALERT

#Start Backend

##Setup Server

- setup package.json (npm init -y) in root folder

####ES6 vs CommonJS

- Node is still using CommonJS
- There is also support for ES6

```js
CommonJS;

const express = require("express");
const app = express();
```

```js
import express from "express";
const app = express();
```

- When you are working on a MERN project, where you already have the front end application with import and export, my preference is to use ES6 so it matches with front end and there is no confusion or bugs.
- add "type to package.json in order to use ES6 modules

```js
package.json

"type":"module"
```

#### Nodemon and Basic Express Server

```sh
npm install nodemon --save-dev
```

```js
package.json
"start":"nodemon server"
```

```sh
npm install express
```

- import express

```js
import express from "express";
const app = express();
app.get("/", (req, res) => {
  res.send("Welcome!");
});
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server is listening on port ${port}...`));
```

#### Not Found Middleware

- in the root create <b>middleware</b> folder
- not-found.js
- setup function
- return 404 with message 'Route does not exist'
- import in server.js
- make sure to use .js extension
- place after home route

#### Error Middleware

- in the middleware create error-handler.js
- setup function
- accept 4 parameters, first one error
- log error
- return 500
- json({msg:'there was an error'})
- import in the server.js
- make sure to use .js extension
- place it last
- eventually handle Mongoose Errors, just like in the node-express
- showcase with async errors

#### ENV Variables

```sh
npm install dotenv
```

- import dotenv from 'dotenv'
- dotenv.config()

- create .env
- PORT=4000
- .gitignore
- /node_modules
- .env

#### Connect to MongoDB

- switched back to PORT=5000
- remove Error from '/'

- existing MongoDB Atlas Account

```sh
npm install mongoose
```

- create <b>db</b> folder
- create connect.js
- setup connectDB(url)
- in server.js create start() function
- get connection string
- setup as MONGO_URL in .env
- provide credentials and DB Name

#### Auth Controller and Route Structure

- create <b>controllers</b>
- authController.js
- create async functions

```js
export { register, login, updateUser };
```

- return res.send('function name')
- create <b>routes</b> folder
- authRoutes.js
- setup express router
- import functions from authController.js

```js
router.route("/register").post(register);
router.route("/login").post(login);
router.route("/updateUser").patch(updateUser);
export default router;
```

- import authRouter in server.js

```js
app.use("/api/v1/auth", authRouter);
```

#### Jobs Controller and Route Structure

- jobsController.js
- create async functions

```js
export { createJob, deleteJob, getAllJobs, updateJob, showStats };
```

- return res.send('function name')

- jobsRoutes.js
- setup express router
- import functions from jobsController.js

```js
router.route("/").post(createJob).get(getAllJobs);
// place before :id
router.route("/stats").get(showStats);
router.route("/:id").delete(deleteJob).patch(updateJob);
export default router;
```

- in server.js jobsRouter

```js
app.use("/api/v1/jobs", jobsRouter);
```

#### Postman

- URL global var
- Happily Collection
- auth and jobs folders
- setup routes

#### User Model

- <b>models</b> folder
- User.js
- setup schema
- name, email, password, lastName, location
- all {type:String}

#### Register User - Initial Setup

- authController
- import User model
- setup temporary try/catch
- await User.create(req.body)
- if success 201 with json({user}) (temp)
- if error 500 with json({msg:'there was an error'})

#### Pass Error to Error Handler

- next(error)
- pass on errors through next into the error handler middleware

#### Express-Async-Errors Package

- remove try/catch
- [Express-Async-Errors](https://www.npmjs.com/package/express-async-errors)

```sh
npm install express-async-errors
```

- avoid setting up try catch blocks and it will handle all the errros behind the scenes

- in server.js
- import 'express-async-errors'

- use throw Error('error') instead of next(error)

#### Http Status Codes

- constants for status codes
- personal preference
- provides consistency
- less bugs
- easier to read/manage

- [Http Status Codes](https://www.npmjs.com/package/http-status-codes)

```sh
npm install http-status-codes
```

- import/setup in authController and error-handler
- setup defaultError

#### Custom Errors

#### Refactor Errors

- create errors folder
- create custom-api, bad-request, not-found, index.js files
- add proper imports
- setup index.js just like in the front-end
- import {BadRequestError} in authController
- gotcha "errors/index.js"

#### Hash Passwords

- one way street, only compare hashed values
- [bcrypt.js](https://www.npmjs.com/package/bcryptjs)

```sh
npm install bcryptjs
```

- User Model
- import bcrypt from 'bcryptjs'
- await genSalt(10)
- await hash(password , salt)
- await compare(requestPassword , currentPassword)
- [mongoose middleware](https://mongoosejs.com/docs/middleware.html)
- UserSchema.pre('save',async function(){
  "this" points to instance created by UserSchema
  })

#### Mongoose - Custom Instance Methods

[Custom Instance Methods](https://mongoosejs.com/docs/guide.html#methods)

- UserSchema.methods.createJWT = function(){console.log(this)}
- register controller
- right after User.create()
- invoke user.createJWT()

#### JWT

- token
- [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken)

```sh
npm install jsonwebtoken
```

- User Model
- import jwt from 'jsonwebtoken'
- jwt.sign(payload,secret,options)
- createJWT

```js
return jwt.sign({ userId: this._id }, "jwtSecret", { expiresIn: "1d" });
```

```js
return jwt.sign({ userId: this._id }, process.env.JWT_SECRET, {
  expiresIn: process.env.JWT_LIFETIME,
});
```
