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

import { useCallback } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";

export const Aaa = () => {

    const ParticlesInit = useCallback(async engine => {
        
        // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async container => {
        
    }, []);

    return (

        <Particles
            id="tsparticles"
            init={ParticlesInit}
            loaded={particlesLoaded}
            options={{
                background: {
                    color: {
                        value: "#FFFFFF",
                    },

                },
                fullScreen: {
                    enable: true,
                   zIndex:-1, 
                },
                fpsLimit: 120,
                interactivity: {
                    events: {
                        onClick: {
                            enable: true,
                            mode: "push",
                        },
                        onHover: {
                            enable: true,
                            mode: "repulse",
                        },
                        resize: true,
                    },
                    modes: {
                        push: {
                            quantity: 4,
                        },
                        repulse: {
                            distance: 200,
                            duration: 0.4,
                        },
                    },
                },
                particles: {
                    color: {
                        value: "#4d25ed",
                    },
                    links: {
                        color: "#4d25ed",
                        distance: 150,
                        enable: true,
                        opacity: 0.5,
                        width: 1,
                    },
                    collisions: {
                        enable: true,
                    },
                    move: {
                        directions: "none",
                        enable: true,
                        outModes: {
                            default: "bounce",
                        },
                        random: false,
                        speed: 6,
                        straight: false,
                    },
                    number: {
                        density: {
                            enable: true,
                            area: 800,
                        },
                        value: 80,
                    },
                    opacity: {
                        value: 0.5,
                    },
                    shape: {
                        type: "circle",
                    },
                    size: {
                        value: { min: 1, max: 5 },
                    },
                },
                detectRetina: true,
            }}
        />
    )
}
