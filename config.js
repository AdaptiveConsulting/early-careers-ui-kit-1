"use strict"

const config = require("conventional-changelog-conventionalcommits")

module.exports = config({
  header: "Release Notes",
  types: [
    { type: "fix", section: "Bug Fixes", hidden: false },
    { type: "feat", section: "Features", hidden: false },
    { type: "build", section: "Maintenance", hidden: false },
    { type: "chore", section: "Maintenance", hidden: false },
    { type: "ci", section: "Maintenance", hidden: false },
    { type: "docs", section: "Documentation", hidden: false },
    { type: "style", section: "Maintenance", hidden: false },
    { type: "refactor", section: "Performance Improvements", hidden: false },
    { type: "perf", section: "Performance Improvements", hidden: false },
    { type: "test", section: "Maintenance", hidden: false },
    { type: "revert", section: "Reverts", hidden: false },
    { type: "changelog", section: "Changelog", hidden: true },
    { type: "", section: "Others", hidden: false },
  ],
})
