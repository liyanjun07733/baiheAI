import { redirect } from "next/navigation";
import { isAdminAuthenticated } from "../../lib/adminAuth";

type LoginPageProps = {
  searchParams: Promise<{
    error?: string;
  }>;
};

export default async function AdminLoginPage({
  searchParams,
}: LoginPageProps) {
  if (await isAdminAuthenticated()) {
    redirect("/admin/leads");
  }

  const params = await searchParams;
  const hasError = params.error === "1";

  return (
    <main className="min-h-screen bg-slate-950 px-5 py-16 text-white">
      <div className="mx-auto w-full max-w-md">
        <div className="mb-8">
          <p className="mb-2 text-sm font-semibold tracking-[0.22em] text-blue-400">
            BAIHEAI ADMIN
          </p>
          <h1 className="text-3xl font-bold">客户后台登录</h1>
          <p className="mt-3 text-sm leading-6 text-slate-400">
            仅供 BaiheAI 管理客户线索使用。
          </p>
        </div>

        <form
          action="/api/admin/login"
          method="POST"
          className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl"
        >
          <label
            htmlFor="password"
            className="mb-2 block text-sm font-medium text-slate-200"
          >
            后台密码
          </label>

          <input
            id="password"
            name="password"
            type="password"
            required
            autoComplete="current-password"
            placeholder="请输入后台密码"
            className="w-full rounded-xl border border-white/10 bg-slate-900 px-4 py-3 text-white outline-none transition focus:border-blue-500"
          />

          {hasError && (
            <p className="mt-3 text-sm text-red-400">
              密码不正确，请重新输入。
            </p>
          )}

          <button
            type="submit"
            className="mt-6 w-full rounded-xl bg-blue-600 px-4 py-3 font-semibold text-white transition hover:bg-blue-500"
          >
            登录客户后台
          </button>
        </form>
      </div>
    </main>
  );
}
