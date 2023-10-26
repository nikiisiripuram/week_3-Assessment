$(document).ready(function() {
    // Function to add a new task
    function addTask(description, theme, subTasks) {
        var listItem = $("<li class='list-group-item d-flex justify-content-between align-items-center'>" +
            "<div class='task-info'>" +
            "<h5>" + description + "</h5>" +
            "<span class='badge badge-" + theme + "'>" + theme + "</span>" +
            "</div>" +
            "<div class='btn-group'>" +
            "<button class='btn btn-success complete-task'>Complete</button>" +
            "<button class='btn btn-danger delete-button'>Delete</button>" +
            "</div>" +
            "</li>");

        var progressBar = $("<div class='progress mt-2'>" +
            "<div class='progress-bar bg-" + theme + "' role='progressbar' style='width: " + subTasks + "%'></div>" +
            "</div>");

        listItem.append(progressBar);
        $("#task-list").append(listItem);
    }

    // Add a new task when clicking the "Add" button
    $("#add-task").click(function() {
        var taskDescription = $("#new-task").val().trim();
        var taskTheme = $("#task-theme").val();
        var subTaskProgress = parseInt($("#sub-task-progress").val());

        if (taskDescription !== "") {
            addTask(taskDescription, taskTheme, subTaskProgress);
            $("#new-task").val(""); // Clear the input field
        }
    });

    // Add a new task when pressing Enter in the input field
    $("#new-task").keypress(function(event) {
        if (event.which === 13) { // Enter key code is 13
            event.preventDefault();
            var taskDescription = $("#new-task").val().trim();
            var taskTheme = $("#task-theme").val();
            var subTaskProgress = parseInt($("#sub-task-progress").val());

            if (taskDescription !== "") {
                addTask(taskDescription, taskTheme, subTaskProgress);
                $("#new-task").val(""); // Clear the input field
            }
        }
    });

    // Mark task as complete
    $("#task-list").on("click", ".complete-task", function() {
        $(this).closest("li").toggleClass("completed");
    });

    // Delete task
    $("#task-list").on("click", ".delete-button", function() {
        $(this).closest("li").remove();
    });
});
