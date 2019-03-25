# Spotify Remote
This is a project where you can manage your spotify account using the Spotify API

## Getting Started
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites
```
* [NodeJS] https://nodejs.org/
* [Ionic Latest] - npm install -g ionic cordova
* [Angular Latest] - npm install -g @angular/cli
* [Nodemon] - npm install -g nodemon
```

## How to get Spotify Keys
### 1.- Run server API project
```
cd server/
npm install
npm run dev
```
### 2.- Run configuration website
```
cd webapp/
npm install
npm run start

Open the web app http://localhost:4200
Replace the  keys generated in the website into 

server/app/services/spotifyApi.js
````

## App building
Once you replaced the spotify clientId, clientSecret, refreshToken values you can run the Ionic App

To build the app you can run two commands one for serve the app in the browser and to run in mobile device
```
cd mobile/
npm install
```
### Browser serve
```
ionic serve
```
### Device run
```
ionic cordova run android
```

# 

Copyright 2019 Luis Manuel Rodríguez Ramírez
