import React from 'react';

function Footer() {
    const linkClass = 'd-block text-muted text-decoration-none mb-3';

    return (
        <footer style={{ backgroundColor: "rgb(250, 250, 250)" }}>
            <div className='container border-top mt-5 p-5'>
                <div className='row mt-5'>
                    <div className='col-3'>
                        <img src='media/images/logo.svg' style={{ width: "60%" }} alt='Logo' />
                        <p className='mt-3'>© 2010 - 2024, Not Zerodha Broking Ltd. All rights reserved.</p>
                        <div className='fs-4 d-flex gap-3'>
                            <i className='fa fa-twitter'></i>
                            <i className='fa fa-facebook-square'></i>
                            <i className='fa fa-instagram'></i>
                            <i className='fa fa-linkedin'></i>
                            <i className='fa fa-telegram'></i>
                        </div>
                    </div>

                    <div className='col-3'>
                        <p className='fs-5'>Company</p>
                        <a href='' className={linkClass}>About</a>
                        <a href='' className={linkClass}>Products</a>
                        <a href='' className={linkClass}>Pricing</a>
                        <a href='' className={linkClass}>Referral programme</a>
                        <a href='' className={linkClass}>Careers</a>
                        <a href='' className={linkClass}>Zerodha.tech</a>
                        <a href='' className={linkClass}>Press & media</a>
                        <a href='' className={linkClass}>Zerodha cares (CSR)</a>
                    </div>

                    <div className='col-3'>
                        <p className='fs-5'>Support</p>
                        <a href='' className={linkClass}>Contact</a>
                        <a href='' className={linkClass}>Support portal</a>
                        <a href='' className={linkClass}>Z-Connect blog</a>
                        <a href='' className={linkClass}>List of charges</a>
                        <a href='' className={linkClass}>Downloads & resources</a>
                    </div>

                    <div className='col-3'>
                        <p className='fs-5'>Account</p>
                        <a href='' className={linkClass}>Open an account</a>
                        <a href='' className={linkClass}>Fund transfer</a>
                        <a href='' className={linkClass}>60 day challenge</a>
                    </div>
                </div>

                <div className='mt-5 text-muted' style={{ fontSize: "14px" }}>
                    <p>
                        Zerodha Broking Ltd.: Member of NSE & BSE – SEBI Registration no.: INZ000031633 CDSL: Depository services through Zerodha Securities Pvt. Ltd. – SEBI Registration no.: IN... Trading through Zerodha Commodities Pvt. Ltd. MCX: 46025 – SEBI Registration no.: INZ000038238 Registered Address: Zerodha Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any complaints pertaining to securities broking please write to complaints@zerodha.com, for DP related to dp@zerodha.com. Please ensure you carefully read the Risk Disclosure Document as prescribed by SEBI | ICF
                    </p>
                    <p>
                        Procedure to file a complaint on SEBI SCORES: Register on SCORES portal. Mandatory details for filing complaints on SCORES: Name, PAN, Address, Mobile Number, E-mail ID. Benefits: Effective Communication, Speedy redressal of the grievances
                    </p>
                    <p>
                        Investments in securities market are subject to market risks; read all the related documents carefully before investing.
                    </p>
                    <p>
                        "Prevent unauthorised transactions in your account. Update your mobile numbers/email IDs with your stock brokers. Receive information of your transactions directly from Exchanges on your mobile/email at the end of the day. Issued in the interest of investors. KYC is one time exercise while dealing in securities markets - once KYC is done through a SEBI registered intermediary (broker, DP, Mutual Fund etc.), you need not undergo the same process again when you approach another intermediary." Dear Investor, if you are subscribing to an IPO, there is no need to issue a cheque. Please write the Bank account number and sign the IPO application form to authorize your bank to make payment in case of allotment. In case of non allotment the funds will remain in your bank account. As a business we don't give stock tips, and have not authorized anyone to trade on behalf of others. If you find anyone claiming to be part of Zerodha and offering such services, please create a ticket <a href='' className='text-decoration-none'>here</a>.
                    </p>

                    <div className='d-flex flex-wrap justify-content-center gap-5 mt-4 text-center'>
                        <a href='' className='text-muted text-decoration-none'>NSE</a>
                        <a href='' className='text-muted text-decoration-none'>BSE</a>
                        <a href='' className='text-muted text-decoration-none'>MCX</a>
                        <a href='' className='text-muted text-decoration-none'>Terms & conditions</a>
                        <a href='' className='text-muted text-decoration-none'>Policies & procedures</a>
                        <a href='' className='text-muted text-decoration-none'>Privacy policy</a>
                        <a href='' className='text-muted text-decoration-none'>Disclosure</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;