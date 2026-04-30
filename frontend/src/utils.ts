// 1. 過去的時間點 (例如：2026年4月29日 12:00:00)
const pastDate = new Date("2026-04-29T12:00:00");

// 2. 取得現在的時間 (毫秒)
const now = Date.now();

// 3. 計算差距（毫秒 -> 秒 -> 分 -> 小時）
const diffInHours = (now - pastDate.getTime()) / (1000 * 60 * 60);


// M+ 顯示
const formatMPlus = (num: number) => {
  if (num >= 1e9) return Math.floor(num / 1e9) + 'B+'
  if (num >= 1e6) return Math.floor(num / 1e6) + 'M+'
  return String(num)
}

// 核心：人數成長模型
const getCount = (date: Date) => {
  const now = Date.now()

  // 時間差（小時）
  const diffInHours =
    (now - date.getTime()) / (1000 * 60 * 60)

  const base = 1;

  // 成長曲線（log：前快後慢，比線性真實）
  const growth = Math.log1p(diffInHours) * 1000

  // 一點隨機抖動（避免太假）
  const jitter = Math.random() * 30

  return Math.floor(base + growth + jitter)
}

// 對外 function（最終你會用這個）
const getDisplayCount = () => {
  const count = getCount(pastDate)
  return formatMPlus(count)
}


// 4. 輸出結果
// console.log(`已經經過了 ${Math.floor(diffInHours)} 小時`);
// 如果需要顯示小數點，直接用 diffInHours

const count = 150;

const baseAmount = 30;

const formatNumber = (num: number, options = {}) => {
  const formatter = new Intl.NumberFormat('en-US', {
    minimumFractionDigits: 0,
    maximumFractionDigits: 3,
    ...options,
  })
  return formatter.format(num)
}

const formatCompactNumber = (num: number | string) => {
  if (!Number.isFinite(Number(num))) return ''

  const abs = Math.abs(Number(num))
  let unit;
  let amount;

  console.log('abs', abs)

  if (abs >= 1e9) {
    amount = Math.floor(Number(num) / 1e9);
    unit = 'B+';
  }
  if (abs >= 1e6) {
      amount = Math.floor(Number(num) / 1e6);
      unit = 'M+';
  }
  if (abs >= 1e3) {
    amount = Math.floor(Number(num) / 1e3);
    unit = 'K+';
  }

  console.log('amount', amount, 'unit', unit)

  return {
    amount,
    unit,
  }
}

export { diffInHours, count, baseAmount, getDisplayCount, formatNumber, formatCompactNumber  };
