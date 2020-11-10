const showBtn = document.querySelector(".showbtn");
const modalBg = document.querySelector(".modal-background");
const container = document.querySelector(".container");
const modalClose = document.querySelector(".modal-close");

const handleModal = () => {
    const show = document.querySelector(".show");
    if (!show) {
        container.classList.add("show");
    } else {
        container.classList.remove("show");
    }
    removeEventListener("click", handleModal);
};

showBtn.addEventListener("click", handleModal);
modalBg.addEventListener("click", handleModal);
modalClose.addEventListener("click", handleModal);
