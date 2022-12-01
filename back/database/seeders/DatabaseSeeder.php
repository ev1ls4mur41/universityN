<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
         \App\Models\User::factory(10)->create();

         \App\Models\User::factory()->create([
             'userName' => 'Test User',
             'userLog' => 'test@example.com',
             'userGroup' => 'CS-50',
             'userPass' => 'H0noRAnDG10ry'

             /*
              *  'userName' => fake()->name(),
            'userLog' => fake()->unique()->safeEmail(),
            //'email_verified_at' => now(),
            'userGroup' => fake() -> bloodGroup(),
            'userPass' => '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', // password
            'remember_token' => Str::random(10),
              *
              *
              *
              *
              *
              */
         ]);
    }
}
