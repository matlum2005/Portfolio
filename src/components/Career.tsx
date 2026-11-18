import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>My career <span>&</span><br /> experience</h2>
        <div className="career-info">
          <div className="career-timeline"><div className="career-dot"></div></div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Java Developer Intern</h4>
                <h5>SkyBrisk · Remote</h5>
              </div>
              <h3>2026</h3>
            </div>
            <p>Mar 2026 – Sep 2026. Developed modular REST APIs using Java and Spring Boot, implemented JWT authentication and RBAC, worked with PostgreSQL schemas and SQL queries, and integrated backend services with React.js using Axios.</p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.Tech – Computer Science & Engineering</h4>
                <h5>Dr. A.P.J. Abdul Kalam Technical University</h5>
              </div>
              <h3>2027</h3>
            </div>
            <p>Undergraduate studies in Computer Science and Engineering, 2023–2027.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
