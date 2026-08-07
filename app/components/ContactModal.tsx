"use client";

import { useEffect, useState } from "react";

interface ContactModalProps {
  open: boolean;
  onClose: () => void;
}

export default function ContactModal({
  open,
  onClose,
}: ContactModalProps) {
  const [copied, setCopied] = useState("");

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleEscape);
    };
  }, [open, onClose]);

  useEffect(() => {
    if (!open) {
      setCopied("");
    }
  }, [open]);

  const copyText = async (text: string, label: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(label);

      window.setTimeout(() => {
        setCopied("");
      }, 2000);
    } catch {
      const textArea = document.createElement("textarea");

      textArea.value = text;
      textArea.style.position = "fixed";
      textArea.style.opacity = "0";

      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      document.execCommand("copy");
      document.body.removeChild(textArea);

      setCopied(label);

      window.setTimeout(() => {
        setCopied("");
      }, 2000);
    }
  };

  if (!open) return null;

  return (
    <div
      className="
        modal-overlay
        fixed
        inset-0
        z-[9999]
        flex
        items-end
        justify-center
        bg-black/80
        backdrop-blur-md
        sm:items-center
        sm:p-6
      "
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="contact-modal-title"
    >
      <div
        onClick={(event) => event.stopPropagation()}
        className="
          relative
          flex
          max-h-[94vh]
          w-full
          flex-col
          overflow-hidden
          rounded-t-[28px]
          border
          border-cyan-500/25
          bg-[#07101d]
          text-white
          shadow-2xl
          shadow-cyan-500/20
          sm:max-h-[88vh]
          sm:max-w-xl
          sm:rounded-3xl
        "
      >
        {/* 手机顶部拖动提示 */}
        <div className="flex justify-center pt-3 sm:hidden">
          <div className="h-1.5 w-12 rounded-full bg-white/20" />
        </div>

        {/* 标题 */}
        <div
          className="
            relative
            shrink-0
            border-b
            border-white/10
            bg-[#07101d]/95
            px-5
            pb-5
            pt-4
            backdrop-blur-xl
            sm:px-8
            sm:py-6
          "
        >
          <button
            type="button"
            onClick={onClose}
            aria-label="关闭联系窗口"
            className="
              absolute
              right-4
              top-3
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-full
              border
              border-white/10
              bg-white/5
              text-2xl
              text-gray-400
              transition
              hover:border-cyan-400/50
              hover:bg-white/10
              hover:text-white
              sm:right-6
              sm:top-5
            "
          >
            ×
          </button>

          <div className="pr-11 text-center">
            <p className="text-xs font-semibold uppercase tracking-[4px] text-blue-400 sm:text-sm">
              Contact BaiheAI
            </p>

            <h2
              id="contact-modal-title"
              className="
                mt-2
                bg-gradient-to-r
                from-blue-400
                to-cyan-300
                bg-clip-text
                text-3xl
                font-black
                text-transparent
                sm:text-4xl
              "
            >
              免费咨询
            </h2>

            <p className="mt-2 text-sm leading-6 text-gray-400">
              点击直接联系，微信可一键复制。
            </p>
          </div>
        </div>

        {/* 联系内容 */}
        <div className="overflow-y-auto px-4 py-5 sm:px-7 sm:py-6">
          <div className="space-y-4">
            {/* Thailand */}
            <section
              className="
                overflow-hidden
                rounded-2xl
                border
                border-white/10
                bg-white/[0.035]
              "
            >
              <div className="flex items-center gap-3 border-b border-white/10 px-4 py-4">
                <span className="text-2xl">🇹🇭</span>

                <div>
                  <h3 className="font-bold text-white">Thailand</h3>
                  <p className="text-xs text-gray-500">泰国联系方式</p>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-3 p-4 sm:grid-cols-2">
                <a
                  href="tel:+66964080781"
                  className="
                    flex
                    min-h-14
                    items-center
                    gap-3
                    rounded-xl
                    border
                    border-cyan-500/20
                    bg-cyan-500/[0.07]
                    px-4
                    py-3
                    text-cyan-300
                    transition
                    hover:border-cyan-400/50
                    hover:bg-cyan-500/10
                  "
                >
                  <span className="text-xl">📞</span>

                  <span>
                    <span className="block text-xs text-cyan-300/70">
                      点击拨打
                    </span>

                    <span className="font-semibold">
                      +66 964080781
                    </span>
                  </span>
                </a>

                <a
                  href="https://line.me/ti/p/~liyanjun0773"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    flex
                    min-h-14
                    items-center
                    gap-3
                    rounded-xl
                    border
                    border-green-500/20
                    bg-green-500/[0.07]
                    px-4
                    py-3
                    text-green-300
                    transition
                    hover:border-green-400/50
                    hover:bg-green-500/10
                  "
                >
                  <span className="text-xl">💬</span>

                  <span>
                    <span className="block text-xs text-green-300/70">
                      打开 LINE
                    </span>

                    <span className="font-semibold">
                      liyanjun0773
                    </span>
                  </span>
                </a>
              </div>
            </section>

            {/* China */}
            <section
              className="
                overflow-hidden
                rounded-2xl
                border
                border-white/10
                bg-white/[0.035]
              "
            >
              <div className="flex items-center gap-3 border-b border-white/10 px-4 py-4">
                <span className="text-2xl">🇨🇳</span>

                <div>
                  <h3 className="font-bold text-white">China</h3>
                  <p className="text-xs text-gray-500">中文联系方式</p>
                </div>
              </div>

              <div className="space-y-3 p-4">
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  <a
                    href="tel:+8613003137828"
                    className="
                      flex
                      min-h-14
                      items-center
                      gap-3
                      rounded-xl
                      border
                      border-cyan-500/20
                      bg-cyan-500/[0.07]
                      px-4
                      py-3
                      text-cyan-300
                      transition
                      hover:border-cyan-400/50
                      hover:bg-cyan-500/10
                    "
                  >
                    <span className="text-xl">📞</span>

                    <span>
                      <span className="block text-xs text-cyan-300/70">
                        点击拨打
                      </span>

                      <span className="font-semibold">
                        +86 13003137828
                      </span>
                    </span>
                  </a>

                  <a
                    href="https://wa.me/8613003137828"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      flex
                      min-h-14
                      items-center
                      gap-3
                      rounded-xl
                      border
                      border-green-500/20
                      bg-green-500/[0.07]
                      px-4
                      py-3
                      text-green-300
                      transition
                      hover:border-green-400/50
                      hover:bg-green-500/10
                    "
                  >
                    <span className="text-xl">🟢</span>

                    <span>
                      <span className="block text-xs text-green-300/70">
                        打开 WhatsApp
                      </span>

                      <span className="font-semibold">
                        +86 13003137828
                      </span>
                    </span>
                  </a>
                </div>

                {/* 微信一 */}
                <button
                  type="button"
                  onClick={() => copyText("baiheft", "wechat1")}
                  className="
                    flex
                    w-full
                    items-center
                    justify-between
                    gap-4
                    rounded-xl
                    border
                    border-blue-500/20
                    bg-blue-500/[0.06]
                    px-4
                    py-3
                    text-left
                    transition
                    hover:border-blue-400/50
                    hover:bg-blue-500/10
                  "
                >
                  <span className="flex items-center gap-3">
                    <span className="text-xl">💬</span>

                    <span>
                      <span className="block text-xs text-gray-500">
                        微信①
                      </span>

                      <span className="font-semibold text-gray-200">
                        baiheft
                      </span>
                    </span>
                  </span>

                  <span
                    className="
                      shrink-0
                      rounded-lg
                      bg-blue-500/15
                      px-3
                      py-2
                      text-xs
                      font-semibold
                      text-blue-300
                    "
                  >
                    {copied === "wechat1" ? "已复制 ✓" : "复制微信号"}
                  </span>
                </button>

                {/* 微信二 */}
                <button
                  type="button"
                  onClick={() => copyText("13003137828", "wechat2")}
                  className="
                    flex
                    w-full
                    items-center
                    justify-between
                    gap-4
                    rounded-xl
                    border
                    border-blue-500/20
                    bg-blue-500/[0.06]
                    px-4
                    py-3
                    text-left
                    transition
                    hover:border-blue-400/50
                    hover:bg-blue-500/10
                  "
                >
                  <span className="flex items-center gap-3">
                    <span className="text-xl">💬</span>

                    <span>
                      <span className="block text-xs text-gray-500">
                        微信②
                      </span>

                      <span className="font-semibold text-gray-200">
                        13003137828
                      </span>
                    </span>
                  </span>

                  <span
                    className="
                      shrink-0
                      rounded-lg
                      bg-blue-500/15
                      px-3
                      py-2
                      text-xs
                      font-semibold
                      text-blue-300
                    "
                  >
                    {copied === "wechat2" ? "已复制 ✓" : "复制微信号"}
                  </span>
                </button>

                {/* 公众号 */}
                <button
                  type="button"
                  onClick={() => copyText("baihefas", "wechatOfficial")}
                  className="
                    flex
                    w-full
                    items-center
                    justify-between
                    gap-4
                    rounded-xl
                    border
                    border-white/10
                    bg-black/20
                    px-4
                    py-3
                    text-left
                    transition
                    hover:border-blue-400/40
                    hover:bg-white/[0.04]
                  "
                >
                  <span className="flex items-center gap-3">
                    <span className="text-xl">📢</span>

                    <span>
                      <span className="block text-xs text-gray-500">
                        微信公众号
                      </span>

                      <span className="font-semibold text-gray-200">
                        baihefas
                      </span>
                    </span>
                  </span>

                  <span
                    className="
                      shrink-0
                      rounded-lg
                      bg-white/[0.06]
                      px-3
                      py-2
                      text-xs
                      font-semibold
                      text-gray-300
                    "
                  >
                    {copied === "wechatOfficial" ? "已复制 ✓" : "复制"}
                  </span>
                </button>

                <p className="px-1 text-center text-xs leading-5 text-gray-500">
                  点击复制微信号，然后打开微信搜索添加好友。
                </p>
              </div>
            </section>

            {/* Vietnam */}
            <section
              className="
                overflow-hidden
                rounded-2xl
                border
                border-white/10
                bg-white/[0.035]
              "
            >
              <div className="flex items-center gap-3 border-b border-white/10 px-4 py-4">
                <span className="text-2xl">🇻🇳</span>

                <div>
                  <h3 className="font-bold text-white">Vietnam</h3>
                  <p className="text-xs text-gray-500">越南联系方式</p>
                </div>
              </div>

              <div className="p-4">
                <button
                  type="button"
                  onClick={() => copyText("Liyanjun", "zalo")}
                  className="
                    flex
                    w-full
                    items-center
                    justify-between
                    gap-4
                    rounded-xl
                    border
                    border-blue-500/20
                    bg-blue-500/[0.06]
                    px-4
                    py-3
                    text-left
                    transition
                    hover:border-blue-400/50
                    hover:bg-blue-500/10
                  "
                >
                  <span className="flex items-center gap-3">
                    <span className="text-xl">💬</span>

                    <span>
                      <span className="block text-xs text-gray-500">
                        Zalo
                      </span>

                      <span className="font-semibold text-gray-200">
                        Liyanjun
                      </span>
                    </span>
                  </span>

                  <span
                    className="
                      shrink-0
                      rounded-lg
                      bg-blue-500/15
                      px-3
                      py-2
                      text-xs
                      font-semibold
                      text-blue-300
                    "
                  >
                    {copied === "zalo" ? "已复制 ✓" : "复制 Zalo"}
                  </span>
                </button>
              </div>
            </section>

            {/* Email */}
            <section
              className="
                overflow-hidden
                rounded-2xl
                border
                border-white/10
                bg-white/[0.035]
              "
            >
              <div className="flex items-center gap-3 border-b border-white/10 px-4 py-4">
                <span className="text-2xl">📧</span>

                <div>
                  <h3 className="font-bold text-white">Email</h3>
                  <p className="text-xs text-gray-500">邮件联系</p>
                </div>
              </div>

              <div className="space-y-3 p-4">
                <a
                  href="mailto:liyanjun07733@gmail.com"
                  className="
                    block
                    break-all
                    rounded-xl
                    border
                    border-cyan-500/20
                    bg-cyan-500/[0.06]
                    px-4
                    py-3
                    text-sm
                    font-medium
                    text-cyan-300
                    transition
                    hover:border-cyan-400/50
                    hover:bg-cyan-500/10
                    sm:text-base
                  "
                >
                  ✉️ liyanjun07733@gmail.com
                </a>

                <a
                  href="mailto:liyanjun0773@126.com"
                  className="
                    block
                    break-all
                    rounded-xl
                    border
                    border-cyan-500/20
                    bg-cyan-500/[0.06]
                    px-4
                    py-3
                    text-sm
                    font-medium
                    text-cyan-300
                    transition
                    hover:border-cyan-400/50
                    hover:bg-cyan-500/10
                    sm:text-base
                  "
                >
                  ✉️ liyanjun0773@126.com
                </a>
              </div>
            </section>
          </div>
        </div>

        {/* 底部关闭按钮 */}
        <div
          className="
            shrink-0
            border-t
            border-white/10
            bg-[#07101d]/95
            px-4
            py-4
            backdrop-blur-xl
            sm:px-7
          "
        >
          <button
            type="button"
            onClick={onClose}
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
              hover:scale-[1.01]
              hover:shadow-xl
              hover:shadow-cyan-500/20
            "
          >
            关闭
          </button>
        </div>
      </div>
    </div>
  );
}