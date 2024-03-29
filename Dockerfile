FROM node:16-alpine AS BUILD

WORKDIR /var/www

COPY . /var/www

RUN npm install

RUN npm run build

FROM nginx:1.14-alpine AS APP_BASE

WORKDIR /var/www

COPY --from=BUILD /var/www/dist .

COPY ./site.conf /etc/nginx/conf.d/default.conf

RUN ln -sf /dev/stdout /var/log/nginx/access.log \
	&& ln -sf /dev/stderr /var/log/nginx/error.log

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]