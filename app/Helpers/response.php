<?php

namespace App\Helpers;

use Symfony\Component\HttpFoundation\Response;

function jsonResponse(mixed $data, int $httpCode): Response {
  return response()->json($data, $httpCode);
}