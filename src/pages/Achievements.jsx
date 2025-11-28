const arr = [
  {
    certificate: "Core Java Programming ",
    name: "Infosys Springboard ",
    date: "Issued: August 2024",
  },
  {
    certificate: "Mastering CSS",
    name: "Infosys Springboard ",
    date: "Issued: July 2025",
  },
  {
    certificate: "JavaScript Programming",
    name: "Infosys Springboard ",
    date: "Issued: July 2025",
  },
  {
    certificate: "Using MongoDB with Java",
    name: "MongoDB University",
    date: "Issued: August 2024",
  },
  {
    certificate: "Core Java Programming ",
    name: "Infosys Springboard ",
    date: "ssued: August 2024",
  },
];
const arrtwo = [
  {
    certificate:"Full stack development",
    name:"Novitech R&D Private Limited",
    date:"Issued: September 2025"
  },
  {
    certificate:"UI/UX Design",
    name:"Novitech R&D Private Limited",
    date:"Issued: October 2025"
  },
];

const secone = arr.map((item)=>{
  const {certificate,name,date,link}=item;
  return (
      <article className="certificate-box">
        <h2>{certificate}</h2>
        <h4>{name}</h4>
        <p>{date}</p>
      </article>
  );
})

const sectwo = arrtwo.map((item)=>{
    const { certificate, name, date } = item;
    return (
        <article className="certificate-box">
          <h2>{certificate}</h2>
          <h4>{name}</h4>
          <p>{date}</p>
          <a href=''></a>
        </article>
    );
})

const Achievements = () => {
  return (
    <div className='achievement-page'>
      <h1>Certifications</h1>
      <p>
        Completed coursework and training in web development, UI/UX, and
        programming, strengthening my expertise with industry-relevant
        technologies and practical coding skills.
      </p>
      <section>{secone}</section>
      <h1>Interships</h1>
      <p>
        Worked on real-world web projects as part of a professional team,
        applying best practices in development and design, and gaining hands-on
        experience in a collaborative environment.
      </p>
      <section>{sectwo}</section>
    </div>
  );
}
export default Achievements