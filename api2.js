
fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => {
    
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    
    return response.json();
  })
  .then(posts => {
   
    console.log('Retrieved posts:', posts);
  })
  .catch(error => {
    
    console.error('Error fetching data:', error);
  });
