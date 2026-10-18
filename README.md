# Мои дневники (PWA)

Файлы: index.html, raciona.html, trenirovki.html, sw.js, *.webmanifest, 4 иконки (.png). Все лежат в корне, без папок.

## Выложить на GitHub Pages
1. github.com → New repository → имя, например `diary`, **Public** → Create.
2. «uploading an existing file» → перетащите/выберите ВСЕ файлы из архива (распакованные) → Commit changes.
3. Settings → Pages → Source: Deploy from a branch → Branch: `main`, папка `/ (root)` → Save.
4. Через 1–2 минуты сайт будет по адресу `https://ВАШ_ЛОГИН.github.io/diary/`.

## Установить
Откройте в Chrome `.../raciona.html` и `.../trenirovki.html` → меню ⋮ → «Установить приложение» / «Добавить на главный экран». Работает офлайн.

## Перенос данных
В старой версии: Настройки → Скачать/Скопировать JSON. В новой: Настройки → Импорт.
Данные хранятся в браузере устройства: делайте экспорт время от времени.

## Обновление
Загрузите изменённые файлы поверх старых; при обновлении поменяйте `diary-v1` в sw.js на `diary-v2`.
