import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"
import L from "leaflet"
import { useRef } from "react"
import emailjs from "@emailjs/browser"
import AnimatedLetters from "../AnimatedLetters"
import "./index.scss"

const Contact = () => {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        "service_s1pmbd3",
        "template_73wlofn",
        form.current,
        "zJ0eDQMtC2Z0pBdar"
      )
      .then(
        () => {
          alert("Message successfully sent!")
          window.location.reload(false)
        },
        () => {
          alert("Failed to send the message, please try again")
        }
      )
  }

  const myIcon = new L.Icon({
    iconUrl: require("../../assets/images/icon-map.png"),
    iconRetinaUrl: require("../../assets/images/icon-map.png"),
    iconAnchor: [0, 50],
    popupAnchor: [57.5, -45],
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null,
    iconSize: [128, 128],
    className: "leaflet-div-icon",
  })

  return (
    <>
      <div className="container contact-page">
        <div className="left-half">
          <div className="text-zone">
            <h1 className="page-title">
              <AnimatedLetters
                letterClass="text-animate"
                text="Contact"
                delay={2}
              />
            </h1>
            <p>
              I am mainly interested in freelance opportunities! However, if you
              have any other requests or questions, don't hesitate to contact me
              using the form below.
            </p>
            <div className="contact-form">
              <form ref={form} onSubmit={sendEmail}>
                <ul>
                  <li className="half">
                    <input
                      placeholder="Name"
                      type="text"
                      name="name"
                      required
                    />
                  </li>
                  <li className="half">
                    <input
                      placeholder="Email"
                      type="email"
                      name="email"
                      required
                    />
                  </li>
                  <li>
                    <input
                      placeholder="Subject"
                      type="text"
                      name="subject"
                      required
                    />
                  </li>
                  <li>
                    <textarea
                      placeholder="Message"
                      name="message"
                      required
                    ></textarea>
                  </li>
                  <li>
                    <input type="submit" className="flat-button" value="SEND" />
                  </li>
                </ul>
              </form>
            </div>
          </div>
        </div>
        <div className="map-wrap">
          <MapContainer center={[-34.6022258, -58.4325352]} zoom={16}>
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[-34.6022258, -58.4325352]} icon={myIcon}>
              <Popup>
                <span className="popup-text">I'm here!</span>
              </Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
    </>
  )
}

export default Contact
