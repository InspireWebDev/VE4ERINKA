const story = document.querySelector('.story');

if (story) {
  // Keeps browser from drag-selecting visual layers during swipe.
  story.addEventListener('dragstart', (event) => {
    event.preventDefault();
  });
}
