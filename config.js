"use strict"

const config = require("conventional-changelog-conventionalcommits")

module.exports = config({
  header: "Release Notes",
  types: [
    { type: "fix", section: "Bug Fixes" },
    { type: "feat", section: "Features" },
    { type: "build", section: "Maintenance" },
    { type: "chore", section: "Maintenance" },
    { type: "ci", section: "Maintenance" },
    { type: "docs", section: "Documentation" },
    { type: "style", section: "Maintenance" },
    { type: "refactor", section: "Performance Improvements" },
    { type: "perf", section: "Performance Improvements" },
    { type: "test", section: "Maintenance" },
    { type: "revert", section: "Reverts" },
  ],
})
