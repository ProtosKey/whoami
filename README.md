# whoami

Мой сайт-портфолио, стилизованный в виде терминала.

## Технологический стек

- **React 19** - сам интерфейс.
- **React Router 7** - навигация.
- **CSS Modules** - стили, у каждого компонента свой файл, классы не текут между компонентами.
- **js-yaml** - парсит `whoami.yaml`/`skills.yaml` прямо в браузере.
- **nginx** - раздаёт собранный сайт на VPS.
- **Let's Encrypt / certbot** - HTTPS, сертификат продлевается сам по `cron`.

## Конфигурация

Контент не зашит в код, грузится в рантайме, поэтому поменять что-то можно без пересборки сайта:

- `whoami.yaml` - обо мне. Поле = `{ type: plain или link, text, link? }`.
  Компонент не знает имён полей заранее, просто рисует всё, что найдёт в файле.
- `skills.yaml` - навыки, просто `категория: [список]`.
- `project.json` - список проектов. Его я не пишу руками: периодически крутится [bio-script](https://github.com/ProtosKey/bio_script), обходит репозитории и собирает `project.json`.
- Хочешь, чтобы репо попал на сайт, тогда просто кладёшь в него `project.yaml`, больше ничего трогать не надо.

Меню сверху (например, `mobile`, `systems`) тоже не захардкожено - берётся из того, какие категории реально есть в `project.json`. Появилась
новая категория — появился пункт меню, сам.

Формат `project.yaml` описан в README у [bio-script](https://github.com/ProtosKey/bio_script).

## Запуск локально

Файлы `.example` - это шаблоны конфигурационных файлов.

```bash
npm install

cp public/whoami.yaml.example public/whoami.yaml
cp public/skills.yaml.example public/skills.yaml
cp public/project.json.example public/project.json

npm start
```
