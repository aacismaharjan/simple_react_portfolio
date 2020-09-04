import React from "react";
import { Section } from "./";

export default function Contact() {
  return (
    <Section title="Contact">
      <div className="contact">
        <div className="widget-map">
          {/* <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56516.27689201412!2d85.29111313455002!3d27.70903193365019!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb198a307baabf%3A0xb5137c1bf18db1ea!2sKathmandu%2044600!5e0!3m2!1sen!2snp!4v1599123456003!5m2!1sen!2snp"
            width="600"
            height="450"
            frameBorder="0"
            allowFullScreen=""
            tabIndex="0"
          ></iframe> */}
        </div>

        <div className="widget-form">
          <form action="#">
            <div className="input-field">
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" />
            </div>

            <div className="input-field">
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" />
            </div>

            <div className="input-field">
              <label htmlFor="name">Messsage:</label>
              <textarea
                name="message"
                id="message"
                cols="30"
                rows="10"
              ></textarea>
            </div>

            <button>Send</button>
          </form>
        </div>
      </div>
    </Section>
  );
}
