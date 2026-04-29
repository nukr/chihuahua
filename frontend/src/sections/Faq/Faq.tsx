const faqItems = [
  {
    q: '沒有薪轉或勞保可以申辦嗎？',
    a: '可以。只要有穩定收入來源，通常都能評估適合的申請方案。',
  },
  {
    q: '申辦流程要多久？',
    a: '一般可在當日完成初步審核，資料齊全時能加速至當日撥款。',
  },
  {
    q: '個資與申辦紀錄會保密嗎？',
    a: '會。全程採取保密作業流程，僅用於申貸評估與必要審核。',
  },
  {
    q: '有地區限制嗎？',
    a: '可先線上諮詢，專員會依您的地區與條件提供可行方案。',
  },
]

function Faq() {
  return (
    <section id="faq" className="border-y border-zinc-200 bg-linear-to-b from-emerald-50 to-zinc-50 py-16 md:py-24">
      <div className="mx-auto grid w-full max-w-6xl gap-5 px-5 md:px-6 lg:grid-cols-[0.92fr_1.08fr]">
        <div>
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.12em] text-emerald-700">常見問答</p>
          <h2 className="mb-3 text-3xl font-bold leading-tight text-zinc-900 md:text-4xl">申請前先看這裡</h2>
          <p className="text-zinc-600">想知道額度、利率與可行性，先做線上初步評估最省時。</p>
        </div>
        <div className="grid gap-3">
          {faqItems.map((item) => (
            <details key={item.q} className="rounded-xl border border-zinc-200 bg-white px-4 py-3">
              <summary className="cursor-pointer font-semibold text-zinc-800">{item.q}</summary>
              <p className="mt-2 text-zinc-600">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Faq
