<?php

namespace App\Http\Controllers\Web;

use App\Http\Controllers\Controller;
use App\Http\Resources\Web\CategoryCollection;
use App\Models\Category;
use Inertia\Inertia;

class AdminController extends Controller{
	
  function index() {
    $categories = Category::all();

    return Inertia::render("Admin", [
      "booksFilters" => [
        "categories" => new CategoryCollection($categories)
      ]
    ]);
  }
}
