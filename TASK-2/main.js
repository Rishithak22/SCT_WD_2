window.onload = function() {
    let mintues = 0;
    let seconds = 0;
    let tens = 0;
    let appendMintues = document.querySelector('#minutes');
    let appendTens = document.querySelector('#tens');
    let appendSeconds = document.querySelector('#seconds');

    let startBtn = document.querySelector('#start');
    let stopBtn = document.querySelector('#stop');
    let resetBtn = document.querySelector('#reset');
    let Interval;

    const startTimer = () => {
        tens++
        if (tens <= 9){
            appendTens.innerHTML = '0' + tens
        }
        if (tens > 9){
            appendTens.innerHTML = tens
        }
        if (tens > 99){
            seconds++
            appendSeconds.innerHTML = '0' + seconds
            tens = 0
            appendTens.innerHTML = '0' +0;
        }
        if (seconds > 9){
            appendSeconds.innerHTML = seconds
        }
        if (seconds > 59){
            mintues++
            appendMintues.innerHTML = '0' + mintues;
            seconds =0;
            appendSeconds.innerHTML = '0' +0;
        }
    }; 
    startBtn.onclick = () => {
        clearInterval(Interval)
        Interval = setInterval(startTimer,10);
    }
    stopBtn.onclick = () => {
        clearInterval(Interval)  
    }
    resetBtn.onclick = () => {
        clearInterval(Interval)
        tens = '00'
        seconds = '00'
        mintues = '00'
        appendTens.innerHTML = tens;
        appendSeconds.innerHTML = seconds;
        appendMintues.innerHTML = mintues;
    };
};