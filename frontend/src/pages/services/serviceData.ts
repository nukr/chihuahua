// 各服務落地頁的 SEO、Hero 與完整文案，逐字取自
// 「鑫信國際_SEO網頁排版美編規劃書_修正版.pdf」。
// 要新增/調整某頁內容，改這裡即可；ServicePage 會依欄位有無條件渲染，
// routes.tsx / Header / Footer 也都是 map 這份資料。

// Hero 背景圖：沿用首頁 Services 區塊既有的主題圖，讓每頁背景符合該服務主題、
// 換頁時更好辨識。汽機車借款暫無專屬照片，先用未被其他頁使用的 service_6。
import enterpriseHero from '../../assets/service_5.png' // 企業借款（堆疊硬幣）
import documentHero from '../../assets/service_1.png' // 證件貸款（文件/計算機）
import creditHero from '../../assets/service_3.png' // 信用貸款
import mortgageHero from '../../assets/service_4.png' // 房屋二胎（房屋）
import smallHero from '../../assets/service_2.png' // 小額貸款
import vehicleHero from '../../assets/service_6.png' // 汽機車借款（暫用商務主題）

export interface FeatureItem {
  title: string
  desc: string
}

export interface SituationItem {
  title: string
  desc: string
}

export interface StepItem {
  title: string
  desc?: string
}

export interface FaqItem {
  q: string
  a: string
}

export interface FeeTableRow {
  label: string
  value: string
}

export interface FeeInfo {
  /** 申辦資格 / 還款期限 / 年利率 等條列說明 */
  bullets?: string[]
  /** 借款成本試算表 */
  table: FeeTableRow[]
  /** 表格下方補充說明 */
  note?: string
  /** 風險提醒 */
  reminder?: string
}

export interface ServiceInfo {
  /** 相對於根路由的路徑，例如 service/enterprise-loan */
  path: string
  /** 導覽/連結顯示用的短名稱 */
  navLabel: string
  /** <title> */
  title: string
  /** <meta name="description"> */
  description: string
  /** <meta name="keywords">（主要 + 次要關鍵字） */
  keywords: string
  /** Hero H1 */
  h1: string
  /** Hero 副標 */
  subtitle: string
  /** Hero 背景圖（符合該服務主題，換頁時更好辨識） */
  heroImage: string
  /** Hero 下方補充（例如小額貸款的額度區間說明） */
  heroNote?: string

  situationsHeading?: string
  situationsIntro?: string
  situations?: SituationItem[]
  situationsFootnote?: string

  features: FeatureItem[]

  documents?: string[]
  documentsNote?: string

  steps?: StepItem[]

  fee?: FeeInfo

  faq?: FaqItem[]
}

export const LINE_URL = 'https://line.me/ti/p/w5eqzEtmeg'
export const PHONE_DISPLAY = '02-28103665'
export const PHONE_TEL = 'tel:+886228103665'

// 各服務頁共用的「誠信經營」訴求（PDF 每頁皆相同）。
const INTEGRITY_FEATURE: FeatureItem = {
  title: '誠信經營，資訊透明',
  desc: '本公司為依規定設立之管理顧問公司，堅持費用公開、流程透明，在專人說明並經您確認前，絕不盲目線上送件。',
}

// 專人一對一諮詢（各頁措辭略有差異，故不共用）。

export const services: ServiceInfo[] = [
  {
    path: 'service/enterprise-loan',
    navLabel: '企業借款',
    title: '企業借款｜企業週轉方案 – 立即加入LINE諮詢｜鑫信國際管理顧問',
    description:
      '企業借款、企業週轉資金缺口怎麼解決？鑫信國際管理顧問提供專人諮詢，依營運狀況規劃合適方案，不佔用銀行額度、費用透明公開，立即加入LINE諮詢。',
    keywords: '企業借款,企業週轉,工商融資,中小企業資金週轉,公司週轉金',
    h1: '企業借款｜企業週轉方案，專人為您規劃',
    subtitle: '不佔用銀行額度、不影響銀行聯徵，依您的營運狀況量身規劃企業借款方案',
    heroImage: enterpriseHero,
    situationsHeading: '什麼情況適合申辦企業借款？',
    situationsIntro:
      '需要企業週轉資金的常見情況，以下狀況都歡迎先加LINE聊聊，由專人了解實際情況後再規劃合適的企業借款方案：',
    situations: [
      {
        title: '訂單增加、進貨資金周轉不過來',
        desc: '公司接單量提升，但貨款入帳時間與進貨付款時間有落差，需要短期資金銜接。',
      },
      {
        title: '銀行貸款額度已用滿',
        desc: '既有銀行往來額度已滿，需要銀行體系外的企業借款管道補足資金缺口。',
      },
      {
        title: '季節性或稅務支出的短期資金缺口',
        desc: '淡旺季明顯的產業，或稅務申報期間張羅的短期周轉需求。',
      },
      {
        title: '公司新成立，財務資料尚未齊全',
        desc: '成立時間較短，銀行核貸條件較嚴格，可先諮詢其他企業週轉方案。',
      },
    ],
    situationsFootnote: '自營商、合夥事業、公司行號皆可洽詢。',
    features: [
      {
        title: '不佔銀行額度',
        desc: '與銀行貸款分開計算，不影響既有銀行往來額度。',
      },
      {
        title: '專人一對一諮詢',
        desc: '先了解營運狀況、資金需求，再說明可行的企業週轉方案與費用，不會直接請您線上送件了事。',
      },
      {
        title: '方案彈性規劃',
        desc: '依公司規模、營運狀況、擔保條件不同，額度與還款期限可個別討論。',
      },
      INTEGRITY_FEATURE,
    ],
    documents: [
      '公司或商業登記證明',
      '負責人身分證明文件',
      '近 6–12 個月營業狀況佐證（如存摺流水、報稅資料，自營商可提供替代證明）',
      '如需擔保品或保證人，將由專人依個案說明',
    ],
    documentsNote: '依方案調整，實際以專人確認為準',
    steps: [
      { title: '立即加入LINE諮詢', desc: '簡單說明資金用途與需求金額。' },
      { title: '專人一對一了解狀況', desc: '說明可行的企業週轉方案方向。' },
      {
        title: '方案規劃與費用說明',
        desc: '包含利率、還款期數、相關費用，確認無誤後才進入下一步。',
      },
      { title: '撥款' },
    ],
    fee: {
      bullets: [
        '申辦資格：年滿 18 歲至 70 歲皆可申請辦理。',
        '還款期限：分期期數最短 3 期，最長可達 60 期（以月為單位）。',
        '年利率：月利率最低 1% 起，最高 2.5%（最高年利率 30%），依相關法規規定辦理。',
      ],
      table: [
        { label: '借款金額', value: '新台幣 600,000 元' },
        { label: '還款期數', value: '12 期（以月計算）' },
        { label: '月利率', value: '1.7%' },
        { label: '年利率約為', value: '20.4%' },
        { label: '每月應繳利息約', value: '新台幣 10,200 元' },
        { label: '總還款金額約', value: '新台幣 722,400 元' },
      ],
      note: '免收任何代辦或手續費，用途及職業別不限。實際核准額度與利率，將依個人工作狀況、收入條件、信用評分及負債情形綜合評估後決定。若提前清償，將依實際使用天數計算利息，且不另收違約金。',
      reminder:
        '實際核貸條件與利率內容，仍以最終審核結果為準。資金規劃需謹慎，請依個人財務狀況評估申貸。',
    },
    faq: [
      {
        q: '沒有不動產可以做擔保，還能申請企業借款嗎？',
        a: '可以先加LINE諮詢，專人會依營運狀況、有無其他可用擔保條件，評估合適的方案。',
      },
      {
        q: '公司信用有些瑕疵，還能申請嗎？',
        a: '仍建議直接諮詢，會依整體財務狀況綜合評估，不會單看聯徵紀錄就直接拒絕。',
      },
      {
        q: '多久可以知道結果／撥款？',
        a: '依個案資料齊全度而定，專人確認後會直接告知預估時間，不會給無法兌現的承諾時間。',
      },
      {
        q: '如何確認是跟正牌公司接洽，不是詐騙代辦？',
        a: '請認明本公司官方 LINE／電話聯繫方式，我們不會透過不明人員或管道向您索取個資，如有疑慮歡迎直接來電查證。',
      },
    ],
  },
  {
    path: 'service/document-loan',
    navLabel: '證件貸款',
    title: '證件貸款｜文件精簡、專人一對一規劃｜鑫信國際管理顧問',
    description:
      '證件貸款免準備複雜文件，適合臨時週轉、短期資金需求。鑫信國際管理顧問提供專人諮詢，依您的狀況規劃合適方案，費用透明公開，立即加入LINE諮詢。',
    keywords: '證件貸款,證件借款,身分證借款,簡易貸款,小額證件貸款',
    h1: '證件貸款｜文件精簡，專人為您規劃方案',
    subtitle: '不需要準備複雜財力證明，依您的狀況說明可行的證件貸款方案',
    heroImage: documentHero,
    situationsHeading: '什麼情況適合申辦證件貸款？',
    situationsIntro:
      '證件貸款顧名思義，申辦時所需準備的文件相對精簡，以下狀況都歡迎先加LINE聊聊，由專人了解實際情況後再規劃合適方案：',
    situations: [
      {
        title: '臨時資金週轉',
        desc: '生活中突然出現的資金需求，不想或來不及準備完整財力證明文件。',
      },
      {
        title: '短期資金需求',
        desc: '預期短期內就能將款項還清，需要的是一筆能快速說明清楚的短期資金。',
      },
      {
        title: '收入來源較難提供制式財力證明',
        desc: '自由業、接案工作者、或收入型態較不固定的人，銀行貸款審核條件相對嚴格，可以先諮詢證件貸款方案是否合適。',
      },
      {
        title: '不想跑繁瑣文件流程',
        desc: '希望文件準備能盡量精簡，把時間留給真正重要的事。',
      },
    ],
    features: [
      {
        title: '文件精簡',
        desc: '所需準備的文件相對簡單，實際需要哪些證件，由專人依個案說明。',
      },
      {
        title: '專人一對一諮詢',
        desc: '先了解您的狀況、資金需求，再說明可行的證件貸款方案與費用，不會直接請您線上送件了事。',
      },
      {
        title: '方案彈性規劃',
        desc: '依個人狀況不同，額度與還款期限可個別討論，歡迎LINE與專人諮詢。',
      },
      INTEGRITY_FEATURE,
    ],
    documents: [
      '身分證正本',
      '第二證件（如健保卡、駕照，依方案而定）',
      '如需其他佐證資料，將由專人依個案說明，原則上以精簡為主',
    ],
    fee: {
      table: [
        { label: '借款金額', value: '新台幣 600,000 元' },
        { label: '還款期數', value: '12 期（以月計算）' },
        { label: '月利率 / 最高年利率（APR）', value: '1.7% / 30%' },
        { label: '每月應繳利息約', value: '新台幣 10,200 元' },
        { label: '總還款金額約', value: '新台幣 722,400 元' },
      ],
      reminder: '實際核貸條件與利率內容，仍以最終審核結果為準。資金規劃需謹慎，請依個人財務狀況評估申貸。',
    },
  },
  {
    path: 'service/credit-loan',
    navLabel: '信用貸款',
    title: '信用貸款｜免擔保品、專人依個人狀況規劃｜鑫信國際管理顧問',
    description:
      '信用貸款免擔保品，依個人信用與收入狀況媒合合適方案。鑫信國際管理顧問提供專人諮詢，費用透明公開，立即加入LINE諮詢。',
    keywords: '信用貸款,信貸,個人信貸,小額信貸,免擔保品貸款',
    h1: '信用貸款｜免擔保品，專人依個人狀況規劃',
    subtitle: '不需提供不動產或其他擔保品，依您的信用與收入狀況說明可行的信用貸款方案',
    heroImage: creditHero,
    features: [
      {
        title: '免擔保品',
        desc: '不需提供不動產、車輛等擔保品，以個人信用狀況為主要評估依據。',
      },
      {
        title: '專人一對一諮詢',
        desc: '先了解您的信用狀況、收入條件與資金需求，再說明可行的信用貸款方案與費用，不會直接請您線上送件了事。',
      },
      {
        title: '方案彈性規劃',
        desc: '依個人信用狀況、收入條件不同，額度與還款期限可個別討論。',
      },
      INTEGRITY_FEATURE,
    ],
  },
  {
    path: 'service/second-mortgage',
    navLabel: '房屋二胎',
    title: '房屋二胎｜房屋土地二胎三胎，專人依個案規劃｜鑫信國際管理顧問',
    description:
      '房屋二胎、土地二胎，已有房貸也可申請，依不動產狀況規劃合適的資金方案。鑫信國際管理顧問提供專人諮詢，費用透明公開，立即加入LINE諮詢。',
    keywords: '房屋二胎,房屋貸款,房屋土地二胎三胎,土地二胎,房屋增貸,房屋轉貸',
    h1: '房屋二胎｜房屋土地二/三胎，專人依個案規劃',
    subtitle: '已有房貸也能申請，依您的不動產狀況說明可行的房屋二胎方案',
    heroImage: mortgageHero,
    features: [
      {
        title: '二胎三胎皆可承作',
        desc: '不限一胎房貸，二胎、三胎依不動產實際狀況評估承作可能性。',
      },
      {
        title: '專人一對一諮詢',
        desc: '先了解您的不動產狀況、既有貸款情形與資金需求，再說明可行的房屋二胎方案與費用，不會直接請您線上送件了事。',
      },
      {
        title: '額度依不動產狀況彈性規劃',
        desc: '依不動產類型、地段、現況貸款情形不同，額度與還款期限可個別討論。',
      },
      INTEGRITY_FEATURE,
    ],
  },
  {
    path: 'service/small-loan',
    navLabel: '小額貸款',
    title: '小額貸款｜彈性方案，專人依需求規劃｜鑫信國際管理顧問',
    description:
      '小額貸款協助處理生活中的突發支出，依個人狀況彈性規劃方案。鑫信國際管理顧問提供專人諮詢，費用透明公開，立即加入LINE諮詢。',
    keywords: '小額貸款',
    h1: '小額貸款｜彈性方案，專人依需求規劃',
    subtitle: '處理生活中的突發支出，依您的狀況說明可行的小額貸款方案',
    heroImage: smallHero,
    heroNote: '額度區間依個人狀況與需求彈性規劃，實際可承作區間由專人說明。',
    features: [INTEGRITY_FEATURE],
  },
  {
    path: 'service/vehicle-loan',
    navLabel: '汽機車借款',
    title: '汽機車借款｜免留車，專人依車況規劃｜鑫信國際管理顧問',
    description:
      '汽機車借款免留車，原車可繼續使用，已有車貸也能申請汽機車二胎。鑫信國際管理顧問提供專人諮詢，費用透明公開，立即加入LINE諮詢。',
    keywords: '汽機車借款,汽車借款,機車借款,汽車二胎,機車二胎',
    h1: '汽機車借款｜免留車，專人依車況規劃方案',
    subtitle: '免留車，原車可繼續使用，依您的車輛狀況說明可行的汽機車借款方案',
    heroImage: vehicleHero,
    features: [
      {
        title: '免留車，原車繼續使用',
        desc: '辦理期間車輛可依約定方式繼續使用，實際作業方式由專人說明。',
      },
      {
        title: '二胎也可承作',
        desc: '車輛目前仍有貸款，也可以先諮詢評估是否適合承作汽機車二胎。',
      },
      {
        title: '專人一對一諮詢',
        desc: '先了解您的車輛狀況與資金需求，再說明可行的汽機車借款方案與費用，不會直接請您線上送件了事。',
      },
      INTEGRITY_FEATURE,
    ],
  },
]
