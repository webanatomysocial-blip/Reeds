<?php
// Simple file-based visitor counter. No database needed.
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Cache-Control: no-store, no-cache, must-revalidate, max-age=0');
header('Pragma: no-cache');

$file = __DIR__ . '/visitor_count.txt';
$startingCount = 7500;

if (!file_exists($file)) {
    file_put_contents($file, $startingCount);
}

$fp = fopen($file, 'c+');
flock($fp, LOCK_EX);

$contents = trim(fread($fp, 1024));
$count = ($contents === '') ? $startingCount : (int) $contents;

if (isset($_GET['inc'])) {
    $count++;
    ftruncate($fp, 0);
    rewind($fp);
    fwrite($fp, (string) $count);
    fflush($fp);
}

flock($fp, LOCK_UN);
fclose($fp);

echo json_encode(['count' => $count]);
