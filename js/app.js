const menu = document.querySelector('#icon');
const navbar = document.querySelector('.navbar');
const header = document.querySelector('.header-two');

menu.addEventListener('click', () => {
  menu.classList.toggle('fa-times');
  header.classList.toggle('header-style');
  navbar.classList.toggle('nav-toggle');
});

window.addEventListener('scroll', () => {
  menu.classList.remove('fa-times');
  header.classList.remove('header-style');
  navbar.classList.remove('nav-toggle');

  /* *********Scroll Top Bottom ********* */
  if (window.scrollY > 60) {
    document.querySelector('.scroll').classList.add('active');
  } else {
    document.querySelector('.scroll').classList.remove('active');
  }
});

/* ****************************** Dynamically injected content  ******************* */
const speakers = [
  {
    presenter: 'Carl Sagan',
    title: 'Professor of Astronomy and Space Sciences',
    description:
    'Astronomer, planetary scientist, cosmologist, astrophysicist, astrobiologist, author, and science communicator. His best known scientific contribution is research on extraterrestrial life, including experimental demonstration of the production of amino acids from basic chemicals by radiation',
    img: 'images/img1.jpg',
  },
  {
    presenter: 'Michio Kaku',
    title:
    'Professor of theoretical physics in the City College of New York and CUNY Graduate Center.',
    description:
    'American theoretical physicist, futurist, and popularizer of science (science communicator). Author of several books about physics and related topics and has made frequent appearances on radio, television, and film. He is also a regular contributor to his own blog, as well as other popular media outlets. ',
    img: 'images/img2.jpg',
  },
  {
    presenter: 'Jacob Bronowski',
    title: 'Polish-British mathematician and philosopher.',
    description:
    'known to friends and professional colleagues alike by the nickname Bruno. He is best known for developing a humanistic approach to science, and as the presenter and writer of the thirteen-part 1973 BBC television documentary series, and accompanying book, The Ascent of Man.',
    img: 'images/img3.jpg',
  },
  {
    presenter: 'Stephen Hawking',
    title:
    'English theoretical physicist, cosmologist, and author of The Centre for Theoretical Cosmology at the University of Cambridge',
    description:
    "Hawking's scientific works included a collaboration with Roger Penrose on gravitational singularity theorems in the framework of general relativity, and the theoretical prediction that black holes emit radiation, often called Hawking radiation. ",
    img: 'images/img4.jpg',
  },
  {
    presenter: 'Richard Dawkins',
    title: 'British evolutionary biologist and author.',
    description:
    'Dawkins first came to prominence with his 1976 book The Selfish Gene, which popularised the gene-centred view of evolution and introduced the term meme. With his book The Extended Phenotype (1982), he introduced into evolutionary biology the influential concept that the phenotypic effects.',
    img: 'images/img5.jpg',
  },
  {
    presenter: 'Stephen Jay Gould',
    title:
    'American paleontologist, evolutionary biologist, and historian of science.',
    description:
    'He was one of the most influential and widely read authors of popular science of his generation.[1] Gould spent most of his career teaching at Harvard University and working at the American Museum of Natural History in New York.',
    img: 'images/img6.jpg',
  },
];

const rowContainer = document.querySelector('.speakers .row');

window.addEventListener('DOMContentLoaded', () => {
  let speaker = speakers.map((item) => `
  <div class="card">
  <div class="image">
  <img src=${item.img} alt=${item.presenter} />
  </div>
  <div class="content">
  <h1>${item.presenter}</h1>
  <h2>${item.title}</h2>
  <p>
  ${item.description}
  </p>
  </div>
  </div>
  `);
  speaker = speaker.join('');
  rowContainer.innerHTML = speaker;
});
