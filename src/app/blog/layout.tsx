export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center gap-4 overflow-auto overflow-y-auto bg-gradient-to-b from-[#2e026d] to-[#15162c] p-4 text-white">
      {children}
    </div>
  );
}
