<?php

namespace App\Http\Requests\Web;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

use function GuzzleHttp\Promise\all;

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
			$rules["author"] = "nullable|string";
			$rules["description"] = "nullable|string";
			$rules["category"] = "nullable|string";
			$rules["image"] = "nullable";
			$rules["price"] = "nullable|integer|min:0";
			$rules["stocks"] = "nullable|integer|min:0";
		}
		
		return $rules;
	}
}
