<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <!-- <ul>
    <?php foreach ($animals as $animal) {
        echo "<li>$animal</li>";
    };
    ?>
    </ul> -->

    <!-- <ul>
        <?php foreach ($person as $key => $val) : ?>
            <li><strong><?= $key; ?>:</strong> <?= $val; ?></li>
        <?php endforeach; ?>
    </ul> -->

    <!-- <ul>
        <?php foreach ($task as $key => $val) : ?>
            <li><strong><?= ucwords($key); ?>:</strong> <?= $val; ?></li>
        <?php endforeach; ?>
    </ul> -->

    <!-- <ul>
        <?php foreach ($tasks as $task) : ?>
            <li>
                <?php if ($task->completed) : ?>
                    <strike>
                        <?= $task->description; ?>
                    </strike>
                <?php else : ?>
                    <?= $task->description; ?>
                <?php endif; ?>
            </li>
        <?php endforeach; ?>
    </ul> -->
</body>

</html>