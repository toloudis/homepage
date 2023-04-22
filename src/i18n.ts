export default {
  language: "en",
  dark_mode: "Dark mode",
  home_welcome: "Welcome to",
  home_i: "",
  home_what_i_do: "Completely Different Productions",
  home_job:
    "Computer graphics specialist, tool builder for artists and scientists, basketball fan, artist, cat attendant.",
  home_location: "Based near Seattle, WA",
  home_contact_btn: "Get in touch",
  menu_about: "About",
  menu_projects: "Projects",
  menu_experience: "Experience",
  menu_contact: "Contact",
  menu_resume: "Resume",
  about_desc:
    "After a Masters degree in Physics, with study in experimental particle physics and laser optics, I left school to become a software engineer and start a new phase of life in Seattle.  I quickly realized that computer graphics was the area that was the most exciting to me, combining my interests in art, math, and science. My career has brought me into business software, animation production, mobile advertising, and scientific visualization.",
  experience: [
    {
      job: "Software Engineer Principal",
      overview:
        "At AICS I develop graphics-centric tools focused on visualizing scientific data.  We primarily work on making large volumetric data interactively viewable in 3d.  Additionally I contributed the rendering system for Simularium, a website for sharing and distributing simulation results in a realtime 3d viewer.  I provide technical leadership on a variety of other projects as well.",
      duration: "Aug 2016 - Present",
    },
    {
      job: "Senior Software Engineer",
      overview:
        "At Dreamworks Animation studios I contributed a variety of rendering and graphics features to the animation and lighting tools.  To name a few: a refractive eye shader to let animators see proper eye lines;  hierarchical occlusion culling with LoD to allow geometrically complex environments to be shown interactively; and onion-skin ghosting to allow animators to see adjacent animation frames.",
      duration: "2011 - 2012",
    },
    {
      job: "Graphics Architect",
      overview:
        "At Studio|GPU we developed a software pipeline and GPU renderer for animation productions.  The main software, MachStudio, let users see a high fidelity interactive render while making edits to lighting and materials. The studio produced the first ever full length GPU-rendered feature.  I was responsible for all rendering features in the product.  The studio shut down in 2011.",
      duration: "2005 - 2010",
    },
  ],
  projects: [
    {
      overview:
        "AGAVE is a physically based volumetric pathtracer for scientific data.",
      extended_overview:
        "AGAVE was designed to test the limits of GPU raytracing for dense multichannel volume data.  The main purpose is to render 3D microscopy data and computational artifacts like segmentations.  It can load data from the cloud (in the OME-Zarr format) as well as local files.  It uses a physically based camera model and provides tools for easily rendering out time lapses. AGAVE can also be run in server mode with a Python or Javascript client.",
    },
    {
      overview: "Web-based viewer for multichannel volume data.",
      extended_overview:
        "website-3d-cell-viewer was first realized to display multichannel volume data interactively for Cell Feature Explorer, a web front end for large imaging datasets.  Since then it has been released as a standalone viewer, and also as a Jupyter Lab extension.",
    },
    {
      overview: "Web-based 3D viewer for simulation results.",
      extended_overview:
        "The Simularium viewer is a web browser-based realtime playback engine for 3d simulation data.  It is designed to render large numbers of agents and update their positions quickly.  It can display agent geometry as simple primitives, 3d meshes, molecular structures, or long curved tubes.",
    },
  ],
  contact_full_name: "Full name",
  contact_email: "E-mail adress",
  contact_btn: "Send message",
  project_load_btn: "Load more",
};
