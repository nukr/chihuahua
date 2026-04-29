function Footer() {
  return (
    <>
      <footer className="border-t border-zinc-200 bg-zinc-50 pb-20 md:pb-0">
        <div className="mx-auto flex min-h-18 w-full max-w-7xl items-center justify-between gap-4 px-6 text-sm text-zinc-600 lg:px-12">
          <p>© 2026 鑫信金融 ｜ 02-12345678</p>
          <a href="#top" className="font-medium hover:text-emerald-700 transition-colors">回到頂部</a>
        </div>
      </footer>

      {/* Mobile Floating Action Bar */}
      <div className="fixed bottom-0 left-0 z-50 w-full px-4 pb-6 md:hidden">
        <div className="mx-auto flex max-w-md items-center gap-3 overflow-hidden rounded-2xl bg-white/80 p-3 shadow-2xl backdrop-blur-xl ring-1 ring-zinc-900/5">
          <a
            href="https://line.me/ti/p/placeholder"
            className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-[#06C755] py-3.5 text-center text-base font-bold text-white shadow-lg shadow-emerald-500/20 active:scale-95 transition-transform"
          >
            <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 5.51 2 9.83c0 2.27 1.21 4.3 3.19 5.76-.17.62-.62 2.25-.71 2.58-.11.41.14.4.3.29.13-.09 2.06-1.4 2.88-1.97.43.12.87.18 1.34.18 5.52 0 10-3.51 10-7.83S17.52 2 12 2z" />
            </svg>
            LINE 諮詢
          </a>
          <a
            href="#contact"
            className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-emerald-600 py-3.5 text-center text-base font-bold text-white shadow-lg shadow-emerald-600/20 active:scale-95 transition-transform"
          >
            立即申請
          </a>
        </div>
      </div>
    </>
  )
}

export default Footer
