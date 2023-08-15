import * as React from "react";
import Grid from "@mui/material/Grid";
import Frame from "../assets/footer.png";
import Logo from "../assets/logo.png";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Button, Divider, TextField } from "@mui/material";
const headerStyle = {
  backgroundImage: `url(${Frame})`,
  backgroundSize: "cover", // Adjust to 'contain' or other values if needed
  backgroundPosition: "center center",
  backgroundRepeat: "no-repeat",
  height: "550px", // Set the desired height
};
export default function Footer() {
  return (
    <header style={headerStyle}>
      <Grid
        style={{ padding: "10%" }}
        container
        rowSpacing={1}
        // columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      >
        <Grid item xs={12} sm={6} md={4}>
          <div style={{ display: "grid" }}>
            <img
              style={{
                width: "40%",
                height: 25,
              }}
              alt="Logo"
              src={Logo}
            />
            <text
              style={{
                fontSize: 16,
                fontWeight: "400",
                color: "#333333",
                marginTop: "7%",
                lineHeight: 1.5,
                // width: "85%",
              }}
            >
              Lorem ipsum dolor sit amet, conse ctetur adip isc ng elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis.
            </text>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "40%",
                marginTop: "7%",
              }}
            >
              <TwitterIcon style={{ color: "#1C77BF" }} />
              <InstagramIcon style={{ color: "#1C77BF" }} />
              <FacebookIcon style={{ color: "#1C77BF" }} />
              <LinkedInIcon style={{ color: "#1C77BF" }} />
            </div>
          </div>
        </Grid>
        <Grid
          style={{
            display: "flex",
            justifyContent: "center",
          }}
          item
          xs={12}
          sm={6}
          md={4}
        >
          <div></div>
          {/* <text style={{ fontSize: 20, fontWeight: "600" }}>Link</text> */}

          <div style={{ display: "grid", gap: "18px" }}>
            <text style={{ fontSize: 20, fontWeight: "600" }}>Link</text>

            <text style={{ fontSize: 16 }}>Term</text>
            <text style={{ fontSize: 16 }}>Privicy</text>
            <text style={{ fontSize: 16 }}>Cookies</text>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <text style={{ fontSize: 20, fontWeight: "600" }}>Subscribe Us</text>
          <TextField
            style={{
              width: "100%",
              boxShadow: "0px 4px 9px rgba(0, 0, 0, 0.1)",
              backgroundColor: "white",
              marginTop: "7%",
            }}
            id="outlined-basic"
            placeholder="Enter your email"
            variant="outlined"
          />
          <Button
            style={{
              fontWeight: "700",
              fontSize: 11,
              width: 100,
              marginTop: "3%",
              backgroundColor: "#1C77BF",
            }}
            variant="contained"
          >
            SUBSCRIBE
          </Button>
        </Grid>
      </Grid>
      <Divider style={{ marginTop: "-3%" }} />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "3%",
        }}
      >
        <text style={{ fontSize: 12 }}>
          © 2023 Infinibay. All rights reserved
        </text>
      </div>
    </header>
  );
}
