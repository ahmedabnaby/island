export function getProjects() {
    return  fetch('http://127.0.0.1:8000/api/projects/')
      .then(data => data.json())
  }