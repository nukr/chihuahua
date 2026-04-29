// 1. 過去的時間點 (例如：2026年4月29日 12:00:00)
const pastDate = new Date("2026-04-29T12:00:00");

// 2. 取得現在的時間 (毫秒)
const now = Date.now();

// 3. 計算差距（毫秒 -> 秒 -> 分 -> 小時）
const diffInHours = (now - pastDate.getTime()) / (1000 * 60 * 60);

// 4. 輸出結果
// console.log(`已經經過了 ${Math.floor(diffInHours)} 小時`);
// 如果需要顯示小數點，直接用 diffInHours

const count = 4000;

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

export { diffInHours, count, baseAmount, formatNumber, formatCompactNumber  };
