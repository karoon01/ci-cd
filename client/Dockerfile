# Use the official lightweight Node.js 18 image.
# https://hub.docker.com/_/node
FROM node:18-alpine AS build

# Create and change to the app directory.
WORKDIR /app

# Copy application dependency manifests to the container image.
# A wildcard is used to ensure both package.json AND package-lock.json are copied.
# Copying this separately prevents re-running npm install on every code change.
COPY package*.json ./

# Install dependencies.
# If you add a package-lock.json speed your build by switching to 'npm ci'.
# RUN npm ci --only=production
RUN npm install --silent

# Copy the rest of the app's source code to the container
COPY . .

RUN npm run build

# Use an official Nginx runtime as a parent image
FROM nginx:alpine

# Remove the default Nginx configuration
RUN rm -rf /usr/share/nginx/html/*

# Copy the built React app to the Nginx server root
COPY --from=build /app/build /usr/share/nginx/html

# Copy a custom Nginx configuration file to the container
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]