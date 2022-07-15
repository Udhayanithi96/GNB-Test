var wrapper = document.getElementById('wrapper');
var masonary = document.getElementById('masonarySection');
var grid = document.getElementById('grids');
var list = document.getElementById('lists');

document.addEventListener('click', function (event) {
  if (!event.target.matches('.list')) return;

  // List view
  event.preventDefault();
  wrapper.classList.add('list');
  masonary.classList.add('list');
  grid.classList.remove('active');
  list.classList.add('active');
});

document.addEventListener('click', function (event) {
  if (!event.target.matches('.grid')) return;

  // List view
  event.preventDefault();
  wrapper.classList.remove('list');
  masonary.classList.remove('list');
  list.classList.remove('active');
  grid.classList.add('active');
});

// map section 
function loadMap() {
			
    var mapOptions = {
       center:new google.maps.LatLng(17.609993, 83.221436), 
       zoom:12, 
       mapTypeId:google.maps.MapTypeId.ROADMAP
    };
        
    var map = new google.maps.Map(document.getElementById("googleMap"),mapOptions);
 }
    
 google.maps.event.addDomListener(window, 'load', loadMap);
