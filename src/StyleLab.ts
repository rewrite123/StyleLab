import './index.scss';

// type HexColorCharType = "1"|"2"|"3"|"4"|"5"|"6"|"7"|"8"|"9"|"a"|"b"|"c"|"d"|"e"|"f";
// type RgbColorCharType = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 | 36 | 37 | 38 | 39 | 40 | 41 | 42 | 43 | 44 | 45 | 46 | 47 | 48 | 49 | 50 | 51 | 52 | 53 | 54 | 55 | 56 | 57 | 58 | 59 | 60 | 61 | 62 | 63 | 64 | 65 | 66 | 67 | 68 | 69 | 70 | 71 | 72 | 73 | 74 | 75 | 76 | 77 | 78 | 79 | 80 | 81 | 82 | 83 | 84 | 85 | 86 | 87 | 88 | 89 | 90 | 91 | 92 | 93 | 94 | 95 | 96 | 97 | 98 | 99 | 100 | 101 | 102 | 103 | 104 | 105 | 106 | 107 | 108 | 109 | 110 | 111 | 112 | 113 | 114 | 115 | 116 | 117 | 118 | 119 | 120 | 121 | 122 | 123 | 124 | 125 | 126 | 127 | 128 | 129 | 130 | 131 | 132 | 133 | 134 | 135 | 136 | 137 | 138 | 139 | 140 | 141 | 142 | 143 | 144 | 145 | 146 | 147 | 148 | 149 | 150 | 151 | 152 | 153 | 154 | 155 | 156 | 157 | 158 | 159 | 160 | 161 | 162 | 163 | 164 | 165 | 166 | 167 | 168 | 169 | 170 | 171 | 172 | 173 | 174 | 175 | 176 | 177 | 178 | 179 | 180 | 181 | 182 | 183 | 184 | 185 | 186 | 187 | 188 | 189 | 190 | 191 | 192 | 193 | 194 | 195 | 196 | 197 | 198 | 199 | 200 | 201 | 202 | 203 | 204 | 205 | 206 | 207 | 208 | 209 | 210 | 211 | 212 | 213 | 214 | 215 | 216 | 217 | 218 | 219 | 220 | 221 | 222 | 223 | 224 | 225 | 226 | 227 | 228 | 229 | 230 | 231 | 232 | 233 | 234 | 235 | 236 | 237 | 238 | 239 | 240 | 241 | 242 | 243 | 244 | 245 | 246 | 247 | 248 | 249 | 250 | 251 | 252 | 253 | 254 | 255;
// type string = 
//   `#${HexColorCharType}${HexColorCharType}${HexColorCharType}` // #RGB
//   | `#${HexColorCharType}${HexColorCharType}${HexColorCharType}${HexColorCharType}` // #RGBA
//   // @ts-ignore
//   | `#${HexColorCharType}${HexColorCharType}${HexColorCharType}${HexColorCharType}${HexColorCharType}${HexColorCharType}`// #RRGGBB
//   // @ts-ignore
//   | `#${HexColorCharType}${HexColorCharType}${HexColorCharType}${HexColorCharType}${HexColorCharType}${HexColorCharType}${HexColorCharType}${HexColorCharType}` // #RRGGBBAA
//   // @ts-ignore
//   | `rgb(${RgbColorCharType},${RgbColorCharType},${RgbColorCharType})`
//   // @ts-ignore
//   | `rgba(${RgbColorCharType},${RgbColorCharType},${RgbColorCharType},${RgbColorCharType})`;

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


const styleLabFn = (el: HTMLElement, settings: CssVarsInterface)=>{
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
window.addEventListener('load', (event)=>{
  (window as any).stylelab = styleLabFn;
});
export default styleLabFn;