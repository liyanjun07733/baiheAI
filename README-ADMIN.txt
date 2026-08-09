BaiheAI 客户后台安装说明

1. 将 ZIP 中 app 目录的内容覆盖/合并到网站项目：
   C:\Users\User\baiheai\app\

2. 在本地 .env.local 增加：
   ADMIN_PASSWORD=你的后台密码

3. 在 Vercel 项目 Settings -> Environment Variables 增加：
   Name: ADMIN_PASSWORD
   Value: 你的后台密码
   Environment: Production / Preview / Development

4. 本地运行：
   npm.cmd run build

5. 部署后访问：
   https://www.baihediy.com/admin/login

注意：
- 不要把真实 ADMIN_PASSWORD 写进 Git。
- DATABASE_URL 已由 Neon/Vercel 提供，无需重新填写。
