/*eslint no-template-curly-in-string: "off" */
module.exports = {
  dryRun: false,
  plugins: [
    '@semantic-release/commit-analyzer',
    ["semantic-release-lerna",
      {
        "generateNotes": false
      }
    ],
    '@semantic-release/release-notes-generator',
    '@semantic-release/changelog',
    '@semantic-release/github',
    "@semantic-release/npm",
    [
      '@semantic-release/git',
      {
        assets: [
          'docs/CHANGELOG.md',
          "package.json",
          "package-lock.json"
        ],
        message:
          'chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}'
      }
    ]
  ],
  branches: ["main"]
};
