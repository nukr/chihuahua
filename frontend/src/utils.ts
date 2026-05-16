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
const getCount = () => {
  const base = 3;

  // 成長曲線（log：前快後慢，比線性真實）
  const growth = Math.log1p(diffInHours) * 550

  return Math.floor(base + growth)
}

// 對外 function（最終你會用這個）
const getDisplayCount = () => {
  const count = getCount()
  return formatMPlus(count)
}

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

const getDecreasingCount = () => {
  const now = new Date();
  const startOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const hoursPassed = (now.getTime() - startOfDay.getTime()) / (1000 * 60 * 60);

  // 從 30 開始，每小時約遞減 1 人，最低保持在 2 人 (可根據需求調整)
  const count = Math.max(2, 30 - Math.floor(hoursPassed));
  return count;
};

export { diffInHours, getDisplayCount, formatNumber, formatCompactNumber, getDecreasingCount };
