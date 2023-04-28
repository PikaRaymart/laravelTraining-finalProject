<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class BookResource extends JsonResource{
	/**
	 * Transform the resource collection into an array.
	 *
	 * @return array<int|string, mixed>
	 */
	public function toArray(Request $request): array{
		
    return [
			"id" => $this->id,
			"title" => $this->title,
			"author" => $this->author,
			"description" => $this->description,
			"category" => $this->category,
			"image" => $this->image,
			"price" => $this->price,
      "stocks" => $this->stocks,
		];
	}
}
