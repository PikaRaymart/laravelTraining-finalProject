<?php

namespace App\Http\Resources\Web;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class CartBookResource extends JsonResource{
	/**
	 * Transform the resource into an array.
	 *
	 * @return array<string, mixed>
	 */
	public function toArray(Request $request): array{
    $book = $this->books[0];

		$conversion = [
      "cartId" => $this->id,
      "quantity" => $this->quantity,
      "book" => [
        "id" => $book["id"],
        "title" => $book["title"],
        "author" => $book["author"],
        "description" => $book["description"],
        "category" => $book["category"],
        "image" => $book["image"],
        "price" => $book["price"],
      ]
    ];

    return $conversion;
	}
}
