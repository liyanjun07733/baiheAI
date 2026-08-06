"use client";

import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import FadeUp from "./FadeUp";

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
      className="
        max-w-7xl
        mx-auto
        px-5
        sm:px-6
        md:px-8
        py-20
        sm:py-24
        md:py-32
      "
    >

      <FadeUp>

        <div className="text-center mb-14 sm:mb-16 md:mb-20">

          <p
            className="
              text-blue-400
              uppercase
              tracking-[4px]
              sm:tracking-[6px]
              font-semibold
              text-sm
              sm:text-base
            "
          >
            CONTACT
          </p>

          <h2
            className="
              mt-5
              text-3xl
              sm:text-4xl
              md:text-5xl
              lg:text-6xl
              font-black
            "
          >
            联系我们
          </h2>

          <p
            className="
              mt-6
              text-base
              sm:text-lg
              md:text-xl
              text-gray-400
              max-w-3xl
              mx-auto
              leading-8
              md:leading-9
            "
          >
            告诉我们您的需求，
            我们将在 24 小时内与您联系。
          </p>

        </div>

      </FadeUp>

      <div
        className="
          grid
          grid-cols-1
          lg:grid-cols-2
          gap-8
          lg:gap-14
        "
      >        {/* 左侧联系方式 */}
        <FadeUp>
          <div className="space-y-6">

            <div className="rounded-3xl border border-gray-800 bg-gray-900/70 p-6 md:p-8">
              <h3 className="mb-4 text-xl font-bold text-white">
                🇹🇭 Thailand
              </h3>

              <a
                href="tel:+66964080781"
                className="block text-cyan-400 transition hover:text-cyan-300"
              >
                📞 +66 964080781
              </a>

              <a
                href="https://line.me/ti/p/~liyanjun0773"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 block text-green-400 transition hover:text-green-300"
              >
                💬 LINE：liyanjun0773
              </a>
            </div>

            <div className="rounded-3xl border border-gray-800 bg-gray-900/70 p-6 md:p-8">
              <h3 className="mb-4 text-xl font-bold text-white">
                🇨🇳 China
              </h3>

              <a
                href="tel:+8613003137828"
                className="block text-cyan-400 transition hover:text-cyan-300"
              >
                📞 +86 13003137828
              </a>

              <a
                href="https://wa.me/8613003137828"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 block text-green-400 transition hover:text-green-300"
              >
                💬 WhatsApp：+86 13003137828
              </a>

              <p className="mt-3 text-gray-400">
                微信①：baiheft
              </p>

              <p className="mt-2 text-gray-400">
                微信②：13003137828
              </p>

              <p className="mt-2 text-gray-400">
                微信公众号：baihefas
              </p>
            </div>

            <div className="rounded-3xl border border-gray-800 bg-gray-900/70 p-6 md:p-8">
              <h3 className="mb-4 text-xl font-bold text-white">
                🇻🇳 Vietnam
              </h3>

              <p className="text-gray-400">
                💬 Zalo：Liyanjun
              </p>
            </div>

            <div className="rounded-3xl border border-gray-800 bg-gray-900/70 p-6 md:p-8">
              <h3 className="mb-4 text-xl font-bold text-white">
                📧 Email
              </h3>

              <a
                href="mailto:liyanjun07733@gmail.com"
                className="block break-all text-cyan-400 transition hover:text-cyan-300"
              >
                liyanjun07733@gmail.com
              </a>

              <a
                href="mailto:liyanjun0773@126.com"
                className="mt-3 block break-all text-cyan-400 transition hover:text-cyan-300"
              >
                liyanjun0773@126.com
              </a>
            </div>

            <div className="rounded-3xl border border-gray-800 bg-gray-900/70 p-6 md:p-8">
              <h3 className="mb-4 text-xl font-bold text-white">
                📍 Office
              </h3>

              <p className="leading-8 text-gray-400">
                Bangkok, Thailand
                <br />
                Serving Clients Worldwide
              </p>
            </div>

          </div>
        </FadeUp>

        {/* 右侧联系表单 */}
        <FadeUp delay={0.15}>
          <form
            ref={form}
            onSubmit={sendEmail}
            className="
              rounded-3xl
              border
              border-gray-800
              bg-gray-900/70
              p-6
              sm:p-8
              md:p-10
              space-y-5
              backdrop-blur-xl
            "
          >
            <input
              name="company"
              placeholder="Company / 公司名称"
              required
              className="
                w-full
                rounded-xl
                border
                border-gray-700
                bg-black
                p-4
                text-white
                outline-none
                transition
                placeholder:text-gray-600
                focus:border-blue-500
              "
            />

            <input
              name="name"
              placeholder="Name / 联系人"
              required
              className="
                w-full
                rounded-xl
                border
                border-gray-700
                bg-black
                p-4
                text-white
                outline-none
                transition
                placeholder:text-gray-600
                focus:border-blue-500
              "
            />

            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              className="
                w-full
                rounded-xl
                border
                border-gray-700
                bg-black
                p-4
                text-white
                outline-none
                transition
                placeholder:text-gray-600
                focus:border-blue-500
              "
            />

            <textarea
              name="message"
              rows={6}
              placeholder="Please describe your project... / 请描述您的需求..."
              required
              className="
                w-full
                resize-none
                rounded-xl
                border
                border-gray-700
                bg-black
                p-4
                text-white
                outline-none
                transition
                placeholder:text-gray-600
                focus:border-blue-500
              "
            />

            <button
              type="submit"
              disabled={loading}
              className="
                w-full
                rounded-xl
                bg-gradient-to-r
                from-blue-600
                to-cyan-500
                py-4
                font-bold
                text-white
                transition-all
                duration-300
                hover:scale-[1.02]
                hover:shadow-xl
                hover:shadow-cyan-500/20
                disabled:cursor-not-allowed
                disabled:opacity-60
              "
            >
              {loading
                ? "Sending..."
                : "免费咨询 / Free Consultation"}
            </button>

            <p className="text-center text-sm text-gray-500">
              ✅ Usually reply within 24 hours
            </p>
          </form>
        </FadeUp>

      </div>
    </section>
  );
}