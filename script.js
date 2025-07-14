const coursesData = [{'id': 'MAT', 'name': 'Matemáticas', 'semester': 1, 'credits': 12, 'prereq': []}, {'id': 'ADM', 'name': 'Administración', 'semester': 1, 'credits': 12, 'prereq': []}, {'id': 'CON', 'name': 'Contabilidad', 'semester': 1, 'credits': 12, 'prereq': []}, {'id': 'ECO', 'name': 'Economía', 'semester': 1, 'credits': 10, 'prereq': []}, {'id': 'COM1', 'name': 'Comunicación Oral y Escrita I', 'semester': 1, 'credits': 2, 'prereq': []}, {'id': 'ING1', 'name': 'Inglés I', 'semester': 1, 'credits': 3, 'prereq': []}, {'id': 'OFI', 'name': 'Taller de Ofimática', 'semester': 1, 'credits': 2, 'prereq': []}, {'id': 'COM2', 'name': 'Comunicación Oral y Escrita II', 'semester': 2, 'credits': 4, 'prereq': ['COM1']}, {'id': 'ING2', 'name': 'Inglés II', 'semester': 2, 'credits': 3, 'prereq': ['ING1']}, {'id': 'AUTO', 'name': 'Autogestión del Aprendizaje', 'semester': 3, 'credits': 3, 'prereq': []}, {'id': 'ING3', 'name': 'Inglés III', 'semester': 3, 'credits': 3, 'prereq': ['ING2']}, {'id': 'CALC', 'name': 'Cálculo', 'semester': 3, 'credits': 6, 'prereq': ['MAT']}, {'id': 'GEST', 'name': 'Gestión de Personas', 'semester': 3, 'credits': 4, 'prereq': ['ADM']}, {'id': 'MAC1', 'name': 'Macroeconomía I', 'semester': 3, 'credits': 5, 'prereq': ['ECO']}, {'id': 'COST', 'name': 'Costos', 'semester': 3, 'credits': 5, 'prereq': ['CON']}, {'id': 'SIST', 'name': 'Sistemas y Tecnologías de la Información', 'semester': 3, 'credits': 4, 'prereq': ['OFI']}, {'id': 'PRAC1', 'name': 'Práctica I', 'semester': 4, 'credits': 5, 'prereq': []}, {'id': 'TRAB', 'name': 'Trabajo en Equipo y Desarrollo de Habilidades', 'semester': 4, 'credits': 3, 'prereq': ['AUTO']}, {'id': 'ING4', 'name': 'Inglés IV', 'semester': 4, 'credits': 3, 'prereq': ['ING3']}, {'id': 'ALG', 'name': 'Álgebra Lineal', 'semester': 4, 'credits': 6, 'prereq': ['MAT']}, {'id': 'MARK', 'name': 'Marketing', 'semester': 4, 'credits': 4, 'prereq': ['ADM']}, {'id': 'PROD1', 'name': 'Administración de la Producción I', 'semester': 4, 'credits': 4, 'prereq': ['ADM']}, {'id': 'MIC1', 'name': 'Microeconomía I', 'semester': 4, 'credits': 5, 'prereq': ['ECO']}, {'id': 'FIN1', 'name': 'Finanzas I', 'semester': 4, 'credits': 5, 'prereq': ['CON']}, {'id': 'CONTEX', 'name': 'Comprensión de Contextos Sociales', 'semester': 5, 'credits': 3, 'prereq': ['COM2']}, {'id': 'ING5', 'name': 'Inglés V', 'semester': 5, 'credits': 3, 'prereq': ['ING4']}, {'id': 'EST1', 'name': 'Estadística I', 'semester': 5, 'credits': 5, 'prereq': ['MAT']}, {'id': 'COND', 'name': 'Conducta Organizacional', 'semester': 5, 'credits': 4, 'prereq': ['ADM']}, {'id': 'MAC2', 'name': 'Macroeconomía II', 'semester': 5, 'credits': 5, 'prereq': ['MAC1']}, {'id': 'MOD1', 'name': 'Módulo Integrador I', 'semester': 5, 'credits': 10, 'prereq': ['COST', 'ECO']}, {'id': 'CULT', 'name': 'Comprensión de Contextos Culturales', 'semester': 6, 'credits': 3, 'prereq': ['CONTEX']}, {'id': 'ING6', 'name': 'Inglés VI', 'semester': 6, 'credits': 3, 'prereq': ['ING5']}, {'id': 'EST2', 'name': 'Estadística II', 'semester': 6, 'credits': 5, 'prereq': ['EST1']}, {'id': 'NEG', 'name': 'Negociación y Manejo de Conflictos', 'semester': 6, 'credits': 4, 'prereq': ['COND']}, {'id': 'PROD2', 'name': 'Administración de la Producción II', 'semester': 6, 'credits': 4, 'prereq': ['PROD1']}, {'id': 'MIC2', 'name': 'Microeconomía II', 'semester': 6, 'credits': 5, 'prereq': ['MIC1']}, {'id': 'DER', 'name': 'Derecho Laboral y Comercial', 'semester': 6, 'credits': 5, 'prereq': ['GEST']}, {'id': 'DEP1', 'name': 'Deportivo I', 'semester': 6, 'credits': 1, 'prereq': []}, {'id': 'ETICA', 'name': 'Ética y Responsabilidad Social', 'semester': 7, 'credits': 3, 'prereq': ['CULT', 'TRAB']}, {'id': 'ECO1', 'name': 'Econometría', 'semester': 7, 'credits': 5, 'prereq': ['EST2']}, {'id': 'EVAL', 'name': 'Evaluación Privada y Social de Proyectos', 'semester': 7, 'credits': 6, 'prereq': ['FIN1']}, {'id': 'ORG', 'name': 'Organización Industrial', 'semester': 7, 'credits': 5, 'prereq': ['MIC1']}, {'id': 'DIR', 'name': 'Dirección Estratégica', 'semester': 7, 'credits': 5, 'prereq': ['FIN1', 'PROD1', 'MARK']}, {'id': 'FIN2', 'name': 'Finanzas II', 'semester': 7, 'credits': 5, 'prereq': ['FIN1']}, {'id': 'DEP2', 'name': 'Deportivo II', 'semester': 7, 'credits': 1, 'prereq': ['DEP1']}, {'id': 'RESP', 'name': 'Responsabilidad Social', 'semester': 8, 'credits': 3, 'prereq': ['ETICA']}, {'id': 'TRIB', 'name': 'Derecho Tributario', 'semester': 8, 'credits': 5, 'prereq': ['DER']}, {'id': 'HIST', 'name': 'Historia del Pensamiento Económico', 'semester': 8, 'credits': 5, 'prereq': ['MAC2', 'MIC1']}, {'id': 'MARKI', 'name': 'Inteligencia de Marketing', 'semester': 8, 'credits': 5, 'prereq': ['MARK']}, {'id': 'MOD2', 'name': 'Módulo Integrador II', 'semester': 8, 'credits': 12, 'prereq': ['MOD1', 'MAC2', 'MARK', 'GEST', 'PRAC1']}, {'id': 'ELEC1', 'name': 'Electivo I', 'semester': 9, 'credits': 5, 'prereq': ['DIR']}, {'id': 'MENC1', 'name': 'Módulo 1 Según Mención', 'semester': 9, 'credits': 5, 'prereq': []}, {'id': 'MENC2', 'name': 'Módulo 2 Según Mención', 'semester': 9, 'credits': 5, 'prereq': []}, {'id': 'ELEC2', 'name': 'Electivo II', 'semester': 10, 'credits': 5, 'prereq': ['DIR']}, {'id': 'MENC3', 'name': 'Módulo 3 Según Mención', 'semester': 10, 'credits': 5, 'prereq': []}, {'id': 'MENC4', 'name': 'Módulo 4 Según Mención', 'semester': 10, 'credits': 5, 'prereq': []}, {'id': 'PRAC2', 'name': 'Práctica II', 'semester': 10, 'credits': 10, 'prereq': []}, {'id': 'MOD3', 'name': 'Módulo Integrador III', 'semester': 10, 'credits': 10, 'prereq': ['MOD2']}, {'id': 'ELEC3', 'name': 'Electivo III', 'semester': 11, 'credits': 5, 'prereq': ['ELEC2']}, {'id': 'MENC5', 'name': 'Módulo 5 Según Mención', 'semester': 11, 'credits': 5, 'prereq': []}, {'id': 'MENC6', 'name': 'Módulo 6 Según Mención', 'semester': 11, 'credits': 5, 'prereq': []}];

const planner = document.getElementById('planner');
const counter = document.getElementById('credits-counter');
let approved = JSON.parse(localStorage.getItem('approved') || '[]');

function renderCourses() {
  const semesters = {};
  coursesData.forEach(c => {
    if (!semesters[c.semester]) {
      semesters[c.semester] = [];
    }
    semesters[c.semester].push(c);
  });

  for (let sem = 1; sem <= 11; sem++) {
    const column = document.createElement('div');
    column.className = 'semester';
    column.innerHTML = `<h3>Semestre ${sem}</h3>`;
    (semesters[sem] || []).forEach(course => {
      const div = document.createElement('div');
      div.className = 'course';
      div.dataset.id = course.id;
      div.dataset.credits = course.credits;
      div.dataset.prereq = course.prereq.join(',');
      div.dataset.tooltip = `${course.credits} créditos${course.prereq.length ? ' • Reqs: ' + course.prereq.join(', ') : ''}`;
      div.textContent = course.name;
      column.appendChild(div);
    });
    planner.appendChild(column);
  }
  updateCourses();
}

function updateCourses() {
  const courses = document.querySelectorAll('.course');
  let sum = 0;
  courses.forEach(c => {
    const id = c.dataset.id;
    const prereq = c.dataset.prereq.split(',').filter(x => x);
    const isReady = prereq.every(p => approved.includes(p));
    if (approved.includes(id)) {
      c.classList.add('completed');
      sum += +c.dataset.credits;
    } else {
      c.classList.remove('completed');
    }
    if (isReady) {
      c.classList.remove('locked');
    } else {
      c.classList.add('locked');
    }
  });
  counter.textContent = `Créditos: ${sum} / 282`;
}

document.addEventListener('click', (e) => {
  if (e.target.classList.contains('course') && !e.target.classList.contains('locked')) {
    const id = e.target.dataset.id;
    if (approved.includes(id)) {
      approved = approved.filter(x => x !== id);
    } else {
      approved.push(id);
    }
    localStorage.setItem('approved', JSON.stringify(approved));
    updateCourses();
  }
});

document.addEventListener('DOMContentLoaded', () => {
  renderCourses();
});