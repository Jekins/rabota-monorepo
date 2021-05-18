# Монорепозиторий фронтенда Работа.ру

Управление монорепой осуществляется с помощью [Lerna](https://lerna.js.org/).

## Установка глобальных зависимостей

Node.js (v12.18.1): https://nodejs.org/

Yarn (v1.22.4): `npm i -g yarn@1.22.4`

Lerna (v3.22.1): `npm i -g lerna@3.22.1`

PM2 (v4.4.0): `npm i -g pm2@4.4.0`

## Продакшен

Установка зависимостей: `lerna bootstrap`

Прод билд всех сервисов: `lerna run build`

Рестарт серверов всех сервисов: `npm run start`

## Порты сервисов

DEV: Профессии (professions): `5000`

PROD: Профессии (professions): `4000`

## Команды управления серверами

Посмотреть список и состояние запущенных серверов: `pm2 list`

Запустит мониторинг серверов: `pm2 monit`

Показать логи серверов: `pm2 log`

Перезагрузить все сервера: `pm2 reload all`

Убить все процессы серверов: `pm2 kill`

## Разработка

Команды выполнять в корне репозитория.

Установить все зависимости: `lerna bootstrap`

Добавление зависимости одновременно для всех сервисов: `lerna add react@16.13.1 --hoist`

Добавление зависимости конкретному сервису: `lerna --scope=@rabota/professions add react@16.13.1`

Запуск dev сервера для конкретного сервиса: `lerna exec --scope=@rabota/professions yarn dev`

Шорткат для dev сервера из package.json: `yarn professions-dev`

Другие команды lerna: https://github.com/lerna/lerna

## Основной стек
TypeScript: https://www.typescriptlang.org/

Lerna: https://lerna.js.org/

React: https://reactjs.org/

Next.js: https://nextjs.org/

Redux Toolkit: https://redux-toolkit.js.org/

Styled Components: https://styled-components.com/

Formik: https://formik.org/
