import React from "react";
import "./aboutSection.css";
import { Button, Typography, Avatar } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

const About = () => {
    const visitPortfolio = () => {
        window.open("https://vyom.onrender.com/", "_blank");
    };
    return (
        <div className="aboutSection">
            <div></div>
            <div className="aboutSectionGradient"></div>
            <div className="aboutSectionContainer">
                <Typography component="h1">About Us</Typography>

                <div>
                    <div>
                        <Avatar
                            style={{
                                width: "10vmax",
                                height: "10vmax",
                                margin: "2vmax 0",
                            }}
                            src="/me.png"
                            alt="Founder"
                        />
                        <Typography>Vyom</Typography>
                        <Button onClick={visitPortfolio} color="primary">
                            Visit Portfolio
                        </Button>
                    </div>
                    <div className="aboutSectionContainer2">
                        <Typography component="h2">Socials</Typography>
                        <a
                            href="https://www.linkedin.com/in/vyom-raturi-1537a3282/"
                            target="blank"
                        >
                            <LinkedInIcon className="linkedInSvgIcon" />
                        </a>
                        <Typography component="h2">Github</Typography>
                        <a href="https://github.com/VyomRaturi" target="blank">
                            <GitHubIcon className="linkedInSvgIcon" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
