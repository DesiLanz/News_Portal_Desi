import React, { useState } from "react";
import "./styles.scss";

const Like = ({ start }) => {
  const [count, setCount] = useState(start);

  return (
    <div className="like-desktop" onClick={() => setCount(count + 1)}>
      <img src="./assets/icons/Like.svg" alt="Herz" />
      <p className="Mengen">{count}</p>
    </div>
  );
};

export default Like;

// used on start to convert start-prop to number
export const convert = (props) => {
  return { ...props, start: parseInt(props.start, 10) || 0 };
};
