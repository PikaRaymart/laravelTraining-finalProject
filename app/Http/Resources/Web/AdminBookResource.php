<?php

namespace App\Http\Resources\Web;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class AdminBookResource extends JsonResource{

	function toArray(Request $request): array{

		return [
			"id" => $this->id,
			"title" => $this->title,
			"author" => $this->author,
			"description" => $this->description,
			"category" => $this->category,
			"image" => $this->image,
			"price" => $this->price,
      "stocks" => $this->stocks,
      "status" => $this->status,
		];
	}
}
