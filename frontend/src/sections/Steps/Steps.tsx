import Step1 from '../../assets/step_1.png'
import Step2 from '../../assets/step_2.png'
import Step3 from '../../assets/step_3.png'
import Step4 from '../../assets/step_4.png'
import Step5 from '../../assets/step_5.png'

const flowItems = ['免費線上諮詢', '專員一對一評估', '準備基本文件', '專案審核對保', '核准快速撥款']
const stepImages = [Step1, Step2, Step3, Step4, Step5]

function Steps() {
  return (
    <section id="step" className="py-16 md:py-24">
      <div className="mx-auto w-full max-w-6xl px-5 md:px-6">
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.12em] text-emerald-700">借款申請步驟</p>
        <h2 className="text-3xl font-bold leading-tight text-zinc-900 md:text-4xl">簡單五步驟，申貸更有效率</h2>
        <div className="mt-8 grid gap-4">
          {flowItems.map((item, idx) => (
            <article key={item} className="grid overflow-hidden rounded-2xl border border-zinc-200 bg-[#eff9fa] md:grid-cols-[260px_1fr]">
              <img src={stepImages[idx]} alt={item} loading="lazy" className="h-full w-full object-cover md:max-h-none max-h-56" />
              <div className="p-4 bg-white">
                <p className="text-xs font-bold uppercase tracking-widest text-emerald-700">步驟 {idx + 1}</p>
                <h3 className="mb-2 mt-1 text-xl font-semibold text-zinc-900">{item}</h3>
                <p className="text-zinc-600">由專員協助確認條件與文件，縮短等待時間，讓申請流程透明且可追蹤。</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Steps
