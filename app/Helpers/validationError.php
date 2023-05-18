<?php

use Illuminate\Validation\ValidationException;

if (!function_exists("validationError")) {
  function validationError($messages, $redirectUrl=null) {
   
    if ($redirectUrl) {
      return throw ValidationException::withMessages($messages)->redirectTo($redirectUrl);  
    }

    return throw ValidationException::withMessages($messages);
  }
}