<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class RegisterCustomerRequest extends FormRequest{
	public function authorize(): bool{
		return true;
	}

	/**
	 * Get the validation rules that apply to the request.
	 *
	 * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array|string>
	 */
	public function rules(): array{
    $rules = [
      "name" => "required|string",
      "email" => ["required", Rule::unique("customers", "email")],
      "password" => "required|confirmed"
    ];
		
    return $rules;
	}
}
