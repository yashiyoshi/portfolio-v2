export interface Projects {
  fields: any;
  title: string;
  projectLink: string;
  image: {
    fields: {
      file: {
        url: string;
      };
    };
  };
  description: string;
  technologies: string[];
}
