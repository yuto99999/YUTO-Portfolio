import React from "react";
import { Box, Tab, Tabs } from "@mui/material";
import Skills from "./Skills";
import Works from "./Works";
import About from "./About";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 1 }}>
          <Box>{children}</Box>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function TabPanel() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%", bgcolor: "#ffffff" }}>
      <Box
        sx={{
          borderColor: "divider",
          display: "flex",
          textAlign: "center",
          justifyContent: "center",
        }}
      >
        <Tabs value={value} onChange={handleChange} centered>
          <Tab label="About" />
          <Tab label="Works" />
          <Tab label="Skills" />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <About />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <Works />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <Skills />
      </CustomTabPanel>
    </Box>
  );
}
