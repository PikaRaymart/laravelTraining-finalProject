<?php

use App\Models\Customer;
use App\Models\User;

if (!function_exists("authenticatedUser")) {
  function authenticatedUser() {
    $user = auth()->user();

    if (!($user instanceof User) && !($user instanceof Customer)) return response()->json(["messsage" => "Server error."], 500);
  
    return $user;
  }
}