import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import Header from "../../components/Header";
import { tokens } from "../../theme";
import Board1 from "./board/Board";


const Board = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return(
    <Box m="20px">
      <Header title="Board" subtitle="View every progress" />
      <Board1 />
      </Box>
  )
}

export default Board;