<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\V1\RegisterCustomerRequest;
use App\Models\Customer;

class RegisterCustomerController extends Controller{

  function index(){}
  
  // Only for customers since admin will be created via api
  function store(RegisterCustomerRequest $request) {
    $customerData = [
      "name" => $request->name,
      "email" => $request->email,
      "password" => bcrypt($request->password)
    ];
    $newCustomer = Customer::create($customerData);

    auth("customer")->login($newCustomer);
    $customer = authenticatedCustomer();

    return response()->json([
      "message" => "Successfully created account. Logging in.",
      "token" => $customer->createToken("customer-token", ["customer"])->plainTextToken
    ]);
  }
}
