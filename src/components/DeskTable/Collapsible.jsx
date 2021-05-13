import React from "react";
import Box from "@material-ui/core/Box";
import Collapse from "@material-ui/core/Collapse";
import Button from "@material-ui/core/Button";
import { FirebaseContext } from "../../components/Firebase/context";

const Collapsible = ({ open, deskId }) => {
  const { openModal } = React.useContext(FirebaseContext);

  return (
    <Collapse in={open} timeout="auto" unmountOnExit>
      <Box margin={1}>
        <Button
          variant="outlined"
          color="primary"
          onClick={() => openModal(deskId)}
        >
          Add Employee
        </Button>
      </Box>
    </Collapse>
  );
};

export default Collapsible;
