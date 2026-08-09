import { Head } from 'vite-react-ssg'
import Hero from '../sections/Hero/Hero'
import About from '../sections/About/About'
import Process from '../sections/Process/Process'
import Services from '../sections/Services/Services'
import Stats from '../sections/Stats/Stats'
import Steps from '../sections/Steps/Steps'
import Cases from '../sections/Cases/Cases'
import Points from '../sections/Points/Points'
import Faq from '../sections/Faq/Faq'
import Contact from '../sections/Contact/Contact'
import { getDisplayCount, formatNumber } from '../utils'

function Home() {
  // 依時間成長的「成功案例數」，於預渲染時即算出並寫進 HTML。
  const personCount = getDisplayCount()
  const formattedPersonCount = formatNumber(Number(personCount))

  return (
    <>
      <Head>
        <title>鑫信國際管理顧問有限公司｜企業借款・信用貸款・房屋二胎・汽機車借款</title>
        <meta
          name="description"
          content="鑫信國際管理顧問提供企業借款、信用貸款、證件貸款、房屋二胎、汽機車借款、小額貸款等資金規劃服務。專人一對一諮詢，先了解狀況再規劃方案，費用透明公開，立即加入LINE諮詢。"
        />
      </Head>

      <main id="top">
        <Hero personCount={formattedPersonCount} />
        <About />
        <Process />
        <Services />
        <Stats personCount={formattedPersonCount} />
        <Steps />
        <Cases />
        <Points />
        <Faq />
        <Contact />
      </main>
    </>
  )
}

export default Home
