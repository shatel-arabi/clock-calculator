function clock() {
    const time = new Date();
    console.log(time)
    
    let hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    let amPm = 'AM';

    if(hours >12){
        amPm ='PM'
    }
  if(hours > 12 ){
   hours =hours-12;
  }
  if (hours == 0 ){
    hours = 12
  }
    document.getElementById('show-clock').innerText = hours + ':' + minutes + ':' + seconds + " "+ amPm;
}
setInterval(clock,1000);
