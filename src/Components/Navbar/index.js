import React, { useEffect, useState } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import { activateModal } from "../../action";
import { Link as Linker } from "react-router-dom";
import { signOut } from "../../action";

import { useDispatch, useSelector } from "react-redux";
import Modal from "../modal";
import MainBtn from "../MainBtn";
import "./style.css";

export default function Navbar() {
  const [headers, setHeaders] = useState(null);
  const token = useSelector((state) => state.auth.token);

  useEffect(() => {
    if (!headers) {
      fetch("http://localhost:3004/header")
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          setHeaders(data);
        });
    }
  });

  // console.log(headers[0].text);
  const dispatch = useDispatch();

  const scrollToTop = () => {
    scroll.scrollToTop();
  };
  return (
    <nav className="nav" id="navbar">
      <div className="nav-content">
        <img className="nav-logo" alt="Logo" onClick={scrollToTop} />
        <ul className="nav-items">
          <li className="nav-item">
            {headers && (
              <Link
                activeClass="active"
                to="section6"
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}
              >
                {headers[0].text}
              </Link>
            )}
          </li>
          <li className="nav-item">
            {headers && (
              <Link
                activeClass="active"
                to="section1"
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}
              >
                {headers[1].text}
              </Link>
            )}
          </li>
          <li className="nav-item">
            {headers && (
              <Link
                activeClass="active"
                to="section2"
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}
              >
                {headers[2].text}
              </Link>
            )}
          </li>
          <li className="nav-item">
            {headers && (
              <Link
                activeClass="active"
                to="section3"
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}
              >
                {headers[3].text}
              </Link>
            )}
          </li>
          <li className="nav-item">
            <Link
              activeClass="active"
              to="section4"
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
            >
              О нас
            </Link>
          </li>
          <li className="nav-item">
            <Link
              activeClass="active"
              to="section5"
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
            >
              Контакты
            </Link>
          </li>
        </ul>
        <button className="nav-btn" onClick={() => dispatch(activateModal())}>
          Заказать звонок
        </button>
        <Modal>
          <h1>
            Закажите звонок
            <br /> и с вами свяжутся в течении 1 Минуты
          </h1>
          <form className="forma">
            <input
              type="text"
              className="number"
              placeholder="Введите номер телефона"
            ></input>
            <br />
            <br />
            <MainBtn text="Заказать звонок" />
          </form>
        </Modal>
      </div>
      {token ? (
        <>
          <button className="out" onClick={() => dispatch(signOut())}>
            Sign out
          </button>
        </>
      ) : null}
    </nav>
  );
}
