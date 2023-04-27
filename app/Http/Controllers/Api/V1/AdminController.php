<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class AdminController extends Controller {

  // Creates the admin account plus the tokens that can be used by the api
  function store(Request $request) {
    $appPassword = $request->appPassword;
    
    if (!$appPassword || env("APP_PASSWORD")!=$appPassword) {
      return response()->json(["message" => "App password invalid"]);
    }

    $credentials = [
      "email" => $request->email,
      "password" => Hash::make($request->password),
      "name" => $request->name
    ];

    $user = new User();
    $user->name = $credentials["name"];
    $user->email = $credentials["email"];
    $user->password = Hash::make($credentials["password"]);

    $user->save();

    if (Auth::attempt($credentials)) {
      $user = Auth::user();

      if (!($user instanceof User)) return response()->json(["message" =>"Server error"]);

      $adminToken = $user->createToken("admin-token", ["admin"]);
      $customerToken = $user->createToken("customer-token", ["customer"]);

      return [
        "admin" => $adminToken->plainTextToken,
        "customer" => $customerToken->plainTextToken
      ];
    }
  }

	public function index(){

	}
};