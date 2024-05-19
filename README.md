![](https://i.imgur.com/2T7dOi7.png)
# 2024 軟體工程師體驗營 - 個人品牌網站

此專案為六角學院 2024 軟體工程師體驗營的個人品牌網站設計稿之成品

![Required Node version](https://img.shields.io/node/v/create-vue)

## 開發環境設置

建議使用 [VSCode](https://code.visualstudio.com/) 搭配 [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar)

## 快速開始

**專案設置（Project setup）**

將專案複製到本地端
```sh
$ git clone git@github.com:hexschool/2024-camp.git
```

基礎套件安裝
```sh
$ cd 2024-camp
$ npm install
```

**執行專案（Start the server）**
```sh
$ npm run dev
```

**生成靜態檔案（Generate static files）**
```sh
$ npm run build
```

## 靜態檔案
位於 `src/assets` 

結構說明
```
assets
├── images              存放圖片
└── styles              存放 SCSS 檔案
    ├── _colors.scss       產生自訂顏色的 class
    ├── _custom.scss       覆蓋以及自訂樣式
    ├── _variable.scss     主要的變數
    └── all.scss           進入點
```