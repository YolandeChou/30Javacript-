let countdown;
const timeLeft = document.querySelector('.display__time-left');
const endTime = document.querySelector('.display__end-time');
const buttons =document.querySelectorAll('[data-time]');
function timer(seconds){
	clearInterval(countdown);
	const now = Date.now();
	const then = now + seconds*1000;
	displayTimeLeft(seconds);
	displayEndTime(then);
	countdown = setInterval(()=>{
       const secondLeft = Math.round((then - Date.now())/1000);
       if(secondLeft<0){
       	clearInterval(countdown);
       	return;
       }
       displayTimeLeft(secondLeft);
	},1000);
}
function displayTimeLeft(seconds){
	const minutes = Math.floor(seconds/60);
	const secondsLeft = seconds%60;
    const display = `${minutes}:${secondsLeft<10?0:''}${secondsLeft}`;
    timeLeft.textContent = display;

}
function displayEndTime(time){
    const endtime = new Date(time);
    const hour = endtime.getHours();
    const minute = endtime.getMinutes();
    const majustHour = hour  <12 ? hour : hour-12;
    endTime.textContent = `${majustHour}:${minute<10?0:''}${minute}`; 
}
function startTimer(){
	const seconds = parseInt(this.dataset.time);
	timer(seconds);
}
buttons.forEach(button => button.addEventListener('click',startTimer));
document.customForm.addEventListener('submit',function(e){
	e.preventDefault();
	const mins = this.minutes.value;
	const time = mins*60;
	timer(time);
	this.reset();
})
