<?php

namespace App\Http\Controllers\Web;

use App\Http\Controllers\Controller;
use App\Http\Requests\Web\RegisterCustomerRequest;
use Inertia\Inertia;

class RegisterCustomerController extends Controller{

  function create(){
    return Inertia::render("Auth/Register");
  }
  
  // Only for customers since admin will be created via api
  function store(RegisterCustomerRequest $request) {
    return $request->registerAndLogin();
  }
}
