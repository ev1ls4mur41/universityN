<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $this->call(User1Seeder::class);
        $this->call(FilesSeeder::class);
        $this->call(TeacherSeeder::class);
        $this->call(AdminSeeder::class);
    }
}
