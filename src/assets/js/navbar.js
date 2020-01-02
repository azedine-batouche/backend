
	// $(window).load(function(){
	// function fixDiv() {
	//   var cache = document.getElementsByClassName('containerNavbar'); 
	//   if ((window).scrollTop() > 100) 
	// 	cache.css({'position': 'fixed', 'top': '10px'}); 
	//   else
	// 	cache.css({'position': 'relative', 'top': 'auto'});
	// }

	// });

	
	// const items = document.querySelectorAll(".accordion a");

	// function toggleAccordion(){
	//   this.classList.toggle('active');
	//   this.nextElementSibling.classList.toggle('active');
	// }
	
	// items.forEach(item => item.addEventListener('click', toggleAccordion));

	// function myTest(){
	// 	alert('Welcome to js');
	// }

	$(window).on('scroll',
   {
      previousTop: 0
   }, 
   function () {
      var currentTop = $(window).scrollTop();
      //check if user is scrolling up
      if (currentTop < this.previousTop ) {
         //if scrolling up...
         //add class 'is-visible' to the main navigation
         //if currentTop == 0, remove 'is-fixed' and 'is-visible' classes 
      } else {
         //if scrolling down...
         //add the 'is-fixed' class to the main navigation as soon as it is no longer visible
         //add class 'is-visible' to the main navigation
      }
      //set previousTop for the next iteration
      this.previousTop = currentTop;
   }
);