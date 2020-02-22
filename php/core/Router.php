<?php

namespace App\Core;

class Router
{
    protected $routs = [
        'GET' => [],
        'POST' => []
    ];

    // public function define($routs)
    // {
    //     $this->routs = $routs;
    // }

    public function direct($uri, $requestType)
    {
        if (array_key_exists($uri, $this->routs[$requestType])) {
            return $this->callAction(...explode('@', $this->routs[$requestType][$uri]));
        }
        throw new Exception('No rout defined for this URI');
    }

    public function get($uri, $controller)
    {
        $this->routs['GET'][$uri] = $controller;
    }

    public function post($uri, $controller)
    {
        $this->routs['POST'][$uri] = $controller;
    }

    protected function callAction($controller, $action)
    {        
        $controller = "App\Controllers\\{$controller}";
        $controller = new $controller;
        if (!method_exists($controller, $action)) {
            throw new Exception("$controller does not respond to $action action");
        }
        return $controller->$action();
    }
}
