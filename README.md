# Unimma UI (@unimma/ui)

A reusable Vue 3 component library built for Unimma applications. It leverages **PrimeVue (Volt/Unstyled)**, **Tailwind CSS v4**, and provides a seamless integration with Nuxt 4.

## 📦 Project Structure

This project is a **pnpm monorepo**:

- **`packages/ui`**: The core Vue component library (Vite-based).
- **`apps/docs`**: Documentation and playground site (Nuxt 4).

---

## 🚀 Consumption (How to install)

This package is hosted on the private **Unimma Gitea Package Registry**. To install it in your project (e.g., `online-exam`, `krs`), you must configure your package manager to look at `git.unimma.ac.id`.

### 1. Configure Registry Access
Create (or edit) an `.npmrc` file in the root of your target project. This tells npm/pnpm that any package starting with `@unimma` should be fetched from the private Gitea server.

**`.npmrc`**
```ini
@unimma:registry=[https://git.unimma.ac.id/api/packages/](https://git.unimma.ac.id/api/packages/){owner}/npm/
```

> Note: Replace `{owner}` with the Gitea organization or username that owns the package (e.g., `unimma` or `msazzuhair`).

### 2. Authentication

To download private packages, you need an access token.

- Log in to [Git Unimma](https://git.unimma.ac.id)
- Go to Settings > Applications.
- Generate a new Token with read:packages permission.

#### Option A: Global Authentication (Recommended for Developers)

Run this command in your terminal:

```bash
npm login --registry=[https://git.unimma.ac.id/api/packages/](https://git.unimma.ac.id/api/packages/){owner}/npm/
```

- _Username: Your Gitea Username_

- _Password: The Token you just generated_

#### Option B: CI/CD or Project Level

Add the auth token directly to your project's .npmrc:

```toml
//git.unimma.ac.id/api/packages/{owner}/npm/:_authToken=YOUR_GITEA_TOKEN
```

### 3. Install the Package

Once configured, install the package normally:

```bash
pnpm add @unimma/ui
```

## 💻 Usage
### In Nuxt (Recommended)
Add the module to your `nuxt.config.ts`. This handles auto-imports and configuration.
```ts
export default defineNuxtConfig({
  modules: [
    // ... other modules  
    '@unimma/ui/nuxt',
  ],
})
```

### In Standard Vue 3
Import the CSS and use the plugin.

```ts
import { createApp } from 'vue';
import App from './App.vue';
import UnimmaUI from '@unimma/ui';
import '@unimma/ui/style.css'; // Import compiled styles

const app = createApp(App);
app.use(UnimmaUI);
app.mount('#app');
```

## 🛠️ Monorepo Development

If you are contributing to `@unimma/ui` itself:

### Prerequisites
- Node.js 20+
- pnpm 9+

### Setup
```bash
# 1. Clone the repository
git clone [https://git.unimma.ac.id/](https://git.unimma.ac.id/){owner}/unimma-ui.git

# 2. Install dependencies
pnpm install

# 3. Build the UI package (Required before running docs)
pnpm build:ui
```

### Commands

| Command           | Description                    |
|-------------------|--------------------------------|
| `pnpm dev`        | Start the development server   |
| `pnpm build:docs` | Build the docs                 |
| `pnpm build:ui`   | Build the UI package           |
| `pnpm lint`       | Run ESLint                     |

## 🚀 Publishing to Git Unimma

To release a new version of the UI library:

1. Update the version in packages/ui/package.json.
2. Build the package:

```bash
pnpm build:ui
```

3. Publish using the configured registry:

```bash
cd packages/ui
npm publish --registry=[https://git.unimma.ac.id/api/packages/](https://git.unimma.ac.id/api/packages/){owner}/npm/
```

## 🧩 Dependencies

This library relies on several peer dependencies that must be present in the host application:
- Vue 3.x
- PrimeVue 4.x
- Tailwind CSS 4.x
- Pinia (optional, used by some components)

See [packages/ui/package.json](packages/ui/package.json) for the full list.
