# npm을 사용하기 위해서 node BASE Image를 사용
FROM node:16-alpine

# 어떤 경로에 파일을 넣어줄건지 설정
WORKDIR /usr/src/app

# 컨테이너 폴더에 해당 파일을 복사
COPY package.json ./

RUN npm install

# 모든 파일을 컨테이너 안에 복사
COPY ./ ./

CMD [ "npm", "run", "start" ]