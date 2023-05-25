const seats = document.querySelectorAll(".row .seat:not(.occupied)");
const container = document.querySelector(".container");
const count = document.getElementById("count");
const total = document.getElementById("total");
const movieSelect = document.getElementById("movie");
movieSelect.selectedIndex = 0;

let ticketPrice = +movieSelect.value;

RetrievePreviousData();

movieSelect.addEventListener("change", (e) => {
  ticketPrice = +e.target.value;
  localStorage.setItem("selectedMovie" , e.target.selectedIndex)
  localStorage.setItem("selectedPrice" , e.target.value)

  updateCount();
});

function updateCount() {
  const selectedSeats = document.querySelectorAll(".row .seat.selected");

  const seatsIndex = [...selectedSeats].map((seat) =>{
    return [...seats].indexOf(seat);
  })

  localStorage.setItem( 'mySeat' , JSON.stringify(seatsIndex))

  count.innerHTML = selectedSeats.length;
  total.innerHTML = selectedSeats.length * ticketPrice;
}

function RetrievePreviousData(){
  const mySeat = JSON.parse(localStorage.getItem('mySeat'))

  if(mySeat !== null && mySeat.length > 0){
    seats.forEach((seat,index) => {
      if(mySeat.indexOf(index) > -1){
        seat.classList.add('selected')
      }
    });
  }

  const selectedMovie = localStorage.getItem('selectedMovie')

  if(selectedMovie !== null){
    movieSelect.selectedIndex = selectedMovie
  }
}

container.addEventListener("click", (e) => {
  if (
    e.target.classList.contains("seat") &&
    !e.target.classList.contains("occupied")
  ) {
    e.target.classList.toggle("selected");
    updateCount();
  }
});


updateCount();