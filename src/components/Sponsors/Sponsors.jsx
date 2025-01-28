import React from "react";
import ASOCLogo from '../../assets/Student-Legasdf.png';
import marchUpLogo from '../../assets/marchupLogo.png'
import codeforcauseLogo from '../../assets/codeforcause.png';
import AOPSLogo from '../../assets/AoPS_Main_Logo_1.png';
import "./Sponsors.css";

function Sponsors() {
    const sponsors = [
        { name: "ASOC", logo: ASOCLogo, link: "https://ohlone.edu/asoc" },
        { name: "CodeForCause", logo: codeforcauseLogo, link: "https://www.codeforcause.dev/" },
        { name: "MarchUp", logo: marchUpLogo, link: "https://marchup.net" },
        { name: "NordPass", logo: "https://images.saasworthy.com/nordpass_6669_logo_1719204895_2ykhq.png", link: "https://nordpass.com" },
        { name: "AoPS", logo: AOPSLogo, link: "https://artofproblemsolving.com/" },
        
        { name: "Saily", logo: "https://images.crunchbase.com/image/upload/c_pad,f_auto,q_auto:eco,dpr_1/esizssebffamghufonie", link: "https://saily.com" },
        { name: "NordVPN", logo: "https://play-lh.googleusercontent.com/G166NGtIsLp_UdpDjC1FF6dooIgd83fs2lstSI7mhW06q7gmiE1cw4BZ16OCX0WokPE", link: "https://nordvpn.com" },
        { name: "Incogni", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdhvUze9qyZi_wylK2rZKdUdxTTLBLTW7_vg&s", link: "https://incogni.com" },
        { name: "CodeCrafters.io", logo: "https://media.licdn.com/dms/image/v2/D560BAQEqzh_Uhd_rbw/company-logo_200_200/company-logo_200_200/0/1684437783960/codecraftersio_logo?e=2147483647&v=beta&t=xehlblVMw6zGFt5W7qBeiK4MkSjRxbxndVn_SSA-4h0", link: "https://codecrafters.io" },
        { name: "InterviewCake", logo: "https://www.interviewcake.com/static//images/cake_white_on_blue_600.png", link: "https://www.interviewcake.com" },
        { name: "1Password", logo: "https://assets.wheelhouse.com/media/_solution_logo_11062023_16183098.png", link: "https://1password.com" },
        
        
    ];

    return (
        <div className="sponsors-section">
            <h2 className="sponsors-title">Our Amazing Sponsors</h2>
            <p className="sponsors-subtitle">We are grateful for their support!</p>
            <div className="sponsors-grid">
                {sponsors.map((sponsor, index) => (
                    <a href={sponsor.link} key={index} target="_blank" rel="noopener noreferrer" className="sponsor-item">
                        <img
                            src={sponsor.logo}
                            alt={`${sponsor.name} Logo`}
                            className="sponsor-logo"
                        />
                    </a>
                ))}
            </div>
        </div>
    );
}

export default Sponsors;
