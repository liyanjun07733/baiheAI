export default function Loading() {
  return (
    <div className="fixed inset-0 z-[100] grid place-items-center bg-[#030711] text-white">
      <div className="text-center">
        <div className="mx-auto h-11 w-11 animate-spin rounded-full border-2 border-cyan-400/20 border-t-cyan-300" />
        <p className="mt-4 text-xs font-semibold tracking-[.35em] text-cyan-300">BAIHEAI</p>
      </div>
    </div>
  );
}
