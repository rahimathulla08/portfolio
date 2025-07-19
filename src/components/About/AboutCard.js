import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Rahimathulla Mohammad</span> from{" "}
            <span className="purple">Mahabubabad, India</span>.
          </p>

          <p style={{ textAlign: "justify" }}>
            I'm a passionate and curious Computer Science student specializing in Artificial Intelligence and Machine Learning at MVSR Engineering College. With a strong foundation in Python, Data Structures, and modern ML frameworks like Scikit-learn and TensorFlow, I enjoy building intelligent systems that solve real-world problems.
          </p>

          <p style={{ textAlign: "justify" }}>
            My academic journey and hands-on projects have equipped me with skills in data preprocessing, model development, and backend integration. I’ve also explored frontend tools like React to build interactive user interfaces.
          </p>



          <ul>
            <li><ImPointRight /> Exploring new technologies and building side projects</li>
            <li><ImPointRight /> Participating in coding competitions and hackathons</li>
          </ul>

          <p style={{ color: "rgb(155 126 172)", marginTop: "1rem" }}>
            "Strive to build things that make a difference!"
          </p>
          <footer className="blockquote-footer">Rahimathulla Mohammad</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
