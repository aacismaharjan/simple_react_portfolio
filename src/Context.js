import React, { Component } from "react";
import userAvatar from "./assets/default.jpg";

const DataContext = React.createContext();

class DataProvider extends Component {
  state = {
    user: {
      name: "Aashish Maharjan",
      img: userAvatar,
    },
    blogs: [
      {
        title: "Web Hosting Sites In Nepal 2020-Cheapest web hosting in nepal",
        body:
          "Web Hosting Sites In Nepal -Get all the info. About web hosting sites in Nepal: cloud hosting, Wordpress hosting, domain registration, web ...",
        date: "4th Sep, 2020",
      },
      {
        title:
          "Tamilrockers Dubbed Movies HD| Download All Hindi Dubbed Movies",
        body:
          "Tamilrockers Dubbed Movies HD| Download Malayalam movies Tamilrockers Dubbed Movies Hd Tamilrockers is an illegal movie pirate sit...",
        date: "4th Sep, 2020",
      },
      {
        title: "Extend Trial Period of any Software(FREE) for Lifetime",
        body:
          "Extend the trial period of any software   We all want the trial period of any software to be unlimited, which we can't a...",
        date: "4th Sep, 2020",
      },
    ],
  };
  render() {
    return (
      <DataContext.Provider value={{ ...this.state }}>
        {this.props.children}
      </DataContext.Provider>
    );
  }
}

const DataConsumer = DataContext.Consumer;

export function withRoomConsumer(Component) {
  return function ConsumerWrapper(props) {
    return (
      <DataConsumer>
        {(value) => <Component {...props} context={value} />}
      </DataConsumer>
    );
  };
}

export { DataProvider, DataConsumer, DataContext };
