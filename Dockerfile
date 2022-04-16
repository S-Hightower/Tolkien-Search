# pull the official base image
FROM node:latest
# set working direction
WORKDIR /app
# install application dependencies
COPY package.json ./
COPY package-lock.json ./
RUN npm i
# add app
COPY . ./
# start app
CMD ["npm", "start"]