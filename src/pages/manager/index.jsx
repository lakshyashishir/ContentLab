import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import Header from "../../components/Header";
import {Configuration , OpenAIApi } from 'openai';
import { useState } from "react";

import Ok from './src/ok';


const Manager = () => {

    return(
        <Box m="20px">
        <Header title="Virtual Assitant" subtitle="Available 24X7" />
        < Ok />
        </Box>

      
    )
}

export default Manager;