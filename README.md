# BugGeneratePackageJson

https://github.com/nrwl/nx/issues/23163

In a node app where i use `date-fns` I only import them using this type of imports.

```ts
import { addDays } from 'date-fns/addDays';
import { getWeek } from 'date-fns/getWeek';
import { isValid } from 'date-fns/isValid';
```

```
pnpm build
```

/dist/package.json
This does not generate a package.json that contains date-fns as a dependency
