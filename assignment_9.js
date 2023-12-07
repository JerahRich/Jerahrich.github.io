$(document).ready(function () {
    const deleteCompletedBtn = $('#delete-completed-btn');
    const deleteAllBtn = $('#delete-all-btn');
    const newTaskNameInput = $('#newTaskName');
    const addTaskBtn = $('#addTaskBtn'); 

    deleteCompletedBtn.on('click', deleteCompletedTasks);
    deleteAllBtn.on('click', deleteAllTasks);

    function createTaskItem(taskText, isCompleted = false) {
        const listItem = $('<li>').addClass('list-group-item task-item d-flex justify-content-between align-items-center');
        const taskDiv = $('<div>').addClass('task-text').text(taskText).toggleClass('completed', isCompleted);
        const checkbox = $('<input>').attr({ type: 'checkbox' }).on('change', toggleTaskCompleted);

        return listItem.append(taskDiv, checkbox);
    }

    function addTask() {
        const taskText = newTaskNameInput.val();
        if (taskText.trim() !== '') {
            const listItem = createTaskItem(taskText);
            $('#task-list').append(listItem);
            $('#addTaskModal').modal('hide');
            newTaskNameInput.val('');
        }
    }

    function toggleTaskCompleted() {
        const listItem = $(this).parent();
        listItem.toggleClass('completed');
    }

    function deleteCompletedTasks() {
        $('.task-item.completed').remove();
    }

    function deleteAllTasks() {
        $('#task-list').empty();
    }

    addTaskBtn.on('click', addTask);

    newTaskNameInput.on('keypress', function (e) {
        if (e.which === 13) {
            addTask();
        }
    });
});
