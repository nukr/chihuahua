import { Link, useLocation } from 'react-router';

function Footer() {
  const { pathname } = useLocation();
  const isConsultPage = pathname === '/consult';

  return (
    <>
      <footer className='border-t border-zinc-200 bg-zinc-50 pb-20 md:pb-0'>
        <div className='mx-auto flex min-h-18 w-full max-w-7xl items-center justify-between gap-4 px-6 text-sm text-zinc-600 lg:px-12'>
          <p>© 2026 鑫信國際管理顧問有限公司 ｜ 02-28103665</p>
          <a
            href='#top'
            className='font-medium hover:text-emerald-700 transition-colors'
          >
            回到頂部
          </a>
        </div>
      </footer>

      {/* Mobile Floating Action Bar */}
      {!isConsultPage && (
        <div className='fixed bottom-0 left-0 z-50 w-full px-4 pb-6 md:hidden'>
          <div className='mx-auto flex max-w-md items-center gap-3 overflow-hidden rounded-2xl bg-white/80 p-3 shadow-2xl backdrop-blur-xl ring-1 ring-zinc-900/5'>
            <Link
              to='/consult'
              className='flex flex-1 items-center justify-center gap-2 rounded-xl bg-emerald-600 py-3.5 text-center text-base font-bold text-white shadow-lg shadow-emerald-600/20 active:scale-95 transition-transform'
            >
              立即申請
              <div className='absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-white/20 to-transparent transition-transform duration-500 group-hover:translate-x-full' />
            </Link>
          </div>
        </div>
      )}
    </>
  );
}

export default Footer;
