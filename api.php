<?php
$method = $_SERVER['REQUEST_METHOD'];

const HOST = 'localhost';
const USERNAME = 'root';
const PASSWORD = '';
const DATABASE = 'blog';

function createDBConnection(): mysqli {
  $conn = new mysqli(HOST, USERNAME, PASSWORD, DATABASE);
  if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
  }

  return $conn;
}

function closeDBConnection(mysqli $conn): void {
  $conn->close();
}

function getPostJson(): ?string {
    $dataAsJson = file_get_contents("php://input");
    if (!$dataAsJson) {
      return null;
    }
    return $dataAsJson;
  }
  
  function getPostJsonAsArray(string $dataAsJson): array {
    $dataAsArray = json_decode($dataAsJson, true);
    if (!$dataAsArray) {
      return [];
    }
    return $dataAsArray;
  }

  function saveFile(string $file, string $data): void {
  $myFile = fopen($file, 'w');
  if ($myFile) {
    $result = fwrite($myFile, $data);
    fclose($myFile);
  }
  }

  function saveImage(string $imageBase64, string $name): string  {
    $imageBase64Array = explode(';base64,', $imageBase64);
    $imgExtention = str_replace('data:image/', '', $imageBase64Array[0]);
    $imageDecoded = base64_decode($imageBase64Array[1]);
    saveFile("styles/images/$name.{$imgExtention}", $imageDecoded);
    return "styles/images/$name.{$imgExtention}";
  }

  $dataAsJson = getPostJson();
  
   
  if ($dataAsJson) {
    $dataAsArray = getPostJsonAsArray($dataAsJson);
    if ($dataAsArray['mainBackground']) {
      $mainBackground = saveImage($dataAsArray['mainBackground'], $dataAsArray['title']);
    }
    if ($dataAsArray['author_url']) {
      $selfi = saveImage($dataAsArray['author_url'], $dataAsArray['author']);
    }
    if ($dataAsArray['littleBackground']) {
      $littleBackground = saveImage($dataAsArray['littleBackground'], $dataAsArray['subtitle']);
    }
    $conn = createDBConnection();    
    $sql = "INSERT INTO test (title, subtitle, content, author, author_url, publish_date, mainBackground, littleBackground, featured) VALUES ('{$dataAsArray['title']}', '{$dataAsArray['subtitle']}', '{$dataAsArray['content']}', '{$dataAsArray['author']}', '$selfi', '{$dataAsArray['publish_date']}', '$mainBackground', '$littleBackground', '{$dataAsArray['featured']}')";  
    $result = $conn->query($sql);
  }