const cursor = document.querySelector(".cursor");
const inner = document.querySelector(".cursorInner");
const smoothPosition = { x: 0, y: 0 };
const mousePosition = { x: 0, y: 0 };
const skewing = 3;

const lerp = (start, end, amount) => start * (1 - amount) + end * amount;

const setter = {
    x: gsap.quickSetter(cursor, "x", "px"),
    y: gsap.quickSetter(cursor, "y", "px"),
    rotation: gsap.quickSetter(cursor, "rotation", "deg"),
    scaleX: gsap.quickSetter(cursor, "scaleX"),
    scaleY: gsap.quickSetter(cursor, "scaleY"),
    wc: gsap.quickSetter(cursor, "willChange"),
    inner: {
        rotation: gsap.quickSetter(inner, "rotation", "deg"),
    },
};

window.addEventListener("mousemove", (e) => {
    mousePosition.x = e.clientX;
    mousePosition.y = e.clientY;

    if (smoothPosition.x === 0 && smoothPosition.y === 0) {
        smoothPosition.x = e.clientX;
        smoothPosition.y = e.clientY;
    }
});

gsap.ticker.add(() => {
    smoothPosition.x = lerp(smoothPosition.x, mousePosition.x, 0.15);
    smoothPosition.y = lerp(smoothPosition.y, mousePosition.y, 0.15);

    const velocity = Math.sqrt(
        Math.pow(mousePosition.x - smoothPosition.x, 2) +
        Math.pow(mousePosition.y - smoothPosition.y, 2)
    );
    const skewAmount = Math.min(velocity * 0.001, 0.15) * skewing;
    const angle =
        (180 * Math.atan2(mousePosition.y - smoothPosition.y, mousePosition.x - smoothPosition.x)) / Math.PI;

    setter.rotation(angle);
    setter.scaleX(1 + skewAmount);
    setter.scaleY(1 - skewAmount);
    setter.inner.rotation(-angle);
    setter.wc("transform");
    setter.x(smoothPosition.x);
    setter.y(smoothPosition.y);
});