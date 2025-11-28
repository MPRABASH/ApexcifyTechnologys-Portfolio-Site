import weatherdemo from '../assets/weather-demo.png'
import tododemo from '../assets/todo-demo.png'
import logindemo from '../assets/login-demo.png'
import calculatordemo from '../assets/calculator.png'
 const arr = [
   {
     demoimage: weatherdemo,
     projectname: "Weather-app",
     projectdescription:
       "Created a responsive weather dashboard displaying real-time data using API integration.",
     projectdemo: "//mprabash.github.io/weather-app-using-API/",
     projectcode: "//github.com/MPRABASH/weather-app-using-API",
   },
   {
     demoimage: tododemo,
     projectname: "Todo-list",
     projectdescription:
       "Developed a to-do list app supporting add, edit, delete, and persistent tasks using local storage.",
     projectdemo: "//mprabash.github.io/todo-list-app/",
     projectcode: "https://github.com/MPRABASH/todo-list-app",
   },
   {
     demoimage: logindemo,
     projectname: "Authentication-app",
     projectdescription:
       "Built a secure login/sign-up page with comprehensive form validation and error handling.",
     projectdemo: "//mprabash.github.io/login-signup-form/",
     projectcode: "//github.com/MPRABASH/login-signup-form",
   },
   {
     demoimage: calculatordemo,
     projectname: "Calculator-app",
     projectdescription:
       "Implemented an interactive calculator performing arithmetic operations with user-friendly UI.",
     projectdemo: "//mprabash.github.io/calculator-app/",
     projectcode: "//github.com/MPRABASH/calculator-app",
   },
 ];
const Projects = () => {
  const list = arr.map((item)=>{
    const {demoimage,projectname,projectdescription,projectdemo,projectcode}=item;
    return(
      <div className='project-container'>
        <img src={demoimage} alt="project image" width={"300px"}/>
        <article>
        <h2>{projectname}</h2>
        <p>{projectdescription}</p>
        <a href={projectdemo}>Live demo</a>
        <a href={projectcode}>View code</a>
        </article>
      </div>
    )
  })
  return (
    <div className='project-page'>
      <article>
        <h1>My projects</h1>
        <p>
          Explore a selection of my web development projects, including React
          SPAs, API dashboards, task managers, calculators, quizzes, and
          authentication systems—each built to showcase responsive design, clean
          code, and practical problem-solving skills.
        </p>
      </article>
      {list}
    </div>
  );
}
export default Projects