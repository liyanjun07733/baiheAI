"use client";

interface ContactModalProps {
  open: boolean;
  onClose: () => void;
}

export default function ContactModal({
  open,
  onClose,
}: ContactModalProps) {
  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] bg-black/80 backdrop-blur-sm flex items-center justify-center p-5"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-lg max-h-[85vh] overflow-y-auto rounded-3xl border border-cyan-500/30 bg-[#0B1120] text-white shadow-2xl shadow-cyan-500/20"
      >
        {/* 标题 */}
        <div className="sticky top-0 bg-[#0B1120] border-b border-white/10 px-8 py-6 rounded-t-3xl">

          <h2 className="text-3xl font-black text-center bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
            免费咨询
          </h2>

          <p className="text-center text-gray-400 mt-2">
            Contact BaiheAI
          </p>

        </div>

        {/* 内容 */}
        <div className="p-8 space-y-6">

          {/* Thailand */}
          <div className="rounded-2xl border border-white/10 p-5">

            <h3 className="text-xl font-bold mb-3">
              🇹🇭 Thailand
            </h3>

            <a
              href="tel:+66964080781"
              className="block text-cyan-400 hover:text-cyan-300"
            >
              📞 +66 964080781（点击拨打）
            </a>

            <p className="mt-2 text-gray-300">
              LINE：liyanjun0773
            </p>

          </div>

          {/* China */}
          <div className="rounded-2xl border border-white/10 p-5">

            <h3 className="text-xl font-bold mb-3">
              🇨🇳 China
            </h3>

            <a
              href="tel:+8613003137828"
              className="block text-cyan-400 hover:text-cyan-300"
            >
              📞 +86 13003137828（点击拨打）
            </a>

            <a
              href="https://wa.me/8613003137828"
              target="_blank"
              rel="noopener noreferrer"
              className="block mt-3 text-green-400 hover:text-green-300"
            >
              WhatsApp：+86 13003137828
            </a>

            <div className="mt-3 text-gray-300">
              微信①：baiheft
            </div>

            <div className="text-gray-300">
              微信②：13003137828
            </div>

            <div className="text-gray-300">
              公众号：baihefas
            </div>

          </div>

          {/* Vietnam */}
          <div className="rounded-2xl border border-white/10 p-5">

            <h3 className="text-xl font-bold mb-3">
              🇻🇳 Vietnam
            </h3>

            <p className="text-gray-300">
              Zalo：Liyanjun
            </p>

          </div>

          {/* Email */}
          <div className="rounded-2xl border border-white/10 p-5">

            <h3 className="text-xl font-bold mb-3">
              📧 Email
            </h3>

            <a
              href="mailto:liyanjun07733@gmail.com"
              className="block text-cyan-400 hover:text-cyan-300"
            >
              liyanjun07733@gmail.com
            </a>

            <a
              href="mailto:liyanjun0773@126.com"
              className="block mt-2 text-cyan-400 hover:text-cyan-300"
            >
              liyanjun0773@126.com
            </a>

          </div>

        </div>

        {/* 底部 */}
        <div className="sticky bottom-0 bg-[#0B1120] border-t border-white/10 p-6 rounded-b-3xl">

          <button
            onClick={onClose}
            className="w-full rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 py-4 font-bold transition hover:scale-[1.02]"
          >
            关闭
          </button>

        </div>

      </div>
    </div>
  );
}