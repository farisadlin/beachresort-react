import React, { Component } from "react";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";
import Title from "./Title";

export default class Services extends Component {
  state = {
    services: [
      {
        icon: <FaCocktail />,
        title: "free cocktails",
        info:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores nifnainf nifninfi nifanifa",
      },
      {
        icon: <FaHiking />,
        title: "Endless Hiking",
        info:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores nifnainf nifninfi nifanifa",
      },
      {
        icon: <FaShuttleVan />,
        title: "Free shuttle",
        info:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores nifnainf nifninfi nifanifa",
      },
      {
        icon: <FaBeer />,
        title: "Strongest Beer",
        info:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores nifnainf nifninfi nifanifa",
      },
    ],
  };
  render() {
    return (
      <section className="services">

        <Title title="services" />
        <div className="services-center">
            {this.state.services.map((data, index) => {
                return <article key={index} className="service">
                    <span>{data.icon}</span>
                    <h6>{data.title}</h6>
                    <p>{data.info}</p>
                </article>
            })}
        </div>
      </section>
    );
  }
}
