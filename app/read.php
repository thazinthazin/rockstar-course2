<?php
  $handle = fopen('data.txt', 'r');
  while ($data = fgets($handle)) {
    sleep(5);
    echo $data;
  }
  echo "Anthor Process";
 ?>
