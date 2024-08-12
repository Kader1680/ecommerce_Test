<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('products', function (Blueprint $table) {
            $table->id();

//  "title"	=> 'required|string|max:255',
// "oldPrice"	=> 'required|numeric|max:255',
// "newPrice"	=> 'required|numeric|max:255',
// "image"	=> 'required|string|max:255',
// "color"	=> 'required|string|max:255',
// "size"	=> 'required|string|max:255',
// "shipping"	=> 'required|string|max:255',
// "discount" => 'required|numeric',
// "id_user" => 'required|numeric',

            $table->string('title');
            $table->integer('oldPrice');
            $table->integer('newPrice');
            $table->string('image');
            $table->string('color');
            $table->string('size');
            $table->string('shipping');
            $table->integer('discount');
            $table->string('id_user');

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('products');
    }
};
