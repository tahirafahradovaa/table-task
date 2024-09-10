import React from "react";
import UserTable from "../components/UserTable";
import { Box, Typography } from "@mui/material";
import styles from "../styles/styles";

const Home: React.FC = () => {
  return (
    <Box sx={styles.container}>
      <Typography sx={styles.title} my={2} variant="h4">
        Users
      </Typography>
      <UserTable />
    </Box>
  );
};

export default Home;
