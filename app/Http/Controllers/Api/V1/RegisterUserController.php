<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use App\Http\Requests\V1\RegisterCustomerRequest;

class RegisterUserController extends Controller{
  
  // Only for customers since admin will be created via api
  function store(RegisterCustomerRequest $request) {
    return $request->registerAndLogin();
  }
}
