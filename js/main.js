const countdown = document.querySelector('.countdown');

//launch date

const launchDate = new Date('June 1, 2023 13:00:00').getTime();

//update every second

const intvl =setInterval(function() {
//get todays date ms
    const now = new Date().getTime();

    //distance from now to launch date
    const distance = launchDate - now;

    console.log(distance);

    //time calculation
    const days = Math.floor(distance/(1000*60*60*24));
    const hours = Math.floor((distance % (1000*60*60*24))/(1000*60*60));
    const mins = Math.floor((distance % (1000*60*60))/(1000*60));
    const second = Math.floor((distance % (1000*60))/(1000));

    // display result
    countdown.innerHTML=`
        <div>${days}<span>Days</span></div>
        <div>${hours}<span>Hours</span></div>
        <div>${mins}<span>Minutes</span></div>
        <div>${second}<span>Seconds</span></div>
    `;

    //if launch date passed
    if(distance<0)
    {
        clearInterval(intvl);
        countdown.style.color = '#17a2b8';
        countdown.innerHTML='Launched!';
    }
}, 1000);