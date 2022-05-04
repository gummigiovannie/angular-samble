FROM nginxinc/nginx-unprivileged
WORKDIR /app
COPY . .
COPY /dist/angular-redux /usr/share/nginx/html
