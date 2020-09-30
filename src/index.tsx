import React from "react";

const SayHello = ({ name }: { name: string }): JSX.Element => (
  <div>Hey {name}, go hello to TypeScript.</div>
);

export default SayHello;
