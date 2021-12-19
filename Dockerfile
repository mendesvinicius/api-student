FROM node:alpine

WORKDIR /home/api

COPY . .

CMD npm run start-docker
