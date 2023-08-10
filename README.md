# PWA_WeatherApp

## Progressive Web Apps (PWA) 

A PWA is a collection of web techniques for building web applications with previous considerations in mind.
One popular technique is the service worker implementation of the Angular framwork to build a PWA that displays
the weather of a city using the OpenWeather API.

## Native Applications

Native applications are installed on the device of the suer, have access to its native resources, 
and can work seamlessly with any network. PWA applications stand between the two worlds of web and 
native acpplications and share characteristics from both.

## Converting Web Applications to PWA

Converting a web application into a PWA involves several steps and techniques. 
The most essential one is configuring a serrice worker. The service worker is a mechanism that is run on the web browser
and acts a s a proxy between the application and an external HTTP endpoint or other in-app resources such as JS and CSS 
files. The main job of the service worker is to intercept requests to those resources and act on them by providing a cached 
or live response. 

## Observables

Observables are based on the observer patter, which is the core of reactive functional programming. In the observer pattern,
multiple objects called observers can subscribe to an obserrvable and get notified about any changes to its state. 

## @angular/pwa

The @angular/pwa command adds the @angular/service-worker npm package to the dependencies section of the package.json file of the application. 

It cretes the manifest.webmanifest file in the src folder of the application. Themanifest file contains information about the application needed to install and run the application as a native one. It also adds it to the assets array of the build option in the angular.json file. 

It creates the ngsw-config.json file at the root of the project, which is the service worker configuration file. We use it to define configuration-specific artifacts, suc as which resources are cached and how they are cached.

It sets the serviceWorker property to true in the build configuration of the angular.json file. 

And, it registers the service worker in the app.module.ts file.

## npm run server

By installing the http-server, the application can be access offline without interrupting service on localhost:8080 when you run npm run server. The ServiceWorker serves a cached version of the application without letting the user notice the difference in function. 

## MatSnackBarModule

The MatSnackModule is an Angular Material module that allows us to interact with snack bars. A snack bar is a pop-up window that usually appears on the bottom of the page and is used for notifiaction purposes. 