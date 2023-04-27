<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller{
  function register(Request $request) {

  }

  function login(Request $request){
    $credentials = $request->all();
    $test = Auth::attempt($credentials);
    
    if ($credentials["email"]==="admin@admin.com" && auth()->attempt($credentials)) {
      $user = auth()->user();
      
      if (!($user instanceof User)) return response()->json(["message" =>"Server error"]);

      $adminToken = $user->createToken("admin-token", ["admin"]);

      return response()->json([
        "message" => "Sucessfully logged in.",
        "token" => $adminToken->plainTextToken
      ]);
    }

    return response()->json(["message" => "Log in unsucessfully."]);
  }
}
