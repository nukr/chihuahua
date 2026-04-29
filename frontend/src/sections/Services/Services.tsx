import Service1 from '../../assets/service_1.png';
import Service2 from '../../assets/service_2.png';
import Service3 from '../../assets/service_3.png';
import Service4 from '../../assets/service_4.png';
import Service5 from '../../assets/service_5.png';
import Service6 from '../../assets/service_6.png';

const serviceItems = [
  {
    title: '證件貸款',
    desc: '快速審件、文件精簡，適合臨時週轉與短期資金需求。',
    image: Service1,
  },
  {
    title: '小額貸款',
    desc: '彈性方案、快速撥款，協助您處理生活中的突發支出。',
    image: Service2,
  },
  {
    title: '信用貸款',
    desc: '條件彈性、免擔保品，依個人狀況媒合合適方案。',
    image: Service3,
  },
  {
    title: '房屋貸款',
    desc: '房屋增貸、二胎、轉貸整合，提升資金運用效率。',
    image: Service4,
  },
  {
    title: '企業貸款',
    desc: '提供營運週轉、擴張資金與中小企業彈性資金規劃。',
    image: Service5,
  },
  {
    title: '代償整合',
    desc: '整合多筆負債，簡化還款節奏，減輕每月壓力。',
    image: Service6,
  },
]

function Services() {
  return (
    <section id="service" className="py-16 md:py-24">
      <div className="mx-auto w-full max-w-6xl px-5 md:px-6">
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.12em] text-emerald-700">專業服務項目</p>
        <h2 className="text-3xl font-bold leading-tight text-zinc-900 md:text-4xl">24 小時全年無休，快速回覆資金問題</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {serviceItems.map((item) => (
            <article key={item.title} className="overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm">
              <img src={item.image} alt={item.title} loading="lazy" className="aspect-16/10 w-full object-cover" />
              <div className="p-4">
                <h3 className="mb-2 text-xl font-semibold text-zinc-900">{item.title}</h3>
                <p className="mb-3 text-zinc-600">{item.desc}</p>
                <a href="#contact" className="inline-flex rounded-full border border-zinc-300 px-3 py-1.5 text-sm font-semibold text-zinc-700">
                  快速申辦
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
