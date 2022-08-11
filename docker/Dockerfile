ARG NODE_IMAGE=node:lts-alpine

FROM $NODE_IMAGE AS base
RUN apk --no-cache add dumb-init
RUN mkdir -p /home/node/app && chown node:node /home/node/app
WORKDIR /home/node/app
USER node
RUN mkdir tmp

FROM base AS dependencies
COPY --chown=node:node src/package*.json ./
RUN npm ci
COPY --chown=node:node src .

FROM dependencies AS test
RUN node ace test

FROM dependencies AS build
RUN node ace build --production

FROM base AS production
ENV APP_KEY=NP1lSyvc-4JJA6vA9XUWtrrnMfEHbx3_
ENV NODE_ENV=production
ENV PORT=3333
ENV HOST=0.0.0.0
ENV DRIVE_DISK=local
COPY --chown=node:node ./src/package*.json ./
RUN npm ci --production
COPY --chown=node:node --from=build /home/node/app/build .
COPY --chown=node:node --from=build /home/node/app/prisma .
RUN npx prisma generate
EXPOSE $PORT
CMD [ "dumb-init", "node", "server.js" ]
