$(document).ready(function () {
    // Initializations
    const deleteCompletedBtn = $('#delete-completed-btn');
    const deleteAllBtn = $('#delete-all-btn');
    const newTaskNameInput = $('#newTaskName'); // Added reference to the input field
    const addTaskBtn = $('#addTaskBtn');

    // Event listeners
    deleteCompletedBtn.on('click', deleteCompletedTasks);
    deleteAllBtn.on('click', deleteAllTasks);

    // Function to create a task item
    function createTaskItem(taskText, isCompleted = false) {
        const listItem = $('<li>').addClass('list-group-item task-item d-flex justify-content-between align-items-center');
        const taskDiv = $('<div>').addClass('task-text').text(taskText).toggleClass('completed', isCompleted);
        const checkbox = $('<input>').attr({ type: 'checkbox' }).on('change', toggleTaskCompleted);

        return listItem.append(taskDiv, checkbox);
    }

    // Function to add a new task
    function addTask() {
        const taskText = newTaskNameInput.val();
        if (taskText.trim() !== '') {
            const listItem = createTaskItem(taskText);
            $('#task-list').append(listItem);
            $('#addTaskModal').modal('hide');
            newTaskNameInput.val(''); // Clear the input field after adding the task
        }
    }

    // Function to toggle task completion
    function toggleTaskCompleted() {
        const listItem = $(this).parent();
        listItem.toggleClass('completed');
    }

    // Function to delete completed tasks
    function deleteCompletedTasks() {
        $('.task-item.completed').remove();
    }

    // Function to delete all tasks
    function deleteAllTasks() {
        $('#task-list').empty();
    }

    // Event listener for the Add Task button in the modal
    addTaskBtn.on('click', addTask);

    // Event listener for pressing Enter in the input field
    newTaskNameInput.on('keypress', function (e) {
        if (e.which === 13) {
            // 13 is the key code for Enter
            addTask();
        }
    });
});