import React, { useState } from 'react';

interface Props {
  object: object;
}

const ObjectComponent = (props: Props) => {
  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
    }
  };

  const handleFileRead = (event: React.SyntheticEvent) => {
    event.preventDefault();
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        try {
          const json = JSON.parse(e.target?.result as string);
          // Do something with the parsed JSON data, e.g., update state or display it
          console.log(json);
        } catch (error) {
          console.error('Error parsing JSON file:', error);
        }
      };
      reader.readAsText(file);
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleFileRead}>Read JSON</button>
      <pre>{JSON.stringify(props.object, null, 2)}</pre>
    </div>
  );
};

export default ObjectComponent;
