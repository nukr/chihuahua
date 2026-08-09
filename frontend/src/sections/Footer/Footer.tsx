import { Link, useLocation } from 'react-router';
import { useEffect, useState } from 'react';
import { services } from '../../pages/services/serviceData';

const NOTICE_TEXT = `備註說明：
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
※ 實際核貸條件與利率內容，仍以最終審核結果為準。`;

const REMINDER_TEXT = '資金規劃需謹慎，請依個人財務狀況評估申貸。';

export const trackEvent = (eventName: string, params = {}) => {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag('event', eventName, params);
  } else {
    console.log(`Analytics event [${eventName}] simulated:`, params);
  }
};

function Footer() {
  const { pathname } = useLocation();
  const isConsultPage = pathname === '/consult';
  const [privacyOpen, setPrivacyOpen] = useState(false);
  const handleClick = () => {
    trackEvent('conversion', {
      send_to: 'AW-18179216924/eVzjCOjl7bAcEJysw9xD',
      value: 1.0,
      currency: 'TWD'
    });
  };

  // 開啟時鎖定背景捲動，並支援 Esc 關閉
  useEffect(() => {
    if (!privacyOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setPrivacyOpen(false);
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [privacyOpen]);

  return (
    <>
      <footer className='border-t border-zinc-200 bg-zinc-50 pb-20 md:pb-0'>
        <div className='mx-auto flex min-h-18 w-full max-w-7xl flex-col items-start justify-between gap-4 px-6 py-4 text-sm text-zinc-600 md:flex-row md:items-center md:py-0 lg:px-12'>
          <p>
            公司名稱：鑫信國際管理顧問有限公司 | 統一編號：60399485 | 地址：台北市中山區松江路328號8樓
            | 聯絡電話：<a href="tel:+886228103665" onClick={handleClick}>02-28103665</a>
          </p>
          <div className='flex shrink-0 items-center gap-4'>
            <button
              type='button'
              onClick={() => setPrivacyOpen(true)}
              className='font-medium transition-colors hover:text-emerald-700'
            >
              隱私權聲明
            </button>
            <a href='#top' className='font-medium transition-colors hover:text-emerald-700'>
              回到頂部
            </a>
          </div>
        </div>

        <nav
          aria-label='服務項目'
          className='mx-auto flex w-full max-w-7xl flex-wrap items-center gap-x-5 gap-y-2 px-6 py-3 text-sm text-zinc-600 lg:px-12'
        >
          <span className='font-medium text-zinc-500'>服務項目：</span>
          {services.map((service) => (
            <Link
              key={service.path}
              to={`/${service.path}`}
              className='transition-colors hover:text-emerald-700'
            >
              {service.navLabel}
            </Link>
          ))}
        </nav>

        <div className='mx-auto flex min-h-18 w-full max-w-7xl items-center justify-between gap-4 whitespace-pre-line px-6 text-sm text-zinc-600 lg:px-12'>
          {NOTICE_TEXT}
        </div>

        <div className='mx-auto flex min-h-18 w-full max-w-7xl items-center justify-between gap-4 px-6 text-sm text-zinc-600 lg:px-12'>
          {REMINDER_TEXT}
        </div>
      </footer>

      {/* 隱私權聲明 Modal */}
      {privacyOpen && (
        <div
          className='fixed inset-0 z-[60] flex items-center justify-center p-4'
          role='dialog'
          aria-modal='true'
          aria-labelledby='privacy-title'
        >
          <div
            className='absolute inset-0 bg-zinc-900/50 backdrop-blur-sm'
            onClick={() => setPrivacyOpen(false)}
          />
          <div className='relative z-10 flex max-h-[85vh] w-full max-w-3xl flex-col overflow-hidden rounded-2xl bg-white shadow-2xl ring-1 ring-zinc-900/5'>
            <div className='flex items-center justify-between border-b border-zinc-200 px-6 py-4'>
              <h2 id='privacy-title' className='text-lg font-bold text-zinc-900'>
                隱私權聲明
              </h2>
              <button
                type='button'
                onClick={() => setPrivacyOpen(false)}
                aria-label='關閉'
                className='rounded-lg p-1.5 text-zinc-500 transition-colors hover:bg-zinc-100 hover:text-zinc-900'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='20'
                  height='20'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                >
                  <path d='M18 6 6 18' />
                  <path d='m6 6 12 12' />
                </svg>
              </button>
            </div>

            <div className='space-y-4 overflow-y-auto px-6 py-5 text-sm leading-relaxed text-zinc-600'>
              <p>
                鑫信國際管理顧問有限公司（以下簡稱本公司）重視並致力於保障您於使用鑫信國際管理顧問有限公司網站時的隱私權，因此特別制定本隱私權保護政策（以下簡稱本政策）。本政策旨在協助您了解本公司如何蒐集、使用及保護您提供的個人資料，以及相關資料之使用範圍與目的。
              </p>
              <p>
                當您使用鑫信國際管理顧問有限公司網站所提供之各項服務時，即表示您已了解並同意本政策內容。本公司將依相關法令規範及本政策內容，妥善保護您的個人資料與隱私權，並於合法範圍內合理使用相關資料。
              </p>
              <p>
                本政策內容可能因應法令或服務需求進行調整，建議您定期查閱最新版本。如您對本政策或個人資料相關事項有任何疑問，可透過官方網站與本公司聯繫，我們將盡速提供說明與協助。
              </p>
              <p>若您提供之個人資料有錯誤、不完整或不實情形，則不適用本政策之保護範圍。</p>

              <h3 className='pt-2 text-base font-bold text-zinc-900'>
                一、鑫信國際管理顧問有限公司網站蒐集哪些個人資料？
              </h3>
              <p>
                鑫信國際管理顧問有限公司網站可能透過不同服務與功能蒐集使用者的個人資料。若您不同意本政策內容或不願提供相關資料，請停止使用本網站服務。當您提供個人資料時，即視為您同意本政策。本網站蒐集之資料可區分為以下兩種類型：
              </p>
              <h4 className='font-semibold text-zinc-800'>（一）一般性資料</h4>
              <p className='font-medium text-zinc-700'>一般瀏覽紀錄</p>
              <p>為分析網站流量、改善使用體驗及了解使用行為，本網站會自動記錄您於瀏覽期間所產生的相關資訊，包括：</p>
              <ul className='list-disc space-y-1 pl-6'>
                <li>IP 位址</li>
                <li>使用時間</li>
                <li>瀏覽器類型</li>
                <li>瀏覽及點擊紀錄</li>
                <li>使用裝置相關資訊</li>
              </ul>
              <p>
                上述資料主要用於流量分析與系統優化，除非您主動提供身份資訊，否則本網站無法直接辨識您的個人身分。
              </p>
              <p className='font-medium text-zinc-700'>其他資料</p>
              <p>
                若您透過電子郵件、線上諮詢或其他方式與本網站聯繫，本公司可能保存相關通訊內容，以利後續查詢與服務。此外，本網站亦可能不定期邀請使用者參與問卷調查，作為內部研究與服務優化參考。
              </p>

              <h3 className='pt-2 text-base font-bold text-zinc-900'>二、蒐集個人資料之目的</h3>
              <p>
                透過鑫信國際管理顧問有限公司網站所提供之各項服務，本公司可能蒐集、分析使用者之操作習慣、使用頻率、填寫資料及調查結果，以了解使用需求，作為改善服務品質與提供個人化內容的重要依據。
              </p>
              <p className='font-medium text-zinc-700'>提供個人化服務</p>
              <p>
                蒐集個人資料的主要目的，在於提供更完整且符合需求的服務內容，包括個人化推薦、資訊通知及相關服務。透過分析使用者需求，本網站可提供更適切的內容與廣告資訊，以提升整體使用體驗。
              </p>
              <p className='font-medium text-zinc-700'>線上活動與問卷調查</p>
              <p>
                本網站於活動或問卷中蒐集之姓名、身分證字號等資訊，僅供活動執行用途（如抽獎資格確認）使用。聯絡電話、電子郵件及地址等資料，則作為通知活動結果與後續分析用途，不會另作其他使用。其他資料則僅供市場分析、商業研究或學術用途，除經當事人同意外，不會對外公開任何個別資料。
              </p>
              <p className='font-medium text-zinc-700'>特別說明</p>
              <p>
                於達成本政策所述目的之必要範圍內，本公司得與關係企業共享使用者個人資料。本政策所稱之關係企業，不屬於本政策所指之第三方。
              </p>

              <h3 className='pt-2 text-base font-bold text-zinc-900'>
                三、使用者如何管理個人資料與通知設定？
              </h3>
              <p>
                鑫信國際管理顧問有限公司網站可能定期寄送電子郵件或相關資訊給您。若您於註冊時同意接收相關訊息，本公司及合作夥伴亦可能提供您感興趣之商品、服務或活動資訊。所有由本網站寄送之電子郵件或通知，皆會提供取消訂閱或停止接收的方法與功能。如您不希望再收到相關資訊，可隨時透過修改會員設定取消訂閱。
              </p>

              <h3 className='pt-2 text-base font-bold text-zinc-900'>四、個人資料之更新與修改</h3>
              <p className='font-medium text-zinc-700'>一般會員資料</p>
              <p>如有重複申請或其他相關問題，可來信聯繫本公司協助處理。</p>
              <p className='font-medium text-zinc-700'>其他公開資料</p>
              <p>
                除會員基本資料外，若您於討論區或其他公開服務中自行揭露個人資訊，則不在本網站可修改範圍內。
              </p>

              <h3 className='pt-2 text-base font-bold text-zinc-900'>五、個人資料與第三方共享政策</h3>
              <p>
                除依法規規定、取得您的同意或特定情況外，鑫信國際管理顧問有限公司網站原則上不會任意出售、交換、出租或揭露您的個人資料予第三方。但本公司得基於商業推廣、服務通知或行銷目的使用您的資料。若因提供特定服務、優惠或活動而需與第三方共享資料時，本網站將事先提供充分說明，並於蒐集資料前告知您，您可自行決定是否參與。以下為可能共享資料之情況：
              </p>
              <p className='font-medium text-zinc-700'>策略合作夥伴與贊助商</p>
              <p>
                部分促銷活動可能由本網站與合作夥伴共同舉辦，或由第三方單獨主辦。於此情況下，本網站可能依活動需求提供必要資料予合作夥伴，但會事先清楚告知。如您不同意資料共享，可選擇不參與相關活動。相關共享方式與細節，請參閱各活動規則及服務條款。
              </p>
              <p className='font-medium text-zinc-700'>廣告商與合作網站</p>
              <p>
                與本網站連結之其他網站，其隱私權政策不適用本政策。若您參與由廣告商主辦或合作之活動，並同意提供額外資料，即視為同意本網站將相關資料提供予廣告商。此外，當您有意申請本公司所提供之方案或服務時，本公司可能將您的資料進行整理與初步評估，並提供合作銀行進行初步審核。如您不願共享資料，可選擇不提出申請。
              </p>

              <h3 className='pt-2 text-base font-bold text-zinc-900'>六、個人資料安全保護措施</h3>
              <p>
                本網站收到您傳送的資料後，將盡合理努力維護資料安全。然而，由於網際網路傳輸環境無法保證百分之百安全，本網站無法完全保證資料傳輸或儲存過程中的安全性。您了解並同意自行承擔網路傳輸可能產生之風險，本公司對此不負相關責任。
              </p>
            </div>

            <div className='border-t border-zinc-200 px-6 py-3 text-right'>
              <button
                type='button'
                onClick={() => setPrivacyOpen(false)}
                className='rounded-xl bg-emerald-600 px-5 py-2 text-sm font-bold text-white shadow-lg shadow-emerald-600/20 transition-transform active:scale-95'
              >
                我已了解
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Mobile Floating Action Bar */}
      {!isConsultPage && (
        <div className='fixed bottom-0 left-0 z-50 w-full px-4 pb-6 md:hidden'>
          <div className='mx-auto flex max-w-md items-center gap-3 overflow-hidden rounded-2xl bg-white/80 p-3 shadow-2xl backdrop-blur-xl ring-1 ring-zinc-900/5'>
            <Link
              to='https://line.me/ti/p/w5eqzEtmeg'
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
