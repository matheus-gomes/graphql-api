FROM node:20-alpine

RUN apk add -U --no-cache curl bash openssl

WORKDIR /app

COPY ./package.json ./

EXPOSE 3000

CMD [ "npm", "run", "dev" ]