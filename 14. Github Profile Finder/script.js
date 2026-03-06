const button = document.getElementById("searchBtn");

button.addEventListener("click", getProfile);

async function getProfile() {
  const username = document.getElementById("username").value;

  const response = await fetch(`https://api.github.com/users/${username}`);

  const data = await response.json();

  const profileDiv = document.getElementById("profile");

  if (data.message === "Not Found") {
    profileDiv.innerHTML = "<p>User not found</p>";
    return;
  }

  profileDiv.innerHTML = `
    <img src="${data.avatar_url}">
    <h2>${data.name ?? data.login}</h2>
    <p>${data.bio ?? "No bio available"}</p>
    <p>Public Repos: ${data.public_repos}</p>
    <p>Followers: ${data.followers}</p>
    <p>Following: ${data.following}</p>
    <a href="${data.html_url}" target="_blank">View Profile</a>
`;
}
