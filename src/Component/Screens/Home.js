import {
  Grid
} from "@mui/material";
import Button from "@mui/material/Button";
import Frame from "../assets/header.png"; // Adjust the path based on your project structure
import Logo from "../assets/logo.png";
import t1 from "../assets/t1.png";
import line from "../assets/line.png";
import t2 from "../assets/t2.png";
import i1 from "../assets/i1.png";
import i2 from "../assets/i2.png";
import i3 from "../assets/i3.png";
// import i4 from "../assets/i4.png";
import i5 from "../assets/i5.png";
import i6 from "../assets/i6.png";
import f1 from "../assets/f1.png";
import f2 from "../assets/f2.png";
import f3 from "../assets/f3.png";
import web from "../assets/web.png";
import CheckIcon from "@mui/icons-material/Check";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ReviewSlider from "./ReviewSlider";
import FAQ from "./FAQ";
import ContactUs from "./ContactUs";
import Footer from "./Footer";
import * as React from 'react';



const headerStyle = {
  backgroundImage: `url(${Frame})`,
  backgroundSize: "cover", // Adjust to 'contain' or other values if needed
  backgroundPosition: "center center",
  backgroundRepeat: "no-repeat",
  height: "800px", // Set the desired height
};



export default function Home() {

  return (
    <header style={headerStyle}>
      <div style={{ marginLeft: "10%", marginRight: "10%" }}>
        <Grid container>
          <Grid item xs={12} sm={6} md={6}>
            <img
              style={{
                width: "58%",
                height: 45,
                marginTop: "4%",
              }}
              alt="imageLogo"
              src={Logo}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <div
              style={{
                display: "flex",
                marginTop: "4%",
                justifyContent: "right",
              }}
            >
              <div style={{}}>
                <Button
                  onClick={() => {
                    window.location.href = "signup";
                  }}
                  variant="outlined"
                  style={{ color: "#1C77BF", width: 100, fontWeight: "800" }}
                >
                  SIGNUP
                </Button>
              </div>

              <div style={{ marginLeft: "4%" }}>
                <Button
                  onClick={() => {
                    window.location.href = "signin";
                  }}
                  style={{
                    backgroundColor: "#1C77BF",
                    width: 100,
                    fontWeight: "800",
                  }}
                  variant="contained"
                >
                  LOGIN
                </Button>
              </div>
            </div>
          </Grid>
        </Grid>

        {/* //-----------------------------------END top÷ */}
        <div
          style={{
            display: "grid",
            justifyContent: "center",
            alignContent: "center",
          }}
        >
          <div
            style={{
              justifyContent: "center",
              alignItems: "center",
              display: "flex",
              marginTop: "7%",
            }}
          >
            <img
              style={{
                width: "30%",
                // height: 23,
              }}
              alt="t1"
              src={t1}
            />
          </div>
          <div style={{ marginTop: "3%", display: "grid" }}>
            <div style={{ display: "flex" }}>
              <img
                style={{
                  width: "100%",
                  // height: "80%",
                }}
                alt="t2"
                src={t2}
              />
            </div>
            <img
              style={{
                width: "53%",
              }}
              alt="line"
              src={line}
            />
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "4%",
            }}
          >
            <Button
              style={{
                width: "23%",
                height: 50,
                backgroundColor: "#1C77BF",
                fontWeight: "700",
              }}
              variant="contained"
              onClick={() => {
                window.location.href = "dashboard";
              }}
            >
              Get Started
            </Button>
          </div>
        </div>
        <div
          style={{
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
          }}
        >
          <img
            style={{
              width: "100%",
              height: "90%",
            }}
            alt="web"
            src={web}
          />
        </div>
        {/* //CUSTOMIZE YOUR NEED */}
        <div
          style={{
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
            marginBottom: "5%",
          }}
        >
          <text
            style={{ fontSize: 44, fontWeight: "700", textAlign: "center" }}
          >
            Customize To Your Needs
          </text>
        </div>
        <Grid container spacing={12}>
          <Grid
            style={{
              display: "grid",
              alignItems: "center",
              justifyContent: "center",
              alignContent: "center",
            }}
            item
            xs={12}
            sm={6}
            md={4}
          >
            <div style={{ marginLeft: "-10%", marginBottom: "-7%" }}>
              <img
                src={i1}
                alt="il"
                style={{
                  width: 150,
                }}
              />
            </div>
            <text style={{ fontSize: 24, fontWeight: "700" }}>
              Hardcore Gamers
            </text>
            <text
              style={{
                fontSize: 16,
                fontWeight: "400",
                color: "#747274",
                marginTop: "5%",
                width: "85%",
              }}
            >
              Lorem ipsum dolor sit amet, conse ctetur adip isc ng elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis.
            </text>
            <div
              style={{
                marginTop: "7%",
                alignItems: "center",
                display: "flex",
              }}
            >
              <div style={{ marginRight: "5%" }}>
                <text
                  style={{ fontSize: 16, fontWeight: "500", color: "#268FDF" }}
                >
                  Learn more
                </text>
              </div>

              <ArrowForwardIcon
                style={{
                  backgroundColor: "#D8EEFF",
                  color: "#268FDF",
                  borderRadius: 15,
                }}
              />
            </div>
          </Grid>
          <Grid
            style={{
              display: "grid",
              alignItems: "center",
              justifyContent: "center",
              alignContent: "center",
            }}
            item
            xs={12}
            sm={6}
            md={4}
          >
            <div style={{ marginLeft: "-10%", marginBottom: "-7%" }}>
              <img
                src={i2}
                alt="12"
                style={{
                  width: 150,
                }}
              />
            </div>
            <text style={{ fontSize: 24, fontWeight: "700" }}>
              Office/Basic Users
            </text>
            <text
              style={{
                fontSize: 16,
                fontWeight: "400",
                color: "#747274",
                marginTop: "5%",
                width: "85%",
              }}
            >
              Lorem ipsum dolor sit amet, conse ctetur adip isc ng elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis.
            </text>
            <div
              style={{
                marginTop: "7%",
                alignItems: "center",
                display: "flex",
              }}
            >
              <div style={{ marginRight: "5%" }}>
                <text
                  style={{ fontSize: 16, fontWeight: "500", color: "#268FDF" }}
                >
                  Learn more
                </text>
              </div>

              <ArrowForwardIcon
                style={{
                  backgroundColor: "#D8EEFF",
                  color: "#268FDF",
                  borderRadius: 15,
                }}
              />
            </div>
          </Grid>
          <Grid
            style={{
              display: "grid",
              alignItems: "center",
              justifyContent: "center",
              alignContent: "center",
            }}
            item
            xs={12}
            sm={6}
            md={4}
          >
            <div style={{ marginLeft: "-10%", marginBottom: "-7%" }}>
              <img
                src={i3}
                alt="13"
                style={{
                  width: 150,
                }}
              />
            </div>
            <text style={{ fontSize: 24, fontWeight: "700" }}>
              Go Beyond Storage
            </text>
            <text
              style={{
                fontSize: 16,
                fontWeight: "400",
                color: "#747274",
                marginTop: "5%",
                width: "85%",
              }}
            >
              Lorem ipsum dolor sit amet, conse ctetur adip isc ng elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis.
            </text>
            <div
              style={{
                marginTop: "7%",
                alignItems: "center",
                display: "flex",
              }}
            >
              <div style={{ marginRight: "5%" }}>
                <text
                  style={{ fontSize: 16, fontWeight: "500", color: "#268FDF" }}
                >
                  Learn more
                </text>
              </div>

              <ArrowForwardIcon
                style={{
                  backgroundColor: "#D8EEFF",
                  color: "#268FDF",
                  borderRadius: 15,
                }}
              />
            </div>
          </Grid>
        </Grid>
        {/* // secong row */}
        <Grid style={{ marginTop: 1 }} container spacing={12}>
          <Grid
            style={{
              display: "grid",
              alignItems: "center",
              justifyContent: "center",
              alignContent: "center",
            }}
            item
            xs={12}
            sm={6}
            md={4}
          >
            <div style={{ marginLeft: "-10%", marginBottom: "-7%" }}>
              <img
                src={i3}
                alt="i3"
                style={{
                  width: 150,
                }}
              />
            </div>
            <text style={{ fontSize: 24, fontWeight: "700" }}>
              Hardcore Gamers
            </text>
            <text
              style={{
                fontSize: 16,
                fontWeight: "400",
                color: "#747274",
                marginTop: "5%",
                width: "85%",
              }}
            >
              Lorem ipsum dolor sit amet, conse ctetur adip isc ng elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis.
            </text>
            <div
              style={{
                marginTop: "7%",
                alignItems: "center",
                display: "flex",
              }}
            >
              <div style={{ marginRight: "5%" }}>
                <text
                  style={{ fontSize: 16, fontWeight: "500", color: "#268FDF" }}
                >
                  Multi-OS Users
                </text>
              </div>

              <ArrowForwardIcon
                style={{
                  backgroundColor: "#D8EEFF",
                  color: "#268FDF",
                  borderRadius: 15,
                }}
              />
            </div>
          </Grid>
          <Grid
            style={{
              display: "grid",
              alignItems: "center",
              justifyContent: "center",
              alignContent: "center",
            }}
            item
            xs={12}
            sm={6}
            md={4}
          >
            <div style={{ marginLeft: "-10%", marginBottom: "-7%" }}>
              <img
                src={i5}
                alt="i5"
                style={{
                  width: 150,
                }}
              />
            </div>
            <text style={{ fontSize: 24, fontWeight: "700" }}>
              Virtual IP Configuration
            </text>
            <text
              style={{
                fontSize: 16,
                fontWeight: "400",
                color: "#747274",
                marginTop: "5%",
                width: "85%",
              }}
            >
              Lorem ipsum dolor sit amet, conse ctetur adip isc ng elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis.
            </text>
            <div
              style={{
                marginTop: "7%",
                alignItems: "center",
                display: "flex",
              }}
            >
              <div style={{ marginRight: "5%" }}>
                <text
                  style={{ fontSize: 16, fontWeight: "500", color: "#268FDF" }}
                >
                  Learn more
                </text>
              </div>

              <ArrowForwardIcon
                style={{
                  backgroundColor: "#D8EEFF",
                  color: "#268FDF",
                  borderRadius: 15,
                }}
              />
            </div>
          </Grid>
          <Grid
            style={{
              display: "grid",
              alignItems: "center",
              justifyContent: "center",
              alignContent: "center",
            }}
            item
            xs={12}
            sm={6}
            md={4}
          >
            <div style={{ marginLeft: "-10%", marginBottom: "-7%" }}>
              <img
                src={i6}
                alt="i6"
                style={{
                  width: 150,
                }}
              />
            </div>
            <text style={{ fontSize: 24, fontWeight: "700" }}>
              OS Configuration
            </text>
            <text
              style={{
                fontSize: 16,
                fontWeight: "400",
                color: "#747274",
                marginTop: "5%",
                width: "85%",
              }}
            >
              Lorem ipsum dolor sit amet, conse ctetur adip isc ng elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis.
            </text>
            <div
              style={{
                marginTop: "7%",
                alignItems: "center",
                display: "flex",
              }}
            >
              <div style={{ marginRight: "5%" }}>
                <text
                  style={{ fontSize: 16, fontWeight: "500", color: "#268FDF" }}
                >
                  Learn more
                </text>
              </div>

              <ArrowForwardIcon
                style={{
                  backgroundColor: "#D8EEFF",
                  color: "#268FDF",
                  borderRadius: 15,
                }}
              />
            </div>
          </Grid>
        </Grid>
        {/* // Features  */}
        <div
          style={{
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
            marginBottom: "1%",
            marginTop: "10%",
          }}
        >
          <text style={{ fontSize: 44, fontWeight: "700" }}>Features</text>
        </div>
        <div style={{ padding: "7%" }}>
          <Grid container rowSpacing={1}>
            <Grid item xs={12} sm={6} md={6}>
              <div style={{ display: "grid" }}>
                <text style={{ fontSize: 44, fontWeight: "700" }}>
                  Control Your
                </text>
                <text
                  style={{ fontSize: 44, fontWeight: "700", color: "#FF7917" }}
                >
                  Data
                </text>
                <img
                  style={{
                    width: 100,
                    height: 4,
                  }}
                  alt="line"
                  src={line}
                />
                <text
                  style={{
                    fontSize: 16,
                    fontWeight: "400",
                    color: "#747274",
                    marginTop: "7%",
                    width: "75%",
                  }}
                >
                  Lorem ipsum dolor sit amet, conse ctetur adip isc ng elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis.
                </text>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginTop: "7%",
                  }}
                >
                  <CheckIcon
                    style={{
                      backgroundColor: "#2A97E8",
                      borderRadius: 15,
                      color: "white",
                    }}
                  />
                  <div style={{ marginLeft: 10 }}>
                    <text
                      style={{
                        fontWeight: "600",

                        fontSize: 16,
                      }}
                    >
                      Data Management
                    </text>
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginTop: "5%",
                  }}
                >
                  <CheckIcon
                    style={{
                      backgroundColor: "#2A97E8",
                      borderRadius: 15,
                      color: "white",
                    }}
                  />
                  <div style={{ marginLeft: 10 }}>
                    <text
                      style={{
                        fontWeight: "600",

                        fontSize: 16,
                      }}
                    >
                      Data Protection
                    </text>
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginTop: "5%",
                  }}
                >
                  <CheckIcon
                    style={{
                      backgroundColor: "#2A97E8",
                      borderRadius: 15,
                      color: "white",
                    }}
                  />
                  <div style={{ marginLeft: 10 }}>
                    <text
                      style={{
                        fontWeight: "600",

                        fontSize: 16,
                      }}
                    >
                      Data Acceleration
                    </text>
                  </div>
                </div>
              </div>
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
              <img
                src={f1}
                alt="f1"
                style={{
                  width: "100%",
                  height: "100%",
                }}
              />
            </Grid>
          </Grid>
          {/* //2nd feature */}
          <Grid
            style={{ marginTop: "12%", padding: "3%" }}
            container
            rowSpacing={1}
            columnSpacing={12}
          >
            <Grid item xs={12} sm={6} md={6}>
              <img
                src={f2}
                alt="f2"
                style={{
                  width: "100%",
                  height: "100%",
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
              <div style={{ display: "grid" }}>
                <text style={{ fontSize: 44, fontWeight: "700" }}>
                  Specialize Your
                </text>
                <text
                  style={{ fontSize: 44, fontWeight: "700", color: "#FF7917" }}
                >
                  System
                </text>
                <img
                  style={{
                    width: 160,
                    height: 4,
                  }}
                  alt="line"
                  src={line}
                />
                <text
                  style={{
                    fontSize: 16,
                    fontWeight: "400",
                    color: "#747274",
                    marginTop: "7%",
                    width: "95%",
                  }}
                >
                  Lorem ipsum dolor sit amet, conse ctetur adip isc ng elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis.
                </text>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginTop: "7%",
                  }}
                >
                  <CheckIcon
                    style={{
                      backgroundColor: "#2A97E8",
                      borderRadius: 15,
                      color: "white",
                    }}
                  />
                  <div style={{ marginLeft: 10 }}>
                    <text
                      style={{
                        fontWeight: "600",

                        fontSize: 16,
                      }}
                    >
                      Multi-Systems
                    </text>
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginTop: "5%",
                  }}
                >
                  <CheckIcon
                    style={{
                      backgroundColor: "#2A97E8",
                      borderRadius: 15,
                      color: "white",
                    }}
                  />
                  <div style={{ marginLeft: 10 }}>
                    <text
                      style={{
                        fontWeight: "600",

                        fontSize: 16,
                      }}
                    >
                      Systems Utilities
                    </text>
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginTop: "5%",
                  }}
                >
                  <CheckIcon
                    style={{
                      backgroundColor: "#2A97E8",
                      borderRadius: 15,
                      color: "white",
                    }}
                  />
                  <div style={{ marginLeft: 10 }}>
                    <text
                      style={{
                        fontWeight: "600",

                        fontSize: 16,
                      }}
                    >
                      Hardware Management
                    </text>
                  </div>
                </div>
              </div>
            </Grid>
          </Grid>
          {/* //3rd feature */}
          <Grid
            style={{ marginTop: "12%", padding: "3%" }}
            container
            rowSpacing={1}
          >
            <Grid item xs={12} sm={6} md={6}>
              <div style={{ display: "grid" }}>
                <text style={{ fontSize: 44, fontWeight: "700" }}>
                  Optimized User
                </text>
                <text
                  style={{ fontSize: 44, fontWeight: "700", color: "#FF7917" }}
                >
                  Experience
                </text>
                <img
                  style={{
                    width: 240,
                    height: 4,
                  }}
                  alt="line"
                  src={line}
                />
                <text
                  style={{
                    fontSize: 16,
                    fontWeight: "400",
                    color: "#747274",
                    marginTop: "7%",
                    width: "85%",
                  }}
                >
                  Lorem ipsum dolor sit amet, conse ctetur adip isc ng elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua
                  reprehenderit in voluptate velit esse cillum dolore eu fugiat
                  nulla pariatur excepteur sint occaecat cupidatat duis aute
                  irure dolor in reprehenderit in voluptate.
                </text>
                <Button
                  style={{
                    marginTop: "10%",
                    backgroundColor: "#1C77BF",
                    width: 120,
                    height: 50,
                    fontWeight: "800",
                    borderRadius: 10,
                  }}
                  variant="contained"
                >
                  SIGN UP
                </Button>
              </div>
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
              <img
                src={f3}
                alt="f3"
                style={{
                  width: "100%",
                  height: "100%",
                }}
              />
            </Grid>
          </Grid>
        </div>
      </div>
      {/* Client Reviews-------------------------------------------------- */}
      <div style={{ backgroundColor: "#F2F7FE" }}>
        <div
          style={{
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
            marginBottom: "5%",
            marginTop: "5%",
          }}
        >
          <text style={{ fontSize: 44, fontWeight: "700", marginTop: "5%" }}>
            Client Reviews
          </text>
        </div>
        <ReviewSlider />
      </div>
      {/* FAQ -------------------------------------------------- */}
      <div>
        <div
          style={{
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
            marginBottom: "5%",
            marginTop: "5%",
          }}
        >
          <text style={{ fontSize: 44, fontWeight: "700" }}>FAQ</text>
        </div>
        <FAQ />
      </div>
      {/* contact -------------------------------------------------- */}
      <div style={{ marginTop: "10%" }}>
        <ContactUs />
      </div>
      {/* footer -------------------------------------------------- */}
      <div style={{ marginTop: "10%" }}>
        <Footer />
      </div>
    </header>
  );
}
