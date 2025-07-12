import './About.css';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-content">
        <div className="about-text">
          <h2>About Us</h2>
          <p>
            At <strong>Techerudite</strong>, we are your technology partner focused on helping businesses craft reliable,
            scalable, and impactful software solutions. We believe in turning ideas into digital reality with
            creativity and precision.
          </p>
        </div>
        <div className="about-image">
          <img src="/src/assets/about_images.svg" alt="About illustration" />
        </div>
      </div>
    </section>
  );
};

export default About;
