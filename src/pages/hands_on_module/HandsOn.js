import { Image } from 'react-bootstrap';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

function HandsOnOne(){
    return(
        <>
            <br/><br/>
            <Tabs>
                <TabList>
                    <Tab>Hands On 1.1</Tab>
                    <Tab>Hands On 1.2</Tab>
                    <Tab>Hands On 1.3</Tab>
                    <Tab>Hands On 1.4</Tab>
                </TabList>

                <TabPanel>
                    <h1>Project 1-1: Examine Data Breaches - Textual</h1>
                    <p><b>1.</b> Open a web browser and enter the URL www.privacyrights.org/data-breach (if
                    you are no longer able to access the site through the web address, use a search
                    engine to search for “Privacy Rights Clearinghouse data breach”).</p>
                    <Image
                        src={require('./hands_on/ho_1/1-1/1.png')}
                        alt='step 1 image'
                        className='w-max'/>
                    <p><b>2.</b> First spend time reading about the PRC. Click About Us in the toolbar.</p>
                    <Image
                        src={require('./hands_on/ho_1/1-1/2.png')}
                        alt='step 2 image'
                        className='w-max'/>
                    <p><b>3.</b> Scroll down to the content under Mission and Goals and also under Services.
                        Spend a few minutes reading about the PRC. <br/>
                        <b>4.</b> Click your browser's back button to return to the previous page.<br/>
                        <b>5.</b> On the Chronology of Data Breaches page scroll down and observe the different
                        breaches listed in chronological order.</p>
                    <Image
                        src={require('./hands_on/ho_1/1-1/5.png')}
                        alt='step 5 image'
                        className='w-max'/>
                    <p>
                        <b>6.</b> Now, create a customized list of the data that will only list data breaches of
                            educational institutions. Scroll back to the top page. <br/>
                        <b>7.</b> Under the Select organization type(s), uncheck all organizations except EDU -
                            Educational Institutions.<br/>
                        <b>8.</b> Click GO!<br/>
                        <b>9.</b> Scroll down to Breach Subtotal if necessary. How many breaches that were made
                            public pertain to educational institutions?<br/>
                        <b>10.</b> Scroll down and observe the breaches for educational institutions.
                    </p>
                    <Image
                        src={require('./hands_on/ho_1/1-1/10.png')}
                        alt='step 10 image'
                        className='w-max'/>
                    <p>
                        <b>11.</b> Scroll back to the top of the page. Click New Search, located beneath the GO!
                        Button.<br/>
                        <b>12.</b> Now search for breaches that were a result of lost, discarded, or stolen
                        equipment that belonged to the government and military. Under Choose the type
                        of breaches to display, uncheck all types except Portable device (PORT) - Lost,
                        discarded or stolen laptop, PDA, smartphone, portable memory device, CD, hard
                        drive, data tape, etc.<br/>
                        <b>13.</b> Under the Select organization type(s), uncheck all organization except GOV -
                        Government and Military.<br/>
                        <b>14.</b> Click GO!<br/>
                        <b>15.</b> Scroll down to Breach Subtotal, if necessary. How many breaches that were
                        made public pertain to this type?<br/>
                        <b>16.</b> Scroll down and observe the breaches for governmental institutions.</p>
                    <Image
                        src={require('./hands_on/ho_1/1-1/16.png')}
                        alt='step 16 image'
                        className='w-max'/>
                    <p>
                        <b>17.</b> Scroll back to the top of the page. <br/>
                        <b>18.</b> Now, create a search based on criteria that you are interested in, such as the
                        Payment Card Fraud against Retail/Merchants during the current year.</p>
                    <Image
                        src={require('./hands_on/ho_1/1-1/18.png')}
                        alt='step 18 image'
                        className='w-max'/>
                    <p>
                        <b>19.</b> When finished, close all windows.
                    </p>
                </TabPanel>
                <TabPanel>
                    <h1>Project 1-2: Examine Data Breaches - Visual</h1>
                    <p>
                        <b>1.</b> Open your web browser and enter the URL <br/>
                        https://www.informationisbeautiful.net/visualizations/worlds-biggest-data-breaches-hacks/
                        (If you are no longer able to access the site through this web address, use a search
                        engine to search for “Information Is Beautiful World’s Biggest Data Breaches”).
                        <b>2.</b> Click Hide Filter to display a visual graphic of the data breaches.<br/>
                        <b>3.</b> Scroll down the page to view the data breaches. Note that the size of the breach
                        is indicated by the size of the bubble.<br/>
                        <Image
                        src={require('./hands_on/ho_1/1-2/3.png')}
                        alt='step 3 image'
                        className='w-max'/>
                        <b>4.</b> Scroll back up to the top and note that the color of the bubbles that have an
                        “Interesting Story.” Click one of the bubbles and read the story. <br/>
                        <Image
                        src={require('./hands_on/ho_1/1-2/4.png')}
                        alt='step 4 image'
                        className='w-max'/>
                        <b>5.</b> Click Read a bit more. <br/>
                        <b>6.</b> Click “Click to see the original report”.
                        <Image
                        src={require('./hands_on/ho_1/1-2/6.png')}
                        alt='step 4 image'
                        className='w-max'/>
                        <b>7.</b> Read about the data breach. When finished close only this tab in your browser.<br/>
                        <b>8.</b> Click Show Filter to display the filter menu.<br/>
                        <b>9.</b> Under “organization” click Retail.<br/>
                        <b>10.</b> Under “Method of Leak” click Hacked. How many bubbles appear? It says record lost.
                        <Image
                        src={require('./hands_on/ho_1/1-2/10.png')}
                        alt='step 10 image'
                        className='w-max'/>
                        <b>11.</b> Under “Organization” click Government.<br/>
                        <b>12.</b> Under “Method of Leak” click Inside Job. How many bubbles appear? It says
                        record lost.
                        <Image
                        src={require('./hands_on/ho_1/1-2/12.png')}
                        alt='step 12 image'
                        className='w-max'/>
                        <b>13.</b> Under “Organization” click All.<br/>
                        <b>14.</b> Under “Method of Leak” click All.
                        <b>15.</b> At the top of the graphic click Method of Leak so that the bubbles display how
                        the leak occurred. Which type of leak is the most common? Why do you think this is
                        the case? <br/>
                        <blockquote className='text-sm italic text-gray-800'>Hacking is one of the most common methods of data leaks due to several factors. Firstly,
                        the widespread use of technology and the internet has led to an increase in potential attack
                        surfaces, providing hackers with numerous entry points to exploit vulnerabilities in systems,
                        networks, and applications. Additionally, hacking techniques and tools have become more sophisticated
                        and easily accessible, allowing individuals with malicious intent to launch targeted attacks.
                        Furthermore, the motive behind hacking is often financial gain, data theft, or sabotage, making
                        it an attractive option for those seeking to profit from valuable information. Finally, the human
                        factor, such as weak passwords, lack of security awareness, and social engineering, plays a
                        significant role in successful hacking attempts. The combination of these factors contributes to
                        the prevalence of hacking as a method of data leakage. </blockquote> <br/>
                        <b>16.</b> Does this visual convey a better story than the textual data in the previous
                        project? <br/>
                        <blockquote className='text-sm italic text-gray-800'>Yes, the interface of the visual content
                        is highly interactive and designed with a user-friendly approach, allowing individuals to navigate
                        and interact with the information effortlessly. The intuitive nature of the interface enables users
                        to quickly grasp the context and meaning of the visual content. By providing interactive elements
                        and intuitive controls, the visual representation enhances the overall user experience, making it
                        easier for individuals to explore and understand the data or story being conveyed. This interactive
                        nature fosters engagement and empowers users to delve deeper into the content, enabling a more
                        immersive and enriched understanding of the subject matter. Overall, the interactive and easily
                        navigable interface of the visual content greatly facilitates comprehension, making it an effective
                        tool for conveying complex information in a user-friendly manner.</blockquote> <br/>
                        <b>17.</b> Close all windows.
                    </p>
                </TabPanel>
                <TabPanel>
                    <h1>Project 1-3: Scan for Malware Using the Microsoft Safety Scanner</h1>
                    <p>
                        <b>1.</b> Determine which system type of Windows you are running. Click Start, Control
                        Panel, System and Security, and then System. Look under System Type for the
                        description.
                        <Image
                        src={require('./hands_on/ho_1/1-3/1.png')}
                        alt='step 1 image'
                        className='w-max'/>
                        <b>2.</b> Open your web browser and enter the URL
                        www.microsoft.com/security/scanner/en-us/default.asp (if you are no longer able
                        to access the site through the URL, use a search engine to search for “Microsoft
                        Safety Scanner”). <br/>
                        <b>3.</b> Click Download Now.<br/>
                        <b>4.</b> Select either 32-bit or 64-bit, depending upon which system type of Windows you are running.
                        <Image
                        src={require('./hands_on/ho_1/1-3/4.png')}
                        alt='step 4 image'
                        className='w-max'/>
                        <b>5.</b> When the program finishes downloading, right-click Start and click Open Windows Explorer.<br/>
                        <b>6.</b> Click Downloads icon in the left pane.<br/>
                        <b>7.</b> Double-Click the msert.exe file<br/>
                        <b>8.</b> Click Run if the User Account Control dialog box appears, click Yes.<br/>
                        <b>9.</b> Click the check box to accept the license terms for this software. Click Next.
                        <Image
                        src={require('./hands_on/ho_1/1-3/9.png')}
                        alt='step 9 image'
                        className='w-max'/>
                        <b>10.</b> Click Next.
                        <b>11.</b> Select Quick Scan if necessary.
                        <Image
                        src={require('./hands_on/ho_1/1-3/11.png')}
                        alt='step 11 image'
                        className='w-max'/>
                        <b>12.</b> Click Next <br/>
                        <b>13.</b> Depending on your computer this scan may take several minutes. Analyze the
                        results of the scan to determine if there is any malicious software found in your computer.<br/>
                        <b>14.</b> If you have problems, you can click View detailed results of the scan. After
                        reviewing the results, click OK. If you do not find any problems, click Finish.<br/>
                        <b>15.</b> If any malicious software was found on your computer run the scan again and
                        select Full scan. After the scan is complete, click Finish to close the dialog box.
                        <Image
                        src={require('./hands_on/ho_1/1-3/15.png')}
                        alt='step 15 image'
                        className='w-max'/>
                        <b>16.</b> Close all windows.                        
                    </p>
                </TabPanel>
                <TabPanel>
                    <h1>Project 1-4: Write-Protecting a USB Flash Drive</h1>
                    <p>
                        <b>1.</b> Open your web browser and enter the URL
                        www.irongeek.com/i.php?page=security/thumbscrew-software-usb-write-blocker
                        (if you are no longer able to access the program through the URL, use a search
                        engine to search for “Irongeek Thumbscrew”).<br/>
                        <Image
                        src={require('./hands_on/ho_1/1-4/1.png')}
                        alt='step 1 image'
                        className='w-max'/>
                        <b>2.</b> Click Download Thumbscrew.<br/>
                        <b>3.</b> If File Download dialog box appears, click Save and follow the instructions to
                        save this file in a location such as your desktop or a folder designated by your
                        instructor.<br/>
                        <b>4.</b> When the file finishes downloading, extract the files in a location such as your
                        desktop or a folder designated by your instructor. Navigate to that location and
                        double-click thumbscrew.exe and follow the default installation procedures.<br/>
                        <Image
                        src={require('./hands_on/ho_1/1-4/4.png')}
                        alt='step 4 image'
                        className='w-max'/>
                        <b>5.</b> After installation, notice that a new icon appears in the system tray in the lower
                        corner of the screen.<br/>
                        <Image
                        src={require('./hands_on/ho_1/1-4/5.png')}
                        alt='step 5 image'
                        className='w-max'/>
                        <b>6.</b> Insert a USB flash drive into the computer.<br/>
                        <b>7.</b> Navigate to a document on the computer.<br/>
                        <b>8.</b> Right-Click the document and then select Send to.<br/>
                        <b>9.</b> Click the appropriate Removable Disk icon of the USB flash drive to copy the file
                        to the flash drive.<br/>
                        <Image
                        src={require('./hands_on/ho_1/1-4/9.png')}
                        alt='step 9 image'
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
                <Tab>Hands On 2.1</Tab>
                <Tab>Hands On 2.2</Tab>
                <Tab>Hands On 2.3</Tab>
                <Tab>Hands On 2.4</Tab>
                <Tab>Hands On 2.5</Tab>
                <Tab>Hands On 2.6</Tab>
            </TabList>

            <TabPanel>
                <h1>Project 2-1</h1>
                <p>
                    1. The first step is to use a hash algorithm to create a password digest. Use your web
                    browser to go to www.fileformat.info/tool/hash.htm (if you are no longer able to access
                    the site through the web address, use a search engine to search for “Fileformat.Info hash
                    functions”). <br/>
                    <Image
                        src={require('./hands_on/ho_2/2-1/1.png')}
                        alt='step 1 image'
                        className='w-max'/>
                    2. Under String hash, enter the simple password apple123 in the Text: line.<br/>
                    3. Click Hash.<br/>
                    <Image
                        src={require('./hands_on/ho_2/2-1/3.png')}
                        alt='step 3 image'
                        className='w-max'/>
                    4. Scroll down the page and copy the MD4 hash of this password to your Clipboard by
                    selecting the text, right-clicking, and choosing Copy.<br/>
                    <Image
                        src={require('./hands_on/ho_2/2-1/4.png')}
                        alt='step 4 image'
                        className='w-max'/>
                    5. Open a new tab on your web browser.<br/>
                    6. Go to https://crackstation.net/.<br/>
                    <Image
                        src={require('./hands_on/ho_2/2-1/6.png')}
                        alt='step 6 image'
                        className='w-max'/>
                    7. Paste the MD4 hash of apple123 into the text box beneath Enter up to 10 non-salted
                    hashes:<br/>
                    8. In the RECAPTCHA box, enter the current value being displayed in the box that says Type
                    the text.<br/>
                    9. Click Crack Hashes.<br/>
                    10. How long did it take this online rainbow table to crack this hash? <b><em>At least 1 second</em></b><br/>
                    <Image
                        src={require('./hands_on/ho_2/2-1/10.png')}
                        alt='step 10 image'
                        className='w-max'/>
                    11. Click the browser tab to return to FileFormat.Info.<br/>
                    12. Under String hash, enter the longer password 12applesauce in the Text: line.<br/>
                    13. Click Hash.<br/>
                    14. Scroll down the page and copy the MD4 hash of this password to your Clipboard.<br/>
                    15. Click to browser tab to return to the CrackStation site.<br/>
                    16. Paste the MD4 hash of 12applesauce into the text box beneath Enter up to 10 nonsalted
                    hashes:<br/>
                    17. In the RECAPTCHA box, enter the current value being displayed in the box that says
                    Type the text.<br/>
                    18. Click Crack Hashes.<br/>
                    19. How long did it take this online rainbow table to crack this stronger password hash?<br/>
                    <b><em>Slightly longer than before, but still at least 1 second.</em></b><br/>
                    <Image
                        src={require('./hands_on/ho_2/2-1/19.png')}
                        alt='step 19 image'
                        className='w-max'/>
                    20. Click the browser tab to return to FileFormat.Info and experiment by entering new
                    passwords, computing their hash, and testing them in the CrackStation site. If you are bold,
                    enter a string hash that is similar to a real password that you use.<br/>
                    <Image
                        src={require('./hands_on/ho_2/2-1/20.png')}
                        alt='step 20 image'
                        className='w-max'/>
                    21. What does this tell you about the speed of cracking passwords? What does it tell you
                    about how easy it is for attackers to crack weak passwords?<br/>
                    <b><em>This activity showed how it easy it is to decrypt encrypted passwords. Because of advancing
                    technology, attackers can use this to crack unsafe or weak passwords. I also tried to do the
                    same process to my password, which is marked as super strong, it luckily did not cracked my
                    password.</em></b><br/>
                    22. Close all windows.<br/>
                </p>
            </TabPanel>
            <TabPanel>
                <h1>Project 2-2: Download and Install a Password Management Application</h1>
                <p>
                1. Use your web browser to go to keepass.info and then click Downloads (if you are no
                longer able to access the site through the web address, use a search engine to search for
                “KeePass”). <br/>
                    <Image
                        src={require('./hands_on/ho_2/2-2/1.png')}
                        alt='step 1 image'
                        className='w-max'/>
                2. Under Professional Edition, locate the most recent portable version of KeePass and click
                it to download the application. Save this file in a location such as your desktop, a folder
                designated by your instructor, or your portable USB flash drive. When the file finishes
                downloading, install the program. Accept the installation defaults.<br/>
                    <Image
                        src={require('./hands_on/ho_2/2-2/2.png')}
                        alt='step 2 image'
                        className='w-max'/>
                3. Launch KeePass to display the opening screen.<br/>
                4. Click File and New to start a password database. Enter a name for the password
                database and save it to your computer. Enter a strong master password for the database
                to protect all of the passwords in it. Enter the password again in the Repeat password
                box. Then, click OK twice.<br/>
                    <Image
                        src={require('./hands_on/ho_2/2-2/4.png')}
                        alt='step 4 image'
                        className='w-max'/>
                5. Click Edit and Add Entry. You will enter information about an online account that has a
                password that you already use. Click OK when you are finished.<br/>
                    <Image
                        src={require('./hands_on/ho_2/2-2/5.png')}
                        alt='step 5 image'
                        className='w-max'/>
                6. Create a group by clicking Edit and then Add Group and then enter Web Sites. Click OK
                when you are finished.<br/>
                    <Image
                        src={require('./hands_on/ho_2/2-2/6.png')}
                        alt='step 6 image'
                        className='w-max'/>
                7. Select the Web Sites group and click Edit and then Add Entry.<br/>
                8. Enter a title for your website (such as Google Gmail) under Title.<br/>
                9. Under User name, enter the username that you use to log in to this account.<br/>
                10. Erase the entries under Password and Repeat and enter the password that you use for
                this account and confirm it.<br/>
                11. Enter the URL for this account under URL.<br/>
                12. Click OK.<br/>
                13. Click File and Save.<br/>
                    <Image
                        src={require('./hands_on/ho_2/2-2/13.png')}
                        alt='step 13 image'
                        className='w-max'/>
                14. Exit KeePass.<br/>
                15. If necessary, navigate to the location of KeePass and double-click the file KeePass.exe
                to launch the application.<br/>
                16. Enter your master password to open your password file.<br/>
                    <Image
                        src={require('./hands_on/ho_2/2-2/16.png')}
                        alt='step 16 image'
                        className='w-max'/>
                17. If necessary, click the group to locate the account you just entered; it will be displayed
                in the right pane.<br/>
                18. Click the link next to the URL to go to that website.<br/>
                19. Click KeePass in the taskbar so that the window is now on top of your browser window.<br/>
                20. Drag and drop your username from KeePass into the login username box for this
                account in your web browser.<br/>
                21. Drag and drop your password from KeePass for this account.<br/>
                22. Click the button on your browser to log in to this account.<br/>
                23. Because you can drag and drop your account information from KeePass, you do not
                have to memorize any account passwords and can instead create strong passwords for
                each account. Is this an application that would help users create and use strong
                passwords? What are the strengths of such password programs? What are the
                weaknesses? Would you use KeePass?<br/>
                <b><em>It is possible to create and manage secure passwords for many accounts using password
                    managers like KeePass. Users no longer need to memorize complex passwords due to their
                    ability to generate and save them. The advantages of password managers like KeePass include
                    the capacity to create strong, unique passwords, encryption for safe password storage, and
                    the convenience of auto-filling login information. The reliance on a master password, which
                    if stolen, might put all other passwords in danger, is one flaw that can exist. In addition,
                    the password manager program itself can have security flaws. Although this software would be
                    helpful for people like me who are forgetful, I will not use this software as I already created
                    a database system for my own passwords with much simpler UI.</em></b><br/>
                24. Close all windows.<br/>
                </p>
            </TabPanel>
            <TabPanel>
                <h1>Project 2-3: Download and Install an Online Vault Password Manager</h1>
                <p>
                    1. Use your web browser to go to lastpass.com and click Download Free (if you are no longer
                    able to access the site through the web address, use a search engine to search for
                    “LastPass”).<br/>
                    <Image
                        src={require('./hands_on/ho_2/2-3/1.png')}
                        alt='step 1 image'
                        className='w-max'/>
                    2. Click Watch screencast tutorials to learn the basics.<br/>
                    3. Click Getting started with LastPass to open the tutorial screen, and if necessary, click
                    the Play button in the middle of the screen.<br/>
                    4. When the Basic Instructions tutorial has completed, click your browser’s Back button.<br/>
                    5. Click Watch screencast tutorials to learn the basics again.<br/>
                    6. Click How to Automatically Fill Webpage Forms to open the tutorial screen, and if
                    necessary click the Play button in the middle of the screen.<br/>
                    7. When the tutorial has completed, click your browser’s Back button.<br/>
                    8. Click the Download button to download LastPass.<br/>
                    9. After the program has downloaded, launch the program and follow the instructions for
                    the default installation.<br/>
                    10. Under Create or Log In be sure to click Create a New Account.<br/>
                    11. Enter your email address and create a password. Be sure to remember this information.<br/>
                    12. Accept the default settings to finish installing and creating your LastPass account.<br/>
                    13. Close your web browser.<br/>
                    <Image
                        src={require('./hands_on/ho_2/2-3/13.png')}
                        alt='step 13 image'
                        className='w-max'/>
                </p>
            </TabPanel>
            <TabPanel>
                <h1>Project 2-4: Using a Browser-Based Password Management Program</h1>
                <p>
                    1. Launch your web browser. If necessary, enable the LastPass browser extension.<br/>
                    2. Notice that you now have a LastPass button at the top of the screen. Click LastPass.<br/>
                    3. Enter your Master Password and then click Login.<br/>
                    <Image
                        src={require('./hands_on/ho_2/2-4/3.png')}
                        alt='step 3 image'
                        className='w-max'/>
                    4. Point your web browser to a website you frequently use that requires you to enter your
                    username and password.<br/>
                    5. Enter your username and password. Notice that LastPass now asks if you want it to
                    remember this password. Click Save Site.<br/>
                    6. When the Add Site window opens, click Save.<br/>
                    7. Log out of the website.<br/>
                    <Image
                        src={require('./hands_on/ho_2/2-4/7.png')}
                        alt='step 7 image'
                        className='w-max'/>
                    8. Now log in to two other websites and record their passwords in LastPass.<br/>
                    <Image
                        src={require('./hands_on/ho_2/2-4/8.png')}
                        alt='step 8 image'
                        className='w-max'/>
                    <br/>
                    <Image
                        src={require('./hands_on/ho_2/2-4/8 (2).png')}
                        alt='step 8.1 image'
                        className='w-max'/>
                    9. Close the web browser.<br/>
                    10. Reopen the web browser and click the LastPass icon on the toolbar. Notice that you are
                    still logged in.<br/>
                    11. Click the LastPass icon and select the site that you want to visit. What happens when
                    you go to these sites?<br/>
                    <b><em>It redirects me to the website I chose and automatically logs me in.</em></b><br/>
                    12. Because your login information automatically appears in LastPass, you do not have to
                    memorize any account passwords and can instead create strong passwords for each
                    account. Is this an application that would help users create and use strong passwords?
                    What are the strengths of browser-based password program? What are the weaknesses?
                    How does LastPass compare to KeePass? Would you use LastPass?<br/>
                    <b><em>Yes, LastPass is a tool that can assist users in creating and using secure passwords.
                        Strong password generation and storage, automatic form filling, and device synchronization
                        are advantages of browser-based password managers like LastPass. The danger of a master
                        password being compromised might also be a problem, as can potential flaws in the browser
                        or the password manager itself. LastPass and KeePass take distinct approaches; LastPass is
                        a browser-based application that offers convenience and synchronization features, while KeePass
                        is a local application that gives you more control over data storage.  I will keep using LastPass
                        as it removes the burden of having to log in repeatedly.</em></b>
                    13. Close all windows.<br/>
                </p>
            </TabPanel>
            <TabPanel>
                <h1>Project 2-5: Write-Protecting a USB Flash Drive</h1>
                <p>
                    
                </p>
            </TabPanel>
            <TabPanel>
                <h1>Project 2-6: Write-Protecting a USB Flash Drive</h1>
                <p>
                </p>
            </TabPanel>
        </Tabs>
    </>
    );
}
function HandsOnThree(){
    return(
        <></>
    );
}
function HandsOnFour(){
    return(
        <></>
    );
}
function HandsOnFive(){
    return(
        <></>
    );
}
function HandsOnSix(){
    return(
        <></>
    );
}
export {HandsOnOne, HandsOnTwo, HandsOnThree, HandsOnFour, HandsOnFive, HandsOnSix};