# Приложение  Mesto
Репозиторий для приложения проекта `Mesto`, включающий фронтенд и бэкенд части приложения со следующими возможностями: авторизации и регистрации пользователей, операции с карточками и пользователями. Бэкенд расположен в директории `backend/`, а фронтенд - в `frontend/`. 
  
Демо:

- домен: [https://olesya6292.github.io/react-mesto-api-full/](https://olesya6292.github.io/react-mesto-api-full/)
- api: [https://react-mesto-api.onrender.com](https://react-mesto-api.onrender.com)

## Используемые технологии

* Фронтенд
  - адаптивная верстка с использованием Flexbox и Grid Layout для разных экранов (от 320 до 1280+)
  - методология БЭМ
  - использование Create React App
  - хуки `useState` и `useEffect`
  - поднятие стейта
  - глобальный стейт через React Context
  - управляемые компоненты в элементах формы
  - реф для прямого доступа к DOM-элементам
  - регистрация и авторизация
  - защищенные маршруты
  - авторизация через JWT
  - работа с Local Stоrage

* Бэкенд
  - Node.js
  - express.js
  - MongoDB
  - Mongoose

### Инструкция по развертыванию проекта:
```bash
# клонирование репозитория
$ git clone https://github.com/Olesya6292/react-mesto-api-full.git

# установка зависимостей
$ npm install

# запуск сборки фронтенда
$ npm run start

# Запуск сборки бэкенда
$ npm run dev
```










