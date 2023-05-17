<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use App\Http\Requests\Api\V1\LoginUserRequest;

class LoginUserController extends Controller{

  function store(LoginUserRequest $request){
    return $request->authenticate();
  }
}
