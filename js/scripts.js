// Load the VR View
window.addEventListener('load', onVrViewLoad);
function onVrViewLoad() {
  var vrView = new VRView.Player('#vrview', {
    image: 'img/sean-trogon.jpg'
  });
}
