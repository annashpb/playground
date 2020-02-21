<?php




// VARIABLES

// $greeting = 'Hello';

// // echo $greeting;

// $name = "Anna Shliakhovaya";

// // echo 'Hello, $name';
// // echo "Hello, $name";
// // echo 'hello, ' . $name;

// echo "$greeting, $name";


// ARRAY

// $names = ['Anna', 'Lucy', 'Jane'];

// foreach ($names as $name) {
//     echo $name . ', ';
// };

// $animals = ['cat', 'rat', 'dog', 'chicken', 'lion', 'wolf'];


//ASSOCIATIVE ARRAY

// $person = [
//     'name' => 'Anna',
//     'age' => 29,
//     'hair' => 'red',
//     'eyes' => 'grey'
// ];

// $person['career'] = 'web developer';

// unset($person['eyes']);

// echo '<pre>';
// var_dump($person);
// echo '</pre>';



// BOOLEAN

// $task = [
//     'what_to_do' => 'homework',
//     'who_will_do' => 'me, of course',
//     'deadline' => 'today',    
//     'completed' => false
// ];




// FUNCTION

require 'functions.php';

// passing(15);
// passing(20);
// passing(35);
// passing(13);



// CLASSES


// class Task
// {
//     public $description;
//     public $completed = false;
//     public function __construct($description)
//     {
//         $this->description = $description;
//     }
//     public function complete()
//     {
//         $this->completed = true;
//     }
//     public function isComplete()
//     {
//         return $this->completed;
//     }
// }

// // $task = new Task('Go to the store');

// // // dd($task);
// // $task->complete();
// // var_dump($task->isComplete());


// $tasks = [
//     new Task('Go to the store'),
//     new Task('Watch the video'),
//     new Task('Cleen my room'),

// ];

// // dd($tasks);

// $tasks[0]->complete();



// require 'Task.php';
$query = require 'bootstrap.php';


$tasks = $query->selectAll('todos');

// var_dump($results[0]->description);


require 'index.view.php';
