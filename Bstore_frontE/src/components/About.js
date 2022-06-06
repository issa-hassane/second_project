import { Box, Typography } from "@mui/material";
import React from "react";

const About = () => {
  return (
    <div>
      <Box display="flex" flexDirection="column" alignItems="center">
        <Typography sx={{ fontFamily: "fantasy" }} variant="h3">
          This is a simple CRUD Application
        </Typography>
        <Typography sx={{ fontFamily: "fantasy" }} variant="h5">
          By issa
        </Typography>
      </Box>
    </div>
  );
};

export default About;
