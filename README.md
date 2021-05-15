# outfield-kifuwarabe-web

外野で　きふわらべが何かやってるサーバー（＾～＾）  

## Run

```shell
docker build . -t muzudho/outfield-kifuwarabe-web

docker images

docker run -p 49160:8080 -d muzudho/outfield-kifuwarabe-web

docker ps

docker logs <container id>

# 例
# Running on http://localhost:8080

# コンテナに入る
$ docker exec -it <container id> /bin/bash
```

コンテナの中で：  

```shell
apt-get update
apt-get install -y curl

curl -i localhost:8080
HTTP/1.1 200 OK
X-Powered-By: Express
Content-Type: text/html; charset=utf-8
Content-Length: 11
ETag: W/"b-Ck1VqNd45QIvq3AZd8XYQLvEhtA"
Date: Sat, 15 May 2021 11:55:07 GMT
Connection: keep-alive
Keep-Alive: timeout=5
```
