<?php

namespace App\Controllers;

class PagesController
{
    public function home()
    {
        return view('index');
    }
    public function about()
    {
        return view('about');
    }
    public function contacts()
    {
        return view('contacts');
    }
}
