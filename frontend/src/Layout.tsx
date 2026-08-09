import { useEffect } from 'react'
import { Head } from 'vite-react-ssg'
import { Outlet, useLocation } from 'react-router'
import Header from './sections/Header/Header'
import Footer from './sections/Footer/Footer'

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

function Layout() {
  return (
    <>
      {/* 站台預設 SEO；有自訂 <Head> 的頁面（首頁、各服務頁）會覆蓋這些標籤。 */}
      <Head>
        <html lang="zh-Hant" />
        <title>鑫信國際管理顧問有限公司</title>
        <meta
          name="description"
          content="鑫信國際管理顧問提供企業借款、信用貸款、證件貸款、房屋二胎、汽機車借款、小額貸款等資金規劃服務，專人一對一諮詢，費用透明公開。"
        />
      </Head>
      <ScrollToTop />
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

export default Layout
