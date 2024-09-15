<?php

namespace App\Http\Controllers;

use App\Models\Password_reset_tokens;
 
use App\Models\User;
use Illuminate\Container\Attributes\DB;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Foundation\Auth\SendsPasswordResetEmails;
use Illuminate\Support\Facades\Password;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Str;

class ForgetPasswordController extends Controller
{

    // public function sendEmail (Request $request){
    //     $request->validate(['email' => 'required|email']);
    //     $status = Password::sendResetLink(
    //         $request->only('email')
    //     );
    //     return $status === Password::RESET_LINK_SENT
    //     // checked with sucesss
    //     ? back()->with(['status' => __($status)])
    //     // checked with fail
    //     : back()->withErrors(['email' => __($status)]);
    // };

    public function forgetPassword(Request $request){

        $request->validate([
            "email" => "email|required|min:5" 
        ]);

        $token = Str::random(64);

        Password_reset_tokens::create([
            'email' => $request->email, 
            'token' => $token
          ]);

        
        Mail::send('email.forget-password', ['token' => $token], function($message) use($request){
            $message->to($request->email);
            $message->subject('Reset Password from laravel'); 
        });

        return response()->json([
            'status' => true,
            'error' => null,
            'message' => 'Email Sended Successfuly !',
        ], 200);
    } 

    public function showResetPasswordForm($token) { 
        return view('email.forget-password', ['token' => $token]);
     }
 

    public function submitResetPasswordForm(Request $request)
    {
        $request->validate([
            'email' => 'required|email|exists:users',
            'password' => 'required',
            'password_confirmation' => 'required'
        ]);
    
        // Check if the token and email exist in the password_reset_tokens table
        $updatePassword = Password_reset_tokens::where([
            'email' => $request->email,
            'token' => $request->token // Use the token from the request
        ])->first();
    
        if (!$updatePassword) {
            return back()->withInput()->with('error', 'Invalid token!');
        }
    
        // Update the user's password
        $user = User::where('email', $request->email)->first();
        $user->update(['password' => Hash::make($request->password)]);
    
        // Delete the token after the password reset is successful
        Password_reset_tokens::where(['email' => $request->email])->delete();
    
        return response()->json([
            'status' => true,
            'error' => null,
            'message' => 'Password Updated Successfuly !',
        ], 200);
    }
    
}
