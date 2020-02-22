<?php


$query = require 'core/bootstrap.php';

use App\Core\{Router, Request};

$router = new Router;

require 'routs.php';

 $router->direct(Request::uri(), Request::method());
