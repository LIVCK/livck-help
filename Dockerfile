FROM node:12-alpine AS BUILD

WORKDIR /var/www

COPY . /var/www

RUN npm install

RUN npm run production

FROM nginx:1.14-alpine AS APP_BASE

WORKDIR /var/www

COPY --from=BUILD /var/www .

COPY ./site.conf /etc/nginx/conf.d/site.conf

CMD ["nginx"]