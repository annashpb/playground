<?php require 'partials/head.php'; ?>

<h1>All users</h1>

<form method="POST" action="/users">
    <input type="text" name="name" placeholder="Please enter your name">
    <button type="submit">Submit</button>
</form>

<h2>All our users</h2>
<ul>
    <?php foreach ($users as $user) : ?>
        <li><?= $user->name; ?></li>
    <?php endforeach; ?>
</ul>
<?php require 'partials/footer.php'; ?>