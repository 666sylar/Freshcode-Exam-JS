FROM node:22.13.1-alpine3.20

ARG NODE_ENV="development"

RUN mkdir -p ./client

WORKDIR /client

COPY package*.json ./

COPY . .

EXPOSE 5555

RUN npm install

RUN chown -R node:node /client/node_modules

CMD npm start
