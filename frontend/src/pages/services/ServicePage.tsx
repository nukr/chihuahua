import { Head } from 'vite-react-ssg'
import { Link } from 'react-router'
import type { ServiceInfo } from './serviceData'
import { LINE_URL, PHONE_DISPLAY, PHONE_TEL } from './serviceData'

const trackConversion = () => {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag('event', 'conversion', {
      send_to: 'AW-18179216924/eVzjCOjl7bAcEJysw9xD',
      value: 1.0,
      currency: 'TWD',
    })
  }
}

function CtaButtons({ dark = false }: { dark?: boolean }) {
  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
      <Link
        to={LINE_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center rounded-xl bg-emerald-500 px-8 py-4 text-center font-bold text-white shadow-lg shadow-emerald-500/20 transition-all hover:scale-105 hover:bg-emerald-400 active:scale-95"
      >
        立即加入LINE諮詢
      </Link>
      <a
        href={PHONE_TEL}
        onClick={trackConversion}
        className={
          dark
            ? 'flex items-center justify-center gap-3 rounded-xl border border-zinc-700 bg-zinc-800/50 px-8 py-4 text-center font-bold text-white backdrop-blur-sm transition-colors hover:bg-zinc-800'
            : 'flex items-center justify-center gap-3 rounded-xl border border-zinc-300 bg-white px-8 py-4 text-center font-bold text-zinc-800 transition-colors hover:border-emerald-500 hover:text-emerald-700'
        }
      >
        <svg className="h-5 w-5 text-emerald-500" fill="currentColor" viewBox="0 0 24 24">
          <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
        </svg>
        電話預約諮詢（{PHONE_DISPLAY}）
      </a>
    </div>
  )
}

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mb-8 flex items-center gap-3 text-2xl font-bold text-zinc-900 md:text-3xl">
      <span className="h-7 w-1.5 rounded-full bg-emerald-500" />
      {children}
    </h2>
  )
}

function ServicePage({ service }: { service: ServiceInfo }) {
  return (
    <>
      <Head>
        <title>{service.title}</title>
        <meta name="description" content={service.description} />
        <meta name="keywords" content={service.keywords} />
        <meta property="og:title" content={service.title} />
        <meta property="og:description" content={service.description} />
      </Head>

      {/* Hero：背景使用符合該服務主題的圖片，換頁時更易辨識目前所在頁面 */}
      <section className="relative flex min-h-[68vh] items-center overflow-hidden bg-zinc-950 py-24">
        <div className="absolute inset-0">
          <img
            src={service.heroImage}
            alt=""
            aria-hidden="true"
            className="h-full w-full object-cover saturate-[0.85] brightness-[0.6]"
          />
          {/* 左深右透的漸層：左側維持文字可讀性，右側露出主題圖 */}
          <div className="absolute inset-0 bg-linear-to-r from-zinc-950 via-zinc-900/85 to-zinc-900/40" />
          <div className="absolute inset-0 bg-zinc-950/25" />
        </div>

        <div className="relative mx-auto w-full max-w-7xl px-6 lg:px-12">
          <div className="max-w-3xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-1.5 backdrop-blur-sm">
              <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs font-bold tracking-wider text-emerald-400 md:text-sm">
                費用透明・專人一對一・先了解狀況再規劃方案
              </span>
            </div>

            <h1 className="mb-6 text-4xl font-black leading-[1.15] text-white md:text-6xl">
              {service.h1}
            </h1>

            <p className="mb-6 max-w-2xl text-lg font-medium leading-relaxed text-zinc-300 md:text-xl">
              {service.subtitle}
            </p>

            {service.heroNote && (
              <p className="mb-8 max-w-2xl text-sm font-medium text-emerald-300/90">
                {service.heroNote}
              </p>
            )}

            <CtaButtons dark />
          </div>
        </div>
      </section>

      {/* 什麼情況適合申辦 */}
      {service.situations && service.situations.length > 0 && (
        <section className="bg-white py-16 md:py-20">
          <div className="mx-auto w-full max-w-7xl px-6 lg:px-12">
            <SectionHeading>{service.situationsHeading ?? '什麼情況適合申辦？'}</SectionHeading>
            {service.situationsIntro && (
              <p className="mb-8 max-w-3xl leading-relaxed text-zinc-600">
                {service.situationsIntro}
              </p>
            )}
            <div className="grid gap-5 sm:grid-cols-2">
              {service.situations.map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-zinc-200 bg-zinc-50 p-6 transition-shadow hover:shadow-md"
                >
                  <h3 className="mb-2 text-lg font-bold text-zinc-900">{item.title}</h3>
                  <p className="leading-relaxed text-zinc-600">{item.desc}</p>
                </div>
              ))}
            </div>
            {service.situationsFootnote && (
              <p className="mt-6 font-medium text-emerald-700">※ {service.situationsFootnote}</p>
            )}
          </div>
        </section>
      )}

      {/* 服務特色 */}
      {service.features.length > 0 && (
        <section className="bg-zinc-50 py-16 md:py-20">
          <div className="mx-auto w-full max-w-7xl px-6 lg:px-12">
            <SectionHeading>{`${service.navLabel}服務特色`}</SectionHeading>
            <div className="grid gap-5 sm:grid-cols-2">
              {service.features.map((item) => (
                <div key={item.title} className="rounded-2xl border border-zinc-200 bg-white p-6">
                  <div className="mb-3 flex items-center gap-3">
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-600">
                      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <h3 className="text-lg font-bold text-zinc-900">{item.title}</h3>
                  </div>
                  <p className="leading-relaxed text-zinc-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 準備文件 */}
      {service.documents && service.documents.length > 0 && (
        <section className="bg-white py-16 md:py-20">
          <div className="mx-auto w-full max-w-7xl px-6 lg:px-12">
            <SectionHeading>{`申辦${service.navLabel}需要準備的文件`}</SectionHeading>
            {service.documentsNote && (
              <p className="mb-6 text-sm text-zinc-500">（{service.documentsNote}）</p>
            )}
            <ul className="max-w-3xl space-y-3">
              {service.documents.map((doc) => (
                <li key={doc} className="flex items-start gap-3 text-zinc-700">
                  <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-600">
                    <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span className="leading-relaxed">{doc}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* 申辦流程 */}
      {service.steps && service.steps.length > 0 && (
        <section className="bg-zinc-50 py-16 md:py-20">
          <div className="mx-auto w-full max-w-7xl px-6 lg:px-12">
            <SectionHeading>{`${service.navLabel}申辦流程`}</SectionHeading>
            <ol className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {service.steps.map((step, i) => (
                <li key={step.title} className="rounded-2xl border border-zinc-200 bg-white p-6">
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500 text-lg font-black text-white">
                    {i + 1}
                  </div>
                  <h3 className="mb-1 font-bold text-zinc-900">{step.title}</h3>
                  {step.desc && <p className="text-sm leading-relaxed text-zinc-600">{step.desc}</p>}
                </li>
              ))}
            </ol>
          </div>
        </section>
      )}

      {/* 費用與利率 */}
      {service.fee && (
        <section className="bg-white py-16 md:py-20">
          <div className="mx-auto w-full max-w-7xl px-6 lg:px-12">
            <SectionHeading>{`${service.navLabel}費用與利率說明`}</SectionHeading>
            {service.fee.bullets && (
              <ul className="mb-8 max-w-3xl space-y-2">
                {service.fee.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2 text-zinc-700">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" />
                    <span className="leading-relaxed">{b}</span>
                  </li>
                ))}
              </ul>
            )}
            <div className="max-w-3xl overflow-hidden rounded-2xl border border-zinc-200">
              <table className="w-full text-left text-sm md:text-base">
                <tbody>
                  {service.fee.table.map((row, i) => (
                    <tr key={row.label} className={i % 2 === 0 ? 'bg-zinc-50' : 'bg-white'}>
                      <th className="w-1/2 px-5 py-4 font-medium text-zinc-600">{row.label}</th>
                      <td className="px-5 py-4 font-semibold text-zinc-900">{row.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {service.fee.note && (
              <p className="mt-6 max-w-3xl text-sm leading-relaxed text-zinc-500">
                其他說明：{service.fee.note}
              </p>
            )}
            {service.fee.reminder && (
              <p className="mt-3 max-w-3xl text-sm font-medium leading-relaxed text-zinc-600">
                ※ {service.fee.reminder}
              </p>
            )}
          </div>
        </section>
      )}

      {/* 常見問題 */}
      {service.faq && service.faq.length > 0 && (
        <section className="bg-zinc-50 py-16 md:py-20">
          <div className="mx-auto w-full max-w-7xl px-6 lg:px-12">
            <SectionHeading>{`${service.navLabel}常見問題`}</SectionHeading>
            <div className="max-w-3xl space-y-4">
              {service.faq.map((item) => (
                <details
                  key={item.q}
                  className="group rounded-2xl border border-zinc-200 bg-white p-5 open:shadow-md"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-bold text-zinc-900">
                    {item.q}
                    <svg
                      className="h-5 w-5 shrink-0 text-emerald-500 transition-transform group-open:rotate-180"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <p className="mt-3 leading-relaxed text-zinc-600">{item.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 底部 CTA */}
      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto w-full max-w-5xl px-6 lg:px-12">
          <div className="rounded-3xl bg-linear-to-br from-emerald-600 to-emerald-500 px-8 py-12 text-center shadow-xl">
            <h2 className="mb-3 text-2xl font-bold text-white md:text-3xl">
              {`先了解狀況，再為您規劃${service.navLabel}方案`}
            </h2>
            <p className="mb-8 text-emerald-50">
              專人一對一諮詢，費用透明公開，歡迎立即加入LINE或來電洽詢。
            </p>
            <div className="flex justify-center">
              <CtaButtons />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default ServicePage
