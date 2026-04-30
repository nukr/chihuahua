import { Link } from 'react-router';
import Join from '../../assets/join.png';

function Contact() {
  return (
    <section id="contact" className="py-16 md:py-24">
      <div className="mx-auto grid w-full max-w-6xl items-center gap-4 rounded-2xl border border-zinc-200 bg-linear-to-br from-zinc-50 to-emerald-50 p-5 shadow-sm md:grid-cols-[1.15fr_0.85fr] md:p-6">
        <div>
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.12em] text-emerald-700">線上諮詢專人服務</p>
          <h2 className="mb-3 text-3xl font-bold leading-tight text-zinc-900 md:text-4xl">立即加入，快速取得評估建議</h2>
          <p className="mb-4 text-zinc-600">手機掃描 QR Code 或留下聯絡方式，由專員即時回覆，協助你判斷可申辦方案。</p>
          <Link
            className="inline-flex rounded-full bg-linear-to-r from-emerald-600 to-emerald-500 px-5 py-2.5 font-semibold text-white transition hover:-translate-y-0.5"
            to="/consult"
          >
            立即免費諮詢
          </Link>
        </div>
        <img src={Join} alt="諮詢" className="mx-auto w-70 rounded-xl border border-zinc-200" />
      </div>
    </section>
  )
}

export default Contact
