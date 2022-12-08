# StyleLibrary
Not another component library!

## Installation
```
npm install --save https://github.com/rewrite123/StyleLab
```

## Usage example
```React
import React from 'react';

import { Button } from "stylelab";

const ExComp = ()=>{

  return (
    <div
      className="ExCompClassName"
    >
      <Button 
        className='ExCompButtonClassName'
        variant='primary'
        shadow={2}
      >
        This is the button component
      </Button>
    </div>
  );
}
export default ExComp;
```