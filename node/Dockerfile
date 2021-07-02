# pull the Node.js Docker image
FROM node:15

# create the directory inside the container
WORKDIR /usr/src/app

#Dowloading wget
RUN apt-get update && apt-get install -y wget

ENV DOCKERIZE_VERSION v0.6.1

#Downloading dockerize
RUN wget https://github.com/jwilder/dockerize/releases/download/$DOCKERIZE_VERSION/dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
    && tar -C /usr/local/bin -xzvf dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
    && rm dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz

# copy the package.json files from local machine to the workdir in container
#COPY package*.json ./

# run npm install in our local machine
RUN npm install

# copy the generated modules and all other files to the container
#COPY . .

# our app is running on port 3000 within the container, so need to expose it
EXPOSE 3000

# the command that starts our app
#CMD ["node", "index.js"]