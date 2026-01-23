# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/)
and this project follows [Semantic Versioning](https://semver.org/).

---

## [1.1.0] - 2026-01-23

### ✨ Added
- Dual MongoDB connection support:
  - MongoDB Native Driver
  - Mongoose (MERN stack)
- Unified `connectMongo()` API with explicit connection type selection
- Exported shared `mongoose` instance for schema/model usage
- Optional native connection close helper

### 🧠 Improved
- Clear separation between native and mongoose connections
- Prevented silent Mongoose buffering timeout issues
- Cleaner internal architecture with single entry point
- Updated README with detailed usage examples

### ⚠️ Important Notes
- Do not mix native MongoDB and Mongoose connections in the same project
- One connection type per application is recommended

---

## [1.0.0] - Initial Release

### 🎉 Initial Features
- Zero-config MongoDB connection using native MongoDB driver
- Environment variable validation
- Simple one-line connection setup
