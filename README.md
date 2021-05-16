# outfield-kifuwarabe-web

外野で　きふわらべが何かやってるサーバー（＾～＾）  

## Stop

既に動いている場合は、止めるところからだぜ（＾ｑ＾）  

```shell
# ファイルを Git Hub にプッシュしたあととか

cd /usr/local/src/outfield-kifuwarabe-web/nodejs

docker ps

docker stop <CONTAINER ID>

git pull

docker build . -t muzudho/outfield-kifuwarabe-web
```

## Run

```shell
docker images

# コンテナの外からは 49160、コンテナの中では 8080 ポートを使う（＾～＾）
docker run -p 49160:8080 -d muzudho/outfield-kifuwarabe-web
# 本番だと 49160 じゃなくて 80番ポートを使うぜ（＾～＾）
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

## docker-compose

```shell
cd /usr/local/src/outfield-kifuwarabe-web

# ビルドしたいときだけ --build を付けろだぜ（＾ｑ＾）
docker-compose up -d --build

# 止めるとき
docker-compose down
```

## Referencese

* セキュリティ
  * 自拠点のIPアドレスを調べる方法
    * [あなたが現在インターネットに接続しているグローバルIPアドレス確認](https://www.cman.jp/network/support/go_access.cgi)
  * [Amazon EC2 アクセス制御レシピ](https://dev.classmethod.jp/articles/ec2-cacess/)
* [Node.jsとExpressでローカルサーバーを構築する(2) ―Expressでルーティング―](https://qiita.com/koedamon/items/fb85c3eb32e7838f9d7c)
  