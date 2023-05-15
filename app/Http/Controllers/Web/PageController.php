<?php

namespace App\Http\Controllers\Web;

use App\Http\Controllers\Controller;
use App\Http\Resources\Web\BookCollection;
use App\Models\Book;
use Inertia\Inertia;

class PageController extends Controller{
	
  function home() {
    $featuredBooks = Book::where("status", "Active")
      ->inRandomOrder()
      ->limit(8)
      ->get();

    return Inertia::render("Home", ["featuredBooks" => new BookCollection($featuredBooks)]);
  }
}
