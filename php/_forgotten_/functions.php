<?php

function passing($age)
{
    if ($age < 18) {
        echo 'Not yet, young man   ';
    } else {
        echo 'Please, come in   ';
    };
};

function dd($data)
{
    echo '<pre>';
    die(var_dump($data));
    echo '</pre>';
}

// function connectToDb()
// {
//     try {
//         return new PDO('mysql:host=127.0.0.1;dbname=mytodo', 'root', '');
//     } catch (PDOException $e) {
//         die($e->getMessage());
//     };
// }

// function fetchAllTasks($pdo)
// {
//     $statement = $pdo->prepare('select * from todos');
//     $statement->execute();
//     return $statement->fetchAll(PDO::FETCH_CLASS, 'Task');
// }
