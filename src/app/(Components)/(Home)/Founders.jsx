import Image from "next/image";
import "@/app/(Css)/(Home)/Founder.css"
const Founders = () => {
    return (
        <div className="founders-section">
                <div className="founders-container">
                    <div className="vis-mis-row">
                        <div className="vis-mis">
                            <h2 className="sub-head-text" style={{fontWeight:"400"}}>Our Vision</h2>
                            <p className="sub-para-text">An inclusively empowered rural India thrives through sustainable growth, equal opportunities, education, healthcare, technology, and community-driven initiatives for all.</p>
                        </div>
                        <div className="vis-mis">
                            <h2 className="sub-head-text" style={{fontWeight:"400"}}>Our Mission</h2>
                            <p className="sub-para-text">Implement innovative strategies through public, private, and community partnerships for sustainable and inclusive socio-economic development—enhancing rural capabilities to become more productive at scale.</p>
                        </div>
                    </div>
                </div>
            
        </div>
    );
};

export default Founders;