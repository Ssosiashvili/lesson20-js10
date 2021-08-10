
document.querySelectorAll('a')[4].addEventListener('click', function(e) {
	console.log(this.getAttribute('href'));
	scrollToSection();
	e.preventDefault();
})


let sectionFourName = document.querySelectorAll('a')[4].getAttribute('href')

let sectionFouroffset = document.querySelector(`${sectionFourName}`).offsetTop;
let sectionOneScrollTop = document.querySelector(`${sectionFourName}`).scrollTop;

let html = document.querySelector('html');


function scrollToSection() {
	html.scrollTop += 5;

	if(html.scrollTop < sectionFouroffset) {
		setTimeout(scrollToSection, 2);
	}
}


// function scrollToSection() {

//  	html.scrollTop += 5;

//  	if(html.scrollTop < sectionOneoffset) {
//  		setTimeout(scrollToSection, 2);
//  	}
// }


// let html = document.querySelector('html');
// let sectionNames = document.querySelectorAll('a')
// let sectionsTomove = document.querySelectorAll('section')


// function listener () {
//     for (let i = 0; i < sectionNames.length; i ++) {
//         sectionNames[i].addEventListener ('click', function(e) {
// 		scrollToSection();
//         e.preventDefault();
//         });
//     }    
// };



// function scrollToSection (e) {
// 	html.scrollTop += 5;
// 	for (let i = 0; i < sectionsTomove.length; i++) {
// 		let sectionOneName = document.querySelectorAll('a')[i].getAttribute('href');
// 		let sectionOneoffset = document.querySelector(`${sectionOneName}`).offsetTop;
// 		if (html.scrollTop < sectionOneoffset) { 
// 			setTimeout(scrollToSection, 2);
// 			e.preventDefault();
// 		}
// 	}
// };
