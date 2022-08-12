FROM node:lts-alpine

WORKDIR /node/app

COPY src/ .
COPY docker/.env.production ./.env
COPY docker/entrypoint.sh .

RUN npm i

RUN chmod +x entrypoint.sh
