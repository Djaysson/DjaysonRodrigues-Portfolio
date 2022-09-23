export type ProjectData = {
  slug: string;
  title: string;
  occupation: string;
  tech: string;
  hosting: string;
  context: string;
  category: string;
  description: string;
  demo: string;
  github: string;
  icon: string;
  thumbnail: string;
};
export type ProjectsProps = {
  projects: ProjectData[];
};
export type HomeProps = {
  projects: ProjectData[];
};
export type ProjectProps = {
  project: ProjectData;
};

export type ProjectItemsProps = {
  title: string;
  type: string;
  slug: string;
  img: string;
};

export type AllProjectItemsProps = {
  title: string;
  type: string;
  slug: string;
  imgUrl: string;
};

export type BannerProps = {
  title: string;
  type: string;
  imgUrl: string;
};

export type NavProps = {
  title: string;
  path: string;
  icon?: string;
  description?: string;
  includes?: boolean;
};

export type PageTitleProps = {
  title: string;
  description?: string;
  classN?: string;
};
