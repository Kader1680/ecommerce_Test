<?php

use App\Http\Controllers\cartItemController;
use App\Http\Controllers\ForgetPasswordController;
use App\Http\Controllers\LoginController;
use App\Http\Controllers\orderController;
use App\Http\Controllers\productController;
use App\Http\Controllers\profileController;
use App\Http\Controllers\RegisterController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

// authentication router
Route::post('/login', [LoginController::class, "store"]);
Route::post('/register', [RegisterController::class, "store"]);
Route::get('/users', [RegisterController::class, "getuser"]);




// // reset for the forget password
// Route::post('/forget-password', [ForgetPasswordController::class, "forgetPassword"]);
// Route::post('/reset-password', [ForgetPasswordController::class, "submitResetPasswordForm"]);


// Route::get('/forget-password', [ForgetPasswordController::class, "forgetPassword"]);
// Route::get('/reset-password', [ForgetPasswordController::class, "submitResetPasswordForm"]);



Route::post('/forget-password', [ForgetPasswordController::class, "forgetPassword"]);

Route::get('/forget-password-view', [ForgetPasswordController::class, "forgetPassword"]);

 

 
Route::post('/reset-password', [ForgetPasswordController::class, "submitResetPasswordForm"]);

Route::get('reset-password/{token}', [ForgetPasswordController::class, 'showResetPasswordForm']);


// Route to display reset password page (GET)
Route::get('/reset-password/{token}', function() {
    return view('reset-password'); // Your reset password view
});




// products router
Route::get('/prodcuts', [productController::class, "index"]);
Route::get('/prodcuts/{id}', [productController::class, "show"]);
Route::post('/prodcuts', [productController ::class, "store"]);
Route::put('/prodcuts/{id}', [productController ::class, "update"]);
Route::delete('/prodcuts/{id}', [productController ::class, "destroy"]);

// orders router
Route::get('/orders', [orderController::class, "index"]);
Route::get('/orders/{id}', [orderController::class, "show"]);
Route::post('/orders', [orderController ::class, "store"]);
Route::put('/orders/{id}', [orderController ::class, "update"]);
Route::delete('/orders/{id}', [orderController ::class, "destroy"]);

// cart item router
Route::get('/cart', [cartItemController::class, "index"]);
Route::get('/cart/{id}', [cartItemController::class, "show"]);
Route::post('/cart', [cartItemController ::class, "store"]);
Route::put('/cart/{id}', [cartItemController ::class, "update"]);
Route::delete('/cart/{id}', [cartItemController ::class, "destroy"]);

// profil page
Route::get('/profile', [profileController::class, "view"]);


