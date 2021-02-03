import React from "react";
import { useDroppable } from "@dnd-kit/core";

const Droppable = (props) => {
  const { isOver, setNodeRef } = useDroppable({
    id: props.id,
  });

  const styles = {
    color: isOver ? "green" : undefined,
  };

  return (
    <div ref={setNodeRef} style={styles}>
      {props.children}
    </div>
  );
};

export default Droppable;
