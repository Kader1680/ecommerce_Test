<?php

namespace Database\Seeders;

use App\Models\Products;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ProdcutsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('produts')->insert([
            "title"	=> "womenc crocs flats",
            "oldPrice"	=> 80.00,
            "newPrice"	=>30.00,
            "image"	=> "pic.png",
            "color"	=> "black",
            "size"	=> "xxl",
            "shipping"	=> "shipping",
            "discount" => 20,
            "id_user" => 5
        ]);
    }
}
