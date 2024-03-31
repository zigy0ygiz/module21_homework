function usePromise() {
    const myPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
            const randomNumber = Math.ceil(Math.random()*100);
            if (randomNumber % 2 === 0){
                resolve ('Завершено успешно. Сгенерированное число — ' + randomNumber);
            } else {
                reject ('Завершено с ошибкой. Сгенерированное число — ' + randomNumber);
            }
        }, 3000);
    })

    myPromise
      .then ((result) => {
        console.log('Обрабатываем resolve', result);
      })
      .catch ((error) => {
        console.log('Обрабатываем reject', error);
      });
}

usePromise();