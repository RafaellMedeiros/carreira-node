FROM node:24-alpine
ADD . /app
WORKDIR /app
RUN apk add --update-cache sqlite
USER node
CMD npm install
