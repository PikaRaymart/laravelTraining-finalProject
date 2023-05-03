<?php

namespace App\Http\Resources\Web;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\ResourceCollection;

class AdminBookCollection extends ResourceCollection{

	function toArray(Request $request): array{
		return parent::toArray($request);
	}
}
