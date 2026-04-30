import {diffInHours, count, baseAmount, formatNumber, formatCompactNumber} from '../../utils';

function Stats() {

  return (
    <section className="bg-emerald-950 py-24 px-6 lg:px-12 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-500/10 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-64 w-64 translate-x-1/2 translate-y-1/2 rounded-full bg-emerald-500/10 blur-3xl" />

      <div className="mx-auto max-w-7xl relative z-10">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          
          {/* Urgent Slot Counter */}
          <div className="inline-flex items-center group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition-all hover:bg-white/10">
            <div className="relative">
              <div className="mb-4 flex items-center gap-2">
                <span className="flex h-2 w-2 rounded-full bg-orange-400 animate-pulse" />
                <span className="text-xs font-bold tracking-wider text-orange-300 uppercase leading-10">今日剩餘名額</span>
              </div>
              <div className="flex items-baseline gap-1">
                <span className="text-5xl font-black text-white">12</span>
                <span className="text-lg font-bold text-emerald-300/60">位</span>
              </div>
              <p className="mt-3 text-sm font-medium text-emerald-100/60">僅剩名額，額滿即止</p>
            </div>
          </div>

          {/* Trusted Customers */}
          <div className="inline-flex items-center group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition-all hover:bg-white/10">
            <div className="relative">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/20 text-emerald-400">
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <div className="flex items-baseline gap-1">
                <span className="text-5xl font-black text-white">{formatNumber(Number((diffInHours * count).toFixed(0)))}</span>
                <span className="text-lg font-bold text-emerald-300/60">+</span>
              </div>
              <p className="mt-3 text-sm font-medium text-emerald-100/60">已服務超過 3,000 位客戶</p>
            </div>
          </div>

          {/* No Success No Fee */}
          <div className="inline-flex items-center group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition-all hover:bg-white/10">
            <div className="relative">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/20 text-blue-400">
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div className="flex items-baseline gap-1">
                <span className="text-5xl font-black text-white">100%</span>
              </div>
              <p className="mt-3 text-sm font-black text-blue-300 uppercase tracking-wider">不成功不收費</p>
            </div>
          </div>

          {/* Funding Amount */}
          <div className="inline-flex items-center group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition-all hover:bg-white/10">
            <div className="relative">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/20 text-emerald-400">
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="flex items-baseline gap-1">
                <span className="text-5xl font-black text-white">{formatNumber(Number((diffInHours * baseAmount).toFixed(0)))}</span>
                <span className="text-lg font-bold text-emerald-300/60">M+</span>
              </div>
              <p className="mt-3 text-sm font-medium text-emerald-100/60">累積撥款金額破億</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Stats
