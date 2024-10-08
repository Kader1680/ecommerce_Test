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
            $table->string('title');
            $table->integer('oldPrice');
            $table->integer('newPrice');
            $table->string('image');
            $table->string('color');
            $table->string('size');
            $table->string('shipping');
            $table->integer('discount');
            $table->string('brand');
            $table->string('condition');
            $table->string('model');
            $table->string('category');
            $table->integer('review');
            $table->unsignedBigInteger('id_user');
            $table->foreign('id_user')->references("id")->on('users');
            
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
