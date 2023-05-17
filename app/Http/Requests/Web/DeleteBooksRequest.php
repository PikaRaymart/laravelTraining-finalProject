<?php

namespace App\Http\Requests\Web;

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
