const cards=[
    {
        card:1,
        title: 'Fibra y móvil con un',
        descripion:"dispositivo GRATIS y lo último de Vodafone",
        img:'images/Image-HB-1-1.jpg'
    },

    {
        card:2,
        title: 'yu Fibra 300MB',
        descripion:"por 27€/mes. sin permanencia",
        img:'images/Desktop-Image-HB-2.jpg'
    },

    {
        card:3,
        title: 'Datos y minutos ilimitados',
        descripion:"por 24€/mes. sin permanencia",
        img:'images/Image-HB-3-1.jpg'
    },

    {
        card:4,
        title: 'Llévate un dispositivo',
        descripion:"GRATIS con tu tarifa de Fibra y movil",
        img:'images/desktop-hb-558-BTS-DisposGRATIS.jpg'
    },
    {
        card:5,
        title: 'Nuevo Iphone 15 pro',
        descripion:"Resérvalo ya",
        img:'images/Desktop-Image-HB-5.jpg'
    },
];

let title= document.querySelector('.title');
let descripion= document.querySelector('.descripion');
let img= document.querySelector('.img');
let cardito1=document.querySelector(".cardito1");
let cardito2=document.querySelector(".cardito2");
let cardito3=document.querySelector(".cardito3");
let cardito4=document.querySelector(".cardito4");
let cardito5=document.querySelector(".cardito5");
let customDivBorder= document.querySelectorAll('.custom-div-border');

let next=document.querySelector(".next");
let prev= document.querySelector(".prev");
let counter=1;

next.addEventListener('click',function(){
    if(counter > cards.length-1){
        counter=0
    }
    showReview();

})
prev.addEventListener('click',function(){
    counter--;
    if(counter < 0){
        counter=cards.length-1;
    }
    showReview2();

})
function showReview(){

    title.textContent=cards[counter].title;
    descripion.textContent=cards[counter].descripion;
    img.src=cards[counter].img;
    counter++;
}
function showReview2(){

        title.textContent=cards[counter].title;
        descripion.textContent=cards[counter].descripion;
        img.src=cards[counter].img;
}

cardito1.addEventListener('click',function(){
    title.textContent=cards[0].title;
    descripion.textContent=cards[0].descripion;
    img.src=cards[0].img;

})
cardito2.addEventListener('click',function(){
    title.textContent=cards[1].title;
    descripion.textContent=cards[1].descripion;
    img.src=cards[1].img;

})
cardito3.addEventListener('click',function(){
    title.textContent=cards[2].title;
    descripion.textContent=cards[2].descripion;
    img.src=cards[2].img;

})
cardito4.addEventListener('click',function(){
    title.textContent=cards[3].title;
    descripion.textContent=cards[3].descripion;
    img.src=cards[3].img;

})
cardito5.addEventListener('click',function(){
    title.textContent=cards[4].title;
    descripion.textContent=cards[4].descripion;
    img.src=cards[4].img;

})
const cards2=[
    {
        id:"card1",
        title: "Para ti, Vodafone Flex",
        text:"Consigue tus móviles y dispositivos en Vodafone a un precio especial. Podrás pagar a plazos sin intereses, ahorrar beneficiándote de re-estrena, contratar tu seguro móvil o el servicio multisim de one number y todo con la tranquilidad de nuestro servicio postventa.",
        hyperlink: "Más info",
        img:"Images/seguro movil.jpeg"
    },
    {
        id:"card2",
        title: "Datos sin límites con velocidad 5G",
        text:"No hace falta que busques WiFi ni mires el calendario, con tu móvil podrás conectarte desde el primer hasta el último día del mes a la misma velocidad en red 5G con gigas ilimitados. Consume vídeo, música y cualquier contenido sin preocuparte si te quedarás sin datos.",
        hyperlink: "Ver Tarifas",
        img:"Images/tecnologia-5g-ilimitada.jpeg"

    },
    {
        id:"card3",
        title: "Toda la TV está en Vodafone",
        text:"Con Vodafone TV disfrutarás del mejor cine y series donde y como quieras, o bien con nuestro deco 4K o en todos tus dispositivos con la app de Vodafone TV online.Las mejores películas y series de HBO Max, Disney+, Amazon Prime Video, Filmin, Netflix y muchas más disponibles en el menú.",
        hyperlink:"Más info",
        img:"Images/el-mejor-cine.jpeg"
    }
]
container5Tiltle= document.querySelector(".container5-title");
container5Text= document.querySelector(".container5-text");
container5Span= document.querySelector(".container5-span");
container5Image= document.querySelector(".container5-image");
x=document.querySelectorAll(".container5-ul li");
y=document.querySelectorAll(".lo-mas-buscado button")

for (let k=0; k < x.length; k++){
    x[k].addEventListener("click",function(){
        container5Tiltle.textContent=cards2[k].title;
        container5Text.textContent=cards2[k].text;
        container5Span.textContent=cards2[k].hyperlink;
        container5Image.src=cards2[k].img;
    })
}
x.forEach(function(ele){
    ele.onclick=function(){
        x.forEach(function(ele){
            ele.classList.remove('li-underline')
        })
        this.classList.add("li-underline")
    };
});


y.forEach(function(ele){
    ele.onclick=function(){
        y.forEach(function(ele){
            ele.classList.remove("lo-mas-buscado-js")
        })
    ele.classList.add("lo-mas-buscado-js")
        // this.classList.add("li-underline")
    };
});

