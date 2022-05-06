import React from "react";
import "./services.css";
import { BiCheck } from "react-icons/bi";

function Services() {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container  services__container">
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                t is a long established fact that a reader will be distracted by
                the readable content of a page when looking at its layout.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                t is a long established fact that a reader will be distracted by
                the readable content of a page when looking at its layout.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                t is a long established fact that a reader will be distracted by
                the readable content of a page when looking at its layout.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                t is a long established fact that a reader will be distracted by
                the readable content of a page when looking at its layout.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                t is a long established fact that a reader will be distracted by
                the readable content of a page when looking at its layout.
              </p>
            </li>
          </ul>
        </article>
        {/*end of ui/ux*/}
        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                t is a long established fact that a reader will be distracted by
                the readable content of a page when looking at its layout.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                t is a long established fact that a reader will be distracted by
                the readable content of a page when looking at its layout.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                t is a long established fact that a reader will be distracted by
                the readable content of a page when looking at its layout.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                t is a long established fact that a reader will be distracted by
                the readable content of a page when looking at its layout.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                t is a long established fact that a reader will be distracted by
                the readable content of a page when looking at its layout.
              </p>
            </li>
          </ul>
        </article>
        {/*end of Web  development*/}
        <article className="service">
          <div className="service__head">
            <h3>Content Creation</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                t is a long established fact that a reader will be distracted by
                the readable content of a page when looking at its layout.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                t is a long established fact that a reader will be distracted by
                the readable content of a page when looking at its layout.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                t is a long established fact that a reader will be distracted by
                the readable content of a page when looking at its layout.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                t is a long established fact that a reader will be distracted by
                the readable content of a page when looking at its layout.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                t is a long established fact that a reader will be distracted by
                the readable content of a page when looking at its layout.
              </p>
            </li>
          </ul>
        </article>
        {/*end of content creation*/}
      </div>
    </section>
  );
}

export default Services;
