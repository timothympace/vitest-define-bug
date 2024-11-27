# Vitest Race Condition - define vs. test-runner
It appears there is a race condition in vitest when using the `define` configuration option (build time string replacement for source files). It is not easy to reproduce, but this repository is the closest thing to a minimum reproduction.

## Steps to reproduce
Run:
```
pnpm repro-bug
```

Wait for failure. It could take *A LOT* of runs. I've seen it take up to 30 minutes to reproduce, and it wouldn't shock me if it takes hours even.
