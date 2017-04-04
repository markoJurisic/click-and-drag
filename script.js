const slider = document.querySelector('.items');
let isDown = false,
	startX,
	scrollLeft;

// get the initial positions and indicate that the scrolling has started
slider.addEventListener('mousedown', (e) => {
	isDown = true;
	slider.classList.add('active');
	// get the coords of the click. offsetLeft cancels margin
	startX = e.pageX - slider.offsetLeft;
	// get the initial scroll position
	scrollLeft = slider.scrollLeft;
});

// stop scrolling when the cursor leaves the slider div
slider.addEventListener('mouseleave', () => {
	isDown = false;
	slider.classList.remove('active');
});

slider.addEventListener('mouseup', () => {
	isDown = false;
	slider.classList.remove('active');
});

slider.addEventListener('mousemove', (e) => {
	// stop the fn from running
	if(!isDown) return; 
	// stop selecting text etc
	e.preventDefault(); 
	const x = e.pageX - slider.offsetLeft;
	// walk shows how far we have scrolled (negative value indicates scrolling left). greater the multiplier, faster the scrolling
	const walk = (x - startX) * 1;
	slider.scrollLeft = scrollLeft - walk;
});