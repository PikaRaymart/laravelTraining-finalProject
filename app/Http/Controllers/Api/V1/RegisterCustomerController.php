<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use App\Http\Requests\Api\V1\RegisterCustomerRequest;

class RegisterCustomerController extends Controller{
  
  // Only for customers since admin will be created via api
  function store(RegisterCustomerRequest $request) {
    return $request->registerAndLogin();
  }
}
