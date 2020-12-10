

// function changeBackground(newImage) {
//     let background = document.getElementById('background');
//     background.style.color = newImage;
// }


// document.querySelector('button').addEventListener('click',
//     onclick,false)
    
//     function onclick () {
//         let background = document.getElementById('background');
//         background.style.color = newImage;
//         alert('clicked')

//     }, false)

// $('.button').click(function(){
//     $(this).toggleClass('clicked');
//   });

var audio = document.getElementById("my_audio");
audio.volume = 0.1

const mikeFace = ["mike_headshot.png", "kitties.jpg"];
const images = [ 
  '/images/mnt_zion.jpg', 
 "/images/Acadia.jpg",
 "/images/hang-in-there-kitty.jpg",
 "/images/sunset_beach.jpg",
 "/images/RegisAndRamses.png",
 "/images/Lex_background.png"
];
const messages = ['You are not a unique snowflake.',
 "the request is the grocery list, and the response object is the shopping cart.", 
 //inspiration quotes
 'Hang in There',
 'The sands of the beach must change with each new wind.',
 "Regis for President \n 2024",
 "can you please go to one of your cohort mates instead of me with your questions?",
 'You are amazing',
 'The most important races are won in the ocean of the soul.',
 
 'The village of a chief who won’t forget the past may as well forget about the future.',
 'Sometimes a little bit of nothing means a whole lot of something.'
];
let i = 0;
//let i = Math.floor(Math.random() * 10;
const body = document.getElementById('doc');
const face = document.getElementById('mike_face');
const button = document.getElementById("button");
const message = document.querySelector('h1');
button.addEventListener("click", (event)=>{
//    alert('clicked!');
// console.log(images[i], i)
   body.setAttribute("style", `background-image: url('${images[i]}')`);
   message.innerText = messages[i];
   face.setAttribute("img", `src: url('${mike_face[i]}')`);
   i++;
});

// body.setAttribute("style", "background-image: url('mnt_zion.jpg')");

// .setAttribute("style", "background-image: url(" + dir + images[randomCount] + ");background-repeat: no-repeat;background-size: 388px 388px");