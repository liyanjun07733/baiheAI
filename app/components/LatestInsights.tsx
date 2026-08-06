import Link from "next/link";
import FadeUp from "./FadeUp";

const posts = [
  { tag: "Thailand", title: "中国企业为什么选择投资泰国？", href: "/thailand-investment" },
  { tag: "BOI", title: "BOI 政策方向与项目前期准备", href: "/blog" },
  { tag: "AI Growth", title: "AI 如何帮助企业建立海外客户入口？", href: "/services" },
];

export default function LatestInsights() {
  return (
    <section className="py-20 sm:py-24 md:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 md:px-8">
        <FadeUp>
          <div className="flex flex-col gap-5 text-center sm:flex-row sm:items-end sm:justify-between sm:text-left">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[4px] text-blue-400">INSIGHTS</p>
              <h2 className="mt-4 text-3xl font-black text-white sm:text-4xl md:text-5xl">泰国投资与企业出海洞察</h2>
            </div>
            <Link href="/blog" className="font-semibold text-cyan-300">进入知识中心 →</Link>
          </div>
        </FadeUp>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {posts.map((post, index) => (
            <FadeUp key={post.title} delay={index * 0.08}>
              <Link href={post.href} className="group block h-full rounded-3xl border border-white/10 bg-white/[0.035] p-6 transition hover:-translate-y-1 hover:border-cyan-500/35">
                <span className="rounded-full bg-cyan-500/10 px-3 py-1 text-xs text-cyan-300">{post.tag}</span>
                <h3 className="mt-5 text-xl font-bold leading-8 text-white">{post.title}</h3>
                <p className="mt-6 font-semibold text-blue-400 transition group-hover:text-cyan-300">阅读更多 →</p>
              </Link>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
