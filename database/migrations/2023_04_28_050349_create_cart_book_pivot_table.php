<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration{

	function up(){
		Schema::create('cart_book', function (Blueprint $table) {
			$table->unsignedBigInteger('cart_id');
			$table->unsignedBigInteger('book_id');
			$table->timestamps();

			$table->primary(['cart_id', 'book_id']);

			$table->foreign('cart_id')
				->references('id')
				->on('carts')
				->onDelete('cascade');

			$table->foreign('book_id')
				->references('id')
				->on('books')
				->onDelete('cascade');
		});
	}

	function down(){
		Schema::dropIfExists('cart_book');
	}
};
