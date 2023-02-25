<?php
    session_start();
    $token = isset($_SESSION['delete_customer_token']) ? $_SESSION['delete_customer_token'] : "";
    if (!$token) {
        $token = md5(uniqid());
        $_SESSION['delete_customer_token']= $token;
    }
    session_write_close();
?>
<!DOCTYPE HTML>
<html lang="ru">
    <head>
        <meta charset="utf-8" />
        <title>Login page</title>
        <link rel="stylesheet" href="../media/styles/planner/style.css" />
        <link rel="stylesheet" href="../media/styles/lib/jquery-ui.min.css" />
        <link rel="stylesheet" href="../media/styles/lib/jquery-ui.structure.min.css" />
        <link rel="stylesheet" href="../media/styles/lib/jquery-ui.theme.min.css" />
        <link rel="stylesheet" href="../media/styles/lib/jquery.datetimepicker.css"/>
        <link rel="stylesheet" href="../media/styles/lib/jquery.timepicker.css"/>
    </head>
    <body>
        <div><h1>Log into your account</h1></div>
        <form method="POST" id="customizeCardTime" action="#">
            <input type="text" name="username" placeholder="Username"/>
            <input type="password" name="password" placeholder="Password" />
            <input type="hidden" name="token" />
            <input type="submit" value="Log in" />
        </form>
        <script>
        var chosenDate = '<?php echo date_format(new DateTime(date("Y-m-d")), 'Y-m-d'); ?>';
        var token = '<?php echo $token; ?>';
        var todayDate = '<?php echo date_format(new DateTime(date("Y-m-d")), 'Y-m-d'); ?>';
        </script>
        <script src="../media/scripts/lib/jquery-3.6.0.min.js"></script>
        <script src="../media/scripts/lib/jquery-ui.min.js"></script>
        <script src="../media/scripts/lib/libraries.js"></script>
        <script src="../media/scripts/lib/cleave.min.js"></script>
        <script src="../media/scripts/lib/jquery.ui.sortable-animation.js"></script>
        <script src="../media/scripts/planner/main.js" type="text/javascript"></script>
        <script src="../media/scripts/lib/jquery.datetimepicker.js"></script>
        <script src="../media/scripts/lib/jquery.timepicker.js"></script>
        <script src="../media/scripts/lib/moment.js"></script>
    </body>
</html>
