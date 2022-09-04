export default function togglePointerEvents(state){
    document.querySelectorAll(".figure")
        .forEach(p => p.style.pointerEvents = state)
}