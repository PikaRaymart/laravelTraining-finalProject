<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder{
	
  function run(): void{
    User::create([
      'name' => "Admin",
      'email' => "admin@admin.com",
      'password' => Hash::make(env("APP_PASSWORD")),
    ]);
	}
}
