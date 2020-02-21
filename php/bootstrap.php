<?php

require 'database/Connector.php';
require 'database/QueryBuilder.php';
$configs = require 'config.php';

$pdo = Connection::make($configs['database']);

return new QueryBuilder($pdo);
