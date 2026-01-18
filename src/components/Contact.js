import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Contact = () => {
  // ✅ Formspree endpoint (AJAX)
  const FORMSPREE_ENDPOINT = "https://formspree.io/f/mdaaeorp";

  const formInitialDetails = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  };

  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState("Send");
  const [status, setStatus] = useState({ success: null, message: "" });

  const onFormUpdate = (category, value) => {
    setFormDetails((prev) => ({
      ...prev,
      [category]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText("Sending...");
    setStatus({ success: null, message: "" });

    try {
      // Send as JSON (works great with React controlled forms)
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formDetails),
      });

      if (response.ok) {
        setStatus({ success: true, message: "Thanks! Your message has been sent." });
        setFormDetails(formInitialDetails);
      } else {
        // Try to read Formspree error details (if available)
        let message = "Oops! There was a problem submitting your form.";
        try {
          const data = await response.json();
          if (data?.errors?.length) {
            message = data.errors.map((err) => err.message).join(", ");
          }
        } catch (_) {
          // ignore JSON parse errors
        }
        setStatus({ success: false, message });
      }
    } catch (error) {
      setStatus({
        success: false,
        message: "Network error. Please try again later.",
      });
    } finally {
      setButtonText("Send");
    }
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <img
                  className={isVisible ? "animate__animated animate__zoomIn" : ""}
                  src={contactImg}
                  alt="Contact"
                />
              )}
            </TrackVisibility>
          </Col>

          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Get In Touch</h2>

                  <p style={{ color: "#B8B8B8", marginBottom: "18px" }}>
                    Messages sent here go directly to my email. I usually reply within 24–48 hours.
                  </p>

                  <form onSubmit={handleSubmit}>
                    <Row>
                      <Col size={12} sm={6} className="px-1">
                        <input
                          type="text"
                          value={formDetails.firstName}
                          placeholder="First Name"
                          onChange={(e) => onFormUpdate("firstName", e.target.value)}
                          required
                        />
                      </Col>

                      <Col size={12} sm={6} className="px-1">
                        <input
                          type="text"
                          value={formDetails.lastName}
                          placeholder="Last Name"
                          onChange={(e) => onFormUpdate("lastName", e.target.value)}
                        />
                      </Col>

                      <Col size={12} sm={6} className="px-1">
                        <input
                          type="email"
                          value={formDetails.email}
                          placeholder="Email Address"
                          onChange={(e) => onFormUpdate("email", e.target.value)}
                          required
                        />
                      </Col>

                      <Col size={12} sm={6} className="px-1">
                        <input
                          type="tel"
                          value={formDetails.phone}
                          placeholder="Phone No."
                          onChange={(e) => onFormUpdate("phone", e.target.value)}
                        />
                      </Col>

                      <Col size={12} className="px-1">
                        <textarea
                          rows="6"
                          value={formDetails.message}
                          placeholder="Message"
                          onChange={(e) => onFormUpdate("message", e.target.value)}
                          required
                        />
                        <button type="submit" disabled={buttonText === "Sending..."}>
                          <span>{buttonText}</span>
                        </button>
                      </Col>

                      {status.message && (
                        <Col>
                          <p className={status.success === false ? "danger" : "success"}>
                            {status.message}
                          </p>
                        </Col>
                      )}
                    </Row>
                  </form>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
