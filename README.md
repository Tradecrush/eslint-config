# @tradecrush/eslint-config

Shared ESLint configurations for Tradecrush projects.

## Features

- Modern ESLint flat config format
- TypeScript support
- React and React Hooks rules
- Next.js specific rules
- Import sorting with eslint-plugin-import-x
- Prettier integration

## Installation

```bash
npm install --save-dev @tradecrush/eslint-config
```

## Requirements

- ESLint 9.0.0 or higher
- TypeScript 5.0.0 or higher (for TypeScript projects)

## Usage

### Next.js Projects

In your `eslint.config.mjs`:

```js
import nextjsConfig from '@tradecrush/eslint-config/nextjs-eslint-config';

export default nextjsConfig;
```

### React Projects

In your `eslint.config.mjs`:

```js
import reactConfig from '@tradecrush/eslint-config/react-eslint-config';

export default reactConfig;
```

### Base Configuration

In your `eslint.config.mjs`:

```js
import baseConfig from '@tradecrush/eslint-config/base-eslint-config';

export default baseConfig;
```

## Extending Configurations

You can extend any of the configurations to add your own rules:

```js
import nextjsConfig from '@tradecrush/eslint-config/nextjs-eslint-config';

export default [
  ...nextjsConfig,
  {
    rules: {
      // Your custom rules here
      'no-console': 'warn',
    },
  },
];
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

MIT