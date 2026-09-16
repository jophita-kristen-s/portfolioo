import React from 'react';

interface CelestialObjectsProps {
  scrollProgress?: number;
  mouseX?: number;
  mouseY?: number;
}

export const CelestialObjects: React.FC<CelestialObjectsProps> = ({
  scrollProgress = 0,
  mouseX = 0,
  mouseY = 0,
}) => {
  // Parallax shifts for celestial bodies
  const galaxyShiftX = mouseX * -18;
  const galaxyShiftY = mouseY * -18 - scrollProgress * 40;

  const planetLeftShiftX = mouseX * 12;
  const planetLeftShiftY = mouseY * 12 - scrollProgress * 55;

  const planetRightShiftX = mouseX * -14;
  const planetRightShiftY = mouseY * -14 - scrollProgress * 35;

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden select-none w-full h-full">
      
      {/* =========================================================================
          1. TOP-LEFT: REALISTIC TILTED SPIRAL GALAXY (AS IN REFERENCE IMAGE)
          Oblique spiral galaxy with brilliant galactic core and winding spiral arms
         ========================================================================= */}
      <div
        className="absolute -top-10 sm:-top-4 md:top-2 -left-12 sm:-left-6 md:left-2 w-[320px] sm:w-[420px] md:w-[520px] h-[320px] sm:h-[420px] md:h-[520px] transition-transform duration-700 ease-out pointer-events-none"
        style={{
          transform: `translate3d(${galaxyShiftX}px, ${galaxyShiftY}px, 0) rotate(-28deg)`,
        }}
      >
        <svg
          viewBox="0 0 400 400"
          className="w-full h-full opacity-90 filter drop-shadow-[0_0_45px_rgba(168,85,247,0.55)] animate-galaxy-slow"
        >
          <defs>
            {/* Brilliant Galactic Nucleus Core Gradient */}
            <radialGradient id="galaxy-core" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="1" />
              <stop offset="15%" stopColor="#fef08a" stopOpacity="0.95" />
              <stop offset="35%" stopColor="#e0e7ff" stopOpacity="0.85" />
              <stop offset="60%" stopColor="#c084fc" stopOpacity="0.6" />
              <stop offset="85%" stopColor="#7e22ce" stopOpacity="0.25" />
              <stop offset="100%" stopColor="#1e1b4b" stopOpacity="0" />
            </radialGradient>

            {/* Arm Glow 1: Cyan / Electric Blue Young Stars */}
            <linearGradient id="arm-blue" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.95" />
              <stop offset="30%" stopColor="#38bdf8" stopOpacity="0.8" />
              <stop offset="70%" stopColor="#1d4ed8" stopOpacity="0.45" />
              <stop offset="100%" stopColor="#0f172a" stopOpacity="0" />
            </linearGradient>

            {/* Arm Glow 2: Magenta / Violet Emission Dust */}
            <linearGradient id="arm-magenta" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.95" />
              <stop offset="25%" stopColor="#f472b6" stopOpacity="0.85" />
              <stop offset="65%" stopColor="#a855f7" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#311042" stopOpacity="0" />
            </linearGradient>

            {/* Soft Outer Halo */}
            <radialGradient id="galaxy-halo" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#d8b4fe" stopOpacity="0.35" />
              <stop offset="40%" stopColor="#818cf8" stopOpacity="0.2" />
              <stop offset="75%" stopColor="#3b82f6" stopOpacity="0.08" />
              <stop offset="100%" stopColor="#030822" stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* Outer Atmospheric Diffuse Halo */}
          <ellipse cx="200" cy="200" rx="190" ry="140" fill="url(#galaxy-halo)" />

          {/* Logarithmic Spiral Arm 1 (Northern Arm) */}
          <path
            d="M 200 200 
               C 215 170, 240 155, 275 160 
               C 315 165, 345 200, 340 245 
               C 335 295, 290 335, 230 345 
               C 165 355, 110 325, 90 260
               C 75 210, 95 150, 145 110
               C 195 70, 275 75, 330 115"
            fill="none"
            stroke="url(#arm-blue)"
            strokeWidth="16"
            strokeLinecap="round"
            filter="blur(5px)"
            className="opacity-75"
          />

          {/* Sharp Core Track for Arm 1 */}
          <path
            d="M 200 200 
               C 215 170, 240 155, 275 160 
               C 315 165, 345 200, 340 245 
               C 335 295, 290 335, 230 345"
            fill="none"
            stroke="#ffffff"
            strokeWidth="3.5"
            strokeLinecap="round"
            filter="blur(1px)"
            className="opacity-90"
          />

          {/* Logarithmic Spiral Arm 2 (Southern Arm) */}
          <path
            d="M 200 200 
               C 185 230, 160 245, 125 240 
               C 85 235, 55 200, 60 155 
               C 65 105, 110 65, 170 55 
               C 235 45, 290 75, 310 140
               C 325 190, 305 250, 255 290
               C 205 330, 125 325, 70 285"
            fill="none"
            stroke="url(#arm-magenta)"
            strokeWidth="16"
            strokeLinecap="round"
            filter="blur(5px)"
            className="opacity-75"
          />

          {/* Sharp Core Track for Arm 2 */}
          <path
            d="M 200 200 
               C 185 230, 160 245, 125 240 
               C 85 235, 55 200, 60 155 
               C 65 105, 110 65, 170 55"
            fill="none"
            stroke="#ffffff"
            strokeWidth="3.5"
            strokeLinecap="round"
            filter="blur(1px)"
            className="opacity-90"
          />

          {/* Star-Forming HII Emission Knots (Brilliant Cyan & Magenta Pinpoints) */}
          <circle cx="280" cy="170" r="3.5" fill="#38bdf8" filter="drop-shadow(0 0 6px #38bdf8)" />
          <circle cx="330" cy="225" r="2.8" fill="#f472b6" filter="drop-shadow(0 0 5px #f472b6)" />
          <circle cx="245" cy="335" r="3" fill="#67e8f9" filter="drop-shadow(0 0 5px #67e8f9)" />
          <circle cx="120" cy="230" r="3.5" fill="#e879f9" filter="drop-shadow(0 0 6px #e879f9)" />
          <circle cx="70" cy="175" r="2.8" fill="#38bdf8" filter="drop-shadow(0 0 5px #38bdf8)" />
          <circle cx="155" cy="65" r="3" fill="#f472b6" filter="drop-shadow(0 0 5px #f472b6)" />
          <circle cx="295" cy="115" r="2.5" fill="#ffffff" filter="drop-shadow(0 0 4px #ffffff)" />

          {/* Radiant Galactic Nucleus Core */}
          <ellipse cx="200" cy="200" rx="36" ry="26" fill="url(#galaxy-core)" />
          <ellipse cx="200" cy="200" rx="14" ry="10" fill="#ffffff" filter="drop-shadow(0 0 12px #ffffff)" />
        </svg>
      </div>

      {/* =========================================================================
          2. BOTTOM-LEFT: MASSIVE DARK PLANET WITH ELECTRIC BLUE CRESCENT LIMB
          Iconic framing element from the reference image, rising from bottom corner
         ========================================================================= */}
      <div
        className="absolute -bottom-24 sm:-bottom-32 md:-bottom-40 -left-20 sm:-left-28 md:-left-36 w-[340px] sm:w-[440px] md:w-[540px] h-[340px] sm:h-[440px] md:h-[540px] transition-transform duration-700 ease-out pointer-events-none"
        style={{
          transform: `translate3d(${planetLeftShiftX}px, ${planetLeftShiftY}px, 0)`,
        }}
      >
        <svg viewBox="0 0 400 400" className="w-full h-full filter drop-shadow-[0_0_55px_rgba(56,189,248,0.5)]">
          <defs>
            {/* Atmospheric Rayleigh Scattering Crescent */}
            <radialGradient id="planet-left-atmosphere" cx="80%" cy="20%" r="75%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="1" />
              <stop offset="12%" stopColor="#67e8f9" stopOpacity="0.95" />
              <stop offset="28%" stopColor="#0284c7" stopOpacity="0.8" />
              <stop offset="48%" stopColor="#1e3a8a" stopOpacity="0.45" />
              <stop offset="70%" stopColor="#030822" stopOpacity="0.1" />
              <stop offset="100%" stopColor="#000000" stopOpacity="0" />
            </radialGradient>

            {/* Dark Spherical Body Shadow */}
            <radialGradient id="planet-left-shadow" cx="30%" cy="70%" r="70%">
              <stop offset="0%" stopColor="#000208" stopOpacity="0.99" />
              <stop offset="75%" stopColor="#030822" stopOpacity="0.95" />
              <stop offset="100%" stopColor="#0c183a" stopOpacity="0.6" />
            </radialGradient>
          </defs>

          {/* Planet Body */}
          <circle cx="200" cy="200" r="185" fill="#01040f" />
          <circle cx="200" cy="200" r="185" fill="url(#planet-left-shadow)" />

          {/* Razor-sharp Atmospheric Rim */}
          <circle
            cx="200"
            cy="200"
            r="185"
            fill="none"
            stroke="url(#planet-left-atmosphere)"
            strokeWidth="10"
            className="mix-blend-screen"
          />

          {/* Upper-Right Luminous Edge Highlight */}
          <path
            d="M 230 18 A 185 185 0 0 1 382 230"
            fill="none"
            stroke="#e0f2fe"
            strokeWidth="3.5"
            filter="drop-shadow(0 0 10px #38bdf8)"
          />
        </svg>
      </div>

      {/* =========================================================================
          3. TOP-RIGHT: DARK CELESTIAL PLANET WITH CYAN CRESCENT RIM
          Subtle framing celestial sphere in the upper right background
         ========================================================================= */}
      <div
        className="absolute -top-16 sm:-top-20 md:-top-24 -right-16 sm:-right-20 md:-right-24 w-[240px] sm:w-[320px] md:w-[380px] h-[240px] sm:h-[320px] md:h-[380px] transition-transform duration-700 ease-out pointer-events-none"
        style={{
          transform: `translate3d(${planetRightShiftX}px, ${planetRightShiftY}px, 0)`,
        }}
      >
        <svg viewBox="0 0 300 300" className="w-full h-full filter drop-shadow-[0_0_40px_rgba(34,211,238,0.4)]">
          <defs>
            <radialGradient id="planet-right-glow" cx="25%" cy="80%" r="70%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.95" />
              <stop offset="15%" stopColor="#38bdf8" stopOpacity="0.85" />
              <stop offset="35%" stopColor="#1d4ed8" stopOpacity="0.5" />
              <stop offset="70%" stopColor="#020617" stopOpacity="0.1" />
              <stop offset="100%" stopColor="#000000" stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* Spherical Shadow */}
          <circle cx="150" cy="150" r="135" fill="#01030e" />

          {/* Atmospheric Rim */}
          <circle
            cx="150"
            cy="150"
            r="135"
            fill="none"
            stroke="url(#planet-right-glow)"
            strokeWidth="7"
            className="mix-blend-screen"
          />

          {/* Crescent Edge Specular */}
          <path
            d="M 18 175 A 135 135 0 0 0 175 282"
            fill="none"
            stroke="#a5f3fc"
            strokeWidth="2.5"
            filter="drop-shadow(0 0 8px #38bdf8)"
          />
        </svg>
      </div>

      {/* =========================================================================
          4. BOTTOM-RIGHT: DISTANT MOON (AS IN REFERENCE IMAGE)
          Smaller celestial satellite with textured side-illumination
         ========================================================================= */}
      <div
        className="absolute bottom-16 sm:bottom-24 right-4 sm:right-10 md:right-16 w-[70px] sm:w-[95px] md:w-[120px] h-[70px] sm:h-[95px] md:h-[120px] transition-transform duration-700 ease-out pointer-events-none"
        style={{
          transform: `translate3d(${planetRightShiftX * 0.7}px, ${planetRightShiftY * 0.7}px, 0)`,
        }}
      >
        <svg viewBox="0 0 100 100" className="w-full h-full filter drop-shadow-[0_0_18px_rgba(207,189,255,0.45)]">
          <circle cx="50" cy="50" r="44" fill="#030822" />
          
          {/* Subtle Crater Texture */}
          <circle cx="42" cy="40" r="6" fill="#0c1236" opacity="0.6" />
          <circle cx="58" cy="52" r="8" fill="#0c1236" opacity="0.5" />
          <circle cx="36" cy="62" r="5" fill="#0c1236" opacity="0.55" />

          {/* Lit Rim */}
          <path
            d="M 14 30 A 44 44 0 0 1 70 86"
            fill="none"
            stroke="#cfbdff"
            strokeWidth="2.5"
            filter="drop-shadow(0 0 6px #cfbdff)"
          />
        </svg>
      </div>

      {/* =========================================================================
          5. CELESTIAL ORBITAL GEOMETRY & ELLIPTICAL RINGS
          Fine glowing orbital vectors that accentuate the futuristic space motif
         ========================================================================= */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <svg className="w-full h-full" viewBox="0 0 1440 900" preserveAspectRatio="none">
          {/* Large Primary Orbit Ellipse */}
          <ellipse
            cx="650"
            cy="420"
            rx="580"
            ry="360"
            fill="none"
            stroke="#818cf8"
            strokeWidth="1"
            strokeDasharray="4 12"
            transform="rotate(-16 650 420)"
            className="opacity-35"
          />

          {/* Secondary Delicate Cyan Orbit Ellipse */}
          <ellipse
            cx="1050"
            cy="480"
            rx="380"
            ry="240"
            fill="none"
            stroke="#38bdf8"
            strokeWidth="0.8"
            strokeDasharray="2 10"
            transform="rotate(28 1050 480)"
            className="opacity-30"
          />
        </svg>
      </div>

    </div>
  );
};
