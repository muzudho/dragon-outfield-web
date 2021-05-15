# outfield-kifuwarabe-web

外野で　きふわらべが何かやってるサーバー（＾～＾）  

## Run

```shell
docker build . -t muzudho/outfield-kifuwarabe-web

docker images

# コンテナの外からは 49160、コンテナの中では 8080 ポートを使う（＾～＾）
docker run -p 49160:8080 -d muzudho/outfield-kifuwarabe-web
# 本番だと 49160 じゃなくて 80 にするんじゃないか（＾～＾）
# docker run -p 80:8080 -d muzudho/outfield-kifuwarabe-web

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

コンテナの外で：  

[http://localhost:49160](http://localhost:49160)  
[http://localhost:49160/data-table.html](http://localhost:49160/data-table.html)  

## Referencese

* [Node.jsとExpressでローカルサーバーを構築する(2) ―Expressでルーティング―](https://qiita.com/koedamon/items/fb85c3eb32e7838f9d7c)
