# estree

> 🚧 WIP at [beta branch](https://github.com/TomokiMiyauci/estree/tree/beta)

[ESTree](https://github.com/estree/estree) types, based on ESTree spec
reference.

Provides strict types for ESTree definitions.

## Table of Contents <!-- omit in toc -->

- [Background](#background)
- [Install](#install)
- [Usage](#usage)
  - [Extended Definition](#extended-definition)
- [API](#api)
- [Contributing](#contributing)
- [License](#license)

## Background

Ecmascript evolves. Over time, AST will be extended. Existing projects focused
only on the latest ASTs.

This project will focus on two things

- Provide a complete AST type at some point in time.
- Strictly adhere to the specification.

## Install

deno:

```bash
deno add @miyauci/estree
```

node:

```bash
npx jsr add @miyauci/estree
```

## Usage

The following endpoints provide the complete AST family:

| Ecmascript Version | Endpoint                 |
| ------------------ | ------------------------ |
| es5                | `@miyauci/estree/es5`    |
| es2015             | `@miyauci/estree/es2015` |
| es2016             | `@miyauci/estree/es2016` |
| es2017             | `@miyauci/estree/es2017` |
| es2018             | `@miyauci/estree/es2018` |
| es2019             | `@miyauci/estree/es2019` |
| es2020             | `@miyauci/estree/es2020` |
| es2021             | `@miyauci/estree/es2021` |
| es2022             | `@miyauci/estree/es2022` |

```ts
import type * as es5 from "@miyauci/estree/es5";

declare const program: es5.Program;
```

### Extended Definition

It can be extended with stage3 and experimental definitions.

```ts
import "@miyauci/estree/stage3/decorator";
import "@miyauci/estree/experimental/pipeline-operator";
```

Or import all stage3 and experimental:

```ts
import "@miyauci/estree/stage3";
import "@miyauci/estree/experimental";
```

## API

See [jsr doc](https://jsr.io/@miyauci/estree) for all APIs.

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md)

## License

[MIT](LICENSE) © 2024 Tomoki Miyauchi
