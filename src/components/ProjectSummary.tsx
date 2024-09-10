import React from "react";
import { Modal, Box, Typography, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import styles from "../styles/styles";

interface ProjectSummaryModalProps {
  open: boolean;
  onClose: () => void;
}

const ProjectSummaryModal: React.FC<ProjectSummaryModalProps> = ({
  open,
  onClose,
}) => {
  return (
    <Modal open={open} onClose={onClose}>
      <Box sx={styles.modalContainer}>
        <Box sx={styles.modalHeader}>
          <Typography variant="h6">Project Summary</Typography>
          <IconButton onClick={onClose}>
            <CloseIcon />
          </IconButton>
        </Box>
        <Box sx={styles.modalContent}>
          <Typography variant="body1">
            {/* Project summary goes here */}
            The project is a React-based user management table that allows users
            to view, filter, sort, and manage a list of users. It uses
            TypeScript for type safety and Material-UI (MUI) for styling and UI
            components. The project involves:
            <ul>
              <li>
                Fetching Data: Retrieving user data from a backend service.
              </li>
              <li>
                Filtering: Allowing users to filter the list of users based on
                different criteria.
              </li>
              <li>Sorting: Enabling sorting of user data by various fields.</li>
              <li>
                Displaying Data: Presenting the data in a table format with
                appropriate feedback when no users are found or while data is
                loading.
              </li>
            </ul>
          </Typography>
        </Box>
      </Box>
    </Modal>
  );
};

export default ProjectSummaryModal;
