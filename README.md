# sarif-validator

A simple SARIF validation container based on [@microsoft/sarif-jest](https://www.npmjs.com/package/@microsoft/jest-sarif), part of [Microsoft's SARIF SDK](https://github.com/microsoft/sarif-js-sdk).

```
cat my.sarif.json | docker run --rm -i ghcr.io/anchore/sarif-validator
```
