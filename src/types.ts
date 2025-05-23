export interface Team {
  id: number;
  name: string;
  leader: string;
  members: string[];
  projectName: string;
  projectTopic: string;
  notionLink: string;
  githubLink: string;
  figmaLink: string;
  deployUrl: string;
}

export interface TeamInfo {
  teams: Team[];
} 