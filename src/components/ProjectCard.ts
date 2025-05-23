import type { Project } from '../types/project';

export class ProjectCard {
  private project: Project;

  constructor(project: Project) {
    this.project = project;
  }

  private createLinkElement(href: string | undefined, icon: string, text: string): HTMLElement {
    const link = document.createElement('a');
    link.href = href || '#';
    link.className = 'btn btn-outline-primary btn-sm me-2';
    link.target = '_blank';
    link.innerHTML = `<i class="bi bi-${icon}"></i> ${text}`;
    if (!href) {
      link.classList.add('disabled');
    }
    return link;
  }

  render(): HTMLElement {
    const card = document.createElement('div');
    card.className = 'col-md-6 col-lg-4';
    
    card.innerHTML = `
      <div class="card h-100">
        <div class="card-body">
          <h5 class="card-title">${this.project.teamName}</h5>
          <h6 class="card-subtitle mb-2 text-muted">${this.project.projectName}</h6>
          <p class="card-text">${this.project.description}</p>
          
          <h6 class="mt-3">팀원</h6>
          <ul class="list-unstyled">
            ${this.project.members.map(member => `
              <li>
                ${member.name} - ${member.role}
                ${member.github ? `<a href="${member.github}" target="_blank" class="ms-2"><i class="bi bi-github"></i></a>` : ''}
              </li>
            `).join('')}
          </ul>
          
          <div class="mt-3">
            ${this.createLinkElement(this.project.links.notion, 'notion', 'Notion').outerHTML}
            ${this.createLinkElement(this.project.links.figma, 'figma', 'Figma').outerHTML}
            ${this.createLinkElement(this.project.links.github, 'github', 'GitHub').outerHTML}
            ${this.createLinkElement(this.project.links.deploy, 'box-arrow-up-right', '배포').outerHTML}
          </div>
        </div>
      </div>
    `;

    return card;
  }
} 