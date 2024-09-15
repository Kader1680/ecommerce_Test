<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class LoginController extends Controller
{
    public function store(Request $request)
{
    $request->validate([
        'email' => 'required',
        'password' => 'required',
    ]);

    $credentials = $request->only('email', 'password');

    if (Auth::attempt($credentials)) {
        return response()->json([
            'status' => true,
            'error' => null,
            'message' => 'Successful login',
        ], 200);
    } else {
        return response()->json([
            'status' => false,
            'error' => null,
            'message' => 'Unauthorized, check email or password',
        ], 401);
    }
}
}