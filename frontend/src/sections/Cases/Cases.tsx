const caseItems = [
  {
    title: '成功核貸 5 萬元',
    detail:
      '裝修預算不足又急需補款，透過快速評估與專員協助，當日完成流程並順利補足資金。',
  },
  {
    title: '房貸整合 400 萬',
    detail:
      '針對高月付壓力與舊貸整合需求，規劃新方案後降低負擔並取得修繕資金。',
  },
  {
    title: '急用 3 萬即時撥款',
    detail:
      '突發維修費造成現金缺口，簡化流程後快速核准，協助短期週轉。',
  },
]

function Cases() {
  return (
    <section id="cases" className="border-y border-zinc-200 bg-linear-to-b from-emerald-50 to-zinc-50 py-16 md:py-24">
      <div className="mx-auto w-full max-w-6xl px-5 md:px-6">
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.12em] text-emerald-700">貸款成功案例</p>
        <h2 className="text-3xl font-bold leading-tight text-zinc-900 md:text-4xl">真實情境，對應合適方案</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {caseItems.map((item) => (
            <article key={item.title} className="rounded-2xl border border-zinc-200 bg-white p-4">
              <h3 className="mb-2 text-xl font-semibold text-zinc-900">{item.title}</h3>
              <p className="text-zinc-600">{item.detail}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Cases
