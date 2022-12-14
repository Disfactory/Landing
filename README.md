# Disfactory/Landing (農地違章工廠回報2.0)

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

- - -

## Project Directory Explanation (專案目錄結構說明)
```
/                       - 根目錄
  /components           - React 元件
    /landing              - 單一區塊block與局部元件
    /nav                - navbar
    /header             - 主視覺區塊
    /footer             - 頁尾
    /main               - 主要區塊內容
    *                   - 共用類型的元件會放在 components/landing 底下
  /pages                - 頁面檔
  /constants            - 常數、設定
  /styles               - theme設定
  /public               - SVG、靜態檔案
```

- - -

## Environment Variables (環境變數)
| 變數名稱 | 資料型態 | 初始值 | 變數說明 |
| --- | --- | --- | --- |


## Feature Toggle (功能開關，暫時性)
| 變數名稱 | 資料型態 | 初始值 | 變數說明 |
| --- | --- | --- | --- |


環境變數設定與使用請參閱： [Basic Features: Environment Variables | Next.js](https://nextjs.org/docs/basic-features/environment-variables)
