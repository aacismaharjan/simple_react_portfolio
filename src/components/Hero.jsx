import React from "react";
import styles from "./components.css";
import userAvatar from "../assets/user.jpg";
import defaultImg from "../assets/default.jpg";
import { Typography, Button, Grid, Container, Box } from "@material-ui/core";

const Hero = (props) => {
  return (
    <Container maxWidth="md" disableGutters className="hero-container">
      <Grid container spacing={3} className="hero">
        <Grid item xs={12} md={8}>
          <Typography variant="h2" style={{ fontWeight: "bold" }} gutterBottom>
            Hi There!
            <br />
            I'm Aashish Maharjan
          </Typography>

          <Typography variant="body1" style={{ marginBottom: "20px" }}>
            Aashish Maharjan connects online brands to their target audiences
            for the perfect communicating experience.Aashish Maharjan connects
            online brands to their target audiences for the perfect
            communicating experience.
          </Typography>
          <Button variant="contained" color="primary">
            Download CV
          </Button>
        </Grid>

        <Grid item xs={12} md={4}>
          <img src={userAvatar} alt="img" />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Hero;
