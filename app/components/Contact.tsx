"use client";

import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const form = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.current) return;

    setLoading(true);

    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        form.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );

      alert("发送成功，我们会在24小时内联系您！");
      form.current.reset();
    } catch (err) {
      console.error(err);
      alert("发送失败，请稍后重试。");
    }

    setLoading(false);
  };

  return (
    <section
      id="contact"
      className="max-w-7xl mx-auto px-8 py-32"
    >
      <div className="text-center mb-20">
        <p className="text-blue-500 uppercase tracking-[6px] font-semibold">
          CONTACT
        </p>

        <h2 className="text-5xl font-black mt-5">
          联系我们 / Contact Us
        </h2>

        <p className="text-gray-400 text-xl mt-6">
          告诉我们您的需求，我们将在24小时内回复您。
          <br />
          Tell us about your project and we'll get back to you within 24 hours.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12">

        {/* 联系方式 */}
        <div className="space-y-8">

          <div>
            <h3 className="text-xl font-bold mb-3">🇹🇭 Thailand</h3>
            <p className="text-gray-400">📞 +66 964080781</p>
            <p className="text-gray-400">LINE：liyanjun0773</p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-3">🇨🇳 China</h3>
            <p className="text-gray-400">📞 +86 13003137828</p>
            <p className="text-gray-400">微信①：baiheft</p>
            <p className="text-gray-400">微信②：13003137828</p>
            <p className="text-gray-400">公众号：baihefas</p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-3">🇻🇳 Vietnam</h3>
            <p className="text-gray-400">Zalo：Liyanjun</p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-3">📧 Email</h3>
            <p className="text-gray-400">liyanjun07733@gmail.com</p>
            <p className="text-gray-400">liyanjun0773@126.com</p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-3">📍 Office</h3>
            <p className="text-gray-400">
              Bangkok, Thailand
              <br />
              Serving Clients Worldwide
            </p>
          </div>

        </div>

        {/* 联系表单 */}
        <form
          ref={form}
          onSubmit={sendEmail}
          className="bg-gray-900 border border-gray-800 rounded-3xl p-8 space-y-5"
        >

          <input
            name="company"
            placeholder="Company / 公司名称"
            required
            className="w-full bg-black border border-gray-700 rounded-xl p-4"
          />

          <input
            name="name"
            placeholder="Name / 联系人"
            required
            className="w-full bg-black border border-gray-700 rounded-xl p-4"
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            className="w-full bg-black border border-gray-700 rounded-xl p-4"
          />

          <textarea
            name="message"
            rows={5}
            placeholder="Please describe your project... / 请描述您的需求..."
            required
            className="w-full bg-black border border-gray-700 rounded-xl p-4"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full py-4 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 font-bold hover:scale-[1.02] transition"
          >
            {loading ? "Sending..." : "免费咨询 / Free Consultation"}
          </button>

          <p className="text-sm text-gray-500 text-center">
            ✅ Usually reply within 24 hours
          </p>

        </form>

      </div>
    </section>
  );
}