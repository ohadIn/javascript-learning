// // 22.
// const movie = {
//   id: 41,
//   title: "Orbit",
//   genre: "Sci-Fi",
//   rating: 8.4,
// };

// const { genre, title, rating } = movie;

// console.log(`${title} | ${genre} | ${rating}`);

// // 23.
// const user = {
//   id: 7,
//   u_name: "Dana Levi",
//   email: "dana@example.com",
//   isActive: true,
// };

// const formatUser = ({ u_name, email }) => `${u_name} - ${email}`;
// console.log(formatUser(user));

// const getUserStatus = ({ u_name, isActive }) => `${u_name} - ${isActive ? 'active' : 'inactive'}`
// console.log(getUserStatus(user))

// 24.
// const player = {
//   id: 1,
//   nickname: "Noni",
//   score: 1200,
//   level: 8,
// };

// const comments = [
//   { id: 1, user: "Noa", text: "Great game!", likes: 12 },
//   { id: 2, user: "Dan", text: "Well played", likes: 7 },
// ];

// const newComment = {
//   id: 3,
//   user: "Maya",
//   text: "Amazing score!",
//   likes: 0,
// };

// const updatedPlayer = { ...player, score: 1350 };
// console.log(player);
// console.log(updatedPlayer);
// const commentsAfterAdd = [...comments, newComment];
// console.log(comments);
// console.log(commentsAfterAdd);

// 25.
// const tasks = [
//   { id: 1, title: "Write tests", completed: false, priority: "high" },
//   { id: 2, title: "Update profile", completed: true, priority: "low" },
//   { id: 3, title: "Fix login", completed: false, priority: "high" },
// ];

// const removeTaskById = (tasks, id) => tasks.filter((task) => task.id != id);
// console.log(tasks)
// const tasksAfterDelete = removeTaskById(tasks, 2);
// console.log(tasksAfterDelete);
// console.log(tasks)
