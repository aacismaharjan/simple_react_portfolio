import React, { useContext } from "react";
import thumbnail from "../assets/thumbnail.jpg";
import { Section } from "./";
import { DataContext } from "../Context";
import {
  Grid,
  Card,
  CardActionArea,
  CardMedia,
  Typography,
  Box,
  CardContent,
  CardActions,
  Avatar,
  Container,
} from "@material-ui/core";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";

const Blog = ({ user, blog }) => {
  const { name, img } = user;
  const { title, body, date } = blog;
  return (
    <Grid item xm={12} sm={6} md={4}>
      <Card className="blog-card">
        <CardActionArea>
          <CardMedia className="blog-thumbnail" image={thumbnail} />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {body}
            </Typography>
          </CardContent>
        </CardActionArea>

        <CardActions className="blog-card-actions">
          <Box className="blog-user-profile">
            <Avatar src={img}></Avatar>
            <Box ml={2}>
              <Typography variant="subtitle2" component="p">
                {name}
              </Typography>
              <Typography
                variant="subtitle2"
                color="textSecondary"
                component="p"
              >
                {date}
              </Typography>
            </Box>
          </Box>

          <Box>
            <BookmarkBorderIcon />
          </Box>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default function Blogs() {
  const { blogs, user } = useContext(DataContext);
  return (
    <div>
      <Section title="Featured Blogs">
        <Container maxWidth="lg" className="blogs">
          <Grid container spacing={3}>
            {blogs.length &&
              blogs.map((blog, index) => (
                <Blog key={index} user={user} blog={blog} />
              ))}
          </Grid>
        </Container>
      </Section>
    </div>
  );
}
