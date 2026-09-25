FROM node:22-alpine

WORKDIR /usr/src/app

RUN npm install -g pm2 && apk add --no-cache btop

COPY package.json ./
RUN npm install

COPY . .

EXPOSE 8080

CMD ["pm2-runtime", "ecosystem.config.js"]