const getRemainTime = deadline => {
    let now = new Date(),
    remainTime = (new Date(deadline) - now + 1000) / 1000,
    remainSeconds = ('0' + Math.floor(remainTime % 60)).slice(-2),
    remainMinutes = ('0' + Math.floor(remainTime / 60 % 60)).slice(-2),
    remainHours = ('0' + Math.floor(remainTime / 3600 % 24)).slice(-2),
    remainDays = ('0' + Math.floor(remainTime / (3600 * 24))).slice(-2);

    return{
        remainTime,
        remainSeconds,
        remainMinutes,
        remainHours,
        remainDays
    }
};

    // console.log(getRemainTime('Sep 20 2018 23:00:00 GMT-0500'));
    const countDown = (deadline) => {
    // const el = document.getElementById(elem);
    const dias = document.getElementById('days');
    const horas = document.getElementById('hours');
    const minutos = document.getElementById('minutes');
    
    const timerUpdate = setInterval( () => {
        let t = getRemainTime(deadline);
        // el.innerHTML = `${t.remainDays}d:${t.remainHours}h:${t.remainMinutes}m:${t.remainSeconds}s`;
        
        dias.innerHTML = `${t.remainDays}`;
        horas.innerHTML = `${t.remainHours}`;
        minutos.innerHTML = `${t.remainMinutes}`;
        
        if(t.remainTime <= 1){
            clearInterval(timerUpdate);
            // el.innerHTML = finalMessage; 
        }  
    }, 1000)
    };


    countDown('Feb 14 2019 00:00:00 GMT-0500');