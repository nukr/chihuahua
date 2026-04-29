---
name: feature-development
description: >
  Use this skill for implementing new feature requirements sourced from GitHub Issues.
  Triggers include: any new feature development, "新需求", "feature issue", "implement feature",
  "新功能實作", or when github-issue-agent routes a feature-type issue here.
  Covers the full lifecycle: scope analysis → spec → planning → implementation → validation → changelog → commit.
---

# Feature Development Skill（新需求開發流程）

此 skill 處理從 GitHub Issue 分析出的「新需求」類型，執行完整的功能開發生命週期。

---

## Step 4-1｜分析新需求範圍

**目標**：釐清這個功能的邊界與影響範圍。

分析以下面向：
- 📌 **功能邊界**：這個需求涵蓋哪些操作/頁面/模組？
- 🔗 **相依模組**：會影響或依賴哪些現有功能？
- 👤 **使用者角色**：哪些角色會使用此功能？
- 🚫 **不在範圍內**：明確列出此 issue 不處理的項目（Out of Scope）

**輸出格式：**
```
## 需求範圍分析
- 功能邊界：...
- 相依模組：...
- 使用者角色：...
- Out of Scope：...
```

---

## Step 4-2｜記錄需求功能與注意事項，產出 Spec

**目標**：產出一份結構化的功能規格文件。

```markdown
# Feature Spec：<功能名稱>

## 背景 / 問題描述
<來自 issue body>

## 功能需求
- [ ] 功能 A：描述
- [ ] 功能 B：描述

## UI 規格
- 頁面/元件：...
- 互動行為：...
- 錯誤狀態：...

## API / 資料結構
- Endpoint：...
- Request / Response：...

## 注意事項
- ⚠️ 注意事項 1
- ⚠️ 注意事項 2

## 驗收標準 (Acceptance Criteria)
- AC1：...
- AC2：...
```

---

## Step 4-3｜提出執行步驟計劃

**目標**：將需求拆解為有序、可執行的實作步驟。

範例格式：
```
實作計劃：
1. 建立 API endpoint `POST /api/feature-x`
2. 新增 TypeScript interface `FeatureXPayload`
3. 實作 service layer 邏輯
4. 建立 React component `FeatureXForm`
5. 串接 API 並處理 loading / error state
6. 加入 unit test
```

> 步驟需足夠細，每步應可獨立完成與驗證。

---

## Step 4-4｜實作

### 4-4-A｜建立新分支（從最新 main）

```bash
git checkout main
git pull origin main
git checkout -b feature-<ISSUE_NUMBER>-<short-description>
```

> ✅ 確認分支名稱格式：`feature-<issueNumber>-<kebab-case-description>`
> 例：`feature-42-add-user-export`

### 4-4-B｜依步驟計劃逐步實作

- 每完成一個步驟後，自行驗證該步驟的輸出是否正確
- 若遇到阻礙，記錄原因並更新步驟計劃

---

## Step 4-5｜驗證功能

**目標**：確認實作符合需求規格與驗收標準。

### Happy Path 驗證
- 按照正常使用流程操作，確認主要功能正常運作
- 對照 Step 4-2 的驗收標準逐項確認

### Edge Case 驗證
- 空值 / 空陣列 / null 輸入
- 超長文字、特殊字元
- 網路失敗 / API timeout
- 並發操作 / 重複提交

### UI 介面驗證
- [ ] 視覺樣式符合設計規格
- [ ] RWD / 響應式表現正常
- [ ] Loading 狀態顯示正確
- [ ] 錯誤訊息顯示清楚
- [ ] Accessibility 基本檢查

### 驗證失敗處理
```
若驗證失敗：
1. 記錄失敗的測試案例與錯誤現象
2. 回頭檢視 Step 4-3 的步驟計劃
3. 找出計劃中的缺失或錯誤假設
4. 修正步驟計劃
5. 重新實作並再次驗證
```

---

## Step 4-6｜驗證通過後 — 更新文件與 Commit

### 更新 ChangeLog

在 `CHANGELOG.md` 新增記錄：

```markdown
## [Unreleased]
### Added
- feat: <功能描述> (#<ISSUE_NUMBER>)
```

### 更新相關 Agent MD 檔案

確認是否需要更新：
- [ ] `README.md`（若有新的功能說明）
- [ ] API 文件
- [ ] 其他 agent 相關的 `.md` 文件

### Commit 前驗證

```bash
# ESLint 檢查
npx eslint . --ext .ts,.tsx,.js,.jsx

# TypeScript 型別檢查
npx tsc --noEmit
```

**若有錯誤** → 修正後重新執行，直到無錯誤為止。

### Commit & Push

```bash
git add .
git commit -m "feat(<scope>): <功能描述> [#<ISSUE_NUMBER>]"
git push origin feature-<ISSUE_NUMBER>-<short-description>
```

---

## 流程圖

```
Issue 確認為新需求
      ↓
  分析需求範圍 (4-1)
      ↓
   產出 Spec (4-2)
      ↓
  制定執行計劃 (4-3)
      ↓
  從 main 建分支 → 實作 (4-4)
      ↓
   驗證功能 (4-5)
      ↓
  失敗？→ 修正計劃 → 重新實作
      ↓ 通過
  更新 ChangeLog & 文件
      ↓
  ESLint + TSC 檢查
      ↓
   Commit & Push (4-6)
```
