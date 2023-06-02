import { Image } from 'react-bootstrap';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

function HandsOnOne(){
    return(
        <>
            <br/><br/>
            <Tabs>
                <TabList>
                    <Tab>Case Project 1.1</Tab>
                    <Tab>Case Project 1.2</Tab>
                </TabList>

                <TabPanel>
                    <h1>Case Project 1.1: Attack Experiences</h1>
                    <p>
                    Based on your personal experiences or those of someone you know (you may have
                    to interview other students or a friend), write a paragraph regarding a computer
                    attack that occurred. When did it happen? What was the attack? What type of
                    damage did it inflict? Using the information in Table 1-2, list the reason or reasons
                    you think that the attack was successful. How was the computer fixed after the
                    attack? What could have prevented it? Write a one-page paper about these
                    experiences.
                    <b><em>Many people said that once their friends started receiving unusual messages
                        from their Facebook profiles, their accounts had been hacked. Through these mails,
                        the hackers forwarded links that had not been checked to several friends of the victims.
                        This attack, which is a phishing attack, cost one of my friends their lives. In this kind
                        of attack, the hacker lures you into going to a website that seems authentic but actually
                        has malware, such viruses, or asks you for your personal information. <br/>
                        Sadly, an unsafe link that had a virus in it tricked my friend. She lost access to her
                        Facebook account as a result, and her name and other information were modified or deleted.
                        In order to keep the attack going, the hacker keeps sending her Facebook friends dubious
                        links. My friend's ignorance of such attacks, which left him perplexed and without any
                        directions on how to proceed, can be blamed for the hack's success.
                        </em></b>
                    </p>
                </TabPanel>
                <TabPanel>
                    <h1>Case Project 1.2: Information Security Community Site Activity</h1>
                    <p>
                        The Information Security Community website is an online companion to this
                        textbook. It contains a wide variety of tools, information, discussion boards, and
                        other features to assist learners. In order to gain the most benefit from the site, you
                        will need to set up a free account. Go to http://community.cengage.com.
                        Click the “Join or Sign In” icon at the top of the page and then click Join Here. On
                        the Register page, enter the requested information (for your sign in name, use your
                        fist name and last name separated with a period or use the naming convention
                        designated by your instructor). Explore the various features of the Information
                        Security Community website, and become familiar with it. Visit the blog section and
                        read the blog postings to learn about some of the latest events in IT security.
                        <Image
                        src={require('./case_proj/cp_1/1.png')}
                        alt='Cengage Image'
                        className='w-max'/>
                        <Image
                        src={require('./case_proj/cp_1/2.png')}
                        alt='Cengage Image'
                        className='w-max'/>
                        <Image
                        src={require('./case_proj/cp_1/3.png')}
                        alt='Cengage Image'
                        className='w-max'/>
                    </p>
                </TabPanel>
            </Tabs>
        </>
    );
}
function HandsOnTwo(){
    return(
        <>
            <br/><br/>
            <Tabs>
                <TabList>
                    <Tab>Case Project 1.1</Tab>
                </TabList>

                <TabPanel>
                    <h1>TITLE</h1>
                    <p>
                        CONTENTS
                        {/* <Image
                        src={require('./hands_on/ho_1/1-2/3.png')}
                        alt='step 3 image'
                        className='w-max'/> */}
                    </p>
                </TabPanel>
            </Tabs>
        </>
    );
}
function HandsOnThree(){
    return(
        <>
            <br/><br/>
            <Tabs>
                <TabList>
                    <Tab>Case Project 1.1</Tab>
                </TabList>

                <TabPanel>
                    <h1>TITLE</h1>
                    <p>
                        CONTENTS
                        {/* <Image
                        src={require('./hands_on/ho_1/1-2/3.png')}
                        alt='step 3 image'
                        className='w-max'/> */}
                    </p>
                </TabPanel>
            </Tabs>
        </>
    );
}
function HandsOnFour(){
    return(
        <>
            <br/><br/>
            <Tabs>
                <TabList>
                    <Tab>Case Project 1.1</Tab>
                </TabList>

                <TabPanel>
                    <h1>TITLE</h1>
                    <p>
                        CONTENTS
                        {/* <Image
                        src={require('./hands_on/ho_1/1-2/3.png')}
                        alt='step 3 image'
                        className='w-max'/> */}
                    </p>
                </TabPanel>
            </Tabs>
        </>
    );
}
function HandsOnFive(){
    return(
        <>
            <br/><br/>
            <Tabs>
                <TabList>
                    <Tab>Case Project 1.1</Tab>
                </TabList>

                <TabPanel>
                    <h1>TITLE</h1>
                    <p>
                        CONTENTS
                        {/* <Image
                        src={require('./hands_on/ho_1/1-2/3.png')}
                        alt='step 3 image'
                        className='w-max'/> */}
                    </p>
                </TabPanel>
            </Tabs>
        </>
    );
}
function HandsOnSix(){
    return(
        <>
            <br/><br/>
            <Tabs>
                <TabList>
                    <Tab>Case Project 1.1</Tab>
                </TabList>

                <TabPanel>
                    <h1>TITLE</h1>
                    <p>
                        CONTENTS
                        {/* <Image
                        src={require('./hands_on/ho_1/1-2/3.png')}
                        alt='step 3 image'
                        className='w-max'/> */}
                    </p>
                </TabPanel>
            </Tabs>
        </>
    );
}
export {HandsOnOne, HandsOnTwo, HandsOnThree, HandsOnFour, HandsOnFive, HandsOnSix};