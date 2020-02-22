<?php

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
            return $this->routs[$requestType][$uri];
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
}
