console.log('here')
$toDoStack = $("#toDos")
$completedStack = $("#completed")
$enterTask = $("#enter-task")
$addButton = $("#addButton")

$addButton.on('click', function(){
    //append box's contents to to do list
    //var box content value
    //box 
$taskValue = $enterTask.val()//val
if ($taskValue > '') {
$listItem = $('<li>')
$listItem.append($taskValue)
$toDoStack.append($listItem)
$enterTask.val('')
$moveButton = $('<button>')
$moveButton.text('completed')
$toDoStack.append($moveButton)
}
$moveButton.on('click',function() {
    $completedStack.append($listItem)
    $moveButton.remove()
})
    //append value to new li
    //append li to ul
        //variables to define
            //ul
                //$todo
            //li
            //must declare an li
    
    // console.log('button was pressed');
})

$moveButton = $('<button>')
$moveButton.text('completed')
$moveButton.on('click', function() {
var theLi = $(this).parent()
    $completedStack.append(theLi)
})
// walkDogs.append(moveButton)
// $toDoStack.append(walkDogs)

// feedCats = $('<li>')
// feedCats.text("Feed Cats")
moveButton = $('<button>')
moveButton.text('completed')
moveButton.on('click', function() {
    var theLi = $(this).parent()
        $completedStack.append(theLi)
    })
    // feedCats.append(moveButton)
    // $toDoStack.append(feedCats)

    // console.log($enterTask,val())
