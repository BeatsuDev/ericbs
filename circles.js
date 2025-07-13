const circle1 = document.getElementById("circle1");
const circle2 = document.getElementById("circle2");
const circle3 = document.getElementById("circle3");

const setPlacement = event => {
    const scrolledRatio = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);
    const circle1x = -50 * (1 + scrolledRatio * 2);
    const circle1y = 50 * (1 + scrolledRatio * 2);
    circle1.style.transform = `translate(${circle1x}%, ${circle1y}%)`;

    const circle2x = 50 * (1 + scrolledRatio * 2);
    const circle2y = -50 * (1 + scrolledRatio * 2);
    circle2.style.transform = `translate(${circle2x}%, ${circle2y}%)`;

    const circle3x = -50 * (Math.abs(Math.max(2 - scrolledRatio * 2 - 1)) + 1);
    const circle3y = -50 * (Math.abs(Math.max(2 - scrolledRatio * 2 - 1)) + 1);
    circle3.style.transform = `translate(${circle3x}%, ${circle3y}%)`;
};

window.onscroll = setPlacement;
setPlacement();