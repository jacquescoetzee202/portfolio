# Base node image
FROM node:22-alpine AS base

# Install all node_modules, including dev dependencies
FROM base AS deps

# set for base and all layer that inherit from it
ENV NODE_ENV="production"

WORKDIR /app

ADD package.json ./
RUN npm install --include=dev

# Setup production node_modules
FROM base AS production-deps

WORKDIR /app

COPY --from=deps /app/node_modules /app/node_modules
ADD package.json ./
RUN npm prune --omit=dev

# Build the app
FROM base AS build

WORKDIR /app

COPY --from=deps /app/node_modules /app/node_modules

ADD . .
RUN npm run build
RUN ls /app

# Build production image
FROM base

ENV PORT="8080"
ENV NODE_ENV="production"

WORKDIR /app

COPY --from=production-deps /app/node_modules /app/node_modules

COPY --from=build /app/build /app/build
COPY --from=build /app/public /app/public
COPY --from=build /app/package.json /app/package.json
ADD . .

EXPOSE 8080

CMD ["npm", "run", "start"]