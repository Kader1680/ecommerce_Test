<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class profileController extends Controller
{
    public function view()
    {
        return response()->json([
            "status" => true,
            "error" => null,
        ], 200);
    }
}
