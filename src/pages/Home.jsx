import profile from '../assets/profile.jpg'

const Home = () => {
  return (
    <div className='home-container'>
      <img src={profile} alt='profile' width={"400px"} />
      <article>
        <h2>Welcome to my portfolio! I’m Prabash M</h2>
        <p>
          Frontend developer specializing in responsive web apps using HTML5,
          CSS3, JavaScript, and React.js. Delivered six live projects, including
          SPA, weather dashboard, task manager, calculator, quiz, and
          authentication system. Experienced with API integration, UI/UX design,
          and modern development tools. Immediate joiner seeking full-time
          frontend opportunities.
        </p>
      </article>
    </div>
  );
}
export default Home