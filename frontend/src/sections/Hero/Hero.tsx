import { Link } from 'react-router';
import Banner from '../../assets/banner.png';
import { formatNumber } from '../../utils';

function Hero({personCount}:{ personCount: string}) {

  return (
    <section className='relative flex min-h-[75vh] items-center py-20 overflow-hidden md:min-h-[85vh]'>
      {/* Background with overlay */}
      <div className='absolute inset-0'>
        <img
          src={Banner}
          alt='Hero Banner'
          className='h-full w-full object-cover saturate-[0.85] brightness-[0.6] transition-transform duration-1000'
        />
        <div className='absolute inset-0 bg-linear-to-r from-zinc-950 via-zinc-900/80 to-transparent' />
        <div className='absolute inset-0 bg-zinc-950/20' />
      </div>

      <div className='relative mx-auto w-full max-w-7xl px-6 lg:px-12'>
        <div className='max-w-2xl lg:max-w-3xl'>
          {/* Tagline / Badge */}
          <div className='mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-1.5 backdrop-blur-sm'>
            <span className='flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse' />
            <span className='text-xs font-bold tracking-wider text-emerald-400 uppercase md:text-sm'>
              免保人・低利率・快速審核・全程保密
            </span>
          </div>

          {/* Headline */}
          <h1 className='mb-6 text-5xl font-black leading-[1.1] text-white md:text-7xl lg:text-8xl'>
            急用錢？ <br />
            <span className='bg-linear-to-r from-emerald-400 via-teal-300 to-emerald-200 bg-clip-text text-transparent'>
              當天核准撥款
            </span>
          </h1>

          {/* Description */}
          <p className='mb-8 text-lg font-medium leading-relaxed text-zinc-300 md:text-xl max-w-xl'>
            專人一對一專業評估，最快30分鐘回覆，立即取得資金。
            <br className='hidden md:block' />
            合法立案、流程透明，讓您的資金調度更簡單、更安全。
          </p>

          {/* Features Grid */}
          <div className='mb-10 grid grid-cols-2 gap-4 sm:flex sm:flex-wrap sm:gap-8'>
            <div className='flex items-center gap-2.5'>
              <div className='flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400'>
                <svg
                  className='h-4 w-4'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='3'
                    d='M5 13l4 4L19 7'
                  />
                </svg>
              </div>
              <span className='text-base font-bold text-zinc-100'>
                當日審核
              </span>
            </div>
            <div className='flex items-center gap-2.5'>
              <div className='flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400'>
                <svg
                  className='h-4 w-4'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='3'
                    d='M5 13l4 4L19 7'
                  />
                </svg>
              </div>
              <span className='text-base font-bold text-zinc-100'>
                合法立案
              </span>
            </div>
            <div className='flex items-center gap-2.5'>
              <div className='flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400'>
                <svg
                  className='h-4 w-4'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='3'
                    d='M5 13l4 4L19 7'
                  />
                </svg>
              </div>
              <span className='text-base font-bold text-zinc-100'>
                額度最高
              </span>
            </div>
            <div className='flex items-center gap-2.5'>
              <div className='flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400'>
                <svg
                  className='h-4 w-4'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='3'
                    d='M5 13l4 4L19 7'
                  />
                </svg>
              </div>
              <span className='text-base font-bold text-zinc-100'>
                全程保密
              </span>
            </div>
          </div>

          {/* CTAs */}
          <div className='flex flex-col gap-4 sm:flex-row sm:items-center'>
            <Link
              to='/consult'
              className='group relative flex items-center justify-center overflow-hidden rounded-xl bg-emerald-500 px-8 py-4 text-center font-bold text-white shadow-lg shadow-emerald-500/20 transition-all hover:scale-105 hover:bg-emerald-400 active:scale-95'
            >
              🔥 立即免費評估額度
              <div className='absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-white/20 to-transparent transition-transform duration-500 group-hover:translate-x-full' />
            </Link>
            <a
              href='tel:+88621234566'
              className='flex items-center justify-center gap-3 rounded-xl border border-zinc-700 bg-zinc-800/50 px-8 py-4 text-center font-bold text-white backdrop-blur-sm transition-colors hover:bg-zinc-800'
            >
              <svg
                className='h-5 w-5 text-emerald-400'
                fill='currentColor'
                viewBox='0 0 24 24'
              >
                <path d='M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z' />
              </svg>
              02-
            </a>
          </div>

          {/* Trust indicator */}
          <div className='mt-12 flex items-center gap-4 flex-wrap'>
            <div className='flex -space-x-3'>
              {[1, 2, 3].map(i => (
                <div
                  key={i}
                  className='h-10 w-10 rounded-full border-2 border-zinc-900 bg-zinc-800 flex items-center justify-center overflow-hidden'
                >
                  <div className='h-full w-full bg-linear-to-br from-emerald-600/20 to-zinc-800 text-[10px] flex items-center justify-center font-black text-emerald-400 italic'>
                    VIP
                  </div>
                </div>
              ))}
            </div>
            <p className='text-sm font-medium text-zinc-400'>
              <span className='font-bold text-zinc-100'>
                {formatNumber(Number(personCount))}+
              </span>{' '}
              成功申貸案例
            </p>
            <a
              className='rounded-full border border-zinc-100/40 bg-zinc-100/10 px-5 py-2.5 font-semibold text-zinc-100 md:w-auto w-full text-center'
              href='#service'
            >
              查看貸款方案
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
