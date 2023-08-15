import * as React from "react";

import Frame from "../assets/mask.png";

import { Button } from "@mui/material";
const headerStyle = {
  backgroundImage: `url(${Frame})`,
  backgroundSize: "cover", // Adjust to 'contain' or other values if needed
  backgroundPosition: "center center",
  backgroundRepeat: "no-repeat",
  width: "80%",
  borderRadius: 43,
  height: "350px", // Set the desired height
};
export default function ContactUs() {
  return (
    <div
      style={{
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
      }}
    >
      <header style={headerStyle}>
        <div style={{ display: "grid" }}>
          <div
            style={{
              justifyContent: "center",
              alignItems: "center",
              display: "flex",

              marginTop: "5%",
            }}
          >
            <text
              style={{
                fontSize: 40,
                fontWeight: "700",
                marginTop: "2%",
                color: "white",
                textAlign: "center",
              }}
            >
              Have More Questions?
            </text>
          </div>
          <div
            style={{
              justifyContent: "center",
              alignItems: "center",
              display: "flex",
              marginTop: "2%",
            }}
          >
            <text
              style={{
                fontSize: 18,

                width: "55%",
                textAlign: "center",
                color: "white",
              }}
            >
              Lorem ipsum dolor sit amet, co nse ctetur adip isc ng elit, sed do
              eius mod tempor incid idunt ut.
            </text>
          </div>
          <div
            style={{
              justifyContent: "center",
              alignItems: "center",
              display: "flex",
              marginTop: "3%",
            }}
          >
            <Button
              style={{
                backgroundColor: "#FF7917",
                width: 150,
                height: 50,
                fontWeight: "800",
                borderRadius: 5,
              }}
              variant="contained"
            >
              CONTACT US
            </Button>
          </div>
        </div>
      </header>
    </div>
  );
}
