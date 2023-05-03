<?php

namespace App\Http\Resources\Web;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class CategoryResource extends JsonResource{
	public function toArray(Request $request){
		$conversion = $this->name;

    return $conversion;
	}
}
