// particlesJS("particles-js", {
//     particles: {
//         number: {
//             value: 100, // Number of particles
//             density: {
//                 enable: true,
//                 value_area: 800,
//             },
//         },
//         shape: {
//             type: "image", // Set shape type to image
//             image: [
//                 {
//                     src: "images/home.png", // Home icon
//                     width: 20,
//                     height: 20,
//                 },
//                 {
//                     src: "images/home.png", // Home icon
//                     width: 20,
//                     height: 20,
//                 },
//             ],
//         },
//         opacity: {
//             value: 0.8,
//         },
//         size: {
//             value: 20, // Size of icons
//             random: false,
//         },
//         move: {
//             enable: true,
//             speed: 1.5,
//             direction: "none",
//             out_mode: "out",
//         },
//     },
//     interactivity: {
//         detect_on: "canvas",
//         events: {
//             onhover: {
//                 enable: true,
//                 mode: "repulse",
//             },
//             onclick: {
//                 enable: true,
//                 mode: "push",
//             },
//         },
//     },
// });

particlesJS("particles-js", {
    particles: {
        number: {
            value: 50, 
            density: { enable: true, value_area: 900 },
        },
        shape: {
            type: "image",
            image: { 
                src: "images/home.png", // Single Image
                width: 20, 
                height: 20 
            }
        },
        opacity: { value: 0.8 },
        size: { value: 20, random: false },
        move: { enable: true, speed: 1.5, direction: "none", out_mode: "out" },
    },
    interactivity: {
        detect_on: "canvas",
        events: {
            onhover: { enable: true, mode: "repulse" },
            onclick: { enable: true, mode: "push" },
        },
    },
});

