<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use App\Http\Requests\V1\RegisterCustomerRequest;
use App\Models\Customer;

class RegisterUserController extends Controller{

  function index(){}
  
  // Only for customers since admin will be created via api
  function store(RegisterCustomerRequest $request) {
    $customerData = [
      "name" => $request->name,
      "email" => $request->email,
      "password" => bcrypt($request->password)
    ];
    $newUser = Customer::create($customerData);

    auth()->login($newUser);
    $user = auth()->user();

    if (!($user instanceof Customer)) return response()->json(["message" =>"Server error"]);
    
    return response()->json([
      "message" => "Successfully created account. Logging in.",
      "token" => $user->createToken("customer-token", ["customer"])->plainTextToken
    ]);
  }
}
