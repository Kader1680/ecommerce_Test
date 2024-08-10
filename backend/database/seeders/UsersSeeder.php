<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class UsersSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('users')->insert([
            "name" => "ahmed",
            "email" => "mohamed",
            "gender" => "male",
            "password" => "123",
            "created_at" => "2024-01-31",
            "updated_at" => "2024-01-31",
        ]);
    }
}
