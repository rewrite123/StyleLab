# StyleLab
Not another styling library!

## A general styling (and future component?) library for FundLabs and future projects


To run for testing on port 3003
`npm run start`

To build for testing
`npm run test-build`

To build for production
`npm run build`

All the css vars are set in index.scss under :root

Setting css vars should be done with the stylelab function in the ./dist/style-lab,js file.
```
// EX: 
stylelab(document.getElementsByTagName('body')[0], {'--primary-color': 'purple'});
```

Here is a complete list of the css vars you can change
```
// Color
  --primary-color: #2783ce;
  --secondary-color: #FF5D73;
  --accent-color: #86BBD8;
  --text-primary: #000;
  --text-secondary: #fff;
  --background-primary: #fff;
  --background-secondary: #000;
  --border-primary: #b1b1b1;
  --border-secondary: #cdcdcd;
  --shadow-primary: #00000088;
  --shadow-secondary: #94949488;

  --danger-color: #FD151B;
  --hazard-color: #F75C03;
  --warning-color: #FFB30F;
  --success-color: #2DDD88;
  --info-color: #4b92e3;

  // Spacing & sizing
  --border-radius: 8px;


  --shadow-blur: 3px;
  // delta = 1px:2.5px | (x: number)=>`${5+1*x}px ${5+2.5*x}px 3px`
  --shadow-h1-x: 5px;
  --shadow-h1-y: 5px;
  --shadow-h1: var(--shadow-h1-x) var(--shadow-h1-y) var(--shadow-blur);
  --shadow-h2-x: 6px;
  --shadow-h2-y: 7.5px;
  --shadow-h2: var(--shadow-h2-x) var(--shadow-h2-y) var(--shadow-blur);
  --shadow-h3-x: 7px;
  --shadow-h3-y: 10px;
  --shadow-h3: var(--shadow-h3-x) var(--shadow-h3-y) var(--shadow-blur);
  --shadow-h4-x: 8px;
  --shadow-h4-y: 12.5px;
  --shadow-h4: var(--shadow-h4-x) var(--shadow-h4-y) var(--shadow-blur);
  --shadow-h5-x: 9px;
  --shadow-h5-y: 15px;
  --shadow-h5: var(--shadow-h5-x) var(--shadow-h5-y) var(--shadow-blur);
  --shadow-h6-x: 10px;
  --shadow-h6-y: 17.5px;
  --shadow-h6: var(--shadow-h6-x) var(--shadow-h6-y) var(--shadow-blur);
  --shadow-h7-x: 11px;
  --shadow-h7-y: 20px;
  --shadow-h7: var(--shadow-h7-x) var(--shadow-h7-y) var(--shadow-blur);
  
  --text-size: 14px;

  --h1-size: 48px;
  --h2-size: 40px;
  --h3-size: 32px;
  --h4-size: 24px;
  --h5-size: 16px;
  --h6-size: 12px;

  --in-font-size: 16px;

  --btn-font-size: 16px;

  // Z Indexes
  --z-index-background: 200;
  --z-index-content: 400;
  --z-index-modal: 600;
  --z-index-alert: 800;
```
