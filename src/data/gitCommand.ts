export type GitCommand = {
  id: string;
  title: string;
  command: string;
  description: string;
  category: "basic" | "branch" | "commit" | "remote" | "stash" | "undo";
};

export const gitCommands: GitCommand[] = [
  // =========================
  // basic
  // =========================
  {
    id: "git-init",
    title: "Gitリポジトリを作成",
    command: "git init",
    description: "現在のディレクトリをGitリポジトリとして初期化する",
    category: "basic",
  },
  {
    id: "git-status",
    title: "変更状況を確認",
    command: "git status",
    description: "変更・ステージング・未追跡ファイルなどの状態を確認する",
    category: "basic",
  },
  {
    id: "git-clone",
    title: "リポジトリを複製",
    command: "git clone <repository-url>",
    description: "リモートリポジトリをローカル環境へ複製する",
    category: "basic",
  },
  {
    id: "git-diff",
    title: "変更内容を確認",
    command: "git diff",
    description: "まだステージングしていない変更内容を確認する",
    category: "basic",
  },

  // =========================
  // commit
  // =========================
  {
    id: "git-add-file",
    title: "ファイルをステージング",
    command: "git add <file-name>",
    description: "指定したファイルをステージングエリアへ追加する",
    category: "commit",
  },
  {
    id: "git-add-all",
    title: "すべての変更をステージング",
    command: "git add .",
    description: "現在のディレクトリ以下の変更をまとめてステージングする",
    category: "commit",
  },
  {
    id: "git-commit",
    title: "変更をコミット",
    command: 'git commit -m "<message>"',
    description: "ステージングした変更をメッセージ付きでコミットする",
    category: "commit",
  },
  {
    id: "git-commit-amend",
    title: "直前のコミットを修正",
    command: "git commit --amend",
    description: "直前のコミット内容やコミットメッセージを修正する",
    category: "commit",
  },
  {
    id: "git-log",
    title: "コミット履歴を確認",
    command: "git log",
    description: "コミット履歴を詳細に確認する",
    category: "commit",
  },
  {
    id: "git-log-oneline",
    title: "コミット履歴を一覧表示",
    command: "git log --oneline",
    description: "コミット履歴を1コミット1行の簡潔な形式で確認する",
    category: "commit",
  },
  {
    id: "git-diff-staged",
    title: "ステージング済みの変更を確認",
    command: "git diff --staged",
    description: "ステージング済みで次回コミットされる変更内容を確認する",
    category: "commit",
  },

  // =========================
  // branch
  // =========================
  {
    id: "git-branch",
    title: "ブランチ一覧を確認",
    command: "git branch",
    description: "ローカルブランチの一覧と現在のブランチを確認する",
    category: "branch",
  },
  {
    id: "git-branch-create",
    title: "ブランチを作成",
    command: "git branch <branch-name>",
    description: "新しいブランチを作成する",
    category: "branch",
  },
  {
    id: "git-switch",
    title: "ブランチを移動",
    command: "git switch <branch-name>",
    description: "指定したブランチへ移動する",
    category: "branch",
  },
  {
    id: "git-switch-create",
    title: "ブランチを作成して移動",
    command: "git switch -c <branch-name>",
    description: "新しいブランチを作成し、そのブランチへ移動する",
    category: "branch",
  },
  {
    id: "git-branch-delete",
    title: "ブランチを削除",
    command: "git branch -d <branch-name>",
    description: "マージ済みのローカルブランチを削除する",
    category: "branch",
  },
  {
    id: "git-merge",
    title: "ブランチをマージ",
    command: "git merge <branch-name>",
    description: "指定したブランチの変更を現在のブランチへ取り込む",
    category: "branch",
  },
  {
    id: "git-rebase",
    title: "ブランチをリベース",
    command: "git rebase <branch-name>",
    description:
      "現在のブランチのコミットを、指定したブランチの最新位置を起点に付け替える",
    category: "branch",
  },
  {
    id: "git-rebase-interactive",
    title: "コミット履歴を整理",
    command: "git rebase -i HEAD~<number>",
    description:
      "直近の複数コミットを並べ替え・統合・編集する",
    category: "branch",
  },
  {
    id: "git-rebase-abort",
    title: "リベースを中止",
    command: "git rebase --abort",
    description:
      "進行中のリベースを中止して開始前の状態に戻す",
    category: "branch",
  },
  {
    id: "git-rebase-continue",
    title: "リベースを続行",
    command: "git rebase --continue",
    description:
      "コンフリクト解消後にリベース処理を続行する",
    category: "branch",
  },

  // =========================
  // remote
  // =========================
  {
    id: "git-remote",
    title: "リモートリポジトリを確認",
    command: "git remote -v",
    description: "登録されているリモートリポジトリのURLを確認する",
    category: "remote",
  },
  {
    id: "git-remote-add",
    title: "リモートリポジトリを追加",
    command: "git remote add origin <repository-url>",
    description: "originという名前でリモートリポジトリを登録する",
    category: "remote",
  },
  {
    id: "git-fetch",
    title: "リモート情報を取得",
    command: "git fetch",
    description: "リモートリポジトリの最新情報を取得する",
    category: "remote",
  },
  {
    id: "git-pull",
    title: "リモートの変更を取得",
    command: "git pull",
    description: "リモートリポジトリの変更を取得して現在のブランチへ統合する",
    category: "remote",
  },
  {
    id: "git-pull-origin",
    title: "指定ブランチをPull",
    command: "git pull origin <branch-name>",
    description: "originの指定したブランチから変更を取得して統合する",
    category: "remote",
  },
  {
    id: "git-push",
    title: "変更をPush",
    command: "git push",
    description: "ローカルのコミットをリモートリポジトリへ送信する",
    category: "remote",
  },
  {
    id: "git-push-origin",
    title: "指定ブランチをPush",
    command: "git push origin <branch-name>",
    description: "現在のローカルブランチをoriginの指定ブランチへ送信する",
    category: "remote",
  },
  {
    id: "git-push-upstream",
    title: "初回Push",
    command: "git push -u origin <branch-name>",
    description: "ブランチをPushし、リモートブランチとの追跡関係を設定する",
    category: "remote",
  },

  // =========================
  // stash
  // =========================
  {
    id: "git-stash",
    title: "変更を一時退避",
    command: "git stash",
    description: "コミットしていない変更を一時的に退避する",
    category: "stash",
  },
  {
    id: "git-stash-push",
    title: "メッセージ付きで一時退避",
    command: 'git stash push -m "<message>"',
    description: "変更内容にメッセージを付けて一時的に退避する",
    category: "stash",
  },
  {
    id: "git-stash-list",
    title: "退避した変更を確認",
    command: "git stash list",
    description: "stashに保存されている変更の一覧を確認する",
    category: "stash",
  },
  {
    id: "git-stash-pop",
    title: "退避した変更を復元",
    command: "git stash pop",
    description: "最新のstashを復元し、stash一覧から削除する",
    category: "stash",
  },
  {
    id: "git-stash-apply",
    title: "退避した変更を適用",
    command: "git stash apply",
    description: "最新のstashを復元するが、stash一覧には残す",
    category: "stash",
  },
  {
    id: "git-stash-drop",
    title: "退避した変更を削除",
    command: "git stash drop",
    description: "最新のstashをstash一覧から削除する",
    category: "stash",
  },
  // =========================
  // undo
  // =========================
  {
    id: "git-restore",
    title: "ファイルの変更を取り消す",
    command: "git restore <file-name>",
    description:
      "指定したファイルの未ステージングの変更を取り消し、直前のコミット状態に戻す",
    category: "undo",
  },
  {
    id: "git-restore-staged",
    title: "ステージングを取り消す",
    command: "git restore --staged <file-name>",
    description:
      "指定したファイルをステージングエリアから外す。ファイル自体の変更内容は残る",
    category: "undo",
  },
  {
    id: "git-revert",
    title: "コミットを打ち消す",
    command: "git revert <commit>",
    description:
      "指定したコミットの変更を打ち消す新しいコミットを作成する",
    category: "undo",
  },
  {
    id: "git-reset-soft",
    title: "直前のコミットだけ取り消す",
    command: "git reset --soft HEAD~1",
    description:
      "直前のコミットを取り消すが、変更内容はステージングされた状態で残す",
    category: "undo",
  },
  {
    id: "git-reset-mixed",
    title: "コミットとステージングを取り消す",
    command: "git reset HEAD~1",
    description:
      "直前のコミットを取り消し、変更内容は未ステージングの状態で残す",
    category: "undo",
  },
  {
    id: "git-reset-hard",
    title: "直前のコミットと変更を破棄",
    command: "git reset --hard HEAD~1",
    description:
      "直前のコミットを取り消し、作業ツリーの変更内容も破棄する",
    category: "undo",
  },
  {
    id: "git-checkout-file",
    title: "ファイルを指定コミット時点に戻す",
    command: "git restore --source=<commit> <file-name>",
    description:
      "指定したファイルの内容を、特定のコミット時点の状態に戻す",
    category: "undo",
  },
];