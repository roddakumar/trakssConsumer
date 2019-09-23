#stage 1
FROM  node:12.9.0-alpine as node
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build --prod


#stage 2
FROM nginx:alpine as prod
COPY --from=node /app/dist/consumer-portal-frontend /usr/share/nginx/html