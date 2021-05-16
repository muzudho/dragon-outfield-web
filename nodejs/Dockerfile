FROM node:16-slim

# 開発中に使うんで（＾～＾）
# RUN apt-get update && apt-get install -y \
#     curl

# アプリケーションディレクトリを作成する
WORKDIR /usr/src/app

# アプリケーションの依存関係をインストールする
# ワイルドカードを使用して、package.json と package-lock.json の両方が確実にコピーされるようにします。
# 可能であれば (npm@5+)
COPY package*.json ./

RUN npm install
# 本番用にコードを作成している場合
# RUN npm install --only=production

# アプリケーションのソースをバンドルする
COPY . .

EXPOSE 8080
# ↓ これは要らないぜ（＾～＾）
# EXPOSE 49160

CMD [ "node", "server.js" ]
