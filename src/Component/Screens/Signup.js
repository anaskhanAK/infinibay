import {
  Checkbox,
  FormControlLabel,
  Grid,
  Link,
  TextField,
} from "@mui/material";
import Button from "@mui/material/Button";
import Frame from "../assets/Frame3.png"; // Adjust the path based on your project structure
import Logo from "../assets/logo.png";
import * as color from "../Constant/Color";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
export default function Signup() {
  return (
    <Grid container spacing={2}>
      <Grid
        style={{
          backgroundColor: `${color.themeColor}`,
          borderEndEndRadius: 50,
          borderStartEndRadius: 50,
          padding: "7%",
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
              width: "100%",
              height: "100%",
              marginTop: "5%",
            }}
            alt="FrameImage"
            src={Frame}
          />
        </div>
      </Grid>
      <Grid
        md={6}
        style={{
          padding: "10%",
        }}
        item
        xs={12}
        sm={6}
      >
        <div style={{ marginTop: "-13%" }}>
          <img
            style={{
              width: "54%",
              height: "2%",
            }}
            alt="Logo"
            src={Logo}
          />
        </div>
        <div style={{ marginTop: "5%" }}>
          <text style={{ fontWeight: "600", fontSize: 24 }}>Welcome</text>
          <p
            style={{
              color: "#516F91",
              fontSize: 12,
              fontWeight: "500",
              marginTop: "1%",
            }}
          >
            Create your account to continue.
          </p>
        </div>
        <p style={{ fontWeight: "500", marginTop: "5%", fontSize: 14 }}>Name</p>

        <TextField
          style={{
            width: "100%",
            boxShadow: "0px 4px 9px rgba(0, 0, 0, 0.1)",
          }}
          id="outlined-basic"
          placeholder="John Doe"
          variant="outlined"
        />
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
        <p style={{ fontWeight: "500", fontSize: 14 }}>Password</p>

        <div style={{}}>
          <TextField
            style={{
              width: "100%",
              boxShadow: "0px 4px 9px rgba(0, 0, 0, 0.1)",
            }}
            id="outlined-basic"
            placeholder="****** "
            variant="outlined"
          />
          <VisibilityOffOutlinedIcon
            style={{ marginLeft: "-12%", marginTop: "4%" }}
            sx={{ color: "#C7C7C7" }}
          />
        </div>
        <p style={{ fontWeight: "500", fontSize: 14 }}>Confirm Password</p>

        <div style={{}}>
          <TextField
            style={{
              width: "100%",
              boxShadow: "0px 4px 9px rgba(0, 0, 0, 0.1)",
            }}
            id="outlined-basic"
            placeholder="****** "
            variant="outlined"
          />
          <VisibilityOffOutlinedIcon
            style={{ marginLeft: "-12%", marginTop: "4%" }}
            sx={{ color: "#C7C7C7" }}
          />
        </div>

        <div>
          <FormControlLabel control={<Checkbox defaultChecked />} />
          <text
            style={{
              color: "#4F4F4F",
              marginLeft: "-5%",
              fontWeight: "400",
              fontSize: 14,
            }}
          >
            I accept all{" "}
            <text style={{ color: "#1C77BF" }}>terms & conditions.</text>
          </text>
        </div>

        <Button
          onClick={() => {
            window.location.href = "/";
          }}
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
        <div
          style={{
            width: "100%",
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
            onClick={() => {
              window.location.href = "signin";
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
              Sign in now
            </text>
          </Link>
        </div>
      </Grid>
    </Grid>
  );
}
