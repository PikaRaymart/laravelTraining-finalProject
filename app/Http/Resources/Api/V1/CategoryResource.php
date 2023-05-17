<?php

namespace App\Http\Resources\Api\V1;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class CategoryResource extends JsonResource{

	function toArray(Request $request){
		$conversion = $this->name;

    return $conversion;
	}
}
