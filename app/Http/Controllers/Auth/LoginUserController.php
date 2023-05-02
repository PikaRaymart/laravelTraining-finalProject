<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\LoginUserRequest;
use App\Models\Customer;
use App\Models\User;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Inertia\Response;

class LoginUserController extends Controller{

  function create(): Response{
    return Inertia::render('Auth/Login', [
      'canResetPassword' => Route::has('password.request'),
      'status' => session('status'),
    ]);
  }

  function store(LoginUserRequest $request){
    $request->authenticate();
    
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

  function destroy(Request $request): RedirectResponse{
    Auth::guard('web')->logout();

    $request->session()->invalidate();

    $request->session()->regenerateToken();

    return redirect('/');
    }
}
