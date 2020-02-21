<?php

$app = [];

require 'core/database/Connector.php';
require 'core/database/QueryBuilder.php';
$app['config'] = require 'config.php';
require 'core/Router.php';
require 'core/Request.php';

$pdo = Connection::make($app['config']['database']);

$app['database'] = new QueryBuilder($pdo);
