---
name: github-issue-agent
description: >
  Use this skill whenever the user wants to process, analyze, or act on GitHub Issues from VSCode/Copilot.
  Triggers include: fetching GitHub issues, starting work on an issue, analyzing issue type, routing issues
  to the correct workflow, or any mention of "GitHub issue", "Copilot issue", "處理 issue", "分析 issue".
  This is the entry-point skill — it fetches the issue, determines if it's a new feature or bug fix,
  and delegates to the appropriate sub-workflow skill.
---

# GitHub Issue Agent (通用入口 Skill)

此 skill 負責：

1. 從 VSCode Copilot 抓取 GitHub Issue
2. 分析 issue 類型（新需求 or 問題修復）
3. 路由至對應的處理流程

---

## Step 1｜從 VSCode Copilot 抓取 GitHub Issue

在 VSCode 中透過 GitHub Copilot Chat 執行以下操作：

```
@github fetch issue #<ISSUE_NUMBER>
```

或使用 GitHub CLI（若已安裝）：

```bash
gh issue view <ISSUE_NUMBER> --json title,body,labels,assignees,comments
```

**抓取後確認以下欄位：**
| 欄位 | 說明 |
|------|------|
| `title` | Issue 標題 |
| `body` | Issue 描述內容 |
| `labels` | 標籤（bug / enhancement / feature 等） |
| `comments` | 補充討論內容 |

---

## Step 2｜分析 Issue 類型

根據以下規則判斷 issue 屬於哪種類型：

### 判斷為「新需求 (Feature)」的條件：

- Labels 包含：`enhancement`、`feature`、`new feature`
- 標題含有：「新增」、「支援」、「實作」、「add」、「implement」、「support」
- 描述著重於「希望有 XXX 功能」

### 判斷為「問題修復 (Bug Fix)」的條件：

- Labels 包含：`bug`、`fix`、`defect`
- 標題含有：「修復」、「錯誤」、「無法」、「crash」、「fix」、「bug」、「error」
- 描述著重於「XXX 行為不正確 / 不如預期」

### 無法判斷時：

詢問使用者確認，例如：

> 此 Issue 描述較模糊，請確認：這是「新功能需求」還是「問題修復」？

---

## Step 3｜路由至對應 Skill

| 類型     | 對應 Skill                          |
| -------- | ----------------------------------- |
| 新需求   | 參閱 `feature-development` SKILL.md |
| 問題修復 | 參閱 `bug-fix` SKILL.md             |

---

## 共用工具函式

### 確認目前分支狀態

```bash
git status
git branch --show-current
git log origin/main..HEAD --oneline
```

### 從最新 main 建立新分支

```bash
git checkout main
git pull origin main

# 新需求
git checkout -b feature-<ISSUE_NUMBER>-<short-description>

# 問題修復
git checkout -b fixBug-<ISSUE_NUMBER>-<short-description>
```

> ⚠️ **重要**：無論是新需求或修復，永遠從最新的 `main` 分支建立新分支。

---

## Commit 前驗證流程（共用）

```bash
# 1. ESLint 檢查
npx eslint . --ext .ts,.tsx,.js,.jsx

# 2. TypeScript 型別檢查
npx tsc --noEmit

# 3. 若無錯誤，進行 commit
git add .
git commit -m "<type>(<scope>): <description> [#ISSUE_NUMBER]"
```

**Commit Message 格式：**

- 新需求：`feat(scope): 描述 [#123]`
- 修復：`fix(scope): 描述 [#123]`

---

## 參考文件

- 新需求詳細流程：`../feature-development/SKILL.md`
- 問題修復詳細流程：`../bug-fix/SKILL.md`
