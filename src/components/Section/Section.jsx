import React from "react";

function Section(props) {
  const { title, children } = props;
  return (
    <>
      <h2>{title}</h2>
      {children}
    </>
  );
}

export default Section;
