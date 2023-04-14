// const menuEl = document.querySelector(".menu-text");
// menuEl.addEventListener('click',function(){
//   alert("salam");
// })
const openHeader = document.querySelector(".open-header");
const solHeader = document.querySelector(".sol-header");
const sagHeader = document.querySelector(".sag-header");
const menuYazisi = document.querySelector(".menu-yazisi");
$('div.logos .menu-text').on('click', function (e) {
    e.preventDefault();

    openHeader.classList.toggle("active")
    solHeader.classList.toggle("active")
    sagHeader.classList.toggle("active")
    menuYazisi.classList.toggle("aktivlessin")

    if (openHeader.className == "open-header active") {
        menuYazisi.classList.add("aktivlessin")
    }
   
})


const header = document.querySelector(".hdre")

window.onscroll = function () {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    header.classList.add("yap")
  }
  else {
    header.className = "hdre"
  }
}



const navLink = document.querySelectorAll(".nav-link")
navLink.forEach(link => {
    link.addEventListener('click', function () {
        navLink.forEach(link => link.classList.remove("active"));
        this.classList.add("active")
    })
})


// ! for(let i = 0; i < navLink.length; i++){
//     navLink[i].addEventListener('click',function(e){
//         e.preventDefault();
//        for(let i = 0; i < navLink.length; i++){
//          navLink[i].className = navLink[i].className.replace("nav-link active","nav-link")      
//        }
//        this.classList.add('active')
//     });
// }

// ! $(".nav-link").click(function (){
//     $(".nav-link").removeClass("active")
//     $(this).addClass("active")
// })


// ? function openCities(e){
//     const azerbaijan = document.querySelector(".azerbaijan")
//     const turkiye = document.querySelector(".turkey")
//    const clickPlace = e.target;
//    if(clickPlace == azerbaijan){
//     alert("salam")
//    }
//    else if(clickPlace == turkiye){
//     alert("turkiye")
//    }
//    else{
//     alert("hello")
//    }
// }

const azerbaijan = document.querySelector(".azerbaijan")
const turkiye = document.querySelector(".turkey")
const risk = document.getElementById("risk-change")
const destinationText = document.getElementById("destination-text")
const saray = document.querySelector(".saray")
const kpdk = document.querySelector(".kpdk")



function openAz() {
    azerbaijan.classList.add("active")
    turkiye.classList.remove("active")
    risk.innerHTML = `Trace the history of mankind preserved in centuries-old petroglyphs, get dirty at the
    world-famous mud volcanoes in Gobustan and travel to the age of Zoroastrianism at Ateshgah Fire
    Temple. Escape the city buzz in the mountainous villages of Lahij and Khinalug, and follow the
    Silk Road to Sheki, a beautiful city reflecting the true character of local people. From
    contemporary art centers to the world's only petroleum spa, with unique traditions of carpet
    weaving, seasonal dishes, hospitable people and a rich cultural heritage woven into the mix,
    Azerbaijan tourism has all the ingredients necessary to transform your trip into the vacation of
    a lifetime`
    destinationText.innerHTML = `Every morning you have two choices: continue to sleep with your dreams or wake up and chase them.
    Exploring Azerbaijan, the Land of Fire, will set your soul on fire. Incredible discoveries and
    lifelong memories await you in this country of hypnotic nature, lively culture and unusual
    natural and manmade attractions. No matter which way you turn, your urge for adventure can be
    satiated in this dazzling country. Start your vacation in capital city Baku, the City of Winds
    guarded by the iconic Flame Towers. Stroll along the Caspian Sea coastline, a meeting point of
    various cultures and industries, allowing its capricious gusts of wind to carry you to your next
    experience`
    saray.classList.add("aktiv")
    kpdk.classList.remove("aktiv")
}


function openTr() {
    azerbaijan.classList.remove("active")
    turkiye.classList.add("active")
    risk.innerHTML = `Two of the Seven Wonders of the Ancient World 
     were located in Turkey: the Temple of Artemis at Ephesus 
     and the Mausoleum at Halicarnassus in Bodrum. 
     The oldest known human settlement in the world (dating to 6500 B.C.) is located in Catalhöyük. 
     The world’s first landscape painting was found on the wall of a Catalhöyük house, illustrating the volcanic
      eruption of nearby Hasandag. Turkey has 13 UNESCO World Heritage Sites. 
      Cultural attractions include the sites of Ephesus, Troy, Pergamon, 
      House of the Virgin Mary, Pamukkale, Hierapolis, Trabzon, and the
       ruined cities and landscapes of Cappadocia. Istanbul, Turkey's largest city, 
       is one of the most famous cities in the world. There are many attractions, 
       hotels, cafes in the city. Istanbul attracts both vacationers and visiting professionals. 
       There are many major attractions derived from its historical status as capital of the Byzantine 
       and Ottoman Empires. These include the Sultan Ahmed Mosque (the “Blue Mosque”), 
       the Hagia Sophia, the Topkapı Palace, the Basilica Cistern and e.t.c`
    destinationText.innerHTML = `What attracts people in Turkey?
        What attracts people to Turkey? It is a warm Mediterranean climate,
         warm sea, large number of historical attractions,
          good service and low prices. All fans of travel like these features
           and it attracts a large number of tourists to Turkey.
            Most tourists prefer to spend holidays in comfortable hotels.
             Five-star and four-star hotels often offer accommodation on the system "All inclusive."
              They are the most attractive for those who want to escape from everyday worries during the holidays. 
              There are also cheap hotels and campsites for people who are not seeking extra comfort.
               Most beach resorts are located along the southwestern and southern coast, 
               called the “Turkish Riviera”. The area of the Mediterranean coast near the city of Antalya
                is considered the most popular in Turkey. There are located such resort cities as Kemer and Side.
                 Antalya is often called as the tourism capital of Turkey. Bodrum, Fethiye, Marmaris, Kuşadası, Çeşme,
                  Didim and Alanya are also among major resort towns. 
                  Turkey is very interesting country for history lovers. Anatolia, the Asian portion of Turkey,
                   is the birthplace of many history and legends figures, such as the poet Homer, 
       King Midas, Herodotus (philosopher) and Saint Paul.`
    saray.classList.remove("aktiv")
    kpdk.classList.add("aktiv")
}


const gotoUp = document.getElementById("goto-up")

window.onscroll = function () {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        gotoUp.style.display = "block"
    }
    else {
        gotoUp.style.display = "none"
    }
}

gotoUp.addEventListener('click', function () {
    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0
})

const contactLink = document.getElementById("contactLink");
contactLink.addEventListener('click',function(e){
    e.preventDefault();
    window.location.href = "home.html#contactus"

})

const gotoAbout = document.getElementById("gotoAbout")
$(gotoAbout).on('click',function(e){
    e.preventDefault();
    window.location.href = "home.html#aboutUs"
})

$(".top-side-right-footer #gotoContact").click(function(e){
    e.preventDefault();
    window.location.href = "home.html#contactus"
})