<?php

namespace App\Http\Requests\V1;

use App\Models\User;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class StoreBookRequest extends FormRequest{
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
      "author" => "required|string",
      "description" => "required|string",
      "category" => "required|string",
      "image" => "required",
      "price" => "required|integer|min:0",
      "stocks" => "required|integer|min:0",
      "status" => ["required", Rule::in(["Active", "Draft"])]
		];

		if ($this->request->all()["status"]==="Draft") {
			$rules["author"] = "sometimes|required|string";
			$rules["description"] = "sometimes|required|string";
			$rules["category"] = "sometimes|required|string";
			$rules["image"] = "sometimes|required";
			$rules["price"] = "sometimes|required|integer|min:0";
			$rules["stocks"] = "sometimes|required|integer|min:0";
		}

		return $rules;
	}
}
