import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/useAppDispatch";
import { getUsers, setFilters } from "../store/slice/usersSlice";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TableSortLabel,
  Box,
  CircularProgress,
  Typography,
  Button,
} from "@mui/material";
import UserFilters from "./UserFilters";
import styles from "../styles/styles";
import ProjectSummaryModal from "./ProjectSummary";

type SortOrder = "asc" | "desc";

const UserTable: React.FC = () => {
  const dispatch = useAppDispatch();
  const { users, filters, loading } = useAppSelector((state) => state.users);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [sortField, setSortField] = useState<string>("name");
  const [sortOrder, setSortOrder] = useState<SortOrder>("asc");

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  const handleFilterChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    key: string
  ) => {
    const trimmedValue = e.target.value.trim();
    if (trimmedValue !== "" || e.target.value === "") {
      dispatch(setFilters({ [key]: trimmedValue }));
    }
  };

  const handleSortChange = (field: string) => {
    const isAsc = sortField === field && sortOrder === "asc";
    setSortField(field);
    setSortOrder(isAsc ? "desc" : "asc");
  };

  const sortedUsers = [...users].sort((a, b) => {
    if (sortOrder === "asc") {
      return (a[sortField as keyof typeof a] as string).localeCompare(
        b[sortField as keyof typeof b] as string
      );
    } else {
      return (b[sortField as keyof typeof b] as string).localeCompare(
        a[sortField as keyof typeof a] as string
      );
    }
  });

  const filteredUsers = sortedUsers.filter((user) => {
    const { name, username, email, phone } = user;
    const {
      name: filterName,
      username: filterUsername,
      email: filterEmail,
      phone: filterPhone,
    } = filters;
    return (
      name.toLowerCase().includes(filterName.toLowerCase()) &&
      username.toLowerCase().includes(filterUsername.toLowerCase()) &&
      email.toLowerCase().includes(filterEmail.toLowerCase()) &&
      phone.includes(filterPhone)
    );
  });

  return (
    <>
      <UserFilters filters={filters} onFilterChange={handleFilterChange} />
      <Button
        variant="contained"
        color="primary"
        onClick={() => setIsModalOpen(true)}
        sx={{ marginBottom: 2 }}
      >
        Project Summary
      </Button>
      {loading ? (
        <Box sx={{ display: "flex", justifyContent: "center", marginTop: 2 }}>
          <CircularProgress />
        </Box>
      ) : (
        <Box sx={styles.tableContainer}>
          {filteredUsers.length === 0 ? (
            <Typography variant="h6" sx={{ textAlign: "center", marginTop: 2 }}>
              No users found
            </Typography>
          ) : (
            <Table sx={styles.table}>
              <TableHead sx={styles.tableHead}>
                <TableRow>
                  <TableCell sx={styles.tableCellHeader}>
                    <TableSortLabel
                      active={sortField === "name"}
                      direction={sortField === "name" ? sortOrder : "asc"}
                      onClick={() => handleSortChange("name")}
                    >
                      Name
                    </TableSortLabel>
                  </TableCell>
                  <TableCell sx={styles.tableCellHeader}>
                    <TableSortLabel
                      active={sortField === "username"}
                      direction={sortField === "username" ? sortOrder : "asc"}
                      onClick={() => handleSortChange("username")}
                    >
                      Username
                    </TableSortLabel>
                  </TableCell>
                  <TableCell sx={styles.tableCellHeader}>
                    <TableSortLabel
                      active={sortField === "email"}
                      direction={sortField === "email" ? sortOrder : "asc"}
                      onClick={() => handleSortChange("email")}
                    >
                      Email
                    </TableSortLabel>
                  </TableCell>
                  <TableCell sx={styles.tableCellHeader}>
                    <TableSortLabel
                      active={sortField === "phone"}
                      direction={sortField === "phone" ? sortOrder : "asc"}
                      onClick={() => handleSortChange("phone")}
                    >
                      Phone
                    </TableSortLabel>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {filteredUsers.map((user) => (
                  <TableRow key={user.id} sx={styles.tableRowHover}>
                    <TableCell>{user.name}</TableCell>
                    <TableCell>{user.username}</TableCell>
                    <TableCell>{user.email}</TableCell>
                    <TableCell>{user.phone}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          )}
        </Box>
      )}
      <ProjectSummaryModal
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
};

export default UserTable;
