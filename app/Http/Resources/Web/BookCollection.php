<?php

namespace App\Http\Resources\Web;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\ResourceCollection;

class BookCollection extends ResourceCollection{

	public function toArray(Request $request): array{
	  
    return parent::toArray($request);
	}
}
