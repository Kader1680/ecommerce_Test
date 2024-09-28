<?php

use App\Http\Controllers\productController;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Storage;
Route::get('/pics', function(){
    return view("welcome");
});
 
Route::post('/pics', [productController::class, "store"])->name("pics");
