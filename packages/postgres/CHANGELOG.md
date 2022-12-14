# @evidence-dev/postgres

## 0.2.5

### Patch Changes

- c013859: Adds optional schema field for postgres connector

## 0.2.4

### Patch Changes

- Updated dependencies [bb5d0e2]
  - @evidence-dev/db-commons@0.1.2

## 0.2.3

### Patch Changes

- 8938e51: Fix postgres connector to handle cases consistently between query object and types object

## 0.2.2

### Patch Changes

- 194de3a: include db commons dep

## 0.2.1

### Patch Changes

- Updated dependencies [942488c]
  - @evidence-dev/db-commons@0.1.1

## 0.2.0

### Minor Changes

- cb6d561: Native type support for MySQL, SQL Lite, and Snowflake and extracted common DB functionality to a shared package.

### Patch Changes

- Updated dependencies [cb6d561]
  - @evidence-dev/db-commons@0.1.0

## 0.1.0

### Minor Changes

- 1fead9d: Exposed queries as their own variable (data={queryName}, in addition to existing data={data.queryname}) and exposed native Postgres/BigQuery types to components
