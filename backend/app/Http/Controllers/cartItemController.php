<?php

namespace App\Http\Controllers;

use App\Models\Cart;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class cartItemController extends Controller
{
    public function index()
    {
        $products = Cart::all();
        return response()->json([
            "status" => true,
            "error" => null,
            "data" => $products
        ], 200);
    } 
    public function store(Request $request)
    {
        $validatedData = $request->validate([
            "id_product" => 'required|numeric',
            "id_user" => 'required|numeric',
            "quantity" => 'required|numeric',
        ]);

        $product = Cart::create($validatedData);

        return response()->json([
            "status" => true,
            "error" => null,
            "data" => $product
        ], 201);
    }
 
    public function show($id)
    {
        $product = Cart::findOrFail($id);
        return response()->json([
            "status" => true,
            "error" => null,
            "data" => $product
        ], 200);
    }
  
     public function update(Request $request, $id)
    {
        $validatedData = $request->validate([
            "id_product" => 'required|numeric',
            "id_user" => 'required|numeric',
            "quantity" => 'required|numeric',
        ]);

        $product = Cart::findOrFail($id);
        $product->update($validatedData);

        return response()->json([
            "status" => true,
            "error" => null,
            "data" => $product
        ], 200);
    }

     public function destroy($id)
    {
        $product = Cart::findOrFail($id);
        $product->delete();

        return response()->json([
            "status" => true,
            "error" => null,
            "message" => "Order was deleted succsefuly",
         ], 204);
    }
}
