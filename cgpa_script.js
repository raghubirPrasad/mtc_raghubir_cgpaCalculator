const legend =
`
<div class="legend-box">
  <strong>Grade to Grade Point:</strong>
  <table>
    <tr><td>A</td><td>10</td></tr>
    <tr><td>A-</td><td>9</td></tr>
    <tr><td>B</td><td>8</td></tr>
    <tr><td>B-</td><td>7</td></tr>
    <tr><td>C</td><td>6</td></tr>
    <tr><td>C-</td><td>5</td></tr>
    <tr><td>D</td><td>4</td></tr>
    <tr><td>D-</td><td>3</td></tr>
    <tr><td>E</td><td>2</td></tr>
    <tr><td>E-</td><td>1</td></tr>
    <tr><td>NC/RC</td><td>0</td></tr>
  </table>
</div>
`

const bioyear1subjects = 
[
  { name: "General Biology", credits: 3 },
  { name: "Biology Lab", credits: 1 },
  { name: "General Chemistry", credits: 3 },
  { name: "Chemistry Lab", credits: 1 },
  { name: "Mathematics I/II", credits: 3 },
  { name: "Computer Programming", credits: 4 },
  { name: "Engineering Graphics", credits: 2 },
  { name: "Technical Report Writing", credits: 2 }
]

const thermoyear1subjects = 
[
  { name: "Thermodynamics", credits: 3 },
  { name: "Mechanics Oscillations Waves", credits: 3 },
  { name: "Electrical Sciences", credits: 3 },
  { name: "Mathematics I/II", credits: 3 },
  { name: "Probability & Statistics", credits: 3 },
  { name: "Workshop Practice", credits: 2 },
  { name: "Physics Lab", credits: 1 }
]

const year2sem1subjects = 
[
  { name: "Object Oriented Programming (CS F213)", credits: 4 },
  { name: "Logic in Computer Science (CS F214)", credits: 3 },
  { name: "Digital Design (CS F215)", credits: 4 },
  { name: "Discrete Mathematics (CS F222)", credits: 3 },
  { name: "Mathematics III (MATH F211)", credits: 3 },
  { name: "Humanities Elective 1", credits: 3 }
]

const year2sem2subjects = 
[
  { name: "Environmental Studies (BITS F225)", credits: 3 },
  { name: "Data Structures & Algorithm (CS F211)", credits: 4 },
  { name: "Database Systems (CS F212)", credits: 4 },
  { name: "Microprocessors & Interfacing (CS F241)", credits: 4 },
  { name: "Optional POE/POM (ECON/MGTS F211)", credits: 3 },
  { name: "Humanities Elective 1", credits: 3 }
]

const year3sem1subjects = 
[
  { name: "Principles of Progg Lang (CS F301)", credits: 2 },
  { name: "Computer Architecture (CS F342)", credits: 4 },
  { name: "Theory of Computation (CS F351)", credits: 3 },
  { name: "Operating Systems (CS F372)", credits: 3 },
  { name: "Discipline Elective 1", credits: 3 },
  { name: "Humanities Elective 1", credits: 3 }
]
const year3sem2subjects = 
[
  { name: "Computer Networks (CS F303)", credits: 4 },
  { name: "Compiler Construction (CS F363)", credits: 3 },
  { name: "Design & Analysis of Algo (CS F364)", credits: 3 },
  { name: "Discipline Elective 1", credits: 3 },
  { name: "Discipline Elective 2", credits: 3 },
  { name: "Discipline Elective 3", credits: 3 }
]

const year4semsubjects = 
[
  { name: "Open Elective 1", credits: 3 },
  { name: "Open Elective 2", credits: 3 },
  { name: "Open Elective 3", credits: 3 },
  { name: "Open Elective 4", credits: 3 },
  { name: "Open Elective 5", credits: 3 }
]

const year4pssubjects = 
[
  { name: "Practice School II", credits: 20 }
]

function getfixedsubjects(label, subjects)
{
  return `
    <button class="back-btn" id="backhome">Back</button>
    <h3>${label} CGPA Calculator</h3>
    ${legend}
    <form id="cgpaform">
      ${subjects.map(subj =>
        `<div class="subject-row">
          <label>${subj.name} (Credits: ${subj.credits}): </label>
          <label>
            Grade Point: <input type="number" min="0" max="10" class="grade" data-credits="${subj.credits}" required>
          </label>
        </div>`
      ).join('')}
      <button type="button" id="calculate">Calculate CGPA</button>
    </form>
    <div id="result"></div>
  `
}

function getcalculator(label = '', genbtn = "Submit")
{
  return `
    <button class="back-btn" id="backhome">Back</button>
    <h3>${label} CGPA Calculator</h3>
    ${legend}
    <form id="subjectform">
      <label for="numsubjects">Number of Subjects:</label>
      <input type="number" id="numsubjects" min="1" max="20" required>
      <button type="button" id="generate">${genbtn}</button>
    </form>
    <form id="cgpaform" style="display:none;">
      <div id="subjectscontainer"></div>
      <button type="button" id="calculate">Calculate CGPA</button>
    </form>
    <div id="result"></div>
  `
}

function gethomebuttons()
{
  return `
    <div class="year-buttons">
      <select id="year1dropdown" class="year-dropdown">
        <option value="">Year 1: Select Semester</option>
        <option value="bio">Bio Sem</option>
        <option value="thermo">Thermo Sem</option>
      </select>
      <select id="year2dropdown" class="year-dropdown">
        <option value="">Year 2: Select Semester</option>
        <option value="sem1">Sem 1</option>
        <option value="sem2">Sem 2</option>
      </select>
      <select id="year3dropdown" class="year-dropdown">
        <option value="">Year 3: Select Semester</option>
        <option value="sem1">Sem 1</option>
        <option value="sem2">Sem 2</option>
      </select>
      <select id="year4dropdown" class="year-dropdown">
        <option value="">Year 4: Select Semester</option>
        <option value="sem">Sem</option>
        <option value="ps2">PS II</option>
      </select>
      <button class="year-btn" id="miscbtn">Non CS Dept</button>
      <button class="year-btn" id="allsembtn">All Sem CGPA</button>
    </div>
  `
}

function getallsem()
{
  return `
    <button class="back-btn" id="backhome">Back</button>
    <h3>All Semesters CGPA Calculator</h3>
    ${legend}
    <form id="allsemform">
      <div class="semester-row"><label>Year 1 Bio Sem (19 credits):</label><input type="number" min="0" max="10" id="year1bio" data-credits="19"></div>
      <div class="semester-row"><label>Year 1 Thermo Sem (18 credits):</label><input type="number" min="0" max="10" id="year1thermo" data-credits="18"></div>
      <div class="semester-row"><label>Year 2 Sem 1 (20 credits):</label><input type="number" min="0" max="10" id="year2sem1" data-credits="20"></div>
      <div class="semester-row"><label>Year 2 Sem 2 (21 credits):</label><input type="number" min="0" max="10" id="year2sem2" data-credits="21"></div>
      <div class="semester-row"><label>PS - I (5 credits):</label><input type="number" min="0" max="10" id="ps1" data-credits="5"></div>
      <div class="semester-row"><label>Year 3 Sem 1 (18 credits):</label><input type="number" min="0" max="10" id="year3sem1" data-credits="18"></div>
      <div class="semester-row"><label>Year 3 Sem 2 (19 credits):</label><input type="number" min="0" max="10" id="year3sem2" data-credits="19"></div>
      <div class="semester-row"><label>Year 4 Sem (15 credits):</label><input type="number" min="0" max="10" id="year4sem" data-credits="15"></div>
      <div class="semester-row"><label>PS - II (20 credits):</label><input type="number" min="0" max="10" id="ps2" data-credits="20"></div>
      <button type="button" id="calculateall">Calculate Overall CGPA</button>
    </form>
    <div id="allsemresult"></div>
  `
}

function loadhome()
{
  document.getElementById('main-content').innerHTML = gethomebuttons()
  document.getElementById('year1dropdown').onchange = function()
  {
    if (this.value === 'bio') loadfixedsubjects('Bio Year 1', bioyear1subjects)
    else if (this.value === 'thermo') loadfixedsubjects('Thermo Year 1', thermoyear1subjects)
  }
  document.getElementById('year2dropdown').onchange = function()
  {
    if (this.value === 'sem1') loadfixedsubjects('Year 2 - Sem 1', year2sem1subjects)
    else if (this.value === 'sem2') loadfixedsubjects('Year 2 - Sem 2', year2sem2subjects)
  }
  document.getElementById('year3dropdown').onchange = function()
  {
    if (this.value === 'sem1') loadfixedsubjects('Year 3 - Sem 1', year3sem1subjects)
    else if (this.value === 'sem2') loadfixedsubjects('Year 3 - Sem 2', year3sem2subjects)
  }
  document.getElementById('year4dropdown').onchange = function()
  {
    if (this.value === 'sem') loadfixedsubjects('Year 4 - Sem', year4semsubjects)
    else if (this.value === 'ps2') loadfixedsubjects('Year 4 - PS II', year4pssubjects)
  }
  document.getElementById('miscbtn').onclick = function()
  {
    loadcalculator('Non CS Dept', "Submit")
  }
  document.getElementById('allsembtn').onclick = function()
  {
    loadallsem()
  }
}

function loadfixedsubjects(label, subjects)
{
  document.getElementById('main-content').innerHTML = getfixedsubjects(label, subjects)
  document.getElementById('backhome').onclick = loadhome
  document.getElementById('calculate').onclick = function()
  {
    const grades = document.querySelectorAll('.grade')
    let totalpoints = 0, totalcredits = 0
    for (let g of grades)
    {
      const grade = parseFloat(g.value)
      const credits = parseInt(g.getAttribute('data-credits'))
      if (isNaN(grade) || grade < 0 || grade > 10)
      {
        document.getElementById('result').innerHTML = '<span style="color:red;">Please enter valid grade points (0-10) for all subjects.</span>'
        return
      }
      totalpoints += grade * credits
      totalcredits += credits
    }
    document.getElementById('result').innerHTML = `<strong>Your CGPA is: ${(totalpoints / totalcredits).toFixed(2)}</strong>`
  }
}

function loadcalculator(label = '', genbtn = "Submit")
{
  document.getElementById('main-content').innerHTML = getcalculator(label, genbtn)
  document.getElementById('backhome').onclick = loadhome
  document.getElementById('generate').onclick = function()
  {
    const num = parseInt(document.getElementById('numsubjects').value)
    if (isNaN(num) || num < 1 || num > 20)
    {
      document.getElementById('result').innerHTML = '<span style="color:red;">Please enter a valid number of subjects (1-20).</span>'
      return
    }
    let fields = ''
    for (let i = 1; i <= num; i++)
    {
      fields += `<div class="subject-row">
        <label>Subject ${i}:
          Grade Point (0-10): <input type="number" min="0" max="10" class="grade" required>
          Credits: <input type="number" min="1" max="10" class="credit" required>
        </label>
      </div>`
    }
    document.getElementById('subjectscontainer').innerHTML = fields
    document.getElementById('cgpaform').style.display = 'block'
    document.getElementById('result').innerHTML = ''
  }
  document.getElementById('calculate').onclick = function()
  {
    const grades = document.querySelectorAll('.grade')
    const credits = document.querySelectorAll('.credit')
    let totalpoints = 0, totalcredits = 0
    for (let i = 0; i < grades.length; i++)
    {
      const grade = parseFloat(grades[i].value)
      const credit = parseInt(credits[i].value)
      if (isNaN(grade) || isNaN(credit) || grade < 0 || grade > 10 || credit < 1)
      {
        document.getElementById('result').innerHTML = '<span style="color:red;">Please enter valid values.</span>'
        return
      }
      totalpoints += grade * credit
      totalcredits = totalcredits + credit
    }
    document.getElementById('result').innerHTML = `<strong>Your CGPA is: ${(totalpoints / totalcredits).toFixed(2)}</strong>`
  }
}

function loadallsem()
{
  document.getElementById('main-content').innerHTML = getallsem()
  document.getElementById('backhome').onclick = loadhome
  document.getElementById('calculateall').onclick = function()
  {
    const semesters =
    [
      { id: 'year1bio', credits: 19 },
      { id: 'year1thermo', credits: 18 },
      { id: 'year2sem1', credits: 20 },
      { id: 'year2sem2', credits: 21 },
      { id: 'ps1', credits: 5 },
      { id: 'year3sem1', credits: 18 },
      { id: 'year3sem2', credits: 19 },
      { id: 'year4sem', credits: 15 },
      { id: 'ps2', credits: 20 }
    ]
    let totalpoints = 0, totalcredits = 0, allvalid = true, hasone = false
    semesters.forEach(function(sem)
    {
      const input = document.getElementById(sem.id)
      const value = parseFloat(input.value)
      if (input.value !== '')
      {
        hasone = true
        if (isNaN(value) || value < 0 || value > 10)
        {
          allvalid = false
          input.style.border = "1px solid red"
        }
        else
        {
          input.style.border = ""
          totalpoints += value * sem.credits
          totalcredits += sem.credits
        }
      }
      else
      {
        input.style.border = ""
      }
    })
    const resultdiv = document.getElementById('allsemresult')
    if (!hasone)
    {
      resultdiv.innerHTML = '<span style="color:red;">Please enter at least one semester CGPA.</span>'
      return
    }
    if (!allvalid)
    {
      resultdiv.innerHTML = '<span style="color:red;">Please enter valid CGPA values (0-10) for all entered semesters.</span>'
      return
    }
    resultdiv.innerHTML = `<strong>Your Overall CGPA is: ${(totalpoints / totalcredits).toFixed(2)}</strong>`
  }
}

loadhome()
