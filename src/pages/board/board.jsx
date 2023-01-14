import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import Header from "../../components/Header";
import { tokens } from "../../theme";
import Board1 from "./board/Board";


const Board = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return(
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
      <Header title="Board" subtitle="Managing the Team Members" />
      <Board1 />
      </Box>
    </Box>  
  )
}

export default Board;