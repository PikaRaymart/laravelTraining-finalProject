<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use App\Http\Requests\V1\LoginUserRequest;

class LoginUserController extends Controller{

  function store(LoginUserRequest $request){
    $loginData = $request->authenticate();

    if ($loginData["token"] && $loginData["message"]) return response()->json($loginData, 200);

    return response()->json(["message" => "Log in unsucessfully."]);
  }
}
