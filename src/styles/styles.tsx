const styles = {
  container: {
    padding: "20px",
  },
  title: {
    textAlign: "center",
    color: "#333",
    fontWeight: "bold",
  },
  textField: {
    marginRight: "15px",
    marginBottom: "15px",

    width: "250px",
    borderRadius: "10px",

    "& .MuiOutlinedInput-root": {
      borderRadius: "10px",
    },
  },
  modalContainer: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "none",
    borderRadius: 8,
    boxShadow: 24,
    p: 4,
  },
  modalHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  modalContent: {
    marginTop: 2,
  },
  table: {
    minWidth: 650,
    borderRadius: "10px",
    boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.1)",
  },
  tableHead: {
    backgroundColor: "#f1f1f1",
  },
  tableCellHeader: {
    fontWeight: "bold",
    fontSize: "16px",
  },
  tableContainer: {
    width: "100%",
    overflowX: "auto",
  },
  tableRowHover: {
    "&:hover": {
      backgroundColor: "#f1f1f1",
    },
  },
};

export default styles;
