###########
# Builder #
###########

FROM node:10.16.0-alpine as build-stage

RUN mkdir -p /app/portfolio-app
WORKDIR /app/portfolio-app

COPY package.json /app/portfolio-app
COPY package-lock.json /app/portfolio-app

RUN npm install

COPY . /app/portfolio-app

RUN npm run build

#########
# FINAL #
#########

FROM nginx:1.14

COPY --from=build-stage /app/portfolio-app/build /usr/share/nginx/html
COPY nginx/nginx.conf /etc/nginx/conf.d

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]