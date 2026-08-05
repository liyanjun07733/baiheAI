export default function Footer() {
  return (
    <footer className="border-t border-gray-800 bg-black text-gray-400">
      <div className="max-w-7xl mx-auto px-8 py-16 grid md:grid-cols-4 gap-10">

        {/* Logo */}
        <div>
          <h2 className="text-3xl font-bold text-white mb-4">
            Baihe<span className="text-blue-500">AI</span>
          </h2>

          <p className="leading-8">
            AI Growth Partner
            <br />
            帮助中国企业利用 AI
            <br />
            开拓东南亚市场。
          </p>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-white font-semibold mb-5">
            服务
          </h3>

          <ul className="space-y-3">
            <li>AI 官网开发</li>
            <li>AI 获客系统</li>
            <li>AI 自动化</li>
            <li>海外品牌建设</li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="text-white font-semibold mb-5">
            公司
          </h3>

          <ul className="space-y-3">
            <li>关于我们</li>
            <li>成功案例</li>
            <li>合作流程</li>
            <li>联系我们</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-white font-semibold mb-5">
            联系方式
          </h3>

          <ul className="space-y-3">
            <li>Bangkok, Thailand</li>
            <li>hello@baiheai.com</li>
            <li>WhatsApp</li>
            <li>WeChat：BaiheAI</li>
          </ul>
        </div>

      </div>

      <div className="border-t border-gray-800 py-6 text-center text-sm text-gray-500">
        © 2026 BaiheAI. All Rights Reserved.
      </div>
    </footer>
  );
}