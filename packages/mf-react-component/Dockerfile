FROM node:18 as build

WORKDIR /build

COPY package-lock.json package-lock.json
COPY package.json package.json
COPY tsconfig.json tsconfig.json

WORKDIR /build/packages/devzeebo-react-component

COPY packages/devzeebo-react-component/package.json package.json

RUN npm ci --include-workspace-root

COPY packages/devzeebo-react-component/tsconfig.json tsconfig.json
COPY packages/devzeebo-react-component/webpack.config.js webpack.config.js
COPY packages/devzeebo-react-component/src src

RUN npm run build

FROM nginx

COPY --from=build /build/packages/devzeebo-react-component/dist /app
COPY packages/devzeebo-react-component/nginx.conf /etc/nginx/conf.d/default.conf