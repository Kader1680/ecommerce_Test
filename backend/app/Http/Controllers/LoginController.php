<?php

namespace App\Http\Controllers;

use App\Http\Requests\loignRequest;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class LoginController extends Controller
{
    public function store(loignRequest $request){
        $credetials = [
            'email' => $request->get("email"),
            'password' => ($request->get("password")),
        ];

        if (Auth::attempt($credetials)) {
            return response()->json([
                'status' => true,
                'error' => null,
                'message' => 'succesfull login information',
            ], 200);
        }else{
            return response()->json([
                'status' => false,
                'error' => null,
                'message' => 'Unauthorized check again the email or password',
            ], 401);
        }

    }
}
