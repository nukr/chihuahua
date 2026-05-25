import { Link, useLocation } from 'react-router';

function Footer() {
  const { pathname } = useLocation();
  const isConsultPage = pathname === '/consult';

  return (
    <>
      <footer className='border-t border-zinc-200 bg-zinc-50 pb-20 md:pb-0'>
        <div className='mx-auto flex min-h-18 w-full max-w-7xl items-center justify-between gap-4 px-6 text-sm text-zinc-600 lg:px-12'>
          <p>公司名稱：鑫信國際管理顧問有限公司 | 統一編號：60399485 | 地址：台北市中山區松江路328號8樓 | 聯絡電話：02-28103665</p>
          <a
            href='#top'
            className='font-medium hover:text-emerald-700 transition-colors'
          >
            回到頂部
          </a>
        </div>
        <div className='mx-auto flex min-h-18 w-full max-w-7xl items-center justify-between gap-4 px-6 text-sm text-zinc-600 lg:px-12'>
備註說明：
【申辦資格】
年滿 18 歲至 70 歲皆可申請辦理。
【還款期限】
分期期數最短 3 期，最長可達 60 期（以月為單位）。
【利率說明】
利率依相關法規規定辦理，月利率最低 1% 起，最高 2.5%（最高年利率 30%）。
若提前清償，將依實際使用天數計算利息，且不另收違約金。
【其他說明】
免收任何代辦或手續費，用途及職業別不限。
實際核准額度與利率，將依個人工作狀況、收入條件、信用評分及負債情形綜合評估後決定。
【借款成本試算】
假設申請借款金額為新台幣 600,000 元，分 12 期攤還，月利率以 1.7% 計算，則：
年利率約為 20.4%
每月應繳利息約為新台幣 10,200 元
總還款金額約為新台幣 722,400 元
※ 實際核貸條件與利率內容，仍以最終審核結果為準。
        </div>
        <div className='mx-auto flex min-h-18 w-full max-w-7xl items-center justify-between gap-4 px-6 text-sm text-zinc-600 lg:px-12'>
資金規劃需謹慎，請依個人財務狀況評估申貸。
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
