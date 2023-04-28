<?php

namespace App\Http\Controllers;

use App\Http\Requests\RegisterCustomerRequest;
use App\Models\Customer;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller{
  
  // Only for customers since admin will be created via api
  function register(RegisterCustomerRequest $request) {
    $credentials = [
      "name" => $request->name,
      "email" => $request->email,
      "password" => bcrypt($request->password)
    ];
    $newUser = Customer::create($credentials);

    auth()->login($newUser);
    $user = auth()->user();

    if (!($user instanceof Customer)) return response()->json(["message" =>"Server error"]);
    
    return response()->json([
      "message" => "Successfully created account. Logging in.",
      "token" => $user->createToken("customer-token", ["customer"])->plainTextToken
    ]);
  }

  function login(Request $request){
    $credentials = $request->all();
    
    if ($credentials["email"]==="admin@admin.com" && auth()->attempt($credentials)) {
      $user = auth()->user();
      
      if (!($user instanceof User)) return response()->json(["message" =>"Server error"]);

      $adminToken = $user->createToken("admin-token", ["admin"]);

      return response()->json([
        "message" => "Sucessfully logged in.",
        "token" => $adminToken->plainTextToken
      ]);
    } else {
      if (Auth::guard("customer")->attempt($credentials)) {
        $user = auth("customer")->user();

        if (!($user instanceof Customer)) return response()->json(["message" =>"Server error"]);

        $customerToken = $user->createToken("customer-token", ["customer"]);

        return response()->json([
          "message" => "Successfully logged in.",
          "token" => $customerToken->plainTextToken
        ]);
      }
    }

    return response()->json(["message" => "Log in unsucessfully."]);
  }
}
