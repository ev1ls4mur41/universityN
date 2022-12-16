<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Teacher>
 */
class TeacherFactory extends Factory
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
            'phone_number' => fake()->phoneNumber(),
            'subject' => fake()->sentence(5),
            'imgLink' => "ibb.co/" . fake()->bothify('??????'),
            'userPass' => fake()->sha256()
        ];
    }
}
