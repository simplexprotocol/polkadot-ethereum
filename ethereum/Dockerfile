FROM node:12
WORKDIR /
COPY package.json .
RUN npm install --quiet
COPY . .
EXPOSE 9545
# FROM node:8-alpine

# WORKDIR /src

# # COPY package*.json ./

# # RUN npm install -g yarn

# COPY package.json .

# RUN npm install

# COPY . .

# EXPOSE 9545
# CMD ["truffle", "develop"]
# # RUN ["truffle", "develop"]
# # CMD [ "truffle", "develop" ]

# # RUN yarn
# # RUN go build -o ${APP_NAME}


# # CMD ./${APP_NAME}
