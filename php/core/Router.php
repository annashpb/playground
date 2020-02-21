<?php

class Router
{
    protected $routs = [];
    public function define($routs)
    {
        $this->routs = $routs;
    }
    public function direct($uri)
    {
        if (array_key_exists($uri, $this->routs)) {
            return $this->routs[$uri];
        }
        throw new Exception('No rout defined for this URI');
    }
}
