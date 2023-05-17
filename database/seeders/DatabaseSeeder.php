<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder{
  
	function run(): void{
    $this->call([
      UserSeeder::class,
      BookSeeder::class
    ]);
	}
}
