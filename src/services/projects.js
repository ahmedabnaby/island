export function getProjects() {
    return  fetch('https://islandd-backend.herokuapp.com/api/projects/')
      .then(data => data.json())
  }