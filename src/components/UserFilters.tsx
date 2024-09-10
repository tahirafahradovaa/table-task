import React, { ChangeEvent } from "react";
import { TextField, Box } from "@mui/material";
import styles from "../styles/styles";

interface UserFiltersProps {
  filters: {
    name: string;
    username: string;
    email: string;
    phone: string;
  };
  onFilterChange: (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    key: string
  ) => void;
}

const filterFields = [
  { label: "Name", key: "name" },
  { label: "Username", key: "username" },
  { label: "Email", key: "email" },
  { label: "Phone", key: "phone" },
] as const;

const UserFilters: React.FC<UserFiltersProps> = ({
  filters,
  onFilterChange,
}) => {
  return (
    <Box>
      {filterFields.map(({ label, key }) => (
        <TextField
          key={key}
          label={label}
          value={(filters as any)[key]}
          onChange={(e) => onFilterChange(e, key)}
          variant="outlined"
          sx={styles.textField}
        />
      ))}
    </Box>
  );
};

export default UserFilters;
