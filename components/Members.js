import React from "react";
import Particles from "react-particles-js";

const Members = () => {
  const particlesOptions = {
    particles: {
      number: {
        value: 50,
        density: {
          enable: true,
          value_area: 900
        }
      }
    }
  };

  const grads = [
    {
      photo:
        "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?cs=srgb&dl=black-and-white-fun-happy-91227.jpg&fm=jpg",
      name: "Jane Doe",
      description:
        "Laying on the bathroom floor, feeling nothing I'm overwhelmed and insecure, give me something I could take to ease my mind slowly Just have a drink and you'll feel better Just take her home and you'll feel better"
    },
    {
      photo:
        "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?cs=srgb&dl=black-and-white-fun-happy-91227.jpg&fm=jpg",
      name: "John Doe",
      description:
        "Please have mercy on me Take it easy on my heart Even though you don't mean to hurt me You keep tearing me apart Would you please have mercy, mercy on my heart"
    },
    {
      photo:
        "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?cs=srgb&dl=black-and-white-fun-happy-91227.jpg&fm=jpg",
      name: "John Doe",
      description:
        "Havana, ooh na-na (ay) Half of my heart is in Havana, ooh-na-na (ay, ay) He took me back to East Atlanta, na-na-na Oh, but my heart is in Havana (ay) There's somethin' 'bout his manners (uh huh) Havana, ooh na-na (uh)"
    }
  ];

  const undergrads = [
    {
      photo:
        "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?cs=srgb&dl=black-and-white-fun-happy-91227.jpg&fm=jpg",
      name: "Stefan Tian",
      description:
        "But every time you hurt me, the less that I cry And every time you leave me, the quicker these tears dry And every time you walk out, the less I love you Baby, we don't stand a chance, it's sad but it's true I'm way too good at goodbyes...."
    },
    {
      photo:
        "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?cs=srgb&dl=black-and-white-fun-happy-91227.jpg&fm=jpg",
      name: "John Doe",
      description:
        "She says that she's never afraid Just picture everybody naked She really doesn't like to wait Not really into hesitation"
    }
  ];

  return (
    <div className="members">
      <Particles className="particles" params={particlesOptions} />
      <div className="members__prof">
        <div className="members__image--container">
          <img
            className="members__image"
            src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?cs=srgb&dl=black-and-white-fun-happy-91227.jpg&fm=jpg"
            alt="prof"
          />
        </div>
        <div>
          <span>Dr. Hsiu-Ting Yu</span>
          <p>
            My primary research interests focus on the development and
            application of quantitative methods for analyzing data collected in
            psychological and educational research. I particularly emphasize
            issues of analyzing data with multilevel nested structure and
            repeated measurements. I am also interested in related
            methodological issues on model selection and latent structure.
          </p>
        </div>
      </div>
      <div className="members__grad--container">
        {grads.map(grad => (
          <div className="members__grad" key={grad.description}>
            <div className="members__image--container">
              <img
                className="members__image"
                src={grad.photo}
                alt={grad.name}
              />
            </div>
            <div>
              <span>{grad.name}</span>
              <p>{grad.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="members__undergrad--container">
        {undergrads.map(undergrad => (
          <div className="members__undergrad" key={undergrad.description}>
            <div className="members__image--container">
              <img
                className="members__image"
                src={undergrad.photo}
                alt={undergrad.name}
              />
            </div>
            <div>
              <span>{undergrad.name}</span>
              <p>{undergrad.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Members;
