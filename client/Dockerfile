FROM node:12.4.0-alpine as build

WORKDIR /app

COPY package.json yarn.lock ./
RUN yarn

COPY . ./

RUN yarn build:docker

FROM nginx:1.17.0-alpine

COPY --from=build /app/build /var/www

COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80

ENTRYPOINT [ "nginx", "-g", "daemon off;" ]