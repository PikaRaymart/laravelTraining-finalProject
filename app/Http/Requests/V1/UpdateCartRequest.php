<?php

namespace App\Http\Requests\V1;

use Illuminate\Foundation\Http\FormRequest;

class UpdateCartRequest extends FormRequest{
	public function authorize(): bool{
		return true;
	}

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
