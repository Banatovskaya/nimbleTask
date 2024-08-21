Для задеплоїного застосунку, щоб уникнути проблем з CORS можна використати https://cors-anywhere.herokuapp.com/corsdemo чи будь-які альтернативи.

Додаток повинен містити наступну функціональність:
Відображення списку контактів.
Для отримання контактів використовуйте метод
GET https://live.devnimble.com/api/v1/contacts https://www.nimble.com/developers/docs/#tag/Contacts/operation/list-contacts

Для відображення нещодавно доданих контактів, потрібно додати параметр до запиту.
sort: 'created:desc',

Картка контакту повинна відображати: avatar, first name, last name, email, contacts tags. Кнопка видалення контакту. 
Пагінація не потрібна, потрібно відобразити контакти з першої сторінки.

Cтворення нового контакту. 
Для створення контакту використовуйте метод
POST https://live.devnimble.com/api/v1/contact
https://www.nimble.com/developers/docs/#tag/Contacts/operation/post-contact

Секція з створенням нового контакту має бути стікі, не скролитися з списком контактів на десктоп вигляді.

Для простоти створюйте всі контакти з типом person, приватністю контакту видимою для всіх та без власника контакту.
record_type: 'person',
privacy: {
edit: null,
read: null,
},
owner_id: null,

	Одне з полів first name або last name має бути заповненим для створення контакту. 
	Поле email повинно мати валідацію.



Видалення контакту. 
Використовуйте метод DELETE https://live.devnimble.com/api/v1/contact/${contactId}
https://www.nimble.com/developers/docs/#tag/Contacts/operation/delete-contact

Cторінка контакту.
Клік на картку контакту повинен відкрити сторінку контакту, перейти на роут на зразок /contact/{id}

Для отримання даних контакту використовуйте метод 
GET https://live.devnimble.com/api/v1/contact/${id}
Сторінка контакту повинна відображати: avatar, first name, last name, email, contacts tags. 
Секцію з інпутом для додавання тегів до контакту.

Додавання тегів до контакту. 
Має бути можливість додати декілька тегів одночасно.
Використовуйте метод
PUT https://live.devnimble.com/api/v1/contact/${id}/tags
https://www.nimble.com/developers/docs/#tag/Contacts/operation/put-contact-tags

Для автентифікації використовуйте Authorization хедер і токен ("Authorization: Bearer YOUR_API_KEY") для запитів.
Token  VlP9cwH6cc7Kg2LsNPXpAvF6QNmgZn

У файлі package.json, додайте поле «проксі» для проксі API запитів до сервера під час розробки.
Запитит потрібно робити у вигляді https://cors-anywhere.herokuapp.com/https://live.devnimble.com/api/v1/contacts

Це допомагає уникнути проблем CORS (Cross-Origin Resource Sharing).
Для задеплоїного застосунку, щоб уникнути проблем з CORS можна використати https://cors-anywhere.herokuapp.com/corsdemo чи будь-які альтернативи.  

"proxy": "https://live.devnimble.com",
