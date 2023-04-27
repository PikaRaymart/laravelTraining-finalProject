<?php

namespace App\Http\Requests\V1;

use App\Models\User;
use Illuminate\Foundation\Http\FormRequest;

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
		return [
			"title" => "required",
      "author" => "required",
      "description" => "required",
      "category" => "required",
      "image" => "required",
      "price" => "required",
      "stocks" => "required",
      "status" => "required"
		];
	}
}
