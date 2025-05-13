import '../../../style.css';

import tailwindcss from '../../../style.css';

console.log(tailwindcss);

const template = document.createElement('template');
template.innerHTML = `
  <style> ${tailwindcss} </style>
  <div>
    <span class="text-2xl text-blue-800">with Tailwind CSS</span>
  </div>
`;

class Component02 extends HTMLElement {
  constructor() {
    super();
    // const shadow = this.attachShadow({ mode: 'open' });
    // shadow.append(template.content.cloneNode(true));
    this.appendChild(template.content.cloneNode(true));
  }
}

customElements.define('component-02', Component02);
