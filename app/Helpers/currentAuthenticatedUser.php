<?php


if (!function_exists("currentAuthenticatedUser")) {
  function currentAuthenticatedUser() {
    $adminAuth = auth()->user();
	  $customerAuth = auth("customer")->user();

    return [
      "user" => $adminAuth?? $customerAuth,
			"type" => $adminAuth? "admin" : "customer"
    ];
  }
}