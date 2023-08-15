import {
  Grid,
  Link,
  TextField,
} from "@mui/material";
import Button from "@mui/material/Button";
import Frame from "../assets/Frame2.png"; // Adjust the path based on your project structure
import Logo from "../assets/logo.png";
import * as color from "../Constant/Color";
import { useState } from "react";
export default function ForgotPassword() {
  const [show, setshow] = useState(1);
  return (
    <Grid container spacing={2}>
      <Grid
        style={{
          backgroundColor: `${color.themeColor}`,
          borderEndEndRadius: 50,
          borderStartEndRadius: 50,
          padding: "10%",
          // display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        item
        xs={12}
        sm={6}
        md={6}
      >
        <div>
          <img
            style={{
              objectfit: "cover",
              marginTop: "10%",
              width: "100%",
              height: "70%",
            }}
            alt="Frame"
            src={Frame}
          />
        </div>
      </Grid>
      <Grid
        style={{
          padding: "10%",
        }}
        item
        xs={12}
        sm={6}
        md={6}
      >
        <div>
          <img
            style={{
              width: "54%",
              height: "2%",
            }}
            alt="Logo"
            src={Logo}
          />
        </div>
        {show === 1 ? ( 
          <div>
            <div style={{ marginTop: "5%" }}>
              <text style={{ fontWeight: "600", fontSize: 24 }}>
                Forgot Password?
              </text>
              <p
                style={{
                  color: "#516F91",
                  fontSize: 12,
                  fontWeight: "500",
                  marginTop: "1%",
                  width: "80%",
                }}
              >
                Enter your registered email below to receive password reset
                instruction.
              </p>
            </div>
            <p style={{ fontWeight: "500", marginTop: "5%", fontSize: 14 }}>
              Email
            </p>

            <TextField
              style={{
                width: "100%",
                boxShadow: "0px 4px 9px rgba(0, 0, 0, 0.1)",
              }}
              id="outlined-basic"
              placeholder="testing123@gmail.com"
              variant="outlined"
            />

            <Button
              onClick={() => setshow(2)}
              style={{
                fontWeight: "700",
                width: "100%",
                marginTop: "3%",
                backgroundColor: "#1C77BF",
              }}
              variant="contained"
            >
              Submit
            </Button>
            <div
              style={{
                width: "85%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginTop: "5%",
              }}
            >
              <text style={{ color: "#5A5A5A", fontSize: 14 }}>
                Already have an account?
              </text>
              <Link
                component="button"
                onClick={() => (window.location.href = "signup")}
              >
                <text
                  style={{
                    color: "#1C77BF",
                    fontWeight: "500",

                    marginLeft: 5,
                    fontSize: 14,
                  }}
                >
                  Sign up now
                </text>
              </Link>
            </div>
          </div>
        ) : show === 2 ? ( //step 2
          <div>
            <div style={{ marginTop: "5%" }}>
              <text style={{ fontWeight: "600", fontSize: 24 }}>
                Check Your Email
              </text>
              <p
                style={{
                  color: "#516F91",
                  fontSize: 12,
                  fontWeight: "500",
                  marginTop: "1%",
                  width: "80%",
                }}
              >
                We have sent a password recovery instruction to your email.
              </p>
            </div>
            <p
              style={{
                fontSize: 14,
                fontWeight: "500",
                marginTop: "7%",
                width: "80%",
              }}
            >
              Didn't receive the email? Check your spam filter or try
              <Link
                to="/signup"
                component="button"
                onClick={() => {
                  setshow(3);
                }}
              >
                <text
                  style={{
                    color: "#1C77BF",
                    fontWeight: "500",

                    marginLeft: 5,
                    fontSize: 14,
                  }}
                >
                  another email address.
                </text>
              </Link>
            </p>
            <div style={{ marginTop: "55%" }}></div>
          </div>
        ) : (
          // step 3
          <div>
            <div style={{ marginTop: "5%" }}>
              <text style={{ fontWeight: "600", fontSize: 24 }}>
                Create New Password
              </text>
              <p
                style={{
                  color: "#516F91",
                  fontSize: 12,
                  fontWeight: "500",
                  marginTop: "1%",
                  width: "80%",
                }}
              >
                Your new password must be different from previous used
                passwords.
              </p>
            </div>
            <p style={{ fontWeight: "500", marginTop: "5%", fontSize: 14 }}>
              Password
            </p>

            <TextField
              style={{
                width: "100%",
                boxShadow: "0px 4px 9px rgba(0, 0, 0, 0.1)",
              }}
              id="outlined-basic"
              placeholder="****** "
              variant="outlined"
            />
            <p style={{ fontWeight: "500", marginTop: "5%", fontSize: 14 }}>
              Confirm Password
            </p>

            <TextField
              style={{
                width: "100%",
                boxShadow: "0px 4px 9px rgba(0, 0, 0, 0.1)",
              }}
              id="outlined-basic"
              placeholder="****** "
              variant="outlined"
            />
            <div style={{ marginTop: "3%" }}>
              <text style={{ color: "#5A5A5A", fontSize: 14 }}>
                Both passwords must match.
              </text>
            </div>
            <Button
              onClick={() => setshow(true)}
              style={{
                fontWeight: "700",
                width: "100%",
                marginTop: "3%",
                backgroundColor: "#1C77BF",
              }}
              variant="contained"
            >
              Create Account
            </Button>
          </div>
        )}
        <div style={{ marginTop: "30%" }}></div>
      </Grid>
    </Grid>
  );
}
