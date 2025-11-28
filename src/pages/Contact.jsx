const Contact = () => {
  return (
    <div className='contact-container-page'>
      <h1>Get in touch</h1>
      <p>
        Let’s connect! If you have questions about my projects, need a frontend
        developer for your team, or want to discuss web development
        opportunities, please reach out. I’m available for full-time roles and
        collaborations, and look forward to hearing from you.
      </p>
      <div className='contact-container'>
        <section>
          <i className='bx bx-envelope'></i>
          <article>
            <h3>Email</h3>
            <a href='#'>prabashm1307@gmail.com</a>
          </article>
        </section>
        <section>
          <i className='bx bx-phone'></i>
          <article>
            <h3>Phone</h3>
            <a href='#'>+91 7358201689</a>
          </article>
        </section>
        <section>
          <i className='bx bxl-github'></i>
          <article>
            <h3>GitHub</h3>
            <a href='https://github.com/MPRABASH'>Click</a>
          </article>
        </section>
        <section>
          <i className='bx bxl-linkedin'></i>
          <article>
            <h3>LinkedIn</h3>
            <a href='https://www.linkedin.com/in/prabash-m-540a00303/'>
              Connect with me
            </a>
          </article>
        </section>
      </div>
      <p>
        Open to opportunities as a frontend developer. Eager to join teams that
        value modern web technologies, problem-solving, and continuous learning.
        Ready to contribute to innovative projects and collaborate with
        passionate professionals.
      </p>
    </div>
  );
}
export default Contact