const hashUsername = (username) =>
  username
    .split("")
    .map((c) => c.charCodeAt(0).toString(16))
    .join("")

export default (username) => `userdb-${hashUsername(username)}`
