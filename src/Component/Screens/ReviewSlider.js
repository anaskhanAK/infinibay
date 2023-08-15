import star from "../assets/star.png"; // Adjust the path based on your project structure
import dp from "../assets/dp.png";
import { Carousel } from "@mantine/carousel";

export default function ReviewSlider() {
  return (
    <Carousel
      styles={{
        indicator: { backgroundColor: "#1C77BF", width: 15, height: 15 },
      }}
      withIndicators
      height={500}
      slideSize="25%"
      slideGap="md"
      loop
      align="start"
      slidesToScroll={3}
    >
      <Carousel.Slide>
        <div
          style={{
            backgroundColor: "white",
            flexDirection: "column",
            display: "grid",
            padding: "9%",
            boxShadow: "0px 4px 9px rgba(0, 0, 0, 0.1)",
            borderRadius: 20,
            gap: "12px",
          }}
        >
          <div
            style={{
              justifyContent: "center",
              display: "flex",
              alignItems: "center",
            }}
          >
            <img
              style={{
                width: "40%",
                height: "100%",
              }}
              alt="Star"
              src={star}
            />
          </div>
          <text
            style={{
              alignSelf: "center",
              textAlign: "center",
              lineHeight: 1.5,
            }}
          >
            “Lorem ipsum dolor sit amet, co nse ctetur adip isc ng elit, sed do
            eius mod tempor incid idunt ut.”
          </text>
          <div
            style={{
              justifyContent: "center",
              display: "flex",
              alignItems: "center",
              marginTop: 5,
            }}
          >
            <img
              style={{
                width: "40%",
                height: "100%",
                alignSelf: "center",
              }}
              alt="Dp"
              src={dp}
            />
          </div>
          <text
            style={{
              alignSelf: "center",
              textAlign: "center",
              fontSize: 18,
              fontWeight: "bold",
            }}
          >
            Eduard Mendy
          </text>
          <text
            style={{
              alignSelf: "center",
              textAlign: "center",
              fontSize: 14,

              color: "#4F4F4F",
            }}
          >
            VP of Sale Development
          </text>
        </div>
      </Carousel.Slide>
      <Carousel.Slide>
        <div
          style={{
            backgroundColor: "white",
            flexDirection: "column",
            display: "grid",
            padding: "9%",
            boxShadow: "0px 4px 9px rgba(0, 0, 0, 0.1)",
            borderRadius: 20,
            gap: "12px",
          }}
        >
          <div
            style={{
              justifyContent: "center",
              display: "flex",
              alignItems: "center",
            }}
          >
            <img
              style={{
                width: "40%",
                height: "100%",
              }}
              alt="Star"
              src={star}
            />
          </div>
          <text
            style={{
              alignSelf: "center",
              textAlign: "center",
              lineHeight: 1.5,
            }}
          >
            “Lorem ipsum dolor sit amet, co nse ctetur adip isc ng elit, sed do
            eius mod tempor incid idunt ut.”
          </text>
          <div
            style={{
              justifyContent: "center",
              display: "flex",
              alignItems: "center",
              marginTop: 5,
            }}
          >
            <img
              style={{
                width: "40%",
                height: "100%",
                alignSelf: "center",
              }}
              alt="dp"
              src={dp}
            />
          </div>
          <text
            style={{
              alignSelf: "center",
              textAlign: "center",
              fontSize: 18,
              fontWeight: "bold",
            }}
          >
            Eduard Mendy
          </text>
          <text
            style={{
              alignSelf: "center",
              textAlign: "center",
              fontSize: 14,

              color: "#4F4F4F",
            }}
          >
            VP of Sale Development
          </text>
        </div>
      </Carousel.Slide>{" "}
      <Carousel.Slide>
        <div
          style={{
            backgroundColor: "white",
            flexDirection: "column",
            display: "grid",
            padding: "9%",
            boxShadow: "0px 4px 9px rgba(0, 0, 0, 0.1)",
            borderRadius: 20,
            gap: "12px",
          }}
        >
          <div
            style={{
              justifyContent: "center",
              display: "flex",
              alignItems: "center",
            }}
          >
            <img
              style={{
                width: "40%",
                height: "100%",
              }}
              alt="Star"
              src={star}
            />
          </div>
          <text
            style={{
              alignSelf: "center",
              textAlign: "center",
              lineHeight: 1.5,
            }}
          >
            “Lorem ipsum dolor sit amet, co nse ctetur adip isc ng elit, sed do
            eius mod tempor incid idunt ut.”
          </text>
          <div
            style={{
              justifyContent: "center",
              display: "flex",
              alignItems: "center",
              marginTop: 5,
            }}
          >
            <img
              style={{
                width: "40%",
                height: "100%",
                alignSelf: "center",
              }}
              alt="dp"
              src={dp}
            />
          </div>
          <text
            style={{
              alignSelf: "center",
              textAlign: "center",
              fontSize: 18,
              fontWeight: "bold",
            }}
          >
            Eduard Mendy
          </text>
          <text
            style={{
              alignSelf: "center",
              textAlign: "center",
              fontSize: 14,
              color: "#4F4F4F",
            }}
          >
            VP of Sale Development
          </text>
        </div>
      </Carousel.Slide>{" "}
      <Carousel.Slide>
        <div
          style={{
            backgroundColor: "white",
            flexDirection: "column",
            display: "grid",
            padding: "9%",
            boxShadow: "0px 4px 9px rgba(0, 0, 0, 0.1)",
            borderRadius: 20,
            gap: "12px",
          }}
        >
          <div
            style={{
              justifyContent: "center",
              display: "flex",
              alignItems: "center",
            }}
          >
            <img
              style={{
                width: "40%",
                height: "100%",
              }}
              alt="Star"
              src={star}
            />
          </div>
          <text
            style={{
              alignSelf: "center",
              textAlign: "center",
              lineHeight: 1.5,
            }}
          >
            “Lorem ipsum dolor sit amet, co nse ctetur adip isc ng elit, sed do
            eius mod tempor incid idunt ut.”
          </text>
          <div
            style={{
              justifyContent: "center",
              display: "flex",
              alignItems: "center",
              marginTop: 5,
            }}
          >
            <img
              style={{
                width: "40%",
                height: "100%",
                alignSelf: "center",
              }}
              alt="dp"
              src={dp}
            />
          </div>
          <text
            style={{
              alignSelf: "center",
              textAlign: "center",
              fontSize: 18,
              fontWeight: "bold",
            }}
          >
            Eduard Mendy
          </text>
          <text
            style={{
              alignSelf: "center",
              textAlign: "center",
              fontSize: 14,

              color: "#4F4F4F",
            }}
          >
            VP of Sale Development
          </text>
        </div>
      </Carousel.Slide>
      {/* ...other slides */}
    </Carousel>
  );
}
