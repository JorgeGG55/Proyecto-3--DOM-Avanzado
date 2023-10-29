import './style.css';

const personalData = {
  nombre: 'Jorge Gravel',
  puestoTrabajo: 'Desarrollador Web',
  descripcion: '¡Hola! Soy un desarrollador web.',
  imagenURL: 'https://fyra.es/imagen.jpg',
  githubURL: 'https://github.com/JorgeGG55',
  linkedinURL: 'https://www.linkedin.com/in/jorge-gravel'
};

function renderHome() {
  const app = document.getElementById('app');
  app.innerHTML = '';

  const homeContainer = document.createElement('div');
  homeContainer.classList.add('home-container');

  const imagen = document.createElement('img');
  imagen.src = personalData.imagenURL;
  imagen.classList.add('personalImg');

  const nombreTitle = document.createElement('h1');
  nombreTitle.textContent = personalData.nombre;

  const puestoTitle = document.createElement('h2');
  puestoTitle.textContent = personalData.puestoTrabajo;

  const descripcionText = document.createElement('p');
  descripcionText.textContent = personalData.descripcion;

  const linksDiv = document.createElement('div');
  linksDiv.className = 'd-flex align-center justify-space linksContainer';

  const githubLink = document.createElement('a');
  githubLink.href = personalData.githubURL;
  githubLink.target = '_blank';

  const githubImage = document.createElement('img');
  githubImage.src =
    'https://iconmonstr.com/wp-content/g/gd/makefg.php?i=../releases/preview/2012/png/iconmonstr-github-3.png&r=255&g=255&b=255';
  githubImage.classList.add('linkslImg');

  githubLink.appendChild(githubImage);

  const linkedinLink = document.createElement('a');
  linkedinLink.href = personalData.linkedinURL;
  linkedinLink.target = '_blank';

  const linkedinImage = document.createElement('img');
  linkedinImage.src =
    'https://iconmonstr.com/wp-content/g/gd/makefg.php?i=../releases/preview/2012/png/iconmonstr-linkedin-3.png&r=255&g=255&b=255';
  linkedinImage.classList.add('linkslImg');

  linkedinLink.appendChild(linkedinImage);

  linksDiv.appendChild(githubLink);
  linksDiv.appendChild(linkedinLink);

  homeContainer.appendChild(imagen);
  homeContainer.appendChild(nombreTitle);
  homeContainer.appendChild(puestoTitle);
  homeContainer.appendChild(descripcionText);
  homeContainer.appendChild(linksDiv);

  app.appendChild(homeContainer);
}

const experienceData = [
  {
    empresa: 'Google',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/1200px-Google_%22G%22_Logo.svg.png',
    fechas: 'Mayo 2018 - Agosto 2019',
    descripcion:
      'Trabajé en Google como analista de datos, donde contribuí al análisis de tendencias de búsqueda y al desarrollo de estrategias de marketing.',
    responsabilidades: [
      '· Análisis de datos de búsqueda.',
      '· Colaboración en la creación de informes y recomendaciones para mejorar la visibilidad de contenido.',
      '· Participación en reuniones estratégicas de marketing.'
    ],
    urlEmpresa: 'https://www.google.es/'
  },
  {
    empresa: 'Tesla',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Tesla_Motors.svg/1280px-Tesla_Motors.svg.png',
    fechas: 'Septiembre 2020 - Diciembre 2020',
    descripcion:
      'Trabajé en Tesla como pasante de ingeniería, donde ayudé en proyectos de desarrollo de baterías de alto rendimiento.',
    responsabilidades: [
      '· Análisis de datos de rendimiento de baterías.',
      '· Pruebas de laboratorio para evaluar nuevas tecnologías de baterías.',
      '· Colaboración en el diseño y desarrollo de prototipos de baterías.'
    ],
    urlEmpresa: 'https://www.tesla.com/es_es'
  },
  {
    empresa: 'Microsoft',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/1024px-Microsoft_logo.svg.png',
    fechas: 'Agosto 2022 - Noviembre 2022',
    descripcion:
      'Trabajé en Microsoft como ingeniero de software, participando en el desarrollo de aplicaciones de inteligencia artificial para mejorar la eficiencia empresarial.',
    responsabilidades: [
      '· Programación y desarrollo de aplicaciones de IA.',
      '· Colaboración en el diseño de algoritmos de aprendizaje automático.',
      '· Integración de soluciones de IA en aplicaciones empresariales.'
    ],
    urlEmpresa: 'https://www.microsoft.com/es-es'
  },
  {
    empresa: 'Amazon',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png',
    fechas: 'Junio 2019 - Septiembre 2029',
    descripcion:
      'Trabajé en Amazon como gerente de logística, supervisando la gestión de inventario y optimizando los procesos de envío.',
    responsabilidades: [
      '· Planificación y gestión de inventario.',
      '· Pruebas de laboratorio para evaluar nuevas tecnologías de baterías.',
      '· Implementación de estrategias para mejorar la eficiencia logística.'
    ],
    urlEmpresa: 'https://www.amazon.es/'
  },
  {
    empresa: 'SpaceX',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/9/96/SpaceX_Logo_Black.png',
    fechas: 'Junio 2019 - Septiembre 2029',
    descripcion:
      'Trabajé en SpaceX como ingeniero de sistemas, participando en el desarrollo de tecnología espacial y cohetes reutilizables.',
    responsabilidades: [
      '· Diseño y pruebas de sistemas de propulsión.',
      '· Colaboración en el desarrollo de vehículos espaciales reutilizables.',
      '· Análisis de datos de vuelos espaciales.'
    ],
    urlEmpresa: 'https://www.spacex.com/'
  }
];

function renderExperience() {
  const app = document.getElementById('app');
  app.innerHTML = '';

  const experienceContainer = document.createElement('div');
  experienceContainer.classList.add('experience-container');

  experienceData.forEach((experience, index) => {
    const empresaLink = document.createElement('a');
    empresaLink.href = experience.urlEmpresa;
    empresaLink.classList.add('experienceLink');
    empresaLink.target = '_blank';

    const experienceItem = document.createElement('div');
    experienceItem.classList.add('experience-item');

    const logo = document.createElement('img');
    logo.src = experience.logo;
    logo.classList.add('logoImg');

    const empresaTitle = document.createElement('h2');
    empresaTitle.textContent = experience.empresa;

    const fechas = document.createElement('p');
    fechas.textContent = experience.fechas;

    const descripcion = document.createElement('p');
    descripcion.textContent = experience.descripcion;

    const responsabilidadesTitle = document.createElement('h3');
    responsabilidadesTitle.textContent = 'Responsabilidades:';

    const responsabilidadesList = document.createElement('ul');
    experience.responsabilidades.forEach((responsabilidad) => {
      const responsabilidadItem = document.createElement('li');
      responsabilidadItem.textContent = responsabilidad;
      responsabilidadesList.appendChild(responsabilidadItem);
    });

    experienceItem.appendChild(logo);
    experienceItem.appendChild(empresaTitle);
    experienceItem.appendChild(fechas);
    experienceItem.appendChild(descripcion);
    experienceItem.appendChild(responsabilidadesTitle);
    experienceItem.appendChild(responsabilidadesList);

    empresaLink.appendChild(experienceItem);
    experienceContainer.appendChild(empresaLink);
  });

  app.appendChild(experienceContainer);
}

const proyectosData = [
  {
    nombre: 'Productos Wallapop',
    imagenURL:
      'https://i0.wp.com/about.wallapop.com/wp-content/uploads/2021/07/brand-motion.png?fit=690%2C690&ssl=1',
    paginaURL: 'https://proyecto-dom-jorge-gravel.netlify.app/'
  },
  {
    nombre: 'Página Wallapop',
    imagenURL:
      'https://i0.wp.com/about.wallapop.com/wp-content/uploads/2021/07/brand-motion.png?fit=690%2C690&ssl=1',
    paginaURL: 'https://proyecto-web-responsive-jorge-gravel.netlify.app/'
  },
  {
    nombre: 'Fyra.',
    imagenURL: 'https://i.ibb.co/pRcHcXg/fyra.png',
    paginaURL: 'https://fyra.es/'
  },
  {
    nombre: 'Color Flipper',
    imagenURL:
      'https://static.vecteezy.com/system/resources/previews/010/252/112/non_2x/color-palette-brush-artwork-file-free-png.png',
    paginaURL: 'https://color-flipper-jorge.netlify.app/'
  },
  {
    nombre: 'Louis Vuittad',
    imagenURL:
      'https://static.vecteezy.com/system/resources/previews/024/555/106/original/louis-vuitton-logo-transparent-free-png.png',
    paginaURL: 'https://louis-vuittad-jorge-gravel.netlify.app/'
  }
];

function renderProjects() {
  const app = document.getElementById('app');
  app.innerHTML = '';

  const projectsContainer = document.createElement('div');
  projectsContainer.classList.add('projects-container');

  proyectosData.forEach((proyecto, index) => {
    const projectItem = document.createElement('div');
    projectItem.classList.add('project-item');

    const imagen = document.createElement('img');
    imagen.src = proyecto.imagenURL;
    imagen.classList.add('proyectImg');

    const nombreTitle = document.createElement('h2');
    nombreTitle.textContent = proyecto.nombre;

    const paginaLink = document.createElement('a');
    paginaLink.classList.add('proyectURL');
    paginaLink.href = proyecto.paginaURL;
    paginaLink.target = '_blank';

    projectItem.appendChild(imagen);
    projectItem.appendChild(nombreTitle);
    paginaLink.appendChild(projectItem);

    projectsContainer.appendChild(paginaLink);
  });

  app.appendChild(projectsContainer);
}

document.querySelector('a[href="/home"]').addEventListener('click', (ev) => {
  ev.preventDefault();
  renderHome();
});

document.querySelector('a[href="/experience"]').addEventListener('click', (ev) => {
  ev.preventDefault();
  renderExperience();
});

document.querySelector('a[href="/projects"]').addEventListener('click', (ev) => {
  ev.preventDefault();
  renderProjects();
});

renderHome();
