import React, { useEffect } from "react";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";

import INFO from "../data/user";

import "./styles/case-study.css";

const HandsOn = () => {
    useEffect(() => {
        document.title = `Hands On | ${INFO.main.title}`;
        window.scrollTo(0, 0);
    }, []);

    return (
        <React.Fragment>
            <div className="page-content">
                <NavBar active="Case Study" />
                <div className="content-wrapper">
                    <div className="contact-logo-container">
                        <div className="contact-logo">
                            <Logo width={46} />
                        </div>
                    </div>

                    <div className="contact-container">
                        <div className="title contact-title">
                            Case Study
                        </div>

                        <div className="subtitle contact-subtitle">
                            
                        </div>
                    </div>

                    <div className="page-footer">
                        <Footer />
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default HandsOn;
