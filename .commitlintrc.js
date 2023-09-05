module.exports = {
  extends: ["@commitlint/config-conventional"],
  rules: {
		// 1 表示警告、2 标识错误
		// 规则说明：https://github.com/conventional-changelog/commitlint/blob/master/docs/reference-rules.md
		'body-leading-blank': [1, 'always'], // 允许内容开头空一行
		'body-max-line-length': [2, 'always', 200], // 内容的最大一行长度
		'footer-leading-blank': [1, 'always'],
		'footer-max-line-length': [2, 'always', 100],
		'header-max-length': [2, 'always', 100],
		'subject-case': [2, 'never', ['sentence-case', 'start-case', 'pascal-case', 'upper-case']],
		'subject-empty': [2, 'never'],
		'subject-full-stop': [2, 'never', '.'],
		'type-case': [2, 'always', 'lower-case'],
		'type-empty': [2, 'never'],
    "type-enum": [
      2,
      "always",
      [
        "init",
        "build",
        "ci",
        "chore",
        "docs",
        "feat",
        "fix",
        "perf",
        "refactor",
        "revert",
        "style",
        "test",
      ],
    ],
  },
};
/**
 * build : 改变了build工具 如 webpack
 * ci : 持续集成新增
 * chore : 构建过程或辅助工具的变动
 * feat : 新功能
 * docs : 文档改变
 * fix : 修复bug
 * perf : 性能优化
 * refactor : 某个已有功能重构
 * revert : 撤销上一次的 commit
 * style : 代码格式改变
 * test : 增加测试
 */
