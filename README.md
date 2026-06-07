# <img src="https://github.com/Solvro/web-testownik/blob/main/public/favicon/180x180.png?raw=true" width="24"> Eventownik Solvro – Mobile

<div align="center">

![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Tailwind](https://img.shields.io/badge/tailwind-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![Vitest](https://img.shields.io/badge/vitest-%236E9F18.svg?style=for-the-badge&logo=vitest&logoColor=white)
![RTL](https://img.shields.io/badge/RTL-E33332?style=for-the-badge&logo=testinglibrary&logoColor=white)
![Capacitor](https://img.shields.io/badge/capacitor-119EFF?style=for-the-badge&logo=capacitor&logoColor=white)
![React Router](https://img.shields.io/badge/react%20router-CA4245?style=for-the-badge&logo=reactrouter&logoColor=white)

</div>

## Uruchomienie lokalne

### Wymagania

- [Node.js](https://nodejs.org/) (zalecana wersja LTS)
- pnpm (dostarczany z Node.js)
- Android Studio (Android)
- Xcode (macOS, iOS)

### Instalacja

1. **Sklonuj repozytorium**

   ```bash
   git clone https://github.com/Solvro/web-eventownik-v2.git
   cd web-eventownik-v2
   ```

2. **Zainstaluj zależności**

   ```bash
   pnpm install
   ```

3. **Uruchom serwer deweloperski**

   ```bash
   pnpm run dev
   ```

4. **Otwórz przeglądarkę** i przejdź do `http://localhost:5173`

## Uruchamianie na urządzeniach mobilnych

Po zbudowaniu aplikacji zsynchronizuj projekt z natywnymi platformami:

```bash
pnpm run build
pnpm run cap:sync
```

### Android

```bash
pnpm run cap:open:android
```

### iOS

```bash
pnpm run cap:open:ios
```

## Dostępne skrypty

| Komenda                     | Opis                                          |
| --------------------------- | --------------------------------------------- |
| `pnpm run dev`              | Uruchamia serwer deweloperski Vite            |
| `pnpm run build`            | Buduje aplikację produkcyjną                  |
| `pnpm run preview`          | Uruchamia podgląd zbudowanej aplikacji        |
| `pnpm run lint`             | Sprawdza kod za pomocą ESLint                 |
| `pnpm run format`           | Formatuje kod za pomocą Prettier              |
| `pnpm run format:check`     | Sprawdza formatowanie kodu                    |
| `pnpm run typecheck`        | Sprawdza typy TypeScript                      |
| `pnpm run test`             | Uruchamia testy jednostkowe                   |
| `pnpm run test:watch`       | Uruchamia Vitest w trybie watch               |
| `pnpm run cap:sync`         | Synchronizuje projekt z platformami natywnymi |
| `pnpm run cap:open:android` | Otwiera projekt Android w Android Studio      |
| `pnpm run cap:open:ios`     | Otwiera projekt iOS w Xcode                   |

## Stack technologiczny

### Frontend

- **Framework:** [React 19](https://react.dev/)
- **Język:** [TypeScript](https://www.typescriptlang.org/)
- **Build Tool:** [Vite](https://vite.dev/)
- **Routing:** [TanStack Router](https://tanstack.com/router/latest)
- **Data Fetching & Caching:** [TanStack Query](https://tanstack.com/query/latest)

### UI

- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Komponenty:** [shadcn/ui](https://ui.shadcn.com/)
- **Ikony:** [Lucide React](https://lucide.dev/)

### Mobile

- **Cross-platform Runtime:** [Capacitor](https://capacitorjs.com/)
- **Android:** [Capacitor Android](https://capacitorjs.com/docs/android)
- **iOS:** [Capacitor iOS](https://capacitorjs.com/docs/ios)

### Jakość kodu

- **Linting:** [ESLint](https://eslint.org/)
- **Formatting:** [Prettier](https://prettier.io/)
- **Git Hooks:** [Husky](https://typicode.github.io/husky/)
- **Pre-commit Automation:** [lint-staged](https://github.com/lint-staged/lint-staged)

### Testy

- **Unit Testing:** [Vitest](https://vitest.dev/)
- **Component Testing:** [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
- **Browser Environment:** [JSDOM](https://github.com/jsdom/jsdom)

---

<div align="center">

Stworzone przez [KN Solvro](https://github.com/Solvro) dla studentów Politechniki Wrocławskiej

</div>
