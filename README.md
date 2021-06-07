### Вычислитель отличий

Вычислитель отличий – программа, определяющая разницу между двумя структурами данных. Это популярная задача, для решения которой существует множество онлайн сервисов, например http://www.jsondiff.com/. Подобный механизм используется при выводе тестов или при автоматическом отслеживании изменении в конфигурационных файлах.

Возможности утилиты:

Поддержка разных входных форматов: yaml, json
Генерация отчета в виде plain text, stylish и json

### Установка 

1. Установите Node.js последней версии в систему глобально (Установка JavaScript).
2. Склонируйте созданный репозиторий проекта локально. 
3. Выполнить установку зависимостей (make install)
4. Запустить игры (команды в описании игр)

### Использование

gendiff [options] <pathToFile1> <pathToFile2>

Options:
-V, --version output the version number
-f, --format [type] Output format
-h, --help output usage information

[type] - plain, json, nested
<pathToFile> - path to json, yaml or ini configuration file

### Hexlet tests and linter status:
[![Actions Status](https://github.com/kuznevia/frontend-project-lvl2/workflows/hexlet-check/badge.svg)](https://github.com/kuznevia/frontend-project-lvl2/actions)

<a href="https://codeclimate.com/github/kuznevia/frontend-project-lvl2/maintainability"><img src="https://api.codeclimate.com/v1/badges/a429206536c5a6ce4764/maintainability" /></a>

<a href="https://codeclimate.com/github/kuznevia/frontend-project-lvl2/test_coverage"><img src="https://api.codeclimate.com/v1/badges/a429206536c5a6ce4764/test_coverage" /></a>

### Примеры 

https://asciinema.org/a/JxYhEmRR5IpxuzF84QnJJjJtk - flat json/yml
https://asciinema.org/a/6ujXPV6nAvU09vjLF3zj4vcgX - nested json/yml