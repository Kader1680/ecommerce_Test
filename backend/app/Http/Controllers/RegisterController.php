<?php

namespace App\Http\Controllers;

use App\Http\Requests\registerRequest;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class RegisterController extends Controller
{
    public function store(Request $request){
         

        $data = User::create([
            'name' => $request->get('name'),
            'email' => $request->get('email'),
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

        public function getuser(){
            $users = DB::table("users")->pluck('password');

            return  response()->json([
                'status' => true,
                'users' => $users,
            ],200);
        }
}
