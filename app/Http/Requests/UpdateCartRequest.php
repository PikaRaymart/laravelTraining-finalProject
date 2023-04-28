<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateCartRequest extends FormRequest{
	/**
	 * Determine if the user is authorized to make this request.
	 */
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
      "updates" => "required|array",
      "updates.*.cartId" => "required|integer|exists:carts,id",
      "updates.*.quantity" => "required|integer|min:0",
      "updates.*.delete" => "nullable|boolean"
    ];

		return $rules;
	}
}
