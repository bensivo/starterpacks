FROM anapsix/alpine-java:latest


RUN mkdir /home/spring
WORKDIR /home/spring

ADD build/libs/app-0.0.1.jar .

EXPOSE 8080
ENTRYPOINT java -jar app-0.0.1.jar
