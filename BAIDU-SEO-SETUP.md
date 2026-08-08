# BaiheAI V7.8 百度 SEO 上线操作说明

## 这一阶段已经在代码里完成
- 泰国验厂独立服务页：/factory-audit
- 验厂服务拆分为“工厂验厂辅导”与“客户委托现场验厂”
- 新增 8 篇中文搜索长尾内容
- 更新站内搜索关键词
- 更新 sitemap.xml
- robots 对 Baiduspider 明确开放公开页面
- 全站 metadata 增加泰国建厂、验厂、工业园、中国企业投资泰国等关键词
- 新增受保护的百度普通收录 API：/api/baidu-submit
- BAIDU-URLS.txt 列出第一批建议向百度提交的 URL

## 百度搜索资源平台上线步骤
1. 登录百度搜索资源平台。
2. 添加并验证 www.baihediy.com。
3. 验证完成后，先使用“抓取诊断”检查：
   https://www.baihediy.com/
   https://www.baihediy.com/factory-audit
4. 在“普通收录”提交 sitemap：
   https://www.baihediy.com/sitemap.xml
5. 取得“普通收录 API”的 token 后再启用本站接口。

## Vercel 环境变量
在 Vercel Project → Settings → Environment Variables 添加：
BAIDU_SITE=www.baihediy.com
BAIDU_TOKEN=百度搜索资源平台提供的 token
BAIDU_SUBMIT_SECRET=你自己生成的一串长随机字符

不要把 BAIDU_TOKEN 或 BAIDU_SUBMIT_SECRET 写进 GitHub。

## 调用本站百度提交接口
POST:
https://www.baihediy.com/api/baidu-submit

Header:
Content-Type: application/json
x-baiheai-secret: 你的 BAIDU_SUBMIT_SECRET

Body:
{
  "urls": [
    "https://www.baihediy.com/factory-audit",
    "https://www.baihediy.com/blog/thailand-factory-audit-preparation"
  ]
}

注意：
- 此接口只有设置 token 和 secret 后才会启用。
- 只接受 baihediy.com 自己的 URL。
- 单次最多 100 条。
- 百度“普通收录”用于加快链接发现/抓取，不保证一定收录。
- 百度“快速收录”已在 2024-04-26 下线并升级为“快速抓取”；是否获得快速抓取权益以百度平台显示为准。
