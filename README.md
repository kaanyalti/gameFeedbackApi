# Backend Developer Takehome

You are tasked with building a service in node.js or golang that allows players of an online game to submit
feedback for their last game session, and allows members of an operations team to view the feedback.

Users can give their session a rating on a scale of 1 to 5, and can leave a comment. Multiple players can 
rate the same session, but each player can only rate a given session once.

Following RESTful principles, create HTTP endpoints to allow:
* Players to add feedback for a session
* Ops team members to see recent feedback left by players, allowing filtering by rating

If you find you have time and would like to do more, consider adding any of the following:
* a simple front-end
* tests
* deployment scripts/tools
* authentication
* user permissions
...or anything else that strikes your fancy

### General Guidelines
The requirements are fairly abstract so feel free to make assumptions as necessary and document those assumptions as you
see fit. This isn’t intended to be an exercise in requirements gathering, but we would like to see how you reason about 
things.
Feel free to use any frameworks or third-party libraries you like, as long as they are not restricted for commercial 
use.

We've built a basic repository using [Express](https://expressjs.com/) for routing and 
[Sequelize](https://sequelize.org/) for object relational mapping. Feel free to replace any pieces you'd like, but we're 
more interested in how you implement, structure, and test your code then if you can setup a new project. Please feel 
free to refactor the project structure. This repository is meant to give you a starting point that works. It is 
*not* an optimal structure.  

Include a README in your source code with at least the following:
* API documentation
* Instructions for launching and testing your API locally (if not using the built-in scripts)
* Any other notes you think would be helpful for us while evaluating your work

Be prepared to discuss your design including any compromises made, scalability or performance concerns, and ideas for 
how your service might be extended to be production ready.

### Getting Started With NodeJS
We currently use the latest stable version of NodeJS. You can 
[download it from the nodejs website](https://nodejs.org/en/). 

### package.json scripts
We've created some basic scripts in package.json to get you started. The following are available:

**start**: starts the project webserver (defaults to port 8080)

**lint**: lints your project for formatting issues

**test**: runs tests in the project

### Logging
The server uses the debug package for logging, so you can get additional logging by specifying environment variables:

Everything:
```
DEBUG=* npm run start
```

Express route with database sql debugging:
```
DEBUG=express:router,sequelize:sql:* npm run test
```
