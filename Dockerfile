FROM node:23-alpine AS build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install --ignore-scripts
COPY . .
RUN npm run build

FROM nginx:alpine
WORKDIR /app
ENV NODE_ENV=production
RUN rm -rf /usr/share/nginx/html
COPY --from=build /app/dist /usr/share/nginx/html
COPY --from=build /app/docker/nginx/default.conf /etc/nginx/conf.d/default.conf
RUN chown -R nginx:nginx /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
