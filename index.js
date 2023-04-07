  const profileText = document.querySelector('h1');
  profileText.addEventListener('mouseover', () => {
    profileText.style.color = 'red';
  });
  profileText.addEventListener('mouseout', () => {
    profileText.style.color = 'black';
  });

  const toggleBtn = document.getElementById("FavBooks");
  const FavBooks = document.querySelector(".bookItems");
  toggleBtn.addEventListener("click", () => {
    FavBooks.classList.toggle("hidden");
  });