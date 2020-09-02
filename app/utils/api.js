const url = "https://hacker-news.firebaseio.com/v0";

export function getNewOrTop(type) {
  return new Promise((resolve, reject) => {
    fetch(`${url}/${type}.json`)
      .then((data) => {
        if (!data.ok) {
          reject(
            `Error fetching stories. Reason: ${data.status} ${data.statusText}`
          );
        }
        return data.json();
      })
      .then((data) => data.slice(0, 50))
      .then((data) => Promise.all(data.map(getItemById)))
      .then((data) => resolve(data))
      .catch((err) => reject(err));
  });
}

export function getItemById(id) {
  return new Promise((resolve, reject) => {
    fetch(`${url}/item/${id}.json`)
      .then((data) => {
        if (!data.ok) {
          reject(
            `Error fetching item ${id}. Reason: ${data.status} ${data.statusText}`
          );
        }
        return data.json();
      })
      .then((data) => resolve(data));
  });
}

export function getUser(id) {
  return new Promise((resolve, reject) => {
    fetch(`${url}/user/${id}.json`)
      .then((data) => {
        if (!data.ok) {
          reject(
            `Error fetching user ${id}.  Reason: ${data.status} ${data.statusText}`
          );
        }
        return data.json();
      })
      .then((data) => resolve(data));
  });
}

export function getUserPosts(ids) {
  return Promise.all(ids.map(getItemById));
}

export function getComments(ids) {
  return Promise.all(ids.map(getItemById)).then((comments) =>
    removeDeleted(onlyComments(removeDead(comments)))
  );
}

function removeDead(posts) {
  return posts.filter(Boolean).filter(({ dead }) => dead !== true);
}

function removeDeleted(posts) {
  return posts.filter(({ deleted }) => deleted !== true);
}

function onlyComments(posts) {
  return posts.filter(({ type }) => type === "comment");
}
