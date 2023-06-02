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
                    experiences.<br/><br/>
                    <b><em>Many people said that once their friends started receiving unusual messages
                        from their Facebook profiles, their accounts had been hacked. Through these mails,
                        the hackers forwarded links that had not been checked to several friends of the victims.
                        This attack, which is a phishing attack, cost one of my friends their lives. In this kind
                        of attack, the hacker lures you into going to a website that seems authentic but actually
                        has malware, such viruses, or asks you for your personal information. <br/><br/>
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
                        will need to set up a free account. Go to <a href='http://community.cengage.com' target='_blank' rel="noreferrer">
                        http://community.cengage.com</a>.
                        Click the “Join or Sign In” icon at the top of the page and then click Join Here. On
                        the Register page, enter the requested information (for your sign in name, use your
                        fist name and last name separated with a period or use the naming convention
                        designated by your instructor). Explore the various features of the Information
                        Security Community website, and become familiar with it. Visit the blog section and
                        read the blog postings to learn about some of the latest events in IT security.<br/><br/>
                        <Image
                        src={require('./case_proj/cp_1/1.png')}
                        alt='Cengage Image'
                        className='w-max'/><br/>
                        <Image
                        src={require('./case_proj/cp_1/2.png')}
                        alt='Cengage Image'
                        className='w-max'/><br/>
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
                    <Tab>Case Project 2.1</Tab>
                </TabList>

                <TabPanel>
                    <h1>Case Project 2.1: Testing Password Strength</h1>
                    <p>
                        How strong are your passwords? Various online tools can provide information on password
                        strength, but not all feedback is the same. First, assign the numbers 1 through 3 to three of
                        the passwords you are currently using, and write down the number (not the password) on
                        a piece of paper. Then, enter those passwords into these three online password testing
                        services: <br/>
                        • How Secure Is My Password (howsecureismypassword.net/)<br/>
                        • Check Your Password (www.microsoft.com/security/pc-security/password-checker.
                        aspx)<br/>
                        • The Password Meter (www.passwordmeter.com /)<br/>
                        Record next to each number the strength of that password as indicated by these three
                        online tools. Then use each online password tester to modify the password by adding more
                        random numbers or letters to increase its strength. How secure are your passwords? Would
                        any of these tools encourage someone to create a stronger password? Which provided the
                        best information? Create a one-paragraph summary of your findings.<br/>
                        <table>
                            <tr>
                                <th>
                                    howsecureismypassword.net/
                                </th>
                                <th>
                                    www.microsoft.com/security/pc-security/password-checker.aspx
                                </th>
                                <th>
                                    www.passwordmeter.com
                                </th>
                            </tr>
                            <tr>
                                <td>
                                <Image
                                    src={require('./case_proj/cp_2/1.png')}
                                    alt='6 tredecillion years'
                                    className='w-max'/>
                                </td>
                                <td>
                                <Image
                                    src={require('./case_proj/cp_2/2.png')}
                                    alt='404: Page not found.'
                                    className='w-max'/>
                                </td>
                                <td>
                                <Image
                                    src={require('./case_proj/cp_2/3.png')}
                                    alt='Very Strong'
                                    className='w-max'/>
                                </td>

                            </tr>
                        </table>
                        <h2><b>Adding Random Numbers and Letters</b></h2>
                        <table>
                            <tr>
                                <th>
                                    howsecureismypassword.net/
                                </th>
                                <th>
                                    www.microsoft.com/security/pc-security/password-checker.aspx
                                </th>
                                <th>
                                    www.passwordmeter.com
                                </th>
                            </tr>
                            <tr>
                                <td>
                                <Image
                                    src={require('./case_proj/cp_2/4.png')}
                                    alt='2 hundred quattuordecillion years'
                                    className='w-max'/>
                                </td>
                                <td>
                                <Image
                                    src={require('./case_proj/cp_2/2.png')}
                                    alt='404: Page not found.'
                                    className='w-max'/>
                                </td>
                                <td>
                                <Image
                                    src={require('./case_proj/cp_2/5.png')}
                                    alt='Very Strong'
                                    className='w-max'/>
                                </td>
                            </tr>
                        </table>
                        <b><em>
                            There is a difference in the evaluation of my password's security across
                            two independent password-checking services (aside from Microsoft, which is
                            temporarily unavailable). My password is very strong, requiring a computer
                            6 tredecillion years to crack it, according to "How Secure Is My Password?"
                            My password, however, receives a 100% score from "The Password Meter" and
                            is deemed to have very strong difficulty, although it doesn't match some
                            requirements for an exceptionally strong password. <br/><br/>
                            By establishing basic standards, such as requiring letters (both uppercase
                            and lowercase), digits, symbols, and the avoidance of repeating characters,
                            "The Password Meter" encourages users to develop more secure passwords.                            
                            However, "How Secure Is My Password?" could mislead consumers into thinking
                            that their passwords are secure enough even if they just contain three to
                            four words.<br/><br/>
                            In conclusion, "The Password Meter" can be regarded as a benchmark among
                            password-checking services because it offers thorough details regarding the
                            strength of passwords, establishes minimum standards, and evaluates whether
                            or not a password's complexity is sufficient. Compared to other services, it
                            provides a more thorough estimate of password strength.
                            </em></b>
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
                    <Tab>Case Project 3.1</Tab>
                    <Tab>Case Project 3.2</Tab>
                </TabList>

                <TabPanel>
                    <h1>Case Project 3.1: Online Backup Services</h1>
                    <p>
                        There are several good continuous online backup services that can
                        help make data backup easy for the user. Use a search engine to
                        search for online backup service reviews, and select three different
                        services. Research these services and note their features. Create a
                        table that lists each service and compare their features. Be sure to
                        also include costs. Which would you recommend? Why? <br/>
                        <table className="min-w-full">
                            <thead className="bg-white border-b">
                                <tr>
                                    <th className='w-15'>Name</th>
                                    <th className='w-45'>Features</th>
                                    <th className='w-40'>Cost</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="bg-gray-100 border-b">
                                    <td>
                                        CrashPlan For Small Business
                                        </td>
                                    <td>
                                        It has unlimited priced per machine, an unlimited storage,
                                        external drive backups and Two Factor Authentication. It
                                        is also fast upload a download speeds Lastly it has a lot
                                        of security and scheduling options.
                                    </td>
                                    <td>
                                        CrashPlan is rather expensive. You can get unlimited backup
                                        space for unlimited devices as long as you’re willing to pay
                                        $10 per month per computer.
                                    </td>
                                </tr>
                                <tr className="bg-white border-b">
                                    <td>
                                        SpiderOak One
                                    </td>
                                    <td>
                                        SpiderOak was the first online storage (or online-syncing) service 
                                        to make sure the customer held a private, exclusive encryption key.
                                        SpiderOak also has strong file-sharing and -syncing features, as well
                                        as support for unlimited machines and, if you insist, backups of
                                        system files and applications. <br/><br/>
                                        Yet SpiderOak's storage-space pricing is so high that it's more
                                        competitive with Dropbox than it is with IDrive. While its file-restoration
                                        speed was amazingly fast, its initial upload speed was glacial.
                                    </td>
                                    <td>
                                        You can choose from any of the following plans:<br/><br/>
                                        <ul className='list-disc'>
                                            <li>150 GB for $6 a month or $69 a year</li>
                                            <li>400 GB for $11 a month or $115 a year</li>
                                            <li>2 TB for $14 a month or $149 a year</li>
                                            <li>5 TB for $29 per month or $320 a year</li>
                                        </ul>
                                    </td>
                                </tr>
                                <tr className="bg-gray-100 border-b">
                                    <td>
                                        Carbonite
                                    </td>
                                    <td>
                                        Carbonite offers unlimited storage, which is always nice to
                                        have in one of the best cloud backup services. It also has
                                        an intuitive user interface that shows you which files have
                                        been fully, partly or not backed up. <br/><br/>
                                        Multiple machines are supported on a single account, but
                                        there's no volume discount — each additional machine costs
                                        as much as the first. Upload speeds are slow. And Carbonite's
                                        appealing mobile apps are no longer available, with the company
                                        giving no timetable for their return.
                                    </td>
                                    <td>
                                        Today’s Best Deals
                                        <ul className='list-disc'>
                                            <li>$3.50/mth at Carbonite</li>
                                            <li>$5/mth at Carbonite</li>
                                            <li>$58.99/year at Carbonite</li>
                                        </ul>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </p>
                </TabPanel>
                <TabPanel>
                    <h1>Case Project 3.2: Information Security Community Site Activity</h1>
                    <p>
                        The Information Security Community Site is an online companion to this
                        textbook. It contains a wide variety of tools, information, discussion
                        boards, and other features to assist learners. Go to community.cengage.com/infosec.
                        Sign in with the login name and password that you created in Chapter 1. What should be
                        the penalty for those who create viruses, worms, and other destructive malware? Prison
                        time? Monetary fines? How should it be enforced? And would this deter attackers? Record
                        your responses on the Community Site discussion board. <br/><br/>
                        <b><em>
                        The creation of viruses, worms, and other malicious programs should be punished with both
                        jail time and large fines. Enforcement should be carried out by joint efforts between law
                        enforcement agencies, governments, and the information technology (IT) industry. Threats of
                        serious legal consequences and prosecution can act as a deterrent, making potential attackers
                        rethink before partaking in such unlawful behavior. It is essential to keep in mind that the
                        efficiency of these penalties in deterring attackers can vary, mandating a thorough strategy
                        that takes root cause analysis, education, and awareness into account.
                        </em></b>
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
                    <Tab>Case Project 4.1</Tab>
                </TabList>

                <TabPanel>
                    <h1>Case Project 4.1: Compare Browser Security</h1>
                    <p>
                    Of the most popular web browsers—IE, Firefox, Safari, Opera, and Chrome—
                    which is the most secure? Using the Internet, research the security
                    features of each of these browsers. Create a table that lists the different
                    security features. In your opinion, is there one browser that is more secure
                    than the rest? Is there a browser that is the least secure? Give reasons
                    for your conclusion.
                        <table className="min-w-full">
                            <thead className="bg-white border-b">
                                <tr>
                                    <th className='w-20'>Browsers</th>
                                    <th className='w-80'>Security Features</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="bg-gray-100 border-b">
                                    <td>
                                        Internet Explorer (IE)
                                    </td>
                                    <td>
                                    Microsoft Internet Explorer was a more popular web browser for many years
                                    from 1999 to 2012 as it surpassed the Netscape Navigator during this time.
                                    It includes network file sharing, several internet connections, active
                                    Scripting, and security settings. It also provides other features such
                                    as: Remote administration.
                                    </td>
                                </tr>
                                <tr className="bg-white border-b">
                                    <td>
                                        Firefox
                                    </td>
                                    <td>
                                    Firefox is a popular web browser with various features. It has a customizable
                                    interface, private browsing mode, and a built-in password manager. It also
                                    supports add-ons, which can enhance functionality. Firefox includes a download
                                    manager, tabbed browsing, and syncing bookmarks, history, and passwords across
                                    devices
                                    </td>
                                </tr>
                                <tr className="bg-gray-100 border-b">
                                    <td>
                                        Safari
                                    </td>
                                    <td>
                                        <ul className='list-disc'>
                                            <li>Ad Blocker.</li>
                                            <li>Address Bar.</li>
                                            <li>Bookmark Management.</li>
                                            <li>Dark Mode.</li>
                                            <li>Extension Management.</li>
                                            <li>Privacy Options.</li>
                                            <li>Private Browsing.</li>
                                            <li>Search Engine.</li>
                                        </ul>
                                    </td>
                                </tr>
                                <tr className="bg-white border-b">
                                    <td>
                                        Opera
                                    </td>
                                    <td>
                                    Opera's built-in VPN reduces online
                                    tracking and shield browsing from
                                    third-party trackers, enabling users
                                    to secure their privacy online.
                                    </td>
                                </tr>
                                <tr className="bg-gray-100 border-b">
                                    <td>
                                        Chrome
                                    </td>
                                    <td>
                                        <ul className='list-disc'>
                                            <li>Overview.</li>
                                            <li>Google address bar.</li>
                                            <li>Password check.</li>
                                            <li>Sync.</li>
                                            <li>Dark mode.</li>
                                            <li>Tabs.</li>
                                            <li>Articles for you.</li>
                                            <li>Extensions.</li>
                                        </ul>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <em><b>
                            Based from the features and other results, Firefox is far more secure than the others.
                            Firefox is open-source, whereas Chrome is not. That means anyone can look at Firefox's
                            code and potentially find bugs which Mozilla can then quickly resolve. Open-source products
                            and software tend to be favored by cyber security experts because they're open for vetting
                            by the general public. <br/><br/>
                            While the least secure for me is the Google Chrome since based from recent research that 
                            chrome is the most vulnerable web browser, with 303 bugs being found in the tool in 2022 alone.
                        </b></em>
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
                    <Tab>Case Project 5.1</Tab>
                    <Tab>Case Project 5.2</Tab>
                </TabList>
                <TabPanel>
                    <h1>Case Project 5.1: Your Wireless Security</h1>
                    <p>
                        Is the wireless network you own as secure as it should be? Examine your
                        wireless network or that of a friend or neighbor and determine which security
                        model it uses. Next, outline the steps it would take to move it to the next
                        highest level. Estimate how much it would cost and how much time it would take
                        to increase the level. Finally, estimate how long it would take you to replace
                        all the data on your computer if it was corrupted by an attacker, and what you
                        might lose. Would this be a motivation to increase your current wireless security
                        model? Write a one-page paper on your work. <br/><br/>
                        To examine the network configuration on Windows, you can use the "ipconfig /all"
                        command. Linux users can use the "ifconfig" command to view their network details.
                        These commands provide information such as the host name, primary DNS suffix, IP
                        routing status, and network adapter details.<br/><br/>
                        <div className="bg-gray-100 p-4">
                            <code className="text-sm font-mono text-gray-800">
                            Wireless LAN adapter Wi-Fi:<br/><br/>
                            Description: Intel(R) Wi-Fi 6 AX201 160MHz<br/>
                            Physical Address: B0-3C-DC-BB-E5-1D<br/>
                            IPv4 Address: 192.168.110.156<br/>
                            Subnet Mask: 255.255.255.0<br/>
                            Default Gateway: 192.168.110.1<br/>
                            DHCP Server: 192.168.110.1<br/>
                            DNS Servers: 192.168.110.1<br/>
                            </code>
                        </div>
                        Using tools like Wireshark can help you deeply analyze your network, capture data
                        packets, and understand the security model. Wireshark provides a GUI interface and
                        additional information on transmission control protocols and more.<br/><br/>
                        To enhance network security, consider implementing firewalls such as application
                        gateways, packet filtering, or hybrid systems. Crypto cable routers and virtual
                        private networks (VPNs) can also be used to improve network security.<br/><br/>
                        The cost and time required to increase network security will depend on the chosen
                        architecture and the size of the network. Larger networks may require more resources
                        and time to implement security measures effectively.<br/><br/>
                        In the event of a computer attack, the time required to replace data will depend on
                        the size of the data on the disk and the bandwidth of the network. A higher bandwidth
                        network allows for faster data replacement in case of an attack.
                    </p>
                </TabPanel>
                <TabPanel>
                    <h1>Case Project 5.2: Information Security Community Site Activity</h1>
                    <p>
                    The Information Security Community Site is an online companion to this textbook. It
                    contains a wide variety of tools, information, discussion boards, and other features
                    to assist learners. Go to community.cengage.com/infosec. Sign in with the login name
                    and password that you created in Chapter 1. What is the legality of war driving? Is it
                    considered illegal? Why or why not? If it is not illegal, do you think it should be?
                    What should be the penalties? Record your responses on the Community Site discussion board.<br/><br/>
                    <b><em>
                    There are no laws that prohibit people from gathering or collecting data from wireless
                    networks or creating computer-generated maps. That said, wardriving can be illegal when
                    it involves exploiting insecure networks to access private information.<br/><br/>
                    Wardriving should be considered illegal due to concerns over privacy invasion, unauthorized
                    network access, potential disruption of network infrastructure, and the existing legal gray
                    areas surrounding its activities.<br/><br/>
                    The penalties for wardriving, if deemed illegal, can vary depending on the jurisdiction
                    and the severity of the offense. Possible penalties may include fines, probation, community
                    service, or even imprisonment. The specific penalties would be determined by the legal system
                    and would aim to deter individuals from engaging in unauthorized wireless network access
                    and protect the privacy and security of network users.
                    </em></b>
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
                    <Tab>Case Project 6.1</Tab>
                    <Tab>Case Project 6.2</Tab>
                </TabList>
                <TabPanel>
                    <h1>Case Project 6.1: Microsoft Windows 10 Privacy</h1>
                    <p>
                        With the introduction of Microsoft Windows 10, Microsoft by default gathers
                        information about user preferences. For example, Windows 10 assigns an
                        advertising ID to users and then uses it to deliver customized ads and
                        information. This has caused alarm among some users regarding intrusion
                        into their privacy. Using the Internet, research the information gathered
                        through Windows 10. What are the advantages of this data collection? What
                        are the disadvantages? Is this any different from how other operating systems
                        and websites gather information? Should Microsoft be more upfront about the
                        collection of this data? Is there a way to turn the data collection off? If
                        so, how is it done? Should it be easier to turn it off for users who do not
                        want their data collected? Write a one-page paper on your research and opinions. <br/><br/>
                        <b><em>
                        The advantages of information gathered through Windows 10 are manifold. Firstly,
                        it provides valuable insights for product improvement, allowing Microsoft to
                        identify and address software bugs, compatibility issues, and enhance system
                        performance based on user feedback. This iterative process ensures a more stable
                        and user-friendly operating system. Secondly, the data collected contributes to
                        enhanced security measures as Microsoft can proactively detect and resolve potential
                        security threats, protecting users from malware and other cybersecurity risks.
                        Additionally, the information gathered enables personalized user experiences by
                        tailoring features, recommendations, and suggestions within Windows 10 to individual
                        preferences, enhancing productivity and user satisfaction. Lastly, the aggregated
                        data aids in optimizing services by analyzing usage patterns, user behavior, and
                        preferences, resulting in refined and efficient user experiences. However, it is
                        important to acknowledge the potential disadvantages, including concerns about
                        privacy risks, unauthorized data access, lack of user control over personal data,
                        and the necessity of robust security measures to prevent data breaches or misuse.<br/><br/>
                        The practices of data collection can vary among operating systems and websites, but there
                        are some commonalities. Many operating systems and websites collect data to improve their
                        products and services, enhance security, personalize user experiences, and optimize their
                        offerings based on user behavior and preferences. However, the specific data collection
                        methods, extent of data collected, and purposes can differ between different platforms and
                        services. Each operating system or website may have its own privacy policies and settings
                        that outline their data collection practices, and it's important for users to review and
                        understand these policies to make informed decisions about their privacy.<br/><br/>
                        Many individuals believe that Microsoft should prioritize transparency and be more upfront
                        about the collection of user data in Windows 10. Providing clear and accessible information
                        about what data is collected, why it is collected, and how it is used would allow users to
                        make more informed decisions about their privacy. Microsoft does offer privacy settings in
                        Windows 10, which allow users to customize their data collection preferences. While the
                        specific steps may vary, users can typically navigate through the settings and privacy
                        menus to adjust their preferences and limit or turn off certain data collection practices.
                        However, some argue that Microsoft should make it easier for users to opt out of data
                        collection if they do not wish their data to be collected. Simplifying privacy settings and
                        providing clear, easily accessible options for opting out would enhance user control and privacy
                        protection. It's important to strike a balance between user privacy concerns and the need for
                        data to improve products and services, as some data collection is necessary for essential
                        functionality and security purposes.
                        </em></b>
                    </p>
                </TabPanel>
                <TabPanel>
                    <h1>Case Project 6.2: Information Security Community Site Activity</h1>
                    <p>
                        The Information Security Community Site is an online companion to this
                        textbook. It contains a wide variety of tools, information, discussion
                        boards, and other features to assist learners. Go to community.cengage.com/infosec.
                        Sign in with the login name and password that you created in Chapter 1. How do you
                        feel about the NSA gathering data on American citizens? Is it a serious intrusion
                        on privacy? Or is it a practical protection in the world today in order to keep
                        the nation safe? Should there be laws in place to prevent this? Record your
                        responses on the Community Site discussion board.<br/><br/>
                        <b><em>
                        The gathering of data by intelligence agencies such as the National Security Agency
                        (NSA) on American citizens has been a subject of controversy and debate. Supporters
                        argue that such data collection is necessary for national security purposes, as it
                        can help prevent potential threats and protect the country from acts of terrorism
                        or other forms of harm. <br/><br/>
                        The question of whether data gathering by intelligence agencies is a serious intrusion
                        on privacy or a practical protection measure is subjective. Supporters argue it is
                        necessary for national security, while critics highlight concerns about privacy and
                        civil liberties. Achieving the right balance between privacy and security is a complex
                        challenge, subject to ongoing debate and scrutiny.<br/><br/>
                        Yes, there should be laws in place to prevent this kind of issue.

                        </em></b>
                    </p>
                </TabPanel>
            </Tabs>
        </>
    );
}
export {HandsOnOne, HandsOnTwo, HandsOnThree, HandsOnFour, HandsOnFive, HandsOnSix};