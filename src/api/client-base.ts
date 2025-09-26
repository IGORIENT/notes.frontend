// Объявляю класс ClientBase - его можно импортировать в другие файлы.
export class ClientBase{ 

    // метод 
    protected transformOptions(options: RequestInit)
    {
        const token = localStorage.getItem('token');

        options.headers = 
        {
            ...options.headers, //все старые записи
            Authorization: 'Bearer ' + token,  //добавление или обновление записи Authorization
        };

        return Promise.resolve(options); //возвращает обновленный RequestInit
    }
}


// ИТОГО - метод, который берёт настройки запроса (RequestInit),
// дополняет их (заголовком Authorization) 
// и возвращает обновлённые настройки