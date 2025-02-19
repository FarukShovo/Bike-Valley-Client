import "./Footer.css";
import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaPinterest,
  FaEnvelope,
  FaAmbulance,
  FaDiagnoses,
  FaHeartbeat,

} from "react-icons/fa";
import { RiPsychotherapyFill } from "react-icons/ri";
import { BiBody } from "react-icons/bi";
import {
  FcCallback,
  FcGlobe,
  FcVoicemail,
  FcCellPhone,
  FcHome,
  FcServices,
  FcAbout,
  FcManager,
  FcCheckmark
} from "react-icons/fc";

const Footer = () => {
  return (
    <section className="footer">
      <div className="box-container">
        <div className="box">
          <h3>quick links</h3>
          <Link to="/home">
            {" "}
            <i className="fas fa-chevron-right">
              <FcHome></FcHome>
            </i>{" "}
            home{" "}
          </Link>
          <Link to="/home">
            {" "}
            <i className="fas fa-chevron-right">
              {" "}
              <FcServices></FcServices>{" "}
            </i>{" "}
            services{" "}
          </Link>
          <Link to="/home">
            {" "}
            <i className="fas fa-chevron-right">
              {" "}
              <FcAbout></FcAbout>{" "}
            </i>{" "}
            about{" "}
          </Link>
          <Link to="/home">
            {" "}
            <i className="fas fa-chevron-right">
              <FcManager></FcManager>
            </i>{" "}
            support{" "}
          </Link>
          <Link to="/home">
            {" "}
            <i className="fas fa-chevron-right">
              {" "}
              <FcCheckmark></FcCheckmark>{" "}
            </i>{" "}
            book{" "}
          </Link>
        </div>

        <div className="box">
          <h3>our services</h3>
          <Link to="/home">
            {" "}
            <i className="fas fa-chevron-right">
              {" "}
              <BiBody></BiBody>{" "}
            </i>{" "}
            care{" "}
          </Link>
          <Link to="/home">
            {" "}
            <i className="fas fa-chevron-right">
              {" "}
              <RiPsychotherapyFill></RiPsychotherapyFill>{" "}
            </i>{" "}
            replacement{" "}
          </Link>
          <Link to="/home">
            {" "}
            <i className="fas fa-chevron-right">
              {" "}
              <FaHeartbeat></FaHeartbeat>{" "}
            </i>{" "}
            design{" "}
          </Link>
          <Link to="/home">
            {" "}
            <i className="fas fa-chevron-right">
              {" "}
              <FaDiagnoses></FaDiagnoses>{" "}
            </i>{" "}
            art{" "}
          </Link>
          <Link to="/home">
            {" "}
            <i className="fas fa-chevron-right">
              {" "}
              <FaAmbulance></FaAmbulance>{" "}
            </i>{" "}
            service{" "}
          </Link>
        </div>

        <div className="box">
          <h3>contact info</h3>
          <Link to="/home">
            {" "}
            <i className="fas fa-phone">
              {" "}
              <FcCallback></FcCallback>{" "}
            </i>{" "}
            +246-666-9970{" "}
          </Link>
          <Link to="/home">
            {" "}
            <i className="fas fa-phone">
              <FcCellPhone></FcCellPhone>{" "}
            </i>{" "}
            +111-222-3333{" "}
          </Link>
          <Link to="/home">
            {" "}
            <i className="fas fa-envelope">
              {" "}
              <FaEnvelope></FaEnvelope>{" "}
            </i>{" "}
            car.haven@hotmail.com{" "}
          </Link>
          <Link to="/home">
            {" "}
            <i className="fas fa-envelope">
              {" "}
              <FcVoicemail></FcVoicemail>
            </i>{" "}
            car.haven@hotmail.com{" "}
          </Link>
          <Link to="/home">
            {" "}
            <i className="fas fa-map-marker-alt">
              {" "}
              <FcGlobe></FcGlobe>{" "}
            </i>{" "}
            Dhaka, Bangladesh{" "}
          </Link>
        </div>

        <div className="box">
          <h3>follow us</h3>
          <Link to="/home">
            {" "}
            <i className="fab fa-facebook-f">
              <FaFacebook></FaFacebook>
            </i>{" "}
            facebook{" "}
          </Link>
          <Link to="/home">
            {" "}
            <i className="fab fa-twitter">
              <FaTwitter></FaTwitter>
            </i>{" "}
            twitter{" "}
          </Link>

          <Link to="/home">
            {" "}
            <i className="fab fa-instagram">
              {" "}
              <FaInstagram></FaInstagram>{" "}
            </i>{" "}
            instagram{" "}
          </Link>
          <Link to="/home">
            {" "}
            <i className="fab fa-linkedin">
              {" "}
              <FaLinkedin></FaLinkedin>{" "}
            </i>{" "}
            linkedin{" "}
          </Link>
          <Link to="/home">
            {" "}
            <i className="fab fa-pinterest">
              <FaPinterest></FaPinterest>{" "}
            </i>{" "}
            pinterest{" "}
          </Link>
        </div>
      </div>

      <div className="credit">
        all rights reserved by omar faruk 法明 @2022
      </div>
    </section>
  );
};

export default Footer;
