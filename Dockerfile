FROM node:24-slim
WORKDIR /src
COPY package.json package-lock.json run.sh validate.test.js ./
RUN npm install
CMD [ "./run.sh" ]
