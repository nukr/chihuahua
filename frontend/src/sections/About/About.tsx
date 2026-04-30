import type { MouseEvent } from 'react';
import { Link } from 'react-router';
import AboutImage from '../../assets/about.jpg';


const info = [
  '免查聯徵、不影響信用(信用瑕疵可談)',
  '彈性周轉，依據需求提供客製化方案',
  '各種職業身份皆可評估，門檻彈性',
  '合法立案，專人一對一安心諮詢',
  '撥款不拖延，最快當天資金到位',
];

function About() {
  function smoothScrollTo(hash: string) {
    const id = hash.replace('#', '');
    if (!id) return;

    const target = document.getElementById(id);
    if (!target) return;

    const headerOffset = 88;
    const top =
      target.getBoundingClientRect().top + window.scrollY - headerOffset;
    window.scrollTo({ top, behavior: 'smooth' });
  }

  function handleApplyClick(event: MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    smoothScrollTo('#contact');
  }

  return (
    <section id='about' className='relative overflow-hidden py-24 md:py-32'>
      {/* Background decoration */}
      <div className='absolute top-0 right-0 -z-10 h-64 w-64 translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-50/50 blur-3xl' />
      <div className='absolute bottom-0 left-0 -z-10 h-96 w-96 -translate-x-1/2 translate-y-1/2 rounded-full bg-zinc-50 blur-3xl' />

      <div className='mx-auto max-w-7xl px-6 lg:px-12'>
        <div className='grid items-center gap-16 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20'>
          {/* Image Column */}
          <div className='relative order-2 lg:order-1'>
            <div className='relative z-10 overflow-hidden rounded-2xl shadow-2xl'>
              <img
                src={AboutImage}
                alt='專業顧問團隊'
                className='h-full w-full m-auto object-cover transition-transform duration-500 hover:scale-105'
              />

                   <Link
              to='/consult'
              className='absolute inset-0 flex items-end justify-center pb-8 transition-opacity hover:bg-black/20 rounded-2xl text-xl cursor-pointer'
            >
 <span className='rounded-full bg-linear-to-r from-emerald-600 to-emerald-500 px-8 py-3 font-semibold text-white shadow-lg transition hover:-translate-y-0.5'>
                  ⚡️ 馬上申請
                </span>
            </Link>

       
            </div>
          </div>

          {/* Content Column */}
          <div className='order-1 lg:order-2'>
            <div className='mb-6 inline-flex items-center rounded-lg bg-emerald-50 px-3 py-1 text-sm font-bold text-emerald-700 uppercase tracking-wider'>
              關於鑫信・專業首選
            </div>
            <h2 className='mb-6 text-3xl font-black leading-tight text-zinc-900 md:text-5xl'>
              深耕專業領域 <br />
              <span className='text-emerald-600'>為您解決資金難題</span>
            </h2>
            <p className='mb-8 text-lg leading-relaxed text-zinc-600'>
              鑫信資融擁有多年實務經驗，致力於提供最透明、最高效率的資金方案。我們不只是提供貸款諮詢，更是您財務調度上的堅實後盾，讓您在關鍵時刻不再為錢煩惱。
            </p>

            <ul className='grid gap-4 sm:grid-cols-1'>
              {info.map((item, index) => (
                <li key={index} className='group flex items-center gap-4'>
                  <div className='flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 transition-colors group-hover:bg-emerald-600 group-hover:text-white'>
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
                  <span className='text-base font-medium text-zinc-700'>
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            <div className='mt-10 grid grid-cols-2 gap-y-10 gap-x-6 border-t border-zinc-100 pt-10 md:flex md:items-center md:gap-8 lg:gap-12'>
              <div className='flex flex-col'>
                <span className='text-2xl font-black text-zinc-900 md:text-3xl'>
                  100%
                </span>
                <span className='text-xs font-bold text-zinc-400 uppercase tracking-wide'>
                  個案保密性
                </span>
              </div>
              <div className='hidden h-10 w-px shrink-0 bg-zinc-200 md:block' />
              <div className='flex flex-col'>
                <span className='text-2xl font-black text-zinc-900 md:text-3xl'>
                  100 萬
                </span>
                <span className='text-xs font-bold text-zinc-400 uppercase tracking-wide'>
                  最高可貸
                </span>
              </div>
              <div className='hidden h-10 w-px shrink-0 bg-zinc-200 md:block' />
              <div className='flex flex-col'>
                <span className='text-2xl font-black text-zinc-900 md:text-3xl'>
                  90%
                </span>
                <span className='text-xs font-bold text-zinc-400 uppercase tracking-wide'>
                  過件率
                </span>
              </div>
              <div className='hidden h-10 w-px shrink-0 bg-zinc-200 md:block' />
              <div className='flex flex-col'>
                <span className='text-2xl font-black text-zinc-900 md:text-3xl'>
                  30Min
                </span>
                <span className='text-xs font-bold text-zinc-400 uppercase tracking-wide'>
                  最快回覆時間
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
