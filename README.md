# Warabenture2

外野で　きふわらべが何かやってるサーバー（＾～＾）  

## Stop

既に動いている場合は、止めるところからだぜ（＾ｑ＾）  

```shell
# ファイルを Git Hub にプッシュしたあととか

cd /usr/local/src/warabenture2/nodejs

docker ps

docker stop <CONTAINER ID>

git pull

docker build . -t muzudho/warabenture2-nodejs
```

## Run

```shell
docker images

# コンテナの外からは 49160、コンテナの中では 8080 ポートを使う（＾～＾）
docker run -p 49160:8080 -d muzudho/warabenture2-nodejs
# 本番だと 49160 じゃなくて 80番ポートを使うぜ（＾～＾）
# docker run -p 80:8080 -d muzudho/warabenture2-nodejs

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
cd /usr/local/src/warabenture2

# ビルドしたいときだけ --build を付けろだぜ（＾ｑ＾）
docker-compose up -d --build

# 止めるとき
docker-compose down
```

## SSL証明書

```shell
## どこでもいいらしいがとりあえず
#cd /usr/local
#
## リポジトリをクローン
#git clone https://github.com/certbot/certbot
#
#cd certbot
#
## インストールできたか確認するだけ
#./certbot-auto --help
#
## 初回はスタンドアロンモード（サーバー無し）で証明書取得
#./certbot-auto certonly --standalone -t
#
## あれ？使えね（＾～＾）
#./certbot-auto certonly --standalone -t
#Skipping bootstrap because certbot-auto is deprecated on this system.
#Your system is not supported by certbot-auto anymore.
#Certbot cannot be installed.
#Please visit https://certbot.eff.org/ to check for other alternatives.
```

certbot.eff.org を調べることに（＾～＾）  
👇 DockerコンテナのNginxのとこにsnapdを入れるのに失敗（＾～＾）  

```shell
## Dockerコンテナの中に入る必要があるか？
#docker ps
#
## nginxの方のコンテナに入れだぜ（＾～＾）
#docker exec -it <CONTAINER ID> /bin/bash
#
## どこでやればいいのか分からんのでとりあえず
#cd /usr/local
#
## nginxのDockerに入ってない？
#apt-get update
#apt-get install -y snapd
#
## snap をインストール
#sudo snap install core; sudo snap refresh core
#
## 古いcertbotが入っていたら削除
#sudo apt-get remove certbot, sudo dnf remove certbot
#
## certbotをインストール
#sudo snap install --classic certbot
#
## コマンドが有効になるようにする準備
#sudo ln -s /snap/bin/certbot /usr/bin/certbot
#
## nginxがどうのこうの
#cd /usr/local/src/warabenture2/nginx
```

## Referencese

* セキュリティ
  * 自拠点のIPアドレスを調べる方法
    * [あなたが現在インターネットに接続しているグローバルIPアドレス確認](https://www.cman.jp/network/support/go_access.cgi)
  * [Amazon EC2 アクセス制御レシピ](https://dev.classmethod.jp/articles/ec2-cacess/)
* [Node.jsとExpressでローカルサーバーを構築する(2) ―Expressでルーティング―](https://qiita.com/koedamon/items/fb85c3eb32e7838f9d7c)
* SSL証明書
  * [Let's Encrypt で Nginx にSSLを設定する](https://qiita.com/HeRo/items/f9eb8d8a08d4d5b63ee9)
  * [EC2+ACM+ALB+お名前.comで設定をしてサブドメインでhttps接続できるようになるまでひととおり](https://owani.net/2018/10/28/ec2-acm-alb/)
  * [https://certbot.eff.org/lets-encrypt/ubuntufocal-nginx](https://certbot.eff.org/lets-encrypt/ubuntufocal-nginx)
* [AWS 初心者向けハンズオン](https://aws.amazon.com/jp/aws-jp-introduction/aws-jp-webinar-hands-on/)