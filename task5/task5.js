const btn = document.querySelector('.j_btn');
const input = document.querySelector('.input');
const p_input = document.querySelector('.p_input');
const heading = document.querySelector('.heading');
const content = document.querySelector('.content');
const info_user = document.querySelector('.info_user');

btn.addEventListener('click', () => {
    const inputId = input.value;
    fetch('https://jsonplaceholder.typicode.com/users/'+inputId+'/todos')
      .then((response) => {      
        const result = response.json();
        heading.innerHTML = 'Результат запроса:';
        if (response.ok) {
            return result;
        } else {
            throw new Error(response.status);
        }
      })
      .then((userTasks) => {
        userTasksCount = userTasks.length;
        content.innerHTML = '';
        info_user.innerHTML = '';
        if (userTasksCount<=0) {
            throw new Error('Пользователь с ID "'+ inputId +'" не найден!');
        } else {
            info_user.innerHTML = `Список задач для пользователя с ID "${inputId}"`;
            userTasks.forEach(element => {
                const newLi = document.createElement('li');
                if (element.completed){
                    newLi.classList.add("completed");
                }else {
                    newLi.classList.add("not_completed");
                }
                newLi.innerHTML = `${element.title}`;
                content.appendChild(newLi);
            });
            console.log(userTasks);
        }
      })
      .catch((error) => { 
        content.innerHTML = error;
       });
  });
  
  
  