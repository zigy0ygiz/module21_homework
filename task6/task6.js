const inputPageNumber = document.querySelector('.inputPageNumber');
const inputLimit = document.querySelector('.inputLimit');
const btn = document.querySelector('.btn');
const content = document.querySelector('.content');

//Загрузка страницы, проверка сохранены ли в localStorage данные последнего успешного запроса
window.onload = function() { 
    let savePageNumber = localStorage.getItem('savePageNumber');
    let saveLimit = localStorage.getItem('saveLimit');
    if (savePageNumber&&saveLimit) {
        //если да, выполняем запрос с этими данными и загружаем на страницу
        scrapOfData (savePageNumber,saveLimit);
    }
};

//Функция запроса изображений и загрузка их на страницу
function scrapOfData (pageNumber, limit) {
    fetch('https://picsum.photos/v2/list?page='+pageNumber+'&limit='+limit)
            .then((response) => {
                const result = response.json();
                if (response.ok) {
                    return result;
                    } else {
                        throw new Error(response.status);
                    }
            })
            .then((pictures) => {
                pictures.forEach(element => {
                    const newImg = document.createElement('img');
                    newImg.src = element.download_url;
                    newImg.alt = 'Здесь должно быть изображение';
                    newImg.classList.add("downloadImg");
                    content.append(newImg);
                });
                //сохраняем параметры успешного запроса
                localStorage.setItem('savePageNumber', pageNumber);
                localStorage.setItem('saveLimit', limit);

            })
            .catch((error) => { 
                content.innerHTML = error;
            });
}

btn.addEventListener ('click', () => {
    const pageNumber = inputPageNumber.value;
    const limit = inputLimit.value;
    content.innerHTML ='';

    const myPromise = new Promise((resolve, reject) => {
        //условия для ввода данных через input
        const conditionPageNumber = !isNaN(pageNumber)&&(pageNumber >= 1)&&(pageNumber <=10);
        const conditionlimit = !isNaN(limit)&&(limit >= 1)&&(limit <=10);

        if (conditionPageNumber && conditionlimit) {
            resolve({
                pageNumber: pageNumber,
                limit: limit,
            });
        } else {
            reject({
                conditionPageNumber: conditionPageNumber,
                conditionlimit: conditionlimit,
            }); 
        }
    })

    myPromise

      .then((result) => {
        //при соответствии введеных параметров условиям
        scrapOfData (result.pageNumber, result.limit);
      })

      .catch ((error) => {
        //при ошибке введенных данных
        let message = '';

        if (!error.conditionPageNumber&&!error.conditionlimit) {
            message = 'Номер страницы и лимит вне диапазона от 1 до 10'; 
        } else {
            if (!error.conditionPageNumber){
                message = 'Номер страницы вне диапазона от 1 до 10';
            } else {
                message = 'Лимит вне диапазона от 1 до 10'; 
            }
        }
        content.innerHTML = message;
      })

})