# Aggelion — production build

## Что внутри
- `index.html` — лэндинг
- `app.js` — скомпилированный JS (был JSX, прогнан через Babel)
- `favicon.svg` — иконка
- `vercel.json` — конфиг для Vercel (кэш, security headers)

## ✅ Форма подключена

Форма уже привязана к Formspree endpoint `https://formspree.io/f/xjgzrozo` — отправляет заявки на **expert@aggelion.ai**. Можно сразу деплоить.

## Деплой на Vercel (3 минуты)

### Вариант А — через сайт (без GitHub)
1. Иди на https://vercel.com/new
2. Внизу страницы — "Deploy a template" → нет, не это. Найди **"Import"** или **"Add new"** → **"Project"**.
3. Если попросит GitHub — пропусти, ищи опцию **"Upload"** или drag-and-drop этой папки `dist/` целиком.
   - На текущем Vercel это сделать сложнее. Лучше использовать CLI (см. ниже) или подключить GitHub.

### Вариант Б — через Vercel CLI (рекомендую)
1. Установи Node.js если нет: https://nodejs.org (LTS)
2. Открой терминал в папке `dist/`
3. Запусти:
   ```
   npx vercel
   ```
4. Логинься через тот же Google, что использовала для регистрации Vercel
5. На вопросы:
   - Set up and deploy? **Y**
   - Which scope? — твой аккаунт
   - Link to existing project? **N**
   - Project name: **aggelion** (или что хочешь)
   - In which directory is your code located? **./**
   - Override settings? **N**
6. Получишь URL вида `https://aggelion-xxxxx.vercel.app` — открой, проверь
7. Чтобы выпустить в production: `npx vercel --prod` — даст `https://aggelion.vercel.app`

### Вариант В — через GitHub (если планируешь обновлять часто)
1. Создай репо на github.com
2. Залей туда содержимое папки `dist/`
3. На vercel.com → Add New → Project → Import Git Repository
4. Выбери репо → Deploy (Framework Preset: **Other**, Build Command: пусто, Output Directory: пусто или `./`)

## Подключение домена aggelion.ai

1. В Vercel → проект → Settings → Domains
2. Add Domain → `aggelion.ai`
3. Vercel покажет 2 DNS-записи (A или CNAME). Скопируй их.
4. Иди к регистратору домена → DNS settings → добавь эти записи
5. Жди 5-30 минут (иногда дольше), пока DNS обновится
6. Vercel автоматически выпустит SSL-сертификат

## Локальная проверка перед деплоем

В папке `dist/` запусти:
```
npx serve .
```
Откроется на `http://localhost:3000`. Если работает — деплой будет работать.
