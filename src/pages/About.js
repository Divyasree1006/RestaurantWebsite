import React from "react";
import Layout from "./../components/Layout/Layout";
import { Box, Typography } from "@mui/material";

const About = () => {
  return (
    <Layout>
      <Box
        sx={{
          my: 15,
          textAlign: "center",
          p: 2,
          "& h4": {
            fontWeight: "bold",
            my: 2,
            fontSize: "2rem",
          },
          "& p": {
            textAlign: "justify",
          },
          "@media (max-width:600px)": {
            mt: 0,
            "& h4 ": {
              fontSize: "1.5rem",
            },
          },
        }}
      >
        <Typography variant="h4">Welcome To My Fav Resturant</Typography>
        <p>
        A restaurant is an establishment where meals and drinks are prepared and served to customers, typically in a casual or formal setting. It offers a variety of cuisines and dining experiences, catering to different tastes and preferences. Restaurants can range from fast food to fine dining, each providing a unique atmosphere and menu to enhance the dining experience.
        </p>
        <br />
        <p>
        The ambiance of a restaurant is a critical aspect that greatly influences the dining experience. It encompasses various elements, including lighting, decor, music, and overall layout. Soft, warm lighting can create a cozy atmosphere, while lively music can energize the space. Thoughtful decor, whether rustic, modern, or themed, adds character and sets the tone for the experience. The arrangement of tables and seating contributes to comfort and privacy, allowing guests to enjoy their meals without feeling cramped. Together, these elements create an inviting ambiance that enhances customer satisfaction and encourages patrons to return.
        </p>
      </Box>
    </Layout>
  );
};

export default About;
