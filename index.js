// You do not need to change the constants
const CATEGORY_SELECTOR = "categories-list";
const CATEGORY_FILTER = "categories-list-filter";

let tasks = [];
let categories = [];

// REMOVE ME: SAMPLE FILLING
// tasks = [
// 	{ id: 0, title: "Game of thrones", category: "Movies", done: false },
// 	{ id: 1, title: "Toy Story 4", category: "Movies", done: false },
// 	{ id: 2, title: "Ahmad", category: "Groceries", done: false },
// ];

// SAMPLE
// categories = ["All" , "fahad"];
renderCategories(categories, CATEGORY_FILTER);
renderTasks(tasks, "tasks-list");

function taskChecked(taskId, checked) {
	// implement the delete task.
	// You are given the task id
	console.log(`${checked ? "" : "UN"}CHECKED TASK`, taskId);
	const task = tasks
		.filter((filters) => filters.id === taskId)
		.map((check) => (checked ? (check.done = true) : (check.done = false)));
	console.log(task);
	console.log(tasks);
}

function addTask() {
	const selectedCategory = getSelectedCategoryById(CATEGORY_SELECTOR);
	const taskTitle = getNewTaskText();
	let idNumber = tasks.forEach((task, i) => {
		task.id = i + 1;
	});
	const task = {
		id: idNumber,
		title: taskTitle,
		category: selectedCategory,
		done: false,
	};

	if (categories.length === 0) {
		return alert(`Add at least one Category.`);
	} else {
		tasks.push(task);
		renderTasks(tasks, "tasks-list");
		console.log(tasks);
	}
}

function addCategory() {
	const newCategory = getNewCategoryText();

	categories.push(newCategory);
	renderCategories(categories, "categories-list-filter");
	renderCategories(categories, "categories-list");
	// add style for the alert
	alert(`New category was added: ${newCategory}`);
}

function filterTasks() {
	const selectedCategory = getSelectedCategoryById(CATEGORY_FILTER);
	const done = getFilteredDone();
	const filters = tasks.filter(
		(fil) => fil.category === selectedCategory && done === fil.done
	);
	renderTasks(filters, "tasks-list");
}

function filterAll() {
	const selectedCategory = getSelectedCategoryById(CATEGORY_FILTER);
	const done = getFilteredDone();

	renderTasks(tasks, "tasks-list");
}


