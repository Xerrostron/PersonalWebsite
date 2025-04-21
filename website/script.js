function about()
{
    const contentDiv = document.querySelector('main');
    contentDiv.innerHTML = '';
    contentDiv.innerHTML=`
        <div class="About">
        <h1>A Little Bit About Me</h1>
        <p>
          I'm a recent Computer Science graduate from the College of William & Mary. I enjoy spending my free time playing tennis with friends, lifting, jogging, learning new technologies for programming, and playing video games.
        </p>
        <p>
          I'm actively looking for a software development position. As a highly motivated learner, I'm always eager to enhance my skills and take on new challenges.
        </p>
        </div>
    `;

}
function resume()
{
    const contentDiv = document.querySelector('main');
    contentDiv.innerHTML = '';
    contentDiv.innerHTML = `
    <div class="Resume">
      <embed src="AxelSamuelMartinez-1.pdf" type="application/pdf" width="100%" height="1200px">
      <a href="AxelSamuelMartinez-1.pdf" target="_blank">View My Resume</a>
    </div>
    `;
}
function contact()
{
    const contentDiv = document.querySelector('main');
    contentDiv.innerHTML = '';
    contentDiv.innerHTML = `
    <div class = "Contact">
    <h1>Email</h1>
    <p>Dimentiosfour5@gmail.com</p>
    <h1>Number</h1>
    <p>(804)892-6864</p>
    </div>
    `;
}
function projects()
{
    const contentDiv = document.querySelector('main');
    contentDiv.innerHTML = '';
    contentDiv.innerHTML =`
    <div class="Projects">
  <h1>Quizlet Clone</h1>
  <p>March 2025 - April 2025, Independent Project</p>
  <p>Developed RESTful endpoints in .NET to handle flashcard creation, retrieval, and playback features. Integrated a SQLite relational database using Entity Framework for persistent storage of users, sets, and cards. Enabled users to create, edit, and delete flashcard sets, with dynamic front-end rendering for a smooth UX. Implemented a flashcard playback system with JavaScript, simulating real-time study sessions. Designed a responsive UI to ensure usability across devices.</p>
  <p>IN PROGRESS!</p>

  <h1>Personal Blog</h1>
  <p>January 2025 - February 2025, Independent Project</p>
  <p>Engineered a single-page application (SPA) using HTML, CSS, and JavaScript. Implemented dynamic content rendering to minimize full-page reloads. Designed a MongoDB-backed database for account and blog storage. Developed a Node.js backend handling authentication, user account management, and blog creation through a RESTful API with GET and POST requests. Applied secure authentication and session management techniques.</p>
  <img src="PersonalBlog.png" alt="Personal Blog Project Screenshot" width="600px" />

  <h1>Wordle</h1>
  <p>Fall 2024 - Student</p>
  <p>Developed in Java with professional coding practices, emphasizing software design principles like unit testing, debugging, and object-oriented programming (OOP) concepts such as polymorphism, inheritance, and abstract classes. Implemented command-line arguments for configurable game modes and integrated multiple Wordle variants. Designed a basic graphical user interface (GUI) for enhanced user interaction. Utilized GitLab for version control and Eclipse IDE for development.</p>
  <img src="Wordle.png" alt="Wordle Project Screenshot" width="600px" />
</div>
`;
}
function articles()
{
    const contentDiv = document.querySelector('main');
    contentDiv.innerHTML = ''
    contentDiv.innerHTML =`
        <div class="Articles">
         <p>If I feel like posting some blog articles here, i'll put them here.</p>
        </div>
    `
}