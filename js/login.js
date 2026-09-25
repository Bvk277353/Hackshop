 // Open popup with animation
 function openPopup() {
  gsap.to("#popup", { opacity: 1, visibility: "visible", duration: 0.5 });
  gsap.from(".popup-content", { scale: 0.8, opacity: 0, duration: 0.5, ease: "back.out(1.7)" });
}
// Close popup with animation
function closePopup() {
  gsap.to("#popup", { opacity: 0, visibility: "hidden", duration: 0.5 });
}