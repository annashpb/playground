<?php


require 'core/database/Connector.php';
require 'core/database/QueryBuilder.php';
require 'core/Router.php';
require 'core/Request.php';
require 'core/App.php';
require 'controllers/PagesController.php';
require 'controllers/UsersController.php';

// $app = [];
// $app['config'] = require 'config.php';
// $pdo = Connection::make($app['config']['database']);
// $app['database'] = new QueryBuilder($pdo);

use App\Core\App;

App::bind('config', require 'config.php');
$pdo = Connection::make(App::get('config')['database']);
App::bind('database', new QueryBuilder($pdo));

function view($name, $data = [])
{
    extract($data);
    return require "views/$name.view.php";
}

function redirect($path) {
    header("Location: /$path");
}