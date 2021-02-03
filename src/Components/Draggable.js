import React from "react";
import { useDraggable } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";
import "../css/Draggable.css";

const Draggable = (props) => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: "draggable",
  });
  const style = transform
    ? {
        transform: CSS.Translate.toString(transform),
      }
    : undefined;

  return (
    <h1
      className="draggable__item"
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}
    >
      {props.children}
    </h1>
  );
};

export default Draggable;
