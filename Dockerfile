FROM node:22-alpine

WORKDIR /app

COPY package.json ./
COPY package-lock.json ./
RUN npm install --ignore-scripts

COPY . ./

EXPOSE 3001

CMD node /app/bin/migrate.js
CMD node /app/bin/start_prod.js