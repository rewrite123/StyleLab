
interface CssVarsInterface {
  "--sl-primary-color"?: string;
  "--sl-secondary-color"?: string;
  "--sl-accent-color"?: string;
  "--sl-text-primary"?: string;
  "--sl-text-secondary"?: string;
  "--sl-background-primary"?: string;
  "--sl-background-secondary"?: string;
  "--sl-border-primary"?: string;
  "--sl-border-secondary"?: string;
  "--sl-shadow-primary"?: string;
  "--sl-shadow-secondary"?: string;
  "--sl-danger-color"?: string;
  "--sl-hazard-color"?: string;
  "--sl-warning-color"?: string;
  "--sl-success-color"?: string;
  "--sl-info-color"?: string;
  "--sl-disabled-color"?: string;
  "--sl-border-radius"?: string;
  "--sl-shadow-h1"?: string;
  "--sl-shadow-h2"?: string;
  "--sl-shadow-h3"?: string;
  "--sl-shadow-h4"?: string;
  "--sl-shadow-h5"?: string;
  "--sl-shadow-h6"?: string;
  "--sl-shadow-h7"?: string;
  "--sl-text-size"?: string;
  "--sl-h1-size"?: string;
  "--sl-h2-size"?: string;
  "--sl-h3-size"?: string;
  "--sl-h4-size"?: string;
  "--sl-h5-size"?: string;
  "--sl-h6-size"?: string;
  "--sl-in-font-size"?: string;
  "--sl-btn-font-size"?: string;
  "--sl-z-index-content"?: number;
  "--sl-z-index-modal"?: number;
  "--sl-z-index-alert"?: number;
}

const changeTheme = (el: HTMLElement, settings: CssVarsInterface)=>{
  const settingKeys = Object.keys(settings) as (keyof CssVarsInterface)[];
  for(let sKey of settingKeys){
    try{
      el.style.setProperty(sKey, `${settings[sKey]}`);
    }catch(err){
      console.log(`error setting ${sKey}`);
      console.log('You probably are not setting it to a valid property.');
    }
  }
};