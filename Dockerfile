FROM node:20-alpine as build-stage

WORKDIR /app

COPY *.json . /app/

RUN npm install 

COPY . .

RUN npm run build


FROM nginx:alpine

COPY --from=build-stage /app/dist/reactive-design-tmdb /usr/share/nginx/html

CMD ["nginx", "-g", "daemon off;"]