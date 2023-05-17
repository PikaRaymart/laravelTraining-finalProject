<?php

namespace App\Http\Requests\V1;

use Illuminate\Foundation\Http\FormRequest;

class DeleteBooksRequest extends FormRequest{
	public function authorize(): bool{
		return true;
	}

	public function rules(): array{
		$rules = [
      "bookIds" => "required|array"
    ];

    return $rules;
	}
}
