## Amazing(ly simple) Checkout
---
A simple app that simulates a checkout system for a supermaket that resolves basket price calculation and discount handling with varying promotion configurations.

### Architecture
---
+ Frontend client developed with ReactJS 
+ Backend API with SpringBoot+WebFlux

### Assumptions
---
Since the propostal of the app is to be used in a market as a checkout system, the UI expects to receive as input the product code and will list it (if it exists) with its price and quantity while demonstrating the full puchase price and applicable discounts in the same screen.

## How to make it run :)
---

To execute this project you have a couple options.

### 1. Run each service individually:

To build/execute the frontend project you will need to have [node](https://nodejs.org/en/download/) installed on your machine. 

```bash
# cd into the client folder
cd ./client

# and run it with yarn
yarn start

# or with npm
npm start
```

For the backend, since it already has a [maven](https://maven.apache.org/) wrapper on the project root you just need to execute the command:

```bash
# cd into the server folder
cd ./server

# If you have maven installed on your machine
maven spring-boot:run

# Or using the maven wrapper
./mvnw spring-boot:run
```

### 2. Run it with Docker

To use this method you'll need to have [docker](https://www.docker.com/) with [docker-compose](https://docs.docker.com/compose/install/) installed on your machine.

From the root folder of the project, run:

```bash
docker-compose up
```

And wait for the image to build and after the process finishes the app will be available at `localhost:3000` and the server at `localhost:8000`.



> PS: That's an example project, and it's not supposed to be used in production environment in any way.

