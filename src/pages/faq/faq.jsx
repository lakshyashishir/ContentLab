import { Box, useTheme } from "@mui/material";
import Header from "../../components/Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../../theme";

const FAQ = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box m="20px">
      <Header title="FAQ" subtitle="Frequently Asked Questions Page" />

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            How to invite team members in ContentLab Teams?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Ask your teamates to go open teams.contentlab.ai and join the team with the title you set.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            How can I use virtual Assitant?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            You can ask anything to your Assistant. It helps even beyond content.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            What will I see on 
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Update is coming super soon. Sorry for inconvenience.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            How can I send Feedback?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <iframe src="https://docs.google.com/forms/d/e/1FAIpQLScvlACKxAQEoHxg8f3Si8C_NmTEFk1jFoRU6P0PmSCnW5O6Vg/viewform?embedded=true" width="640" height="734" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Any more questions
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Contact us : lakshyashishir1@gmail.com
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default FAQ;
