function menuCountdown() {
    const availableDate = new Date("August 1, 2022 12:00");
    const now = new Date();
    const diff = availableDate - now;

    const msInSecond = 1000;
    const msInMinute = 60 * 1000;
    const msInHour = 60 * 60 * 1000;
    const msInDay = 24 * 60 * 60 * 1000;

    const displayDay = Math.floor(diff/msInDay);
    document.querySelector('.days').textContent = displayDay;

    const displayHour = Math.floor((diff%msInDay)/msInHour);
    document.querySelector('.hours').textContent = displayHour;

    const displayMinute = Math.floor((diff%msInHour)/msInMinute);
    document.querySelector('.minutes').textContent = displayMinute;

    const displaySecond = Math.floor((diff%msInMinute)/msInSecond);
    document.querySelector('.seconds').textContent = displaySecond;

    if (displayDay === 1) {
        document.querySelector(".dd").textContent = "DAY";
    }
    else {
        document.querySelector(".dd").textContent = "DAYS";
    }

    if (displayHour === 1) {
        document.querySelector(".hh").textContent = "HOUR";
    }
    else {
        document.querySelector(".hh").textContent = "HOURS";
    }

    if (displayMinute === 1) {
        document.querySelector(".mm").textContent = "MINUTE";
    }
    else {
        document.querySelector(".mm").textContent = "MINUTES";
    }

    if (displaySecond === 1) {
        document.querySelector(".ss").textContent = "SECOND";
    }
    else {
        document.querySelector(".ss").textContent = "SECONDS";
    }

    if(diff<= 0) {
        document.querySelector('.days').textContent = 0;
        document.querySelector('.hours').textContent = 0;
        document.querySelector('.minutes').textContent = 0;
        document.querySelector('.seconds').textContent = 0;
        clearInterval(timerID);
        availableNow();
    }
}
let timerID = setInterval(menuCountdown, 1000);

function availableNow() {
    const heading = document.querySelector('h1');
    heading.textContent = "Our New Menu is available now!"
    const hide = document.querySelector('.countdown');
    hide.classList.add('hide');
}

const items = document.querySelectorAll('.item');

items.forEach(item => {
    item.addEventListener('mouseover', () => {
        removeFocus();
        item.classList.add('selected')
    })
    removeFocus = () => {
        items.forEach(item => {
            item.classList.remove('selected')
        })
    }
})