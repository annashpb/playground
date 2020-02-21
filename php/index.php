<?php


$query = require 'core/bootstrap.php';

$router = new Router;

require 'routs.php';


// var_dump($uri);

require $router->direct(Request::uri());