############################
#       BUILD STEP         #
############################
FROM node:12-alpine as build
WORKDIR /compile/
COPY ./src ./src
COPY *.json /compile/
RUN ls -l
RUN npm install
RUN npm install -g @angular/cli
RUN ng build --prod

############################
#       IMAGE STEP         #
############################
FROM nginx:alpine
COPY ./.nginx/nginx.conf /etc/nginx/nginx.conf
RUN rm -rf /usr/share/nginx/html/*
COPY --from=build /compile/dist /usr/share/nginx/html
EXPOSE 4200 80
CMD ["nginx", "-g", "daemon off;"]
