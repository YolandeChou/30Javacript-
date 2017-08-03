$(function(){
	const play=document.querySelector('.player');
	const video=document.querySelector('.viewer');
	const progress=document.querySelector('.progress');
	const progressBar=document.querySelector('.progress__filled');
	const toggle=document.querySelector('.toggle');
	const ranges=document.querySelectorAll('.player__slider');
	const skips=document.querySelectorAll('[data-skip]');

	function togglePlay(){
       const method=video.paused?'play':'pause';
       video[method]();
	}
	function skipV(){
       video.currentTime+=parseFloat(this.dataset.skip);
	}
	function scrub(e){
       const time=(e.offsetX/progress.offsetWidth)*video.duration;
       video.currentTime=time;
	}
	function updateButton(){
      const icon=video.paused?'►' : '❚ ❚';
      console.log(icon);
      toggle.textContent=icon;
	}
	function rangeUpdate(){
      video[this.name]=this.value;
	}
	function handleProcess(){
       const percent=(video.currentTime/video.duration)*100;
       progressBar.style.flexBasis=`${percent}%`;
	}


    
    video.addEventListener('click',togglePlay);
    video.addEventListener('play',updateButton);
    video.addEventListener('pause',updateButton);
    video.addEventListener('timeupdate',handleProcess);

    skips.forEach(skip=>skip.addEventListener('click',skipV));

    progress.addEventListener('click',scrub);
    ranges.forEach(range=>range.addEventListener('click',rangeUpdate));
    ranges.forEach(range=>range.addEventListener('mousemove',rangeUpdate));

})
