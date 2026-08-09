import './styles/global.css'
import { ViteReactSSG } from 'vite-react-ssg'
import { routes } from './routes'

// vite-react-ssg 接管 render/hydrate：build 時對每個路由預渲染成靜態 HTML，
// 到瀏覽器後再 hydrate 以保留互動。
export const createRoot = ViteReactSSG({ routes })
