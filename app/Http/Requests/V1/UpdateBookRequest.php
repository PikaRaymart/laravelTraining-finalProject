<?php

namespace App\Http\Requests\V1;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class UpdateBookRequest extends FormRequest{
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
			"title" => "required|string",
      "author" => "nullable|string",
      "description" => "nullable|string",
      "category" => "nullable|string",
      "image" => "nullable|sometimes|image",
			"oldImage" => "sometimes|string",
      "price" => "nullable|integer|min:0",
      "stocks" => "nullable|integer|min:0",
      "status" => ["required", Rule::in(["Active", "Draft"])]
		];
		
		if (is_string($this->image)) {
			$rules["image"] = "required|string";
		}

		return $rules;
	}
}
