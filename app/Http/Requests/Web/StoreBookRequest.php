<?php

namespace App\Http\Requests\Web;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class StoreBookRequest extends FormRequest{

	function authorize(): bool{
		return true;
	}

	function rules(): array{
    $rules = [
			"title" => "required|string",
      "author" => "required|string",
      "description" => "required|string",
      "category" => "required|string",
      "image" => "required",
      "price" => "required|integer|min:1",
      "stocks" => "required|integer|min:1",
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
