FROM node:18

WORKDIR /app

COPY server/package*.json ./
RUN npm install

COPY server/ .
COPY public/ ../public/dock

EXPOSE 5000

CMD ["node", "app.js"]