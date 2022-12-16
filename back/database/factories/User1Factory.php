<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\User1>
 */
class User1Factory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'firstName' => fake()->firstName(),
            'lastName' => fake()->lastName(),
            'middleName' => fake()->firstName(),
            'userLogin' => fake()->email(),
            'numberDiary' => fake()->bothify('??') . "-" . fake()->bothify('????-##')
                ."-" . fake()->bothify('##'),
            'phone_number' => fake()->phoneNumber(),
            'isTeacher' => fake()->boolean(45),
            'isAdmin' => fake()->boolean(30),
            'isLeader' => fake()->boolean(),
            'imgLink' => "ibb.co/" . fake()->bothify('??????'),
            'userPass' => fake()->sha256()
        ];
    }

    public function unverified()
    {
        return $this->state(fn(array $attributes) => [
            'email_verified_at' => null,
        ]);
    }
}
