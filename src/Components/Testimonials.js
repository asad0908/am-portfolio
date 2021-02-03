import { DndContext } from "@dnd-kit/core";
import React, { useState } from "react";
import Draggable from "./Draggable";
import Droppable from "./Droppable";
import "../css/Testimonials.css";

const Testimonials = ({ data }) => {
  const skills = [
    {
      id: "React",
      img: "https://www.acwebdev.tech/static/media/react-icon.52610ecf.png",
      testi:
        "Asad is so good at React, he build lots of real world project clones & he is a good decent developer when it comes to React",
      author: "Dickson",
    },
    {
      id: "Redux",
      img: "https://www.acwebdev.tech/static/media/redux-icon.b3b939c6.png",
      testi:
        "Asad is a Redux guy, all of his projects uses Redux for state management. His way of arranging folders for redux is superb.",
      author: "Ben",
    },
    {
      id: "Firebase",
      img: "https://www.acwebdev.tech/static/media/firebase-icon.8896e25c.png",
      testi:
        "When it comes to firebase, Asad is the master.. His way of working in firebase is just awesome.. loved it my man keep it up",
      author: "Aman",
    },

    {
      id: "React Native",
      img: "https://www.acwebdev.tech/static/media/react-icon.52610ecf.png",
      testi:
        "Asad is a pro developer of React Native. He built tons of mobile apps for me and definitely they are the best apps in the entire app store. Highly recommended",
      author: "Sonny sangha",
    },
    {
      id: "MongoDB",
      img: "https://www.acwebdev.tech/static/media/mongodb-icon.41634622.png",
      testi:
        "After firebase, MongoDB is what Asad uses for his projects and he is pretty good in it. Loved it",
      author: "Anonymous",
    },
  ];

  const [parent, setParent] = useState(null);
  const [testimonial, setTestimonial] = useState(
    "Get the testimonial of my skills here"
  );
  const [auth, setAuth] = useState("Testimonial Author");
  const draggableMarkup = <Draggable>Drag me into the logo</Draggable>;

  return (
    <section id="testimonials">
      <DndContext onDragEnd={handleDragEnd}>
        <div className="header__testi">{draggableMarkup}</div>
        <div className="testimonials__skills">
          {skills.map((skill) => (
            <Droppable key={skill.id} id={skill.id}>
              <div className="testimonial__skill">
                <img src={skill.img} alt={skill.id} />
                <p>{skill.id}</p>
              </div>
            </Droppable>
          ))}
        </div>
      </DndContext>
      <div className="testimonial__show">
        <div className="testimonial__show--outline">
          <h2>{testimonial}</h2>
          <p>- {auth}</p>
        </div>
      </div>
    </section>
  );

  function handleDragEnd(event) {
    const { over } = event;

    // If the item is dropped over a container, set it as the parent
    // otherwise reset the parent to `null`
    setParent(over ? over?.id : null);

    {
      over?.id === "React"
        ? setTestimonial(skills[0].testi)
        : over?.id === "Redux"
        ? setTestimonial(skills[1].testi)
        : over?.id === "Firebase"
        ? setTestimonial(skills[2].testi)
        : over?.id === "React Native"
        ? setTestimonial(skills[3].testi)
        : over?.id === "MongoDB"
        ? setTestimonial(skills[4].testi)
        : setTestimonial("Get the testimonial of my skills here");
    }

    {
      over?.id === "React"
        ? setAuth(skills[0].author)
        : over?.id === "Redux"
        ? setAuth(skills[1].author)
        : over?.id === "Firebase"
        ? setAuth(skills[2].author)
        : over?.id === "React Native"
        ? setAuth(skills[3].author)
        : over?.id === "MongoDB"
        ? setAuth(skills[4].author)
        : setAuth("Testimonial Author");
    }
  }
};

export default Testimonials;
