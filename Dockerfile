FROM node:5.9
EXPOSE 8080
WORKDIR /opt/hello-node
COPY server.js .
COPY lib lib
CMD node server.js
