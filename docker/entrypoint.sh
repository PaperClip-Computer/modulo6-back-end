#!/bin/sh

sleep 10

npx prisma generate
npx prisma migrate deploy
npx prisma db seed

node ace build --production

cp .env build/.env

exec "$@"