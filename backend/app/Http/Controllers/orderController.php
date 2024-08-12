<?php

namespace App\Http\Controllers;

use App\Models\Order;
use Illuminate\Http\Request;

class orderController extends Controller
{
    public function index()
    {
        $products = Order::all();
        return response()->json([
            "status" => true,
            "error" => null,
            "data" => $products
        ], 200);
    } 
    public function store(Request $request)
    {
        $validatedData = $request->validate([
            		 
            "status" => 'required|string|max:255',
            "total_price" => 'required|numeric|max:255',
            "id_user" => 'required|numeric|max:255',
            "id_product" => 'required|numeric|max:255',
            
        ]);

        $product = Order::create($validatedData);

        return response()->json([
            "status" => true,
            "error" => null,
            "data" => $product
        ], 201);
    }
 
    public function show($id)
    {
        $product = Order::findOrFail($id);
        return response()->json([
            "status" => true,
            "error" => null,
            "data" => $product
        ], 200);
    }
  
     public function update(Request $request, $id)
    {
        $validatedData = $request->validate([
            "status" => 'required|string',
            "total_price" => 'required|numeric',
            "id_user" => 'required|numeric',
            "id_product" => 'required|numeric',
        ]);

        $product = Order::findOrFail($id);
        $product->update($validatedData);

        return response()->json([
            "status" => true,
            "error" => null,
            "data" => $product
        ], 200);
    }

     public function destroy($id)
    {
        $product = Order::findOrFail($id);
        $product->delete();

        return response()->json([
            "status" => true,
            "error" => null,
            "message" => "Order was deleted succsefuly",
         ], 204);
    }
}
