// import Particles from 'react-particles';
// import { Engine } from 'tsparticles-engine';
// import { loadFirePreset } from 'tsparticles-preset-fire';
// import React from 'react';
// import { useCallback } from 'react';

// export const ParticlesContainer = () => {
//   // this customizes the component tsParticles installation
//   const particles = useCallback(async engine => {
//     // this adds the preset to tsParticles, you can safely use the
//     await loadFirePreset(engine);
//   }, []);

//   return <Particles  init={particles} />;
// };


// import { useCallback } from "react";
// import Particles from "react-particles";
// import { loadFull } from "tsparticles";

// const particlesInit = useCallback(async engine => {
//         const options = {
//       preset: "fire",
//     };
//         // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
//         // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
//         // starting from v2 you can add only the features you need reducing the bundle size
//         await loadFull(engine);
//     }, []);

//     const particlesLoaded = useCallback(async container => {
        
//     }, []);


// <Particles
//             id="tsparticles"
//             init={particlesInit}
//             loaded={particlesLoaded}
//             options={options}
//         />
