<?php require 'partials/head.php'; ?>

<h1>My tasks</h1>

<form method="POST" action="/names">
    <input type="text" name="name" placeholder="Please enter your name">
    <button type="submit">Submit</button>
</form>

<ul>
    <?php foreach ($tasks as $task) : ?>
        <li>
            <?php if ($task->done) : ?>
                <strike>
                    <?= $task->description; ?>
                </strike>
            <?php else : ?>
                <?= $task->description; ?>
            <?php endif; ?>
        </li>
    <?php endforeach; ?>
</ul>
<?php require 'partials/footer.php'; ?>