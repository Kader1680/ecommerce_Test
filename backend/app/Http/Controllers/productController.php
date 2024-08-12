<?php

namespace App\Http\Controllers;

use App\Models\Products;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class productController extends Controller
{
    public function index()
    {
        $products = Products::all();
        return response()->json([
            "status" => true,
            "error" => null,
            "data" => $products
        ], 200);
    }
 
    // Store a newly created product in storage
    public function store(Request $request)
    {
        $validatedData = $request->validate([
            "title"	=> 'required|string|max:255',
            "oldPrice"	=> 'required|numeric|max:255',
            "newPrice"	=> 'required|numeric|max:255',
            "image"	=> 'required|string|max:255',
            "color"	=> 'required|string|max:255',
            "size"	=> 'required|string|max:255',
            "shipping"	=> 'required|string|max:255',
            "discount" => 'required|numeric',
            "id_user" => 'required|numeric',
        ]);

        $product = Products::create($validatedData);

        return response()->json([
            "status" => true,
            "error" => null,
            "data" => $product
        ], 201);
    }

    // Display the specified product
    public function show($id)
    {
        $product = Products::findOrFail($id);
        return response()->json([
            "status" => true,
            "error" => null,
            "data" => $product
        ], 200);
    }
 
    // Update the specified product in storage
    public function update(Request $request, $id)
    {
        $validatedData = $request->validate([
           "title"	=> 'required|string|max:255',
            "oldPrice"	=> 'required|numeric|max:255',
            "newPrice"	=> 'required|numeric|max:255',
            "image"	=> 'required|string|max:255',
            "color"	=> 'required|string|max:255',
            "size"	=> 'required|string|max:255',
            "shipping"	=> 'required|string|max:255',
            "discount" => 'required|numeric',
            "id_user" => 'required|numeric',
        ]);

        $product = Products::findOrFail($id);
        $product->update($validatedData);

        return response()->json([
            "status" => true,
            "error" => null,
            "data" => $product
        ], 200);
    }

    // Remove the specified product from storage
    public function destroy($id)
    {
        $product = Products::findOrFail($id);
        $product->delete();

        return response()->json([
            "status" => true,
            "error" => null,
            "message" => "product was deleted succsefuly",
            "data" => $product
        ], 204);
    }
}
