FROM openjdk:8-jdk-alpine
VOLUME ~/eclipse-workspace/Docker
COPY spring-0.0.1-SNAPSHOT.jar eventoapp.jar
EXPOSE 8080
ENTRYPOINT ["java","-jar","/eventoapp.jar"]