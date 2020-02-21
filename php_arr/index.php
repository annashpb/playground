<?php


class Post
{
    public $title;
    public $published;
    public $author;
    public function __construct($title, $author, $published)
    {
        $this->title = $title;
        $this->author = $author;
        $this->published = $published;
    }
}

$posts = [
    new Post('My first post', 'Jane', true),
    new Post('My second post', 'Kate', true),
    new Post('My third post', 'John', true),
    new Post('My fourth post', 'Jane', false),
];

// $unpublishedPosts = array_filter($posts, function ($post) {
//     return !$post->published;
// });

// var_dump($unpublishedPosts);

$modified = array_map(function ($post) {
    return (array) $post;
}, $posts);

var_dump($modified);

$titles = array_column($posts, 'author', 'title');

var_dump($titles);
