import React from 'react';

interface Props {
  string: string;
  number: number;
  boolean: boolean;
  longText: string;
  richText: string;
  file: string;
  color: string;
  date: string;
  email: string;

}

const MyComponent = (props: Props) => {
  return (
    <div>
      <h1>{props.string}</h1>
      <p>{props.number}</p>
      <p>{props.boolean ? 'Yes' : 'No'}</p>
      <p>{props.longText}</p>
      <div dangerouslySetInnerHTML={{ __html: props.richText }} />
      <img src={props.file} alt="File" />
      <div style={{ backgroundColor: props.color }}>Color</div>
      <p>{props.date}</p>
      <a href={`mailto:${props.email}`}>{props.email}</a>
      
    </div>
  );
};

export default MyComponent;
