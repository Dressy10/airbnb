
FROM node:18-alpine AS build
WORKDIR /app
COPY backend/package*.json ./
RUN npm install

FROM node:18-alpine
WORKDIR /app
COPY --from=build /app/node_modules ./node_modules
COPY backend/. . # Copy all your application code
EXPOSE 3000
CMD ["node", "server.js"] # Adjust 'server.js' to your main Node entry file
