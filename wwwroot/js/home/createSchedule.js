$(document).ready(function () {

    // Elements
    var $taskTypeForm = $("#createTaskTypeForm");
    var $taskForm     = $("#createTaskForm");
    var $dateInputs   = $("input.datepicker");

    var $addTaskTypeBtn  = $(".js-add-task-type-row");
    var $addTaskBtn      = $(".js-add-task-row");

    // DOM Strings
    var saveTaskTypeBtnString = ".js-save-task-types-btn";
    var taskTypeSelect        = ".taskTypeSelect";
    
    // HTML Templates ids
    var templateTaskTypeRowId = "#template-task-type-row";
    var templateTaskRowId     = "#template-task-row";

    // Controllers
    var taskTypeControllerApi = "/api/TaskType";
    var taskControllerApi     = "/api/Task";

    // Methods
    var createTaskTypeURL = taskTypeControllerApi;
    var createTaskURL     = taskControllerApi;

    // Data
    var taskTypes = [];

    var Init = function () {

        BindElements();

    };

    var BindElements = function () {

        $dateInputs.unbind();
        $dateInputs.datetimepicker();

        //...........................................

        $addTaskTypeBtn.unbind();
        $addTaskTypeBtn.click(function () {

            var htmlSrc = window.createHtml(templateTaskTypeRowId);

            $taskTypeForm.append(htmlSrc);

        });

        $addTaskBtn.unbind();
        $addTaskBtn.click(function () {

            alert("Add task clicked");

            var htmlSrc = window.createHtml(templateTaskRowId);

            $taskForm.append(htmlSrc);

        });

        //...........................................

        $taskTypeForm.on("click", saveTaskTypeBtnString, function () {

            var $btn = $(this);

            var taskFormInputs = $btn.parent().siblings().find("input");

            var taskType = {
                Name: $(taskFormInputs[0]).val(),
                Color: $(taskFormInputs[1]).val()
            };

            var jsonData = JSON.stringify(taskType);

            var response = $.ajax({
                type:        "POST",
                url:          createTaskTypeURL,
                data:         jsonData,
                contentType: "application/json;charset=utf-8"
            });

            response.done(function (taskType) {

                console.log(taskType);

                taskTypes.push(taskType);

                console.log(taskTypes);

                $btn.parent().siblings("input").val(taskType.typeId);

                var $taskTypeSelect = $(taskTypeSelect);

                $taskTypeSelect.empty().append($('<option>', { value: "", text: "" }));

                $.each(taskTypes, function (i, obj) {

                    $taskTypeSelect.append($('<option>', {

                        value: obj.typeId,
                        text: obj.name

                    }));

                });

            });

            response.fail(function (jqXHR, textStatus) {

                console.log(jqXHR);
                console.log(textStatus);

            });

        });
    };

    Init();

});