<?php

namespace App\Http\Controllers;

use App\Http\Requests\registerRequest;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class RegisterController extends Controller
{
    public function store(registerRequest $request){
         

        $data = User::create([
            'name' => $request->get('name'),
            'email' => $request->get('email'),
            'gender' => $request->get('gender'),
            'password' => Hash::make($request->get('password')),
            
        ]);

        if(!$data){
            return response()->json([
                'status' => false,
                'error' => null,
                'message' => 'Unauthorized check your data again',
            ], 400);
        }

        // $token = Auth::login($data);
        return response()->json([
            'status' => true,
            'error' => null,
            'data' => $data,
            // 'authorisation' => [
            //     'token' => $token,
            //     'type' => 'bearer',
            // ]
        ], 201);
    }


    public function logout()
    {
        Auth::logout();
        return response()->json([
            'status' => true,
            'message' => 'Successfully logged out',
        ]);
    }
}
