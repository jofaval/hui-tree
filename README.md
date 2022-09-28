# HeadlessUI Tree #

Headless UI principles with React applied to Trees

## Contents

1. [Tech stack](#tech-stack)
1. [Install](#install)
1. [Usage](#usage)
1. [Necessity](#necessity)
1. [Credits](#credits)

## Tech stack
[Back to the contents](#contents)

- React
- TypeScript

## Install
[Back to the contents](#contents)

```bash
pnpm install hui-tree
```

## Usage
[Back to the contents](#contents)

```tsx
import React from 'react';
import {useTree} from '@jofaval/hui-tree'

const MyComponent: React.FC = () => {
    const {} = useTree

    return (
        {/* ... */}
    )
}
```

## Necessity
[Back to the contents](#contents)

Work experience, some libraries feel awful to work with (bad DX because they're outdated), and while the typing system is great, they don't fully integrate with React.

But the worst part of it all, is that they're a pain to customize (if it's possible at times, that is)

## Credits
[Back to the contents](#contents)

- Tanner Linsley - Tanstack and React Table's component and talk
- Theo Browne - [t3.gg](https://t3.gg)