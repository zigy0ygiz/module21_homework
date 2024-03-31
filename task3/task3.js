let entrance = localStorage.getItem('entrance');

if (entrance) {
    let name = localStorage.getItem('name');
    let dataEntrance = localStorage.getItem('dataEntrance');
    alert ('Добрый день, '+ name +'. Давно не виделись. В последний раз вы были у нас ' + dataEntrance + '.');
    dataEntrance = new Date;
    localStorage.setItem('dataEntrance', dataEntrance);
} else {
    let name = prompt('Добро пожаловать! Назовите, пожалуйста, ваше имя', 'Имя');
    localStorage.setItem('name', name);
    localStorage.setItem('entrance', true);
    let dataEntrance = new Date;
    localStorage.setItem('dataEntrance', dataEntrance);
}