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
      className="fixed inset-0 z-[9999] bg-black/80 flex items-center justify-center"
      onClick={onClose}
    >
      <div
        className="bg-white text-black p-10 rounded-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <h1 className="text-3xl font-bold">
          测试成功！
        </h1>

        <button
          className="mt-6 bg-blue-600 text-white px-6 py-3 rounded"
          onClick={onClose}
        >
          关闭
        </button>
      </div>
    </div>
  );
}