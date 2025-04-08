import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const data = [
  {
    id: 1,
    question: "How does the rental process work?",
    answer:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
  },
  {
    id: 2,
    question: "What if the equipment gets damaged during my rental?",
    answer:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
  },
  {
    id: 3,
    question: "How do deposits work?",
    answer:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
  },
  {
    id: 4,
    question: "Can I extend my rental period?",
    answer:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
  },
  {
    id: 5,
    question: "How do I list my own equipment for rent??",
    answer:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
  },
  {
    id: 6,
    question: "What commission does CameraRush take from rentals??",
    answer:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
  },
];

const Faq = () => {
  return (
    <div className="flex flex-col gap-3 mx-auto my-5 p-5 h-full w-full">
      <div className="flex flex-col justify-center items-center text-center mb-8">
        <h1 className="text-2xl md:text-3xl font-bold mb-2">
          Frequently Asked Questions
        </h1>
        <p className="text-gray-600 max-w-lg capitalize">
          got questions? we've got answers. if you dont see what you are looking for reach out to the team
        </p>
      </div>
      <div className="w-full">
        {data.map((item) => (
          <Accordion key={item.id} className="w-100%">
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls={`panel${item.id}-content`}
              id={`panel${item.id}-header`}
            >
              <Typography component="span">{item.question}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>{item.answer}</Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </div>
      <p className="text-center capitalize text-xl">Still have questions?</p>
      <p className="text-center capitalize text-xl text-blue-500">
        Contact our Support team
      </p>
    </div>
  );
};

export default Faq;
