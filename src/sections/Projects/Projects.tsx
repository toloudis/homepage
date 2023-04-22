import SectionContainer from "../../containers/SectionContainer";
import ProjectsGallery from "../../components/ProjectsGallery";
import t from "../../i18n";

const Projects: React.FC = () => {
  return (
    <SectionContainer id="projects" title={t["menu_projects"]} maxWidth="md">
      <ProjectsGallery />
    </SectionContainer>
  );
};

export default Projects;
