import React from 'react';

type props = { name: string };
const HelloMessage = ({ name }: props) => <h1 className="top--message">Hello,,,,, {name}!</h1>;

export default HelloMessage;
