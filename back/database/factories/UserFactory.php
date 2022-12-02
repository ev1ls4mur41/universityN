<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\User>
 */
class UserFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'userName' => fake()->name(),
            'userLog' => fake()->unique()->safeEmail(),
            //'email_verified_at' => now(),
            'userGroup' => fake() -> bloodGroup(),
            'userPass' => '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', // password
            'remember_token' => Str::random(10),



            /*
             *
             *   $table->id('userId');
            $table->string('userName');
            $table->string('userLog')->unique();
           // $table->timestamp('email_verified_at')->nullable();
            $table->string('password');
            $table -> string('userGroup');
            $table -> boolean('isTeacher');
            $table->rememberToken();
            $table->timestamps();
             *
             *
             *
             *
             *
             */
        ];
    }

    /**
     * Indicate that the model's email address should be unverified.
     *
     * @return static
     */
    public function unverified()
    {
        return $this->state(fn (array $attributes) => [
            'email_verified_at' => null,
        ]);
    }
}
