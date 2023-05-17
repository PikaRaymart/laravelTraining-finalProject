<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use App\Http\Resources\V1\AdminBookCollection;
use App\Models\Book;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AdminController extends Controller {

  // Shows all the books for the admin
  function index(Request $request) {
    $query = booksQuery($request);

    $books = $query->paginate(8);

    return response()->json((new AdminBookCollection($books))->appends($request->query()), 200);
  }

  // Creates the admin account plus the tokens that can be used by the api
  function store(Request $request) {
    $appPassword = $request->appPassword;
    
    if (!$appPassword || env("APP_PASSWORD")!=$appPassword) {
      return response()->json(["message" => "App password invalid"]);
    }

    $credentials = [
      "email" => $request->email,
      "password" => $request->password,
      "name" => $request->name
    ];

    $user = new User();
    $user->name = $credentials["name"];
    $user->email = $credentials["email"];
    $user->password = bcrypt($credentials["password"]);

    $user->save();

    if (Auth::attempt($credentials)) {
      $user = Auth::user();

      if (!($user instanceof User)) return response()->json(["message" =>"Server error"]);

      $adminToken = $user->createToken("admin-token", ["admin"]);
      $customerToken = $user->createToken("customer-token", ["customer"]);

      return response()->json([
        "admin" => $adminToken->plainTextToken,
        "customer" => $customerToken->plainTextToken
      ], 200);
    }
  }
};