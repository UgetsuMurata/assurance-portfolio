import React, { useEffect } from "react";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { HandsOnOne, HandsOnTwo, HandsOnThree, HandsOnFour, HandsOnFive, HandsOnSix } from "./case_study_module/CaseStudy";

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

                    <div className="contacts-container">
						<div className="title projects-title">
							Hands On
						</div>

						<div className="subtitle projects-subtitle">
						<Tabs>
							<TabList>
								<Tab>Module 1</Tab>
								<Tab>Module 2</Tab>
								<Tab>Module 3</Tab>
								<Tab>Module 4</Tab>
								<Tab>Module 5</Tab>
								<Tab>Module 6</Tab>
							</TabList>

							<TabPanel>
								<h1>Chapter 1: Introduction to Security</h1>
								<HandsOnOne/>
							</TabPanel>
							<TabPanel>
								<h1>Chapter 2: Personal Security</h1>
								<HandsOnTwo/>
							</TabPanel>
							<TabPanel>
								<h1>Chapter 3: Computer Security</h1>
								<HandsOnThree/>
							</TabPanel>
							<TabPanel>
								<h1>Chapter 4: Internet Security</h1>
								<HandsOnFour/>
							</TabPanel>
							<TabPanel>
								<h1>Chapter 5: Mobile Security</h1>
								<HandsOnFive/>
							</TabPanel>
							<TabPanel>
								<h1>Chapter 6: Privacy</h1>
								<HandsOnSix/>
							</TabPanel>
						</Tabs>
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
