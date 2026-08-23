import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import PaddleProductBuyButton from "../../components/PaddleProductBuyButton";
import { PRODUCTS, getProductBySlug } from "../../lib/products.generated";

export async function generateStaticParams() {
  return PRODUCTS.filter((product) => product.enabled).map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product || !product.enabled) return { title: "Factory Tools｜BaiheAI" };

  return {
    title: `${product.name}｜BaiheAI Factory Tools`,
    description: product.description || product.descriptionEn,
    alternates: {
      canonical: `https://tools.baihediy.com/product/${product.slug}`,
    },
  };
}

export default async function GenericProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product || !product.enabled) notFound();

  return (
    <main className="min-h-screen bg-[#f7f9fc] text-slate-950">
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-5xl px-6 py-12 md:px-8 md:py-16">
          <Link href="/" className="text-sm font-bold text-slate-500 hover:text-blue-700">
            ← Factory Tools
          </Link>

          <div className="mt-8 grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
            <div>
              <div className="text-xs font-black tracking-[0.18em] text-blue-600">
                {product.code} · STANDARD DIGITAL PRODUCT
              </div>
              <h1 className="mt-3 text-4xl font-black leading-tight">{product.name}</h1>
              <p className="mt-5 text-base leading-8 text-slate-600">{product.description}</p>
              {product.descriptionEn && (
                <p className="mt-3 text-sm leading-7 text-slate-500">{product.descriptionEn}</p>
              )}

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {product.highlights.map((item) => (
                  <div key={item} className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm font-semibold text-slate-700">
                    ✓ {item}
                  </div>
                ))}
              </div>
            </div>

            <aside className="rounded-3xl border border-slate-200 bg-[#0f2747] p-7 text-white shadow-sm">
              <div className="text-xs font-black tracking-[0.16em] text-blue-200">CURRENT PRODUCT</div>
              <div className="mt-2 text-2xl font-black">{product.name}</div>
              <div className="mt-5 text-4xl font-black text-amber-300">{product.priceText}</div>
              <div className="mt-1 text-sm text-slate-300">一次购买 / One-time purchase</div>

              <div className="mt-6 space-y-3 border-y border-white/10 py-5 text-sm">
                <div className="flex justify-between gap-4"><span className="text-slate-300">版本 / Version</span><b>{product.version}</b></div>
                <div className="flex justify-between gap-4"><span className="text-slate-300">交付 / Delivery</span><b>ZIP Digital Package</b></div>
                <div className="flex justify-between gap-4"><span className="text-slate-300">订阅 / Subscription</span><b>不需要 / No</b></div>
              </div>

              <div className="mt-6">
                <PaddleProductBuyButton productSlug={product.slug} />
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-12 md:px-8">
        <div className="rounded-3xl border border-slate-200 bg-white p-7 md:p-9">
          <div className="text-xs font-black tracking-[0.15em] text-blue-600">DIGITAL DELIVERY</div>
          <h2 className="mt-2 text-2xl font-black">付款确认后自动提供数字下载</h2>
          <p className="mt-4 text-sm leading-7 text-slate-600">
            Paddle 确认订单完成后，BaiheAI 服务器会再次验证订单、购买产品以及退款/争议状态，然后提供对应产品 ZIP 下载。
            PC 端会尝试自动下载并保留按钮；手机端提供明显的下载按钮。
          </p>
          <p className="mt-3 text-sm leading-7 text-slate-500">
            After Paddle confirms the transaction, BaiheAI verifies the order, purchased product and refund/dispute status before releasing the corresponding ZIP package.
          </p>
        </div>

        <div className="mt-8 flex flex-wrap gap-4 text-sm font-bold">
          <Link href="/legal/terms" className="text-blue-700">服务条款 / Terms</Link>
          <Link href="/legal/privacy" className="text-blue-700">隐私政策 / Privacy</Link>
          <Link href="/legal/refund-policy" className="text-blue-700">退款政策 / Refunds</Link>
          <Link href="/support" className="text-blue-700">产品支持 / Support</Link>
        </div>
      </section>
    </main>
  );
}
