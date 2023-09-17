# pull official base image
FROM node:14-alpine

# set working directory
WORKDIR /usr/app

# install app dependencies
COPY package.json ./
COPY yarn.lock ./
RUN yarn

# add app
COPY . .

RUN yarn build

# Expose port
EXPOSE 3000

# start app
CMD yarn deploy
