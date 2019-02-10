# Spring Boot Starterpack

An HTTP web-server written using the Spring Boot framework for Java. 

Based on the SpringBoot tutorial found [here](https://spring.io/guides/gs/spring-boot/).

## Compiling
This app compiles using gradle.
```
$ gradle build
```

If you don't want to install gradle locally, you can use the official gradle image available on Docker Hub.
```
$ docker run --rm -v "$PWD":/home/gradle/project -w /home/gradle/project gradle:5.2.1-jdk8-alpine gradle build
```

## Running 
After compiling, find the executable .jar file in build/libs. Run it using the java command line runner.
```
$ java -jar build/libs/app-0.0.1.jar
```

You can test the app using curl, or a web browser. 
```
$ curl localhost:8080  # The Spring Boot default port
Hello world!
```

## Packaging
Instead of running the jar file locally, you can package it into a Docker image using the provided Dockerfile. 
```
$ docker build -t app:0.0.1 .
```

Then, run the application as shown below, or using a container orchestration tool like kubernetes.
```
$ docker run -p 8080:8080 app:0.0.1 
```

## Notes
If you change the name of the application, make the appropriate changes in:

* *build.gradle: bootJar.baseName*
* *build.gradle: bootJar.version*
* *Dockerfile: ADD*
* *Dockerfile: ENTRYPOINT*