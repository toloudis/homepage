import React, { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import { AnimatePresence, LayoutGroup } from "framer-motion";
import { Grid, Button, Box, useMediaQuery, useTheme } from "@mui/material";
import Card from "./Card";
import ExtendedCard from "./ExtendedCard";
import { projectList } from "../../data";
import type { MyProject } from "../../data";
import t from "../../i18n";

const PREFIX = "ProjectsGallery";

const classes = {
  galleryContainer: `${PREFIX}-galleryContainer`,
  item: `${PREFIX}-item`,
  loadBtn: `${PREFIX}-loadBtn`,
};

// TODO jss-to-styled codemod: The Fragment root was replaced by div. Change the tag if needed.
const Root = styled("div")(({ theme: _theme }) => ({
  [`& .${classes.galleryContainer}`]: {
    overflow: "visible",
    width: "100%",
    margin: "0 auto",
  },

  [`& .${classes.item}`]: {
    overflow: "visible",
  },

  [`& .${classes.loadBtn}`]: {
    width: "200px",
  },
}));

const ProjectsGallery: React.FC = () => {
  const [selectedId, setSelectedId] = useState<null | number>(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [loadedProjects, setLoadedProjects] = useState<MyProject[]>([]);
  const [pageNo, setPageNo] = useState(0);
  const [pageSize, setPageSize] = useState(6);

  const getSelected = (id: number) =>
    projectList.find((elem) => elem.id === id);

  function loadProjects() {
    const startIndex = pageNo * pageSize;
    const endIndex = startIndex + pageSize;
    let newProjects = projectList.filter((_value, index) => {
      return index >= startIndex && index < endIndex;
    });
    setLoadedProjects((prevProjects: MyProject[]) => [
      ...prevProjects,
      ...newProjects,
    ]);
    setPageNo((prevPageNo) => prevPageNo + 1);
  }

  useEffect(() => {
    if (isMobile) {
      setPageSize(3);
    }
    loadProjects();

    // when unmounting, reset loadedProjects
    return () => {
      setPageNo(0);
      setLoadedProjects([]);
    };
  }, []);

  console.log("loadedProjects after pageNo: ", pageNo, " pageSize: ", pageSize);
  console.log(loadedProjects);
  return (
    <Root>
      <LayoutGroup>
        <Grid
          container
          spacing={4}
          className={classes.galleryContainer}
          sx={{
            overflow: "visible",
            width: "100%",
            margin: "0 auto",
          }}
        >
          {loadedProjects.map((item, k) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              key={k}
              classes={{ item: classes.item }}
            >
              <Card
                id={"" + item.id}
                title={item.title}
                overview={t.projects[item.id - 1].overview}
                backgroundImage={item.backgroundImage}
                frontImage={item.frontImage}
                technologies={item.technologies}
                onClick={() => setSelectedId(item.id)}
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
              />
            </Grid>
          ))}
        </Grid>
        <AnimatePresence>
          {selectedId && (
            <ExtendedCard
              key={selectedId}
              id={"" + selectedId}
              title={getSelected(selectedId)?.title}
              overview={t.projects[selectedId - 1].extended_overview}
              backgroundImage={getSelected(selectedId)?.backgroundImage}
              frontImage={getSelected(selectedId)?.frontImage}
              technologies={getSelected(selectedId)?.technologies}
              handleClose={() => setSelectedId(null)}
            />
          )}
        </AnimatePresence>
      </LayoutGroup>
      {loadedProjects.length < projectList.length && (
        <Box display="flex" justifyContent="center" mt={2}>
          <Button
            className={classes.loadBtn}
            sx={{
              width: "200px",
            }}
            onClick={loadProjects}
            variant="contained"
            color="primary"
          >
            {t["project_load_btn"]}
          </Button>
        </Box>
      )}
    </Root>
  );
};

export default ProjectsGallery;
