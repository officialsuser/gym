// Navbar toggle (works for all pages)
document.querySelectorAll('.nav-toggle').forEach(btn=>{
  btn.addEventListener('click',()=>{
    const nav = document.querySelector('.main-nav');
    nav.classList.toggle('open');
  })
});

// Set current year in footers
const year = new Date().getFullYear();
for (let i=1;i<=6;i++){
  const el = document.getElementById("year"+(i===1? "": i));
  // some pages use id year, year2... handle gracefully
  if (el) el.textContent = year;
}
const genericYears = document.querySelectorAll('[id^="year"]');
genericYears.forEach(e => e.textContent = year);

// Contact form (front-end only) -> shows message and resets
const form = document.getElementById('contactForm');
if (form){
  form.addEventListener('submit', function(e){
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const msg = document.getElementById('message').value.trim();
    const formMsg = document.getElementById('formMsg');

    if (!name || !email || !msg){
      formMsg.textContent = "à¤•à¥ƒà¤ªà¤¯à¤¾ à¤¸à¤­à¥€ à¤«à¤¼à¥€à¤²à¥à¤¡ à¤­à¤°à¥‡à¤‚à¥¤";
      formMsg.style.color = "#ffb4b4";
      return;
    }
    // basic email check
    if (!/^\S+@\S+\.\S+$/.test(email)){
      formMsg.textContent = "à¤•à¥ƒà¤ªà¤¯à¤¾ à¤µà¥ˆà¤§ à¤ˆà¤®à¥‡à¤² à¤¡à¤¾à¤²à¥‡à¤‚à¥¤";
      formMsg.style.color = "#ffb4b4";
      return;
    }
    // Simulate submit (since no backend)
    formMsg.textContent = "à¤†à¤ªà¤•à¤¾ à¤¸à¤‚à¤¦à¥‡à¤¶ à¤­à¥‡à¤œ à¤¦à¤¿à¤¯à¤¾ à¤—à¤¯à¤¾ à¤¹à¥ˆ â€” à¤¹à¤® à¤œà¤²à¥à¤¦ à¤¹à¥€ à¤¸à¤‚à¤ªà¤°à¥à¤• à¤•à¤°à¥‡à¤‚à¤—à¥‡à¥¤";
    formMsg.style.color = "#a3ffa0";
    form.reset();
  })
}

// Lightbox for gallery
const lightboxImgs = document.querySelectorAll('.lightbox');
const modal = document.getElementById('lightboxModal');
const modalImg = document.getElementById('lightboxImg');
const closeLightbox = document.getElementById('closeLightbox');

if (lightboxImgs && modal && modalImg){
  lightboxImgs.forEach(img=>{
    img.addEventListener('click', ()=>{
      modalImg.src = img.src;
      modal.style.display = 'flex';
      modal.setAttribute('aria-hidden','false');
    })
  });
  closeLightbox.addEventListener('click', ()=>{
    modal.style.display = 'none';
    modal.setAttribute('aria-hidden','true');
  });
  modal.addEventListener('click', (e)=>{
    if (e.target === modal) { modal.style.display = 'none'; modal.setAttribute('aria-hidden','true'); }
  });
}
// Browser language detect karna
let userLang = navigator.language || navigator.userLanguage;

// Agar language Hindi se start hoti hai
if(userLang.startsWith('hi')){
   switchLang('hi');  // Hindi text show karo
} else {
   switchLang('en');  // Default English text show karo
}
// Wait until DOM is fully loaded
document.addEventListener("DOMContentLoaded", function() {

    // 1️⃣ Language data (Add all website content here)
    let langData = {
        "en": {
            "title": "Welcome to Our Gym",
            "desc": "Train hard, stay fit.",
            "extra": "Check our workout programs and membership plans.",
            "about": "Our gym has professional trainers and modern equipment.",
            "contact": "Contact us at: info@gym.com",
            "services": "We offer personal training, group classes, and nutrition guidance."
        },
        "hi": {
            "title": "हमारे जिम में आपका स्वागत है",
            "desc": "कड़ी मेहनत करें, फिट रहें।",
            "extra": "हमारे वर्कआउट प्रोग्राम और मेंबरशिप प्लान देखें।",
            "about": "हमारे जिम में पेशेवर प्रशिक्षक और आधुनिक उपकरण हैं।",
            "contact": "संपर्क करें: info@gym.com",
            "services": "हम पर्सनल ट्रेनिंग, ग्रुप क्लास और न्यूट्रिशन गाइडेंस प्रदान करते हैं।"
        }
    };

    // 2️⃣ Function to switch language
    function switchLang(lang){
        Object.keys(langData[lang]).forEach(function(key){
            let el = document.getElementById(key);
            if(el) el.innerText = langData[lang][key];
        });
        // Save selected language in localStorage for multi-page persistence
        localStorage.setItem('selectedLang', lang);
    }

    // 3️⃣ Load preferred language
    let storedLang = localStorage.getItem('selectedLang');
    let userLang = storedLang || navigator.language || navigator.userLanguage; 
    if(userLang.startsWith('hi')){
       switchLang('hi');
    } else {
       switchLang('en');
    }

    // 4️⃣ Manual toggle buttons
    let btnEn = document.getElementById('btn-en');
    let btnHi = document.getElementById('btn-hi');

    if(btnEn) btnEn.addEventListener('click', () => switchLang('en'));
    if(btnHi) btnHi.addEventListener('click', () => switchLang('hi'));

});
