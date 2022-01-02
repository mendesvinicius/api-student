FROM node:12-slim AS builder

WORKDIR /usr/src/app

COPY . ./

RUN npm install

RUN npm run build

CMD [ "npm", "start" ]
