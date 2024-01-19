# @inqludeit/qualweb-plugin-cmp

## 2.0.1

### Patch Changes

- 37aefad: Update README.md file to reflect new usage

## 2.0.0

### Major Changes

- 63b2890: # Version bump because of major refactor

  **If you used more than the basic plugin functionality, start using @inqludeit/cmp-b-gone instead of this package. It will work as a drop-in replacement. Just rename your imports.**

  @inqlude/qualweb-plugin-cmp is now a wrapper around the core module
  @inqludeit/cmp-b-gone. The latter has been spun out into its own package that
  has no dependencies on QualWeb and can thus be integrated into @qualweb/core
  without cyclic dependencies.
