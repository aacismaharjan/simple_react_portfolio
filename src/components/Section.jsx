import React from "react";
import Typography from "@material-ui/core/Typography";

export default function Section(props) {
  const defaultSection = {
    title: "Section Title",
    body: "Silence is Gold!",
  };

  const { title, body } = defaultSection;

  return (
    <section className="section-box">
      <div className="section-title">
        <Typography variant="h3" component="h3">
          {props.title || title}
        </Typography>

        <Typography variant="body1">{props.body || body}</Typography>
      </div>
      <div className="container">{props.children}</div>
    </section>
  );
}
