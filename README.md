# mini-railway

pkg update && pkg upgrade -y

termux-setup-storage

pkg install nodejs -y

node -v
npm -v

mkdir railway
cd railway

npm init -y

npm install ws


git clone https://github.com/niddumulu/mini-railway.git

cd mini-railway

npm install
node server.js

🚄 Mini-Railway running on 0.0.0.0:8080