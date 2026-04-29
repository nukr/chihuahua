function Points() {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto w-full max-w-6xl px-5 md:px-6">
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.12em] text-emerald-700">品牌最佳優勢</p>
        <h2 className="text-3xl font-bold leading-tight text-zinc-900 md:text-4xl">合法低利、手續簡便、速度優先</h2>
        <div className="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          <article className="rounded-2xl border border-zinc-200 bg-linear-to-b from-white to-emerald-50 p-4">
            <h3 className="mb-2 text-xl font-semibold text-zinc-900">合法低利</h3>
            <p className="text-zinc-600">依規範與風險控管審核，清楚揭露費率與還款方式。</p>
          </article>
          <article className="rounded-2xl border border-zinc-200 bg-linear-to-b from-white to-emerald-50 p-4">
            <h3 className="mb-2 text-xl font-semibold text-zinc-900">手續簡便</h3>
            <p className="text-zinc-600">精簡流程與文件，降低申辦門檻，縮短審件時間。</p>
          </article>
          <article className="rounded-2xl border border-zinc-200 bg-linear-to-b from-white to-emerald-50 p-4">
            <h3 className="mb-2 text-xl font-semibold text-zinc-900">快速撥款</h3>
            <p className="text-zinc-600">資料備齊可加速對保與核准，協助處理急需用錢情境。</p>
          </article>
          <article className="rounded-2xl border border-zinc-200 bg-linear-to-b from-white to-emerald-50 p-4">
            <h3 className="mb-2 text-xl font-semibold text-zinc-900">隱私保密</h3>
            <p className="text-zinc-600">重視個資保護，諮詢與申辦流程皆採保密機制。</p>
          </article>
        </div>
      </div>
    </section>
  )
}

export default Points
