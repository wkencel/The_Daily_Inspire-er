

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

let audio = document.getElementById("my_audio");
audio.volume = 0.04

const mikeFace = [
"./mike_headshot.png", 
"../mikePhotos/mike_king.jpg", 
'../mikePhotos/mike_black_background.jpeg', 
'../mikePhotos/mike_suit_2.png', 
'../mikePhotos/mike_suit_1.png', 
'../mikePhotos/Lex_side.png', 
'../mikePhotos/mike_black_background.jpeg', 
'../mikePhotos/mike_in_action.png', 
'../mikePhotos/Cole_baby.jpg',
'../mikePhotos/Coleface.jpg',
'../mikePhotos/Court_face.jpg',
'../mikePhotos/Navi_face.png'
];
const images = [ 
'/images/mnt_zion.jpg',
 "/images/Acadia.jpg",
 "/images/hang-in-there-kitty.jpg",
 "/images/sunset_beach.jpg",
 "/images/RegisAndRamses.png",
 "/images/Lex_background.png",
 '/images/mnt_zion.jpg',
 '/images/nonsense_chart1.jpg',
 '/images/Cole_dog.JPG',
 '/images/Cole_kayak.JPG',
 '/images/Court_background1.jpg',
 '/images/amoung_us.jpg'
];
const messages = [
'You are not a unique and beautiful snowflake',
'The village of a chief who won’t forget the past may as well forget about the future',
'Hang in There',
'The sands of the beach must change with each new wind',
"Regis for President \n 2024",
"Have you tried turning it on and off again?",
'The most important races are won in the ocean of the soul',
"the request is the grocery list, and the response object is the shopping cart",
'Be patient with yourself. Self-growth is tender; There’s no greater investment.',
'When faced with challenging philosophical circumstances, \n don\'t be afraid to take a recursive approach',
'“fear is the mind killer” \n -Bene Gesserit \n -Litany of Fear',
'"I\'m not the imposter" \n *asks someone else what task they were doing and blames them*'
];
console.log('test')
let i = 0;

const body = document.getElementById('doc');
const face = document.getElementById('mike_face');
const button = document.getElementById("button");
const message = document.querySelector('h1');
button.addEventListener("click", (event)=>{
//    alert('clicked!');
// console.log(images[i], i)
   body.setAttribute("style", `background-image: url('${images[i]}')`);
   message.innerText = messages[i];
   // console.log('mikes face?',`${mikeFace[1]}`)
   face.setAttribute("src", `${mikeFace[i]}`);
   i = Math.floor(Math.random() * messages.length);
});

// body.setAttribute("style", "background-image: url('mnt_zion.jpg')");

// .setAttribute("style", "background-image: url(" + dir + images[randomCount] + ");background-repeat: no-repeat;background-size: 388px 388px");