---
name: bug-fix
description: >
  Use this skill for diagnosing and fixing bugs sourced from GitHub Issues.
  Triggers include: any bug fix work, "問題修復", "bug fix", "fix issue", "修復錯誤", "defect",
  or when github-issue-agent routes a bug-type issue here.
  Covers the full bug-fix lifecycle: root cause analysis → impact scope → planning →
  implementation → regression validation → changelog → commit.
---

# Bug Fix Skill（問題修復流程）

此 skill 處理從 GitHub Issue 分析出的「問題修復」類型，執行完整的修復生命週期。

---

## Step 5-1｜分析問題原因

**目標**：找出 bug 的根本原因（Root Cause）。

### 分析步驟

1. **重現問題**
   - 依照 issue 描述的步驟，嘗試在本地重現問題
   - 記錄重現的確切步驟

2. **初步假設**
   - 根據問題現象，列出可能的原因假設（2-3 個）

3. **縮小範圍**
   - 查閱相關程式碼
   - 加入 debug log 或使用 debugger 逐步追蹤
   - 確認問題觸發的確切位置（檔案、函式、行數）

4. **確認根本原因**
   - 說明為何此處造成問題
   - 確認是 logic error / race condition / type mismatch / state 管理問題 / API 問題等

**輸出格式：**
```
## 問題原因分析
- 重現步驟：...
- 根本原因：...（位於 <file>:<line>）
- 問題類型：logic error / type issue / state issue / ...
- 觸發條件：...
```

---

## Step 5-2｜影響範圍

**目標**：評估此 bug 對系統的影響範圍。

分析以下面向：

| 面向 | 問題 |
|------|------|
| **功能影響** | 哪些功能會受到此 bug 影響？ |
| **使用者影響** | 哪些使用者角色 / 使用場景受影響？ |
| **資料影響** | 是否造成資料錯誤、遺失或不一致？ |
| **關聯模組** | 修復此問題是否可能影響其他模組？ |
| **嚴重程度** | Critical / High / Medium / Low |

**輸出格式：**
```
## 影響範圍
- 受影響功能：...
- 受影響使用者：...
- 資料風險：有 / 無（說明）
- 關聯模組：...
- 嚴重程度：Critical / High / Medium / Low
```

---

## Step 5-3｜提出實行步驟計劃

**目標**：制定具體、可執行的修復步驟。

範例格式：
```
修復計劃：
1. 在 <file> 的 <function> 中修正 <具體邏輯>
2. 補上對 null / undefined 的防禦性檢查
3. 確認相關的 error boundary 是否需要更新
4. 新增針對此 bug 的 regression test case
```

> ⚠️ 修復方案需針對根本原因，而非僅掩蓋症狀。

---

## Step 5-4｜實作

### 5-4-A｜建立新分支（從最新 main）

```bash
git checkout main
git pull origin main
git checkout -b fixBug-<ISSUE_NUMBER>-<short-description>
```

> ✅ 確認分支名稱格式：`fixBug-<issueNumber>-<kebab-case-description>`
> 例：`fixBug-87-fix-null-crash-on-user-page`

### 5-4-B｜依步驟計劃逐步修復

- 專注修復根本原因，避免過度修改
- 修復後確認問題已消失（可先本地測試再繼續）

---

## Step 5-5｜驗證修復結果

**目標**：確認問題已修復，且沒有引入新的問題（Regression）。

### 修復驗證

- [ ] 原 issue 描述的問題已不再出現
- [ ] 重現步驟執行後行為正常

### Regression 驗證

- [ ] 與修復相關的周邊功能運作正常
- [ ] 原有的 happy path 仍然正確

### Happy Path 驗證
- 按照正常使用流程操作，確認整體功能未受影響

### Edge Case 驗證
- 空值 / 邊界值輸入
- 相關的異常情境（timeout、網路錯誤等）

### UI 介面驗證
- [ ] 修復後的 UI 顯示正確
- [ ] 錯誤訊息或提示符合預期
- [ ] 沒有出現非預期的版面位移或視覺異常

### 驗證失敗處理
```
若驗證失敗：
1. 記錄失敗的測試案例與現象
2. 回頭檢視 Step 5-3 的步驟計劃
3. 判斷是否根本原因分析有誤，或修復方式不完整
4. 修正步驟計劃
5. 重新實作並再次驗證
```

---

## Step 5-5（續）｜驗證通過後 — 更新文件與 Commit

### 更新 ChangeLog

在 `CHANGELOG.md` 新增記錄：

```markdown
## [Unreleased]
### Fixed
- fix: <問題描述> (#<ISSUE_NUMBER>)
```

### 更新相關 Agent MD 檔案

確認是否需要更新：
- [ ] 已知問題列表（Known Issues）
- [ ] 其他 agent 相關的 `.md` 文件
- [ ] `README.md`（若有相關使用說明需更正）

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
git commit -m "fix(<scope>): <問題描述> [#<ISSUE_NUMBER>]"
git push origin fixBug-<ISSUE_NUMBER>-<short-description>
```

---

## 流程圖

```
Issue 確認為問題修復
        ↓
   分析問題原因 (5-1)
        ↓
   評估影響範圍 (5-2)
        ↓
  制定修復步驟計劃 (5-3)
        ↓
  從 main 建分支 → 實作 (5-4)
        ↓
   驗證修復結果 (5-5)
        ↓
  失敗？→ 修正計劃 → 重新實作
        ↓ 通過
  更新 ChangeLog & 文件
        ↓
  ESLint + TSC 檢查
        ↓
    Commit & Push
```
