FROM node:lts-alpine
WORKDIR /app
COPY package*.json ./
COPY yarn.lock ./

RUN apk add --no-cache yarn
RUN yarn install
COPY . .

EXPOSE 3000
CMD ["npm", "run", "prod"]
