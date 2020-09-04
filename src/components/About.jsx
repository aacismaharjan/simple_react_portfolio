import React from "react";
import { Section } from "./";
import defaultImg from "../assets/cover.jpg";

import { Grid, Container, Typography, Button } from "@material-ui/core";

export default function About() {
  return (
    <div>
      <Section title="Something about me!">
        <Container maxWidth="lg" disableGutters className="about">
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <div className="widget-picture">
                <img src={defaultImg} alt="img" width="100%" />
              </div>
            </Grid>

            <Grid item xs={12} md={6}>
              <div className="widget-content">
                <Typography variant="h4" component="h4">
                  Short Biography
                </Typography>

                <Typography variant="body1">
                  Aashish Maharjan connects online brands to their target
                  audiences for the perfect communicating experience. At the
                  Gyanodaya School, Aashish learned the importance of applying
                  classic web designing ideas to modern brands strategies from
                  experts in the field, including his Computer Teacher, Mr.
                  Mannor Shakya.
                </Typography>

                <Typography variant="body1">
                  Recently, he won the Web Design competition at SXC Computer
                  festival 2019 and participated in a group project on improving
                  Web Designing. Aashish is currently finishing his College in
                  Management Faculty and hopes to intern in an online web
                  designing department in the near future.
                </Typography>
                <Button variant="contained" color="primary">
                  Download CV
                </Button>
              </div>
            </Grid>
          </Grid>
        </Container>
      </Section>
    </div>
  );
}
