import React from 'react';
import { FaGoogle, FaMicrosoft, FaApple, FaAmazon, FaFacebook, FaGithub } from 'react-icons/fa';
import { SiOracle, SiNetflix, SiTesla, SiSpotify, SiUber, SiAirbnb, SiSlack, SiDropbox } from 'react-icons/si';

const commonClasses = "h-6 sm:h-8 text-brand-gray-200 hover:text-white transition-colors duration-300";
const logoWallClasses = "w-16 h-16 sm:w-18 sm:h-18 text-brand-gray-200 hover:text-white transition-colors duration-300";

export const ArrowRightIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-arrow-right">
    <line x1="5" y1="12" x2="19" y2="12"></line>
    <polyline points="12 5 19 12 12 19"></polyline>
  </svg>
);

export const BuildingIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19 21H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2zM7 19h2v-2H7v2zm0-4h2v-2H7v2zm0-4h2v-2H7v2zm4 8h2v-2h-2v2zm0-4h2v-2h-2v2zm0-4h2v-2h-2v2zm4 8h2v-2h-2v2zm0-4h2v-2h-2v2z"/>
    </svg>
);

export const UserIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
    </svg>
);

export const DataProcessingIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="currentColor">
        <path d="M14 10H2v2h12v-2zm0-4H2v2h12V6zM2 16h8v-2H2v2zm19.5-4.5c-1.93 0-3.5 1.57-3.5 3.5s1.57 3.5 3.5 3.5 3.5-1.57 3.5-3.5-1.57-3.5-3.5-3.5zm-1.5 4h-1v-2.5l-2 2L14 15l2-2-2-2 1.5-1.5 2 2V9h1v2.5l2-2 1.5 1.5-2 2 2 2-1.5 1.5-2-2V15.5z"/>
    </svg>
);

export const CustomerServiceIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 1c-4.97 0-9 4.03-9 9v7.5c0 1.93 1.57 3.5 3.5 3.5h1.5c.28 0 .5-.22.5-.5v-3c0-.28-.22-.5-.5-.5H6.5V10c0-3.03 2.47-5.5 5.5-5.5s5.5 2.47 5.5 5.5v1h-1.5c-.28 0-.5.22-.5.5v3c0 .28.22.5.5.5h1.5c1.93 0 3.5-1.57 3.5-3.5V10c0-4.97-4.03-9-9-9z"/>
    </svg>
);

export const FinancialAutomationIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="currentColor">
        <path d="M11.5 2C6.81 2 3 5.81 3 10.5S6.81 19 11.5 19h.5v3c0 .55.45 1 1 1s1-.45 1-1v-3h.5c4.69 0 8.5-3.81 8.5-8.5S18.19 2 13.5 2h-2zm0 15c-3.58 0-6.5-2.92-6.5-6.5S7.92 4 11.5 4h2c3.58 0 6.5 2.92 6.5 6.5S17.08 17 13.5 17h-2zM11 7h2v2h-2zm0 4h2v6h-2z"/>
    </svg>
);

// Featured On Logos
export const GraphoLogo = () => (
  <svg viewBox="0 0 140 40" className={commonClasses} fill="currentColor">
    <text x="0" y="30" fontFamily="Manrope, sans-serif" fontSize="30" fontWeight="bold">Grapho</text>
  </svg>
);

export const SignumLogo = () => (
  <svg viewBox="0 0 130 40" className={commonClasses} fill="currentColor">
    <text x="0" y="30" fontFamily="Manrope, sans-serif" fontSize="30" fontWeight="bold">Signum.</text>
  </svg>
);

export const VectraLogo = () => (
  <svg viewBox="0 0 120 40" className={commonClasses} fill="currentColor">
    <text x="0" y="30" fontFamily="Manrope, sans-serif" fontSize="30" fontWeight="bold">Vectra</text>
  </svg>
);

export const OptimalLogo = () => (
  <svg viewBox="0 0 130 40" className={commonClasses} fill="currentColor">
    <text x="0" y="30" fontFamily="Manrope, sans-serif" fontSize="30" fontWeight="bold">Optimal</text>
  </svg>
);

export const BoltLogo = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 sm:h-8 text-brand-gray-200 hover:text-white transition-colors duration-300">
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
  </svg>
);

// Social Proof Logos
export const GoogleLogo = () => (
    <FaGoogle className={logoWallClasses} />
);

export const MicrosoftLogo = () => (
    <FaMicrosoft className={logoWallClasses} />
);

export const OracleLogo = () => (
    <SiOracle className={logoWallClasses} />
);

export const AppleLogo = () => (
    <FaApple className={logoWallClasses} />
);

export const AmazonLogo = () => (
    <FaAmazon className={logoWallClasses} />
);

export const FacebookLogo = () => (
    <FaFacebook className={logoWallClasses} />
);

export const NetflixLogo = () => (
    <SiNetflix className={logoWallClasses} />
);

export const TeslaLogo = () => (
    <SiTesla className={logoWallClasses} />
);

export const SpotifyLogo = () => (
    <SiSpotify className={logoWallClasses} />
);

export const UberLogo = () => (
    <SiUber className={logoWallClasses} />
);

export const AirbnbLogo = () => (
    <SiAirbnb className={logoWallClasses} />
);

export const SlackLogo = () => (
    <SiSlack className={logoWallClasses} />
);

export const DropboxLogo = () => (
    <SiDropbox className={logoWallClasses} />
);

export const GitHubIcon = () => (
    <FaGithub className="h-6 w-6 text-white hover:text-gray-300 transition-colors duration-300" />
);
