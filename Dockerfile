# Use Node.js LTS
FROM node:20

# Set working directory
WORKDIR /usr/src/app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy all source code
COPY . .

# Expose the port (from environment variable)
EXPOSE 4000

# Start the app
CMD ["node", "index.js"]
