const flowItems = ['免費線上諮詢', '專員一對一評估', '準備基本文件', '專案審核對保', '核准快速撥款']

function Process() {
  return (
    <section className="border-y border-zinc-200 bg-linear-to-b from-zinc-50 to-emerald-50 py-12">
      <div className="mx-auto w-full max-w-6xl px-5 md:px-6">
        <p className="mb-3 text-center text-xs font-bold uppercase tracking-[0.12em] text-emerald-700">借款流程</p>
        <h2 className="text-center text-3xl font-bold leading-tight text-zinc-900 md:text-4xl">五大流程步步到位</h2>
        <ol className="mt-8 grid gap-3 md:grid-cols-2 xl:grid-cols-5">
          {flowItems.map((item, idx) => (
            <li key={item} className="rounded-xl border border-zinc-200 bg-white px-3 py-4">
              <span className="text-sm font-bold tracking-wider text-emerald-700">{String(idx + 1).padStart(2, '0')}</span>
              <p className="mt-2 font-semibold text-zinc-800">{item}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

export default Process
