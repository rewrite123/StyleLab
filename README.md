# StyleLab
Not another styling library!

## A general styling (and future component?) library for FundLabs and future projects


To run for testing on port 3003
`npm run start`

To build for testing
`npm run test-build`

To build for production
`npm run build`

There are some decent examples in ./public/index.html that are used for testing

All the css vars are set in index.scss under :root

Setting css vars should be done with the stylelab function in the ./dist/style-lab,js file.
```
// EX: 
stylelab(document.getElementsByTagName('body')[0], {'--sl-primary-color': 'purple'});
```

Here is a complete list of the css vars you can change
```
// Color
  --sl-primary-color: #2783ce;
  --sl-secondary-color: #FF5D73;
  --sl-accent-color: #86BBD8;
  --sl-text-primary: #000;
  --sl-text-secondary: #fff;
  --sl-background-primary: #fff;
  --sl-background-secondary: #000;
  --sl-border-primary: #b1b1b1;
  --sl-border-secondary: #cdcdcd;
  --sl-shadow-primary: #00000088;
  --sl-shadow-secondary: #94949488;

  --sl-danger-color: #FD151B;
  --sl-hazard-color: #F75C03;
  --sl-warning-color: #FFB30F;
  --sl-success-color: #2DDD88;
  --sl-info-color: #4b92e3;

  // Spacing & sizing
  --sl-border-radius: 8px;


  --sl-shadow-blur: 3px;
  // delta = 1px:2.5px | (x: number)=>`${5+1*x}px ${5+2.5*x}px 3px`
  --sl-shadow-h1-x: 5px;
  --sl-shadow-h1-y: 5px;
  --sl-shadow-h1: var(--sl-shadow-h1-x) var(--sl-shadow-h1-y) var(--sl-shadow-blur);
  --sl-shadow-h2-x: 6px;
  --sl-shadow-h2-y: 7.5px;
  --sl-shadow-h2: var(--sl-shadow-h2-x) var(--sl-shadow-h2-y) var(--sl-shadow-blur);
  --sl-shadow-h3-x: 7px;
  --sl-shadow-h3-y: 10px;
  --sl-shadow-h3: var(--sl-shadow-h3-x) var(--sl-shadow-h3-y) var(--sl-shadow-blur);
  --sl-shadow-h4-x: 8px;
  --sl-shadow-h4-y: 12.5px;
  --sl-shadow-h4: var(--sl-shadow-h4-x) var(--sl-shadow-h4-y) var(--sl-shadow-blur);
  --sl-shadow-h5-x: 9px;
  --sl-shadow-h5-y: 15px;
  --sl-shadow-h5: var(--sl-shadow-h5-x) var(--sl-shadow-h5-y) var(--sl-shadow-blur);
  --sl-shadow-h6-x: 10px;
  --sl-shadow-h6-y: 17.5px;
  --sl-shadow-h6: var(--sl-shadow-h6-x) var(--sl-shadow-h6-y) var(--sl-shadow-blur);
  --sl-shadow-h7-x: 11px;
  --sl-shadow-h7-y: 20px;
  --sl-shadow-h7: var(--sl-shadow-h7-x) var(--sl-shadow-h7-y) var(--sl-shadow-blur);
  
  --sl-text-size: 14px;

  --sl-h1-size: 48px;
  --sl-h2-size: 40px;
  --sl-h3-size: 32px;
  --sl-h4-size: 24px;
  --sl-h5-size: 16px;
  --sl-h6-size: 12px;

  // Z Indexes
  --sl-z-index-background: 200;
  --sl-z-index-content: 400;
  --sl-z-index-modal: 600;
  --sl-z-index-alert: 800;
```
