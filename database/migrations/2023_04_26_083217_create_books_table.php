<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration{
	/**
	 * Run the migrations.
	 */
	public function up(): void{
		Schema::create('books', function (Blueprint $table) {
			$table->id();
      $table->string("title");
      $table->string("author")->nullable();
      $table->longText("description")->nullable();
      $table->string("category")->nullable();
      $table->string("image")->nullable();
      $table->integer("price")->nullable();
      $table->integer("stocks")->nullValue();
      $table->enum("status", ["Active", "Draft"]);
			$table->timestamps();
		});
	}

	/**
	 * Reverse the migrations.
	 */
	public function down(): void{
		Schema::dropIfExists('books');
	}
};
