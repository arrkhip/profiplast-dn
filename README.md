# RECORD

Клонируем:
```
$ git clone https://gitlab.corp.code-pilots.ru/layout/record.git
```

Ставим зависимости:
```
npm i
```

## Запуск

Для запуска проекта:
```
gulp
```

## Создаем новые БЭМ блоки

Находясь в корне проекта:
```
$ node newBlock.js blockName blockName2
```

Создаются папки по имени блоков с вложенными одноименными pug и less файлами
```
src/blocks/{blockName}/blockName.pug
src/blocks/{blockName}/blockName.less
```

В диспетчере подключений pug автоматически прописываются инклюды созданных БЭМ блоков
```
src/pug/connect/_blocks.pug
```

В диспетчере подключений sass автоматически прописываются импорты sass файлов созданных БЭМ блоков
```
src/scss/style.scss
```

### Важно!
При физическом удалении папки блока с диска, подключения этих блоков в style.less и _blocks.pug не удалаются. Удалить их вручную и перезапустить сборку.


Блок — как минимум, папка и одноимённый scss-файл.
```
Возможное содержимое блока:

demo-block/             	# Папка блока
	demo-block.img          # Изображениe, используемое в блоке 
	demo-block.scss         # Стилевой файл блока
	demo-block.js           # js-файл блока
	demo-block.pug          # Разметка блока 
	readme.md               # Пояснение
