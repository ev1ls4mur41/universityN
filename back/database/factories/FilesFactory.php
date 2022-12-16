<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Files>
 */
class FilesFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'dateLoad' => fake() -> date,
            'fileName' => fake() -> sentence(),
            'fileType' => fake() -> randomElement(['Учебник', 'Практикум', 'Методичка', 'Лекция' ]).
                " по " . fake()-> randomElement(['механике ', 'информатике ' , 'юриспруденции ', 'экономике ', 'дознанию ', 'дизайну ', 'истории ']) .
               "Издание " . fake() -> randomElement(['1','2','3','4','5', 'Расширенное', 'Юбилейное']),
            'fileDiscipline' => fake() -> randomElement(['Механикa', 'Информатикa' , 'Юриспруденция', 'Экономика', 'Дознание', 'Дизайн', 'История']),
            'fileLink' => "ibb.co/" . fake() -> lexify('??????')
        ];
    }
}
