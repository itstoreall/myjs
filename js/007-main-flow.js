/**
 * 
 * - Main
 * 
 * JavaScript
 * ECMAScript
 * DOM
 * BOM
 * Window
 * document
 * html
 * head
 * meta
 * title
 * link
 * body
 * div
 * img
 * h1
 * p
 * div
 * script
 * root node (узел корневым)
 * ancestor (предок)
 * descendant (потомок)
 * parent (родитель)
 * child (ребенок)
 * sibling (сосед)
 * 
 * - Навигации между узлами
 * 
 * elem.parentNode (выберет родителя elem)
 * elem.childNodes (все дочерние элементы (псевдо-массив))
 * elem.children (только дочерние узлы-элементы (псевдо-массив))
 * elem.firstChild (первый дочерний элемент)
 * elem.firstElementChild (первый дочерний узел-элемент)
 * elem.lastChild (последний дочерний элемент)
 * elem.lastElementChild (последний дочерний узел-элемент)
 * elem.previousSibling (элемент "слева" от elem)
 * elem.previousElementSibling (узел-элемент "слева" от elem)
 * elem.nextSibling (элемент "справа" от elem)
 * elem.nextElementSibling (узел-элемент "справа" от elem)
 * elem.querySelector(selector) (возвращает первый найденный элемент)
 * elem.querySelectorAll(selector) (возвращает псевдомассив всех элементов)
 * hidden (видимость элемента)
 * value (текстовый контент (input, select, textarea))
 * checked (состояние чекбокса или радиокнопки)
 * name (значение HTML-атрибута name)
 * src (путь к изображению тега img)
 * elem.textContent (текстовый контент)
 * button.style (объект инлайн стилей)
 * elem.classList.contains(cls) (есть ли у элемента класс cls (true / false))
 * elem.classList.add(cls) (добавляет класс cls)
 * elem.classList.remove(cls) (удаляет класс cls)
 * elem.classList.replace(oldClass, newClass) (заменяет существующий на указанный)
 * elem.classList.toggle(cls) (добавляет, если есть, удаляет)
 * elem.classList.forEach() (переберает классы (псевдо-массив))
 * elem.hasAttribute(name) (проверяет наличие аттрибута (true / false))
 * elem.getAttribute(name) (возвращает значение атрибута)
 * elem.setAttribute(name, value) (устанавливает атрибут)
 * elem.removeAttribute(name) (удаляет атрибут)
 * elem.attributes (возвращает коллекцию всех атрибутов)
 * data-атрибуты (произвольно созданные атрибут)
 * dataset (получение значения data-атрибута)
 * action (свойство data-action (ключ объекта))
 * document.createElement(tagName) (создает DOM-узел (возвращает ссылку на элемент))
 * parentElem.appendChild(elem) (+ в конец дочерних элементов)
 * parentElem.insertBefore(elem, nextSibling) (parentElem перед nextSibling)
 * elem.append(nodes) (добавляет nodes в конец elem)
 * elem.prepend(nodes) (добавляет nodes в начало elem)
 * elem.after(nodes) добавляет nodes после узла elem
 * elem.before(nodes)(добавляет nodes перед узлом elem)
 * elem.replaceWith(nodes) (добавляет nodes вместо elem)
 * parent.removeChild(elem) (удаляет ребенка из родителя)
 * elem.remove() (вызывается на удаляемом элементе)
 * elem.cloneNode(true) (копия элемента (false - без дочерних элементов))
 * elem.innerHTML (получить содержимое элемента, и теги (строка), вешает в DOM)
 * element.insertAdjacentHTML(position, string) (добавляет узлы в указанное место DOM)
 * elem.insertAdjacentElement(position, elem) (вставляет в произвольное место элемент elem)
 * elem.insertAdjacentText(position, elem) (создаёт текстовый узел и вставляет в elem)
 * Repaint (изменения в стилях: opacity, background-color, visibility и outline...)
 * Reflow (изменения в структуре и положении. Влияет на детей и предков)
 * click (кликнули на элемент левой кнопкой мыши)
 * submit (посетитель отправил форму)
 * mousedown
 * mouseup
 * element.addEventListener(event, handler[, phase]) (метод добавляет слушателя события на элемент.)
 * event (имя события (строка, например "click"))
 * handler (обработчик (ссылка на функцию))
 * phase (необязательный аргумент, фаза, на которой обработчик должен сработать)
 * element.removeEventListener(event, handler[, phase]) (удаляет слушателя)
 * event.type (тип события)
 * event.target (элемент, на котором произошло событие)
 * event.currentTarget (элемент, на котором сработал обработчик)
 * event.preventDefault() (отмена действия браузера по умолчанию)
 * submit (применяют для валидации формы)
 * value.trim (метод удаляет пробельные символы с начала и конца строки)
 * KeyboardEvent.key (свойство доступно для чтения и возвращает значение клавиши)
 * KeyboardEvent.code (свойство возвращает значение (физическая клавиша на клавиатуре))
 * keydown (посетитель нажимает клавишу)
 * keyup (посетитель отпускает клавишу)
 * keypress (нажата символьная клавиша (приводит к появлению символа))
 * document.activeElement (возвращает текущий сфокусированный элемент)
 * elem.focus() (фокусировка на элементе)
 * elem.blur() (прекращение фокусировки)
 * change (событие по окончании изменения элемента формы (и сразу при выборе checkbox...))
 * input (главное событие для работы с текст. элементом формы (сразу, не ждет потери фокуса))
 * DOMContentLoaded (браузер полностью загрузил HTML и построил DOM-дерево)
 * load (браузер загрузил все ресурсы)
 * beforeunload (уход со страницы (срабатывает на window, спросить подтверждение о закрытии))
 * unload (тоже уход со страницы (срабатывает на window, для закрытия popup-окна))
 * DOMContentLoaded (событие на document когда ещё не догрузились картинки или стили)
 * load (событие срабатывает на window, когда загружается вся страница)
 * Flash of Unstyled Content (браузер показал страницу без CSS, а через мгновение стилизованную)
 * defer (выполнение скриптов после завершения парсинга, но перед событием DOMContentLoaded)
 * async (выполнение скриптов после завершения загрузки и перед событием загрузки окна)
 * 
 * =================================================================
 * 
 * <script src="path-to-script.js" defer></script>
 * <script src="path-to-script.js" async></script>
 * 
 * =================================================================
 * 
 * Рендеринг WEB-страницы - https://habr.com/en/post/224187/
 * Events - https://developer.mozilla.org/ru/docs/Web/Events
 * Event - https://devdocs.io/dom/event
 * Обработчики - https://developer.mozilla.org/ru/docs/Web/Guide/Events/Overview_of_Events_and_Handlers
 * 
 */