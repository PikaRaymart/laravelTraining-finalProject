<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Cart extends Model{
	use HasFactory;

  function customers() {
    return $this->belongsTo(Customer::class);
  }

  function books() {
    return $this->hasMany(Book::class);
  }
}
