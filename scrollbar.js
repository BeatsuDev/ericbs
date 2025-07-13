const scrollbar = document.querySelector("#scrollbar");
const scrollbarHandle = document.querySelector("#scrollbar #handle");


const setHandleOffset = () => {
    const scrolledRatio = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);
    const viewportDocumentRatio = window.innerHeight / document.documentElement.scrollHeight;
    const handleRatio = Math.min(viewportDocumentRatio, 1);
    const percent = Math.max(scrolledRatio, 0) * 100 * (1 - handleRatio);
    scrollbarHandle.style.top = `${percent}%`;
}

const resizeHandle = () => {
    const viewportDocumentRatio = window.innerHeight / document.documentElement.scrollHeight;
    const percent = Math.min(viewportDocumentRatio, 1) * 100;
    scrollbarHandle.style.height = `${percent}%`;
}


document.onscroll = setHandleOffset;
window.onresize = resizeHandle;
setHandleOffset();
resizeHandle();