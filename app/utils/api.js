const url = "https://hacker-news.firebaseio.com/v0";

export function getStories(type) {
  return new Promise((resolve, reject) => {
    fetch(`${url}/${type}stories.json`)
      .then((data) => {
        if (!data.ok) {
          reject(
            `Error fetching stories. Reason: ${data.status} ${data.statusText}`
          );
        }
        return data.json();
      })
      .then((data) => data.slice(0, 50))
      .then((data) => Promise.all(data.map(getStoryById)))
      .then((data) => resolve(data))
      .catch((err) => reject(err));
  });
}

function getStoryById(id) {
  return new Promise((resolve, reject) => {
    fetch(`${url}/item/${id}.json`)
      .then((data) => {
        if (!data.ok) {
          reject(
            `Error fetching story ${id}. Reason: ${data.status} ${data.statusText}`
          );
        }
        return data.json();
      })
      .then((data) => resolve(data));
  });
}
