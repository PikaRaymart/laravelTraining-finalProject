<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Facades\Hash;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Models\Customer>
 */
class CustomerFactory extends Factory{
	
  function definition(): array{
		return [
      'name' => fake()->name,
      'email' => fake()->unique()->safeEmail,
      'password' => Hash::make('password'), // Default password
    ];
	}
}
