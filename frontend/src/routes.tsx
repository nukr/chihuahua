import type { RouteRecord } from 'vite-react-ssg'
import Layout from './Layout'
import Home from './pages/Home'
import Form from './sections/Form/Form'
import ServicePage from './pages/services/ServicePage'
import { services } from './pages/services/serviceData'

// 每個路由都是靜態路徑，vite-react-ssg 會自動探索並逐頁預渲染成
// loan-html/<path>/index.html。
export const routes: RouteRecord[] = [
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'consult', element: <Form /> },
      ...services.map((service) => ({
        path: service.path,
        element: <ServicePage service={service} />,
      })),
    ],
  },
]
