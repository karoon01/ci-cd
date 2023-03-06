# Use the official lightweight Node.js 18 image.
# https://hub.docker.com/_/node
FROM node:18-alpine

# Create and change to the app directory.
WORKDIR /usr/src/app

# Copy application dependency manifests to the container image.
# A wildcard is used to ensure both package.json AND package-lock.json are copied.
# Copying this separately prevents re-running npm install on every code change.
COPY package*.json ./

# Define a env file variable
ARG ENV_FILE=.env
ENV ENV_FILE=${ENV_FILE:-.env}

# Copy the environment file into the container image
COPY $ENV_FILE /usr/src/app/.env

# Install dependencies.
# If you add a package-lock.json speed your build by switching to 'npm ci'.
# RUN npm ci --only=production
RUN npm install --production

# Copy local code to the container image.
COPY . ./

# Run the web service on container startup.
CMD ["node", "server.js"]
