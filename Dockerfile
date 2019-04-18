
# This dockerfile uses the ubuntu image
# v0.1
# Author: Alex Qin

# Pull base image.
FROM node:11.14.0-alpine
# Maintainer: qianjin.qin@qq.com
MAINTAINER qianjin.qin@qq.com

COPY ./server /usr/src/app
WORKDIR /usr/src/app
RUN \
  npm install
# Define default command.
# CMD ["npm install && npm start"]
CMD ["node", "src/index.js"]

# Expose ports.
# EXPOSE 5000