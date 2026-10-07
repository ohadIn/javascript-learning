//Part D

// 15.
const players = [
  { id: 1, nickname: "Pixel", score: 840, level: 5 },
  { id: 2, nickname: "Nova", score: 1200, level: 8 },
  { id: 3, nickname: "Blaze", score: 460, level: 3 },
];

players.forEach((player) => {
  console.log(
    `${player.id}. ${player.nickname} - ${player.score} points (level ${player.level})`,
  );
});

// 16.
// const scores = [840, 1200, 460, 950];
// const courses = ["JavaScript", "Design", "Databases"];
// console.log(scores);
// console.log(courses);

// const updatedScores = scores.map((score) => score + 100);
// console.log(updatedScores);

// const courseNameLengths = courses.map((course) => course.length);
// console.log(courseNameLengths);

// const doubledScores = scores.map((score) => score * 2);
// console.log(doubledScores);

// 17.
const posts = [
  { id: 101, username: "noa_dev", content: "First project!", likes: 45 },
  { id: 102, username: "dan_codes", content: "New feature", likes: 180 },
  { id: 103, username: "maya_js", content: "Weekend update", likes: 72 },
];
console.log(posts);

const postUsernames = posts.map((post) => post.username);
console.log("\n\n" + postUsernames);

const postLabels = posts.map(
  (post) => `${post.username} | ${post.content} | ${post.likes} Likes`,
);
console.log("\n\n" + postLabels);

const postCards = posts.map((post) => {
  return { id: post.id, label: `${post.username} - ${post.likes} likes` };
});
console.log("\n\n");
console.log(posts);
console.log(postCards);

// 18.
const tasks = [
  { id: 1, title: "Write tests", completed: false, priority: "high" },
  { id: 2, title: "Update profile", completed: true, priority: "low" },
  { id: 3, title: "Fix login", completed: false, priority: "high" },
  { id: 4, title: "Review text", completed: false, priority: "medium" },
];

const openTasks = tasks.filter((task) => task.completed);
console.log(openTasks);

const highPriorityTasks = tasks.filter((task) => task.priority === "high");
console.log(highPriorityTasks);

const urgentOpenTasks = tasks.filter(
  (task) => task.priority === "high" && !task.completed,
);
console.log(urgentOpenTasks);

const getTasksByPriority = (tasks, priority) => {
  return tasks.filter((task) => task.priority == priority);
};
console.log("\n\n\n-----------", getTasksByPriority(tasks, "medium"));

// 19.
const movies = [
  { id: 11, title: "Skyline", genre: "Drama", rating: 8.2 },
  { id: 12, title: "Orbit", genre: "Sci-Fi", rating: 7.9 },
  { id: 13, title: "Ocean", genre: "Adventure", rating: 8.5 },
];

const findMovieById = (movies, id) => {
  return movies.find((movie) => movie.id === id);
};
const moviesChosen = [findMovieById(movies, 12), findMovieById(movies, 99)];
moviesChosen
  .filter((movie) => movie !== undefined) // find which are not undefined
  .forEach((m) => console.log(m)); // print them to console

// 20.
console.log("\n\n\n\n\n-----------------------------------------\n\n20.\n");

players.forEach((player) =>
  console.log(`${player.nickname} - ${player.score} points`),
);

const postUsers = posts.map((post) => post.username);
console.log(postUsers);

console.log(tasks.filter((task) => !task.completed));

console.log(movies.find((movie) => movie.id === 13));

const bestMovies = movies
  .filter((movie) => movie.rating > 8)
  .map((movie) => movie.title);
console.log(bestMovies);
console.log(posts.find((post) => post.id === 102));
