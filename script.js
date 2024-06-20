function toogle(){
document.getElementById("nav-btn-x").style.display= 'block';
document.getElementById("nav-btn-bar").style.display= 'none';
document.getElementById("nav").style.display= 'block';
}
function toogleagain(){
  document.getElementById("nav-btn-x").style.display= 'none';
  document.getElementById("nav-btn-bar").style.display= 'block';
  document.getElementById("nav").style.display= 'none';
}


function typeWriter(words, wordIndex, charIndex, speed) {
    if (wordIndex < words.length) {
      let currentWord = words[wordIndex];
      if (charIndex < currentWord.length) {
        document.getElementById("typing-text").innerHTML += currentWord.charAt(charIndex);
        charIndex++;
        setTimeout(function() {
          typeWriter(words, wordIndex, charIndex, speed);
        }, speed);
      } else {
        // Word typing complete, clear and start typing the next word
        setTimeout(function() {
          document.getElementById("typing-text").innerHTML = ""; // Clear the typed word
          typeWriter(words, (wordIndex + 1) % words.length, 0, speed); // Move to the next word
        }, 1000); // Delay before typing the next word
      }
    }
  }
  
  // Words to type
  let wordsToType = ["Front-End Developer", "Back-End Developer", "Designer"];
  
  // Start typing loop
  typeWriter(wordsToType, 0, 0, 100);

  // Skills
  const skillsContainer = document.getElementById('skills-container');
const skills = [
  { name: 'HTML', rating: 100},
  { name: 'CSS', rating: 100 },
  { name: 'Bootstrap', rating: 90 },
  { name: 'JavaScript', rating: 70 },
  { name: 'PHP', rating: 45 },
  { name: 'Java', rating: 60 },
  { name: 'C', rating: 70 },
  { name: 'C++', rating: 80 },
  { name: 'MySQL', rating: 78 },
];

skills.forEach((skill) => {
  const skillElement = document.createElement('div');
  skillElement.classList.add('skill');

  const skillName = document.createElement('p');
  skillName.classList.add('skill-name');
  skillName.textContent = skill.name;
  skillElement.appendChild(skillName);

  const skillRating = document.createElement('div');
  skillRating.classList.add('skill-rating');

  for (let i = 0; i < skills.length; i++) {
    const star = document.createElement('i');
    star.classList.add('skill-star', 'fa', 'fa-star');

    if (i < skill.rating) {
      star.classList.add('checked');
    }

    skillRating.appendChild(star);
  }

  skillElement.appendChild(skillRating);

  const skillProgressBar = document.createElement('div');
  skillProgressBar.classList.add('skill-progress');

  const skillProgressBarBar = document.createElement('div');
  skillProgressBarBar.classList.add('skill-progress-bar');
  skillProgressBarBar.style.width = `${(skill.rating)}%`;
  skillProgressBar.appendChild(skillProgressBarBar);

  skillElement.appendChild(skillProgressBar);

  skillsContainer.appendChild(skillElement);
});




const firebaseConfig = {
  apiKey: "AIzaSyAS150am6jIHHYGeu2u8hjBRplbv6hbV38",
  authDomain: "nikunj-techs.firebaseapp.com",
  databaseURL: "https://nikunj-techs-default-rtdb.firebaseio.com",
  projectId: "nikunj-techs",
  storageBucket: "nikunj-techs.appspot.com",
  messagingSenderId: "360911890759",
  appId: "1:360911890759:web:e53a6ae8c68671d881c462",
  measurementId: "G-DV52HMB09Q"
};
firebase.initializeApp(firebaseConfig)
const contactDB = firebase.database().ref('contactform');

document.getElementById('contactform').addEventListener('submit', submitForm())
function submitForm(e) {
  e.preventDefault();

  var name = getElementVal('name');
  var email = getElementVal('email');
  var comment = getElementVal('comment');

  console.log(name, email, comment);
}
const getElementVal = (id) => {
  return document.getElementById(id).ariaValueMax;
}