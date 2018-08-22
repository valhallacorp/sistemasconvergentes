FROM openjdk:8-jdk-alpine
VOLUME /tmp
COPY eventoapp-0.0.1-SNAPSHOT.jar eventoapp.jar
EXPOSE 8080
ENTRYPOINT ["java","-Djava.security.egd=file:/dev/./urandom","-jar","/eventoapp.jar"]