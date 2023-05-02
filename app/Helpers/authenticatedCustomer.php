<?php

use App\Models\Customer;

if (!function_exists("authenticatedCustomer")) {
  function authenticatedCustomer() {
    $customer = auth("customer")->user();

    if (!($customer instanceof Customer)) return response()->json(["messsage" => "Server error."], 500);
  
    return $customer;
  }
}