# Agent Guide

> **⚠️ See [`.github/copilot-instructions.md`](.github/copilot-instructions.md) for comprehensive guidance on development workflow, architecture, and issue handling.**

## 快速概覽

這是一個 **React + TypeScript + Vite** 的單頁落地頁專案，專注於快速原型設計。

### 核心特點

- 🏗️ **區塊導向架構**：`src/sections/<SectionName>/` 獨立元件
- 🎨 **Tailwind 優先**：所有樣式使用 Tailwind utility classes
- 📦 **無外部 CSS**：`src/styles/global.css` 僅作 Tailwind 入口
- 🔗 **GitHub 工作流**：Bug 修復與功能開發由 Skills 管理

### 現有區塊清單

| 區塊       | 用途     |
| ---------- | -------- |
| `Header`   | 導航欄   |
| `Hero`     | 主視覺   |
| `About`    | 品牌介紹 |
| `Process`  | 流程說明 |
| `Services` | 服務列表 |
| `Stats`    | 統計數據 |
| `Steps`    | 操作步驟 |
| `Cases`    | 案例展示 |
| `Points`   | 要點說明 |
| `Faq`      | 常見問題 |
| `Contact`  | 聯絡表單 |
| `Footer`   | 底部資訊 |

---

## 快速命令

```bash
yarn dev      # 開發伺服器 (port 3000)
yarn build    # 生產編譯
yarn lint     # 代碼檢查
```

---

## 開發工作流程

### 📋 GitHub Issue 工作流

1. 使用 `@github fetch issue #<NUMBER>` 獲取任務
2. 按照對應的 Skill 指南執行
   - **Bug 修復**: `.github/skills/bug-fix/SKILL.md`
   - **新功能**: `.github/skills/feature-development/SKILL.md`

### 🌿 分支與提交

- Feature: `feature-<NUM>-<描述>`
- Bug Fix: `fixBug-<NUM>-<描述>`
- Commit 格式: `<type>(<scope>): <描述> [#<NUMBER>]`

---

## 📚 詳細文件

- **完整指南**: [`.github/copilot-instructions.md`](.github/copilot-instructions.md)
- **Bug 修復工作流**: [`.github/skills/bug-fix/SKILL.md`](.github/skills/bug-fix/SKILL.md)
- **新功能開發**: [`.github/skills/feature-development/SKILL.md`](.github/skills/feature-development/SKILL.md)
