import { Button, Col, Container, Row } from "react-bootstrap";
import imgag1 from "../img/Building.avif";
import img2 from "../img/asdasdasd.avif";
import img3 from "../img/123ssase.avif";

function Home() {
  return (
    <>
      <section className="home-section">
        <Container className="bg-color py-5">
          <Row>
            <Col md={8} sm={12} className="cont-img ">
              <img className="img" src={imgag1} alt="asdasdas" />
            </Col>
            <Col md={4} sm={12} className="cont-text">
              <h1>We design spaces that inspire and connect</h1>
              <p>
                Architectural planning, design and <br /> development
              </p>
              <div className="img-cont">
                <img src={img2} alt="asdas" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section id="section-2">
        <Container className="pt-5 container-2 my-5">
          <Row className="pb-5">
            <Col sm={12} md={6} className="pt-5 my-5">
              <p className="paragraph p-5">
                We make spaces that connect and inspire, and we do it all with a
                streamlined workflow that keeps everyone on the same page.
              </p>
            </Col>
            <Col sm={12} md={6} className="mt-5">
              <div className="blla pb-2"></div>
              <strong>SECTION OVERLINE</strong>
              <h2 className="pt-5 header-h2">On the edge of innovation</h2>
              <p className="pt-3 my-5 paragraph-2">
                We believe that great spaces are born from a synergy of vision,
                collaboration, and design. We don’t just take on projects; we
                build relationships with our clients, and we help them to turn
                their vision into reality.
              </p>
              <Button className="button-1  my-5  btn px-5 p-4 text-center text-dark btn-warning">
                Work with us
              </Button>
            </Col>
          </Row>
        </Container>
      </section>
      <section id="section-3">
        <Container className="pt-5 ">
          <Row className="pt-5">
            <div className="div ">
              <h1 className="pt-5">Latest Projects</h1>
              <p>See all projects</p>
            </div>
            <Col md={6} sm={12} className="projects ">
              <img className="image-1111" src={img2} alt="asdasd" />
              <div className="museum">
                <h1>Museum of Digital Art</h1>
                <span>Urban</span>
                <Button className="  btn px-5 p-4  text-dark btn-warning">
                  Project Details
                </Button>
              </div>
            </Col>
            <Col md={6} sm={12} className="projects">
              <img className="image-1111" src={img2} alt="asdasd" />
              <div className="museum">
                <h1>Private mansion</h1>
                <span>Villas and Mansions</span>
                <Button className="  btn px-5 p-4  text-dark btn-warning">
                  Project Details
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
        <section className="bg-bg-section py-5 my-5">
          <Container className="py-5 my-5">
            <Row className="py-5">
              <Col className="text-start" sm={12} md={4}>
                <h1> X Holistic design approach</h1>
              </Col>
              <Col className="text-center" sm={12} md={4}>
                <h1>X Focused and efficient partnerships</h1>
              </Col>
              <Col className="text-end" sm={12} md={4}>
                <h1>X Cross-industry experience</h1>
              </Col>
            </Row>
          </Container>
        </section>
        <section>
          <Container fluid>
            <Row className="bg-dark">
              <Col md={6} sm={12} className="about-img">
                <img src={img3} alt="asdasd" />
              </Col>
              <Col
                md={6}
                sm={12}
                className=" text-start p-5 m-auto justify-content-center "
              >
                <h2 className="text-white p-5">
                  “We believe that great spaces are born from a synergy of
                  vision,
                  <br />
                  collaboration, and design. We don’t just take on projects;
                  <br />
                  we build relationships with our clients, and we help them to
                  turn their vision into reality.”
                </h2>
                <h1 className="text-white p-5">Dwayne – Founder</h1>
                <div className=" links-about d-flex flex-column p-5 ">
                  <a href="/work">Work with us</a>
                  <a href="/about">About us </a>
                  <a href="/news">News</a>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
        <section className="bg-white py-5 ">
          <Container className="py-5 testimonial-container">
            <h1 className="pt-5">Cross-industry Expertise</h1>
            <h3 className="py-5">
              We don’t just take on projects; we build relationships with our
              clients
            </h3>
            <Row className="py-5 testimonial-text">
              <Col sm={12} md={6}>
                <h2>Holistic approach</h2>
                <h4>
                  We believe in the power of design to build a stronger
                  community, and we work hard to ensure our clients’ needs are
                  met from start to finish.
                </h4>
              </Col>
              <Col sm={12} md={6}>
                <h2>Global scope</h2>
                <h4>
                  We believe that great spaces are born from a synergy of
                  vision, collaboration, and design. We don’t just take on
                  projects; we build relationships with our clients
                </h4>
              </Col>
            </Row>

            <Row className="py-5 testimonial-text">
              <Col className="py-3" sm={12} md={6}>
                <h2>Expert partners</h2>
                <h4>
                  We believe that great spaces are born from a synergy of
                  vision, collaboration, and design. We don’t just take on
                  projects; we build relationships with our clients
                </h4>
              </Col>
              <Col sm={12} md={6}>
                <h2>Cross-industry experience</h2>
                <h4>
                  We believe that great spaces are born from a synergy of
                  vision, collaboration, and design. We don’t just take on
                  projects; we build relationships with our clients
                </h4>
              </Col>
            </Row>
          </Container>
        </section>
        <section id="background-image" className="background-11">
          <Container className="py-5 container-background ">
            <Row className="py-5">
              <Col sm={12} md={6} className="text-back">
                <h1 className="py-5">Get In touch</h1>
                <h3 className="py-5">
                  Our work spans a variety of industries, including residential,
                  <br />
                  urban design, commercial, and hospitality.
                </h3>
                <Button className="get-button btn btn-warning ">
                  Get in touch
                </Button>
              </Col>
              <Col sm={12} md={6} className="text-back">
                <h1 className="py-5">About our company</h1>
                <h3 className="py-5">
                  We also provide a streamlined workflow for our clients to make
                  working with us easy and rewarding.
                </h3>
                <Button className="btn btn-warning get-button">About us</Button>
              </Col>
            </Row>
          </Container>
        </section>
      </section>
    </>
  );
}

export default Home;
