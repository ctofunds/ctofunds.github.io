FROM mhart/alpine-node

WORKDIR /usr/src
COPY . .
RUN npm ci
RUN npm run build && mv dist /public
