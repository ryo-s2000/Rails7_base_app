import React from 'react';

type props = { name: string };
const HelloMessage = ({ name }: props): JSX.Element => <h1 class="top--message">Hello,,,,, {name}!</h1>;

export default HelloMessage;
