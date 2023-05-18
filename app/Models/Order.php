<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Order extends Model{
	use HasFactory;

  protected $fillable = [
		"paypal",
		"customer_id",
		"completed",
		"address",
		"buyer"
	];

	function customer(){
		return $this->belongsTo(Customer::class);
	}

	function orderItems(){
		return $this->hasMany(OrderItem::class);
	}
}
