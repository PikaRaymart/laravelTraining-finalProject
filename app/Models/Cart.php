<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Cart extends Model{
	use HasFactory;

  protected $fillable = [
    "quantity",
    "customer_id",
    "book_id",
    "outOfStocks"
  ];

  function customer() {
    return $this->belongsTo(Customer::class);
  }

  function books() {
    return $this->belongsToMany(Book::class, 'cart_book');
  }
}
